# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">TaskRetrieveResponse</a></code>

Methods:

- <code title="get /v1/tasks/{id}">client.tasks.<a href="./src/resources/tasks.ts">retrieve</a>(id) -> TaskRetrieveResponse</code>
- <code title="delete /v1/tasks/{id}">client.tasks.<a href="./src/resources/tasks.ts">delete</a>(id) -> void</code>

# ImageToVideo

Types:

- <code><a href="./src/resources/image-to-video.ts">ImageToVideoCreateResponse</a></code>

Methods:

- <code title="post /v1/image_to_video">client.imageToVideo.<a href="./src/resources/image-to-video.ts">create</a>({ ...params }) -> ImageToVideoCreateResponse</code>

# VideoToVideo

Types:

- <code><a href="./src/resources/video-to-video.ts">VideoToVideoCreateResponse</a></code>

Methods:

- <code title="post /v1/video_to_video">client.videoToVideo.<a href="./src/resources/video-to-video.ts">create</a>({ ...params }) -> VideoToVideoCreateResponse</code>

# TextToVideo

Types:

- <code><a href="./src/resources/text-to-video.ts">TextToVideoCreateResponse</a></code>

Methods:

- <code title="post /v1/text_to_video">client.textToVideo.<a href="./src/resources/text-to-video.ts">create</a>({ ...params }) -> TextToVideoCreateResponse</code>

# TextToImage

Types:

- <code><a href="./src/resources/text-to-image.ts">TextToImageCreateResponse</a></code>

Methods:

- <code title="post /v1/text_to_image">client.textToImage.<a href="./src/resources/text-to-image.ts">create</a>({ ...params }) -> TextToImageCreateResponse</code>

# VideoUpscale

Types:

- <code><a href="./src/resources/video-upscale.ts">VideoUpscaleCreateResponse</a></code>

Methods:

- <code title="post /v1/video_upscale">client.videoUpscale.<a href="./src/resources/video-upscale.ts">create</a>({ ...params }) -> VideoUpscaleCreateResponse</code>

# CharacterPerformance

Types:

- <code><a href="./src/resources/character-performance.ts">CharacterPerformanceCreateResponse</a></code>

Methods:

- <code title="post /v1/character_performance">client.characterPerformance.<a href="./src/resources/character-performance.ts">create</a>({ ...params }) -> CharacterPerformanceCreateResponse</code>

# Organization

Types:

- <code><a href="./src/resources/organization.ts">OrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/organization.ts">OrganizationRetrieveUsageResponse</a></code>

Methods:

- <code title="get /v1/organization">client.organization.<a href="./src/resources/organization.ts">retrieve</a>() -> OrganizationRetrieveResponse</code>
- <code title="post /v1/organization/usage">client.organization.<a href="./src/resources/organization.ts">retrieveUsage</a>({ ...params }) -> OrganizationRetrieveUsageResponse</code>
