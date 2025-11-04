import RunwayML, { TaskFailedError, toFile } from '@runwayml/sdk';
import { createReadStream, existsSync } from 'fs';
import { resolve } from 'path';
import { parseArgs } from 'util';

const { values, positionals } = parseArgs({
  options: {
    file: { type: 'string', short: 'f' },
    image: { type: 'boolean', short: 'i' },
  },
  allowPositionals: true,
});

const filePath = values.file;
const generateImage = values.image ?? false;

if (!filePath) {
  console.error('Error: --file argument is required');
  console.error('Usage: yarn tsn examples/uploadFile.ts --file <path> [-i]');
  process.exit(1);
}

const resolvedPath = resolve(filePath);

if (!existsSync(resolvedPath)) {
  console.error(`Error: File not found: ${resolvedPath}`);
  process.exit(1);
}

async function main() {
  try {
    const client = new RunwayML();

    // Convert file path to File using the SDK utility - this is where we add the filename
    const file = await toFile(createReadStream(resolvedPath), resolvedPath.split(/[\\/]/).pop());

    // Upload the file
    const uploadResponse = await client.uploads.createEphemeral({
      file: file,
    });

    console.log(`Upload successful! URI: ${uploadResponse.uri}`);

    // Optionally generate an image with the uploaded file
    if (generateImage) {
      const imageTask = client.textToImage.create({
        model: 'gen4_image',
        promptText: 'add a bunny',
        ratio: '1920:1080',
        referenceImages: [{ uri: uploadResponse.uri }],
      });

      const output = await imageTask.waitForTaskOutput();
      console.log(output.output![0]);
    }
  } catch (e) {
    if (e instanceof TaskFailedError) {
      console.error('The task failed.');
      console.error(e.taskDetails);
    } else {
      console.error(e);
    }
    process.exit(1);
  }
}

main();
