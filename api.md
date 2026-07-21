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

# CharacterPerformance

Types:

- <code><a href="./src/resources/character-performance.ts">CharacterPerformanceCreateResponse</a></code>

Methods:

- <code title="post /v1/character_performance">client.characterPerformance.<a href="./src/resources/character-performance.ts">create</a>({ ...params }) -> CharacterPerformanceCreateResponse</code>

# TextToSpeech

Types:

- <code><a href="./src/resources/text-to-speech.ts">TextToSpeechCreateResponse</a></code>

Methods:

- <code title="post /v1/text_to_speech">client.textToSpeech.<a href="./src/resources/text-to-speech.ts">create</a>({ ...params }) -> TextToSpeechCreateResponse</code>

# SoundEffect

Types:

- <code><a href="./src/resources/sound-effect.ts">SoundEffectCreateResponse</a></code>

Methods:

- <code title="post /v1/sound_effect">client.soundEffect.<a href="./src/resources/sound-effect.ts">create</a>({ ...params }) -> SoundEffectCreateResponse</code>

# VoiceIsolation

Types:

- <code><a href="./src/resources/voice-isolation.ts">VoiceIsolationCreateResponse</a></code>

Methods:

- <code title="post /v1/voice_isolation">client.voiceIsolation.<a href="./src/resources/voice-isolation.ts">create</a>({ ...params }) -> VoiceIsolationCreateResponse</code>

# VoiceDubbing

Types:

- <code><a href="./src/resources/voice-dubbing.ts">VoiceDubbingCreateResponse</a></code>

Methods:

- <code title="post /v1/voice_dubbing">client.voiceDubbing.<a href="./src/resources/voice-dubbing.ts">create</a>({ ...params }) -> VoiceDubbingCreateResponse</code>

# SpeechToSpeech

Types:

- <code><a href="./src/resources/speech-to-speech.ts">SpeechToSpeechCreateResponse</a></code>

Methods:

- <code title="post /v1/speech_to_speech">client.speechToSpeech.<a href="./src/resources/speech-to-speech.ts">create</a>({ ...params }) -> SpeechToSpeechCreateResponse</code>

# ImageUpscale

Types:

- <code><a href="./src/resources/image-upscale.ts">ImageUpscaleCreateResponse</a></code>

Methods:

- <code title="post /v1/image_upscale">client.imageUpscale.<a href="./src/resources/image-upscale.ts">create</a>({ ...params }) -> ImageUpscaleCreateResponse</code>

# VideoUpscale

Types:

- <code><a href="./src/resources/video-upscale.ts">VideoUpscaleCreateResponse</a></code>

Methods:

- <code title="post /v1/video_upscale">client.videoUpscale.<a href="./src/resources/video-upscale.ts">create</a>({ ...params }) -> VideoUpscaleCreateResponse</code>

# Generate

## Video

Types:

- <code><a href="./src/resources/generate/video.ts">VideoCreateResponse</a></code>

Methods:

- <code title="post /v1/generate/video">client.generate.video.<a href="./src/resources/generate/video.ts">create</a>({ ...params }) -> VideoCreateResponse</code>

# Routers

Types:

- <code><a href="./src/resources/routers.ts">RouterCreateResponse</a></code>
- <code><a href="./src/resources/routers.ts">RouterRetrieveResponse</a></code>
- <code><a href="./src/resources/routers.ts">RouterUpdateResponse</a></code>
- <code><a href="./src/resources/routers.ts">RouterListResponse</a></code>

Methods:

- <code title="post /v1/routers">client.routers.<a href="./src/resources/routers.ts">create</a>({ ...params }) -> RouterCreateResponse</code>
- <code title="get /v1/routers/{id}">client.routers.<a href="./src/resources/routers.ts">retrieve</a>(id) -> RouterRetrieveResponse</code>
- <code title="patch /v1/routers/{id}">client.routers.<a href="./src/resources/routers.ts">update</a>(id, { ...params }) -> RouterUpdateResponse</code>
- <code title="get /v1/routers">client.routers.<a href="./src/resources/routers.ts">list</a>({ ...params }) -> RouterListResponsesCursorPage</code>
- <code title="delete /v1/routers/{id}">client.routers.<a href="./src/resources/routers.ts">delete</a>(id) -> void</code>

# Organization

Types:

- <code><a href="./src/resources/organization.ts">OrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/organization.ts">OrganizationRetrieveUsageResponse</a></code>

Methods:

- <code title="get /v1/organization">client.organization.<a href="./src/resources/organization.ts">retrieve</a>() -> OrganizationRetrieveResponse</code>
- <code title="post /v1/organization/usage">client.organization.<a href="./src/resources/organization.ts">retrieveUsage</a>({ ...params }) -> OrganizationRetrieveUsageResponse</code>

# Avatars

Types:

- <code><a href="./src/resources/avatars.ts">AvatarCreateResponse</a></code>
- <code><a href="./src/resources/avatars.ts">AvatarRetrieveResponse</a></code>
- <code><a href="./src/resources/avatars.ts">AvatarUpdateResponse</a></code>
- <code><a href="./src/resources/avatars.ts">AvatarListResponse</a></code>
- <code><a href="./src/resources/avatars.ts">AvatarGetUsageResponse</a></code>

Methods:

- <code title="post /v1/avatars">client.avatars.<a href="./src/resources/avatars.ts">create</a>({ ...params }) -> AvatarCreateResponse</code>
- <code title="get /v1/avatars/{id}">client.avatars.<a href="./src/resources/avatars.ts">retrieve</a>(id) -> AvatarRetrieveResponse</code>
- <code title="patch /v1/avatars/{id}">client.avatars.<a href="./src/resources/avatars.ts">update</a>(id, { ...params }) -> AvatarUpdateResponse</code>
- <code title="get /v1/avatars">client.avatars.<a href="./src/resources/avatars.ts">list</a>({ ...params }) -> AvatarListResponsesCursorPage</code>
- <code title="delete /v1/avatars/{id}">client.avatars.<a href="./src/resources/avatars.ts">delete</a>(id) -> void</code>
- <code title="get /v1/avatar_usage">client.avatars.<a href="./src/resources/avatars.ts">getUsage</a>({ ...params }) -> AvatarGetUsageResponse</code>

# AvatarConversations

Types:

- <code><a href="./src/resources/avatar-conversations.ts">AvatarConversationRetrieveResponse</a></code>
- <code><a href="./src/resources/avatar-conversations.ts">AvatarConversationListResponse</a></code>

Methods:

- <code title="get /v1/avatar_conversations/{id}">client.avatarConversations.<a href="./src/resources/avatar-conversations.ts">retrieve</a>(id) -> AvatarConversationRetrieveResponse</code>
- <code title="get /v1/avatar_conversations">client.avatarConversations.<a href="./src/resources/avatar-conversations.ts">list</a>({ ...params }) -> AvatarConversationListResponsesCursorPage</code>
- <code title="delete /v1/avatar_conversations/{id}">client.avatarConversations.<a href="./src/resources/avatar-conversations.ts">delete</a>(id) -> void</code>

# AvatarVideos

Types:

- <code><a href="./src/resources/avatar-videos.ts">AvatarVideoCreateResponse</a></code>

Methods:

- <code title="post /v1/avatar_videos">client.avatarVideos.<a href="./src/resources/avatar-videos.ts">create</a>({ ...params }) -> AvatarVideoCreateResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentCreateResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentRetrieveResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>

Methods:

- <code title="post /v1/documents">client.documents.<a href="./src/resources/documents.ts">create</a>({ ...params }) -> DocumentCreateResponse</code>
- <code title="get /v1/documents/{id}">client.documents.<a href="./src/resources/documents.ts">retrieve</a>(id) -> DocumentRetrieveResponse</code>
- <code title="patch /v1/documents/{id}">client.documents.<a href="./src/resources/documents.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /v1/documents">client.documents.<a href="./src/resources/documents.ts">list</a>({ ...params }) -> DocumentListResponsesCursorPage</code>
- <code title="delete /v1/documents/{id}">client.documents.<a href="./src/resources/documents.ts">delete</a>(id) -> void</code>

# RealtimeSessions

Types:

- <code><a href="./src/resources/realtime-sessions.ts">RealtimeSessionCreateResponse</a></code>
- <code><a href="./src/resources/realtime-sessions.ts">RealtimeSessionRetrieveResponse</a></code>

Methods:

- <code title="post /v1/realtime_sessions">client.realtimeSessions.<a href="./src/resources/realtime-sessions.ts">create</a>({ ...params }) -> RealtimeSessionCreateResponse</code>
- <code title="get /v1/realtime_sessions/{id}">client.realtimeSessions.<a href="./src/resources/realtime-sessions.ts">retrieve</a>(id) -> RealtimeSessionRetrieveResponse</code>
- <code title="delete /v1/realtime_sessions/{id}">client.realtimeSessions.<a href="./src/resources/realtime-sessions.ts">delete</a>(id) -> void</code>

# Recipes

Types:

- <code><a href="./src/resources/recipes.ts">RecipeAdLocalizationResponse</a></code>
- <code><a href="./src/resources/recipes.ts">RecipeMarketingStockImageResponse</a></code>
- <code><a href="./src/resources/recipes.ts">RecipeMultiShotVideoResponse</a></code>
- <code><a href="./src/resources/recipes.ts">RecipeProductAdResponse</a></code>
- <code><a href="./src/resources/recipes.ts">RecipeProductCampaignImageResponse</a></code>
- <code><a href="./src/resources/recipes.ts">RecipeProductSwapResponse</a></code>
- <code><a href="./src/resources/recipes.ts">RecipeProductUgcResponse</a></code>

Methods:

- <code title="post /v1/recipes/ad_localization">client.recipes.<a href="./src/resources/recipes.ts">adLocalization</a>({ ...params }) -> RecipeAdLocalizationResponse</code>
- <code title="post /v1/recipes/marketing_stock_image">client.recipes.<a href="./src/resources/recipes.ts">marketingStockImage</a>({ ...params }) -> RecipeMarketingStockImageResponse</code>
- <code title="post /v1/recipes/multi_shot_video">client.recipes.<a href="./src/resources/recipes.ts">multiShotVideo</a>({ ...params }) -> RecipeMultiShotVideoResponse</code>
- <code title="post /v1/recipes/product_ad">client.recipes.<a href="./src/resources/recipes.ts">productAd</a>({ ...params }) -> RecipeProductAdResponse</code>
- <code title="post /v1/recipes/product_campaign_image">client.recipes.<a href="./src/resources/recipes.ts">productCampaignImage</a>({ ...params }) -> RecipeProductCampaignImageResponse</code>
- <code title="post /v1/recipes/product_swap">client.recipes.<a href="./src/resources/recipes.ts">productSwap</a>({ ...params }) -> RecipeProductSwapResponse</code>
- <code title="post /v1/recipes/product_ugc">client.recipes.<a href="./src/resources/recipes.ts">productUgc</a>({ ...params }) -> RecipeProductUgcResponse</code>

# Voices

Types:

- <code><a href="./src/resources/voices.ts">VoiceCreateResponse</a></code>
- <code><a href="./src/resources/voices.ts">VoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/voices.ts">VoiceUpdateResponse</a></code>
- <code><a href="./src/resources/voices.ts">VoiceListResponse</a></code>
- <code><a href="./src/resources/voices.ts">VoicePreviewResponse</a></code>

Methods:

- <code title="post /v1/voices">client.voices.<a href="./src/resources/voices.ts">create</a>({ ...params }) -> VoiceCreateResponse</code>
- <code title="get /v1/voices/{id}">client.voices.<a href="./src/resources/voices.ts">retrieve</a>(id) -> VoiceRetrieveResponse</code>
- <code title="patch /v1/voices/{id}">client.voices.<a href="./src/resources/voices.ts">update</a>(id, { ...params }) -> VoiceUpdateResponse</code>
- <code title="get /v1/voices">client.voices.<a href="./src/resources/voices.ts">list</a>({ ...params }) -> VoiceListResponsesCursorPage</code>
- <code title="delete /v1/voices/{id}">client.voices.<a href="./src/resources/voices.ts">delete</a>(id) -> void</code>
- <code title="post /v1/voices/preview">client.voices.<a href="./src/resources/voices.ts">preview</a>({ ...params }) -> VoicePreviewResponse</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows.ts">WorkflowRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowListResponse</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowRunResponse</a></code>

Methods:

- <code title="get /v1/workflows/{id}">client.workflows.<a href="./src/resources/workflows.ts">retrieve</a>(id) -> WorkflowRetrieveResponse</code>
- <code title="get /v1/workflows">client.workflows.<a href="./src/resources/workflows.ts">list</a>() -> WorkflowListResponse</code>
- <code title="post /v1/workflows/{id}">client.workflows.<a href="./src/resources/workflows.ts">run</a>(id, { ...params }) -> WorkflowRunResponse</code>

# WorkflowInvocations

Types:

- <code><a href="./src/resources/workflow-invocations.ts">WorkflowInvocationRetrieveResponse</a></code>

Methods:

- <code title="get /v1/workflow_invocations/{id}">client.workflowInvocations.<a href="./src/resources/workflow-invocations.ts">retrieve</a>(id) -> WorkflowInvocationRetrieveResponse</code>
