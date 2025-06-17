import RunwayML, { TaskFailedError } from '@runwayml/sdk';

const runway = new RunwayML();

async function main() {
  try {
    const output = await runway.textToImage
      .create({
        model: 'gen4_image',
        promptText: 'A beautiful sunset over a calm ocean',
        ratio: '1920:1080',
      })
      .waitForTaskOutput();

    console.log(output.output![0]);
  } catch (e) {
    if (e instanceof TaskFailedError) {
      console.error('The image failed to generate.');
      console.error(e.taskDetails);
    } else {
      console.error(e);
    }
  }
}

main();
