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

Methods:

- <code title="post /v1/avatars">client.avatars.<a href="./src/resources/avatars.ts">create</a>({ ...params }) -> AvatarCreateResponse</code>
- <code title="get /v1/avatars/{id}">client.avatars.<a href="./src/resources/avatars.ts">retrieve</a>(id) -> AvatarRetrieveResponse</code>
- <code title="patch /v1/avatars/{id}">client.avatars.<a href="./src/resources/avatars.ts">update</a>(id, { ...params }) -> AvatarUpdateResponse</code>
- <code title="get /v1/avatars">client.avatars.<a href="./src/resources/avatars.ts">list</a>({ ...params }) -> AvatarListResponsesCursorPage</code>
- <code title="delete /v1/avatars/{id}">client.avatars.<a href="./src/resources/avatars.ts">delete</a>(id) -> void</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentCreateResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentRetrieveResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>

Methods:

- <code title="post /v1/documents">client.documents.<a href="./src/resources/documents.ts">create</a>({ ...params }) -> DocumentCreateResponse</code>
- <code title="get /v1/documents/{id}">client.documents.<a href="./src/resources/documents.ts">retrieve</a>(id) -> DocumentRetrieveResponse</code>
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

# Voices

Types:

- <code><a href="./src/resources/voices.ts">VoiceCreateResponse</a></code>
- <code><a href="./src/resources/voices.ts">VoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/voices.ts">VoiceListResponse</a></code>
- <code><a href="./src/resources/voices.ts">VoicePreviewResponse</a></code>

Methods:

- <code title="post /v1/voices">client.voices.<a href="./src/resources/voices.ts">create</a>({ ...params }) -> VoiceCreateResponse</code>
- <code title="get /v1/voices/{id}">client.voices.<a href="./src/resources/voices.ts">retrieve</a>(id) -> VoiceRetrieveResponse</code>
- <code title="get /v1/voices">client.voices.<a href="./src/resources/voices.ts">list</a>({ ...params }) -> VoiceListResponsesCursorPage</code>
- <code title="delete /v1/voices/{id}">client.voices.<a href="./src/resources/voices.ts">delete</a>(id) -> void</code>
- <code title="post /v1/voices/preview">client.voices.<a href="./src/resources/voices.ts">preview</a>({ ...params }) -> VoicePreviewResponse</code>
