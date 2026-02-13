# Changelog

## 3.14.1 (2026-02-13)

Full Changelog: [v3.14.0...v3.14.1](https://github.com/runwayml/sdk-node/compare/v3.14.0...v3.14.1)

### Bug Fixes

* **api:** Remove invalid 4.5 i2v ratio ([445c547](https://github.com/runwayml/sdk-node/commit/445c547bfe5ca956c3b65b0f55ed6bce6f3d6375))

## 3.14.0 (2026-02-12)

Full Changelog: [v3.13.0...v3.14.0](https://github.com/runwayml/sdk-node/compare/v3.13.0...v3.14.0)

### Features

* **api:** Gen-4.5 t2v+i2v ([dca7320](https://github.com/runwayml/sdk-node/commit/dca732027218879d0e6c2e000bfa68c96793ebd8))


### Bug Fixes

* **client:** avoid removing abort listener too early ([5b9cfe9](https://github.com/runwayml/sdk-node/commit/5b9cfe9bb2930300250f70418ec2784074db3908))


### Chores

* **client:** restructure abort controller binding ([72b0d5a](https://github.com/runwayml/sdk-node/commit/72b0d5ac5383ea1f667d578a4d41e33dc3b9d1af))
* **internal:** avoid type checking errors with ts-reset ([2fecbbf](https://github.com/runwayml/sdk-node/commit/2fecbbf2c2d6857a25a6c6829a034ce8a2e1ab1c))

## 3.13.0 (2026-02-03)

Full Changelog: [v3.12.0...v3.13.0](https://github.com/runwayml/sdk-node/compare/v3.12.0...v3.13.0)

### Features

* **api:** Deprecate v2v ratio ([59dacf5](https://github.com/runwayml/sdk-node/commit/59dacf52a52f4d9dd706305448c834dcf9286146))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([71a3c3f](https://github.com/runwayml/sdk-node/commit/71a3c3f14dac8533af93206a5bf0b914d82e9e58))


### Chores

* **ci:** upgrade `actions/github-script` ([e9e6329](https://github.com/runwayml/sdk-node/commit/e9e6329cdb7dbe97cc93d2881cb6b6e37897a1b8))
* **client:** do not parse responses with empty content-length ([750bb75](https://github.com/runwayml/sdk-node/commit/750bb7514b888c70b90335d72ea51b5559c204d1))
* **internal:** update `actions/checkout` version ([1b556a4](https://github.com/runwayml/sdk-node/commit/1b556a470410c8fa3aa656d1ee07694590721c88))

## 3.12.0 (2026-01-17)

Full Changelog: [v3.11.0...v3.12.0](https://github.com/runwayml/sdk-node/compare/v3.11.0...v3.12.0)

### Features

* **api:** Remove video_upscale resource ([5faaa58](https://github.com/runwayml/sdk-node/commit/5faaa5818b2654d067bbe84d502061dac24a46b6))
* **api:** Sunset upscale endpoint ([76beaa9](https://github.com/runwayml/sdk-node/commit/76beaa91fac29ca3efaab369754927b96a020b37))


### Bug Fixes

* **mcp:** correct code tool API endpoint ([57d4a99](https://github.com/runwayml/sdk-node/commit/57d4a9902807f0ef52fc5bba9e7f86458db8662f))
* **mcp:** return correct lines on typescript errors ([35fd83a](https://github.com/runwayml/sdk-node/commit/35fd83aeda8a6dff376a3210226ec53590874ba4))


### Chores

* break long lines in snippets into multiline ([08bfc7d](https://github.com/runwayml/sdk-node/commit/08bfc7d7bb67f864d847296917f0778096a2ffc6))
* **internal:** codegen related update ([7d38c14](https://github.com/runwayml/sdk-node/commit/7d38c1491bbb0738bb6e3035cc8ca830a45e5756))
* **internal:** codegen related update ([fd24c92](https://github.com/runwayml/sdk-node/commit/fd24c92b95e3b735ef44f6c4839fbe059e873d3d))
* **internal:** codegen related update ([7b0ad37](https://github.com/runwayml/sdk-node/commit/7b0ad372c8d4c9d46b7a5164c30f11d50f242bdf))
* **internal:** upgrade babel, qs, js-yaml ([07dcaf5](https://github.com/runwayml/sdk-node/commit/07dcaf56b0a45fd0a64004c42269bde5eef48cba))

## 3.11.0 (2025-12-04)

Full Changelog: [v3.10.0...v3.11.0](https://github.com/runwayml/sdk-node/compare/v3.10.0...v3.11.0)

### Features

* **api:** Remove unreleased model ([d0a9870](https://github.com/runwayml/sdk-node/commit/d0a98707a7b62e914c09d5c5bf2dd91008f3e2bd))

## 3.10.0 (2025-12-04)

Full Changelog: [v3.9.0...v3.10.0](https://github.com/runwayml/sdk-node/compare/v3.9.0...v3.10.0)

### Features

* **api:** Autogen spec updates ([9ff692a](https://github.com/runwayml/sdk-node/commit/9ff692a459c6a03ca2fc8f45e524ca4e31adf369))
* **api:** Revert G3P changes ([f4210e4](https://github.com/runwayml/sdk-node/commit/f4210e4fbb1ebf6b2c585597ef5e64888366b869))

## 3.9.0 (2025-12-03)

Full Changelog: [v3.8.0...v3.9.0](https://github.com/runwayml/sdk-node/compare/v3.8.0...v3.9.0)

### Features

* **api:** gemini_3_pro t2i ([e714636](https://github.com/runwayml/sdk-node/commit/e714636f7a1a94cde1df221ad93ccbea1c27fe49))
* **client:** Handle new discriminated task responses ([2d36d8a](https://github.com/runwayml/sdk-node/commit/2d36d8adf67e0e69e9c7d468e45262bf1e4f86e1))
* **client:** waitForTaskOutput only returns successes ([11ed209](https://github.com/runwayml/sdk-node/commit/11ed20962ac3a302cef45d3f50007a90ec5e7a16))


### Chores

* **client:** fix logger property type ([4988e7f](https://github.com/runwayml/sdk-node/commit/4988e7f27af07ab4e7ec702f8863da79d7c7e0a5))
* **internal:** upgrade eslint ([fdc5077](https://github.com/runwayml/sdk-node/commit/fdc50772b5ede0c11da8aa24dcabe3c975b7af8b))

## 3.8.0 (2025-11-17)

Full Changelog: [v3.7.0...v3.8.0](https://github.com/runwayml/sdk-node/compare/v3.7.0...v3.8.0)

### Features

* **api:** veo3.1 audio parameter ([cdb64ac](https://github.com/runwayml/sdk-node/commit/cdb64ac931d32f0dcff5d308d8f9759ef65cf27c))

## 3.7.0 (2025-11-04)

Full Changelog: [v3.6.0...v3.7.0](https://github.com/runwayml/sdk-node/compare/v3.6.0...v3.7.0)

### Features

* **api:** Support ephemeral uploads ([95f5a53](https://github.com/runwayml/sdk-node/commit/95f5a53cbcab4d458b45c209cc5b20960a163a90))

## 3.6.0 (2025-11-04)

Full Changelog: [v3.5.0...v3.6.0](https://github.com/runwayml/sdk-node/compare/v3.5.0...v3.6.0)

### Features

* **api:** Update discriminated union schema ([032d6e6](https://github.com/runwayml/sdk-node/commit/032d6e631b606660a5edc070dc8162969fa9a480))

## 3.5.0 (2025-10-22)

Full Changelog: [v3.4.0...v3.5.0](https://github.com/runwayml/sdk-node/compare/v3.4.0...v3.5.0)

### Features

* **api:** Add speech to speech ([1ce9142](https://github.com/runwayml/sdk-node/commit/1ce91425fe6e0973c160d8786111a4e2eb9cb327))
* **api:** Added speech to speech ([35ac252](https://github.com/runwayml/sdk-node/commit/35ac2527980a38e4d7f2a331aa244e7fa143c9aa))

## 3.4.0 (2025-10-15)

Full Changelog: [v3.3.0...v3.4.0](https://github.com/runwayml/sdk-node/compare/v3.3.0...v3.4.0)

### Features

* **api:** Veo 3.1 and Veo 3.1 Fast ([08cbe3f](https://github.com/runwayml/sdk-node/commit/08cbe3f3224e194143981fb5a659202eb164ebce))


### Bug Fixes

* **api:** Add missing 1080p sizes ([fec9e11](https://github.com/runwayml/sdk-node/commit/fec9e11944cde2feda5bca7dc041821bff6b8ccd))

## 3.3.0 (2025-10-14)

Full Changelog: [v3.2.0...v3.3.0](https://github.com/runwayml/sdk-node/compare/v3.2.0...v3.3.0)

### Features

* **api:** Voice dubbing and isolation ([bf7fc6b](https://github.com/runwayml/sdk-node/commit/bf7fc6b16aa67fb24a1a25027bac07fb628becdf))

## 3.2.0 (2025-10-09)

Full Changelog: [v3.1.0...v3.2.0](https://github.com/runwayml/sdk-node/compare/v3.1.0...v3.2.0)

### Features

* **api:** Sound effects endpoint ([fbe6046](https://github.com/runwayml/sdk-node/commit/fbe6046fe7ca8b3edbe3724c5408388e834f8fbd))

## 3.1.0 (2025-10-08)

Full Changelog: [v3.0.0...v3.1.0](https://github.com/runwayml/sdk-node/compare/v3.0.0...v3.1.0)

### Features

* **api:** Additional i2v durations ([af836ea](https://github.com/runwayml/sdk-node/commit/af836ea43411550336a7e70fd99f3174a44acf5e))


### Chores

* **internal:** use npm pack for build uploads ([4c6267b](https://github.com/runwayml/sdk-node/commit/4c6267b836a822dd7951f71253769485a93a9289))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([62fea83](https://github.com/runwayml/sdk-node/commit/62fea835ed07e4883d38b892445053a232460dd6))

## 3.0.0 (2025-10-02)

Full Changelog: [v2.11.0...v3.0.0](https://github.com/runwayml/sdk-node/compare/v2.11.0...v3.0.0)

### Features

* **api:** Finish migrating to typescript sdk ([b976d4f](https://github.com/runwayml/sdk-node/commit/b976d4fbdac3ec909ed5b4bfe9e42a23193fc6e0))
* **api:** Typescript migration ([6370065](https://github.com/runwayml/sdk-node/commit/6370065c3a742826659dc3992a905dd03aa4c12e))
* **docs:** Update docs URL ([7567419](https://github.com/runwayml/sdk-node/commit/7567419a49735c3e5d113af40abc0b30ba219b14))
* **internal:** Cleanup, migration docs ([07ce643](https://github.com/runwayml/sdk-node/commit/07ce6439e318a00f6908bd850f9892e58a4643ef))


### Performance Improvements

* faster formatting ([a477bba](https://github.com/runwayml/sdk-node/commit/a477bba28debf6fa9551bfe7f9691bff45d9fed3))


### Chores

* **internal:** codegen related update ([cdb4b77](https://github.com/runwayml/sdk-node/commit/cdb4b77ca766f1788c8d726e7454a36479101777))
* **internal:** deps ([0681485](https://github.com/runwayml/sdk-node/commit/0681485b9f38c225a5259a93d2a3ce52488186cf))
* **internal:** fix incremental formatting in some cases ([7e9407f](https://github.com/runwayml/sdk-node/commit/7e9407fa2c29f69abfbd0c15c6c5420bd132020a))
* **internal:** ignore .eslintcache ([6b139ec](https://github.com/runwayml/sdk-node/commit/6b139ec1ad523c34f756c3e2d028f97e1e3a46e2))
* **internal:** remove .eslintcache ([102dc0e](https://github.com/runwayml/sdk-node/commit/102dc0e33784456e861c7beb27b1fe5d134ff3aa))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([c6e93d7](https://github.com/runwayml/sdk-node/commit/c6e93d7923d213fc50f889321f685bc1698c2669))

## 2.11.0 (2025-09-23)

Full Changelog: [v2.10.1...v2.11.0](https://github.com/runwayml/sdk-node/compare/v2.10.1...v2.11.0)

### Features

* **api:** Text to Speech update ([ea48b24](https://github.com/runwayml/sdk-node/commit/ea48b240012443e7f60842e7a2b1dc53de236da7))
* **client:** Make t2s awaitable ([8918e88](https://github.com/runwayml/sdk-node/commit/8918e88a3cb7db46db145e29eac10252f3835ebd))

## 2.10.1 (2025-09-20)

Full Changelog: [v2.10.0...v2.10.1](https://github.com/runwayml/sdk-node/compare/v2.10.0...v2.10.1)

### Chores

* do not install brew dependencies in ./scripts/bootstrap by default ([7ba15a3](https://github.com/runwayml/sdk-node/commit/7ba15a38193aee310223080720d2a3b9cd245a7c))

## 2.10.0 (2025-09-11)

Full Changelog: [v2.9.0...v2.10.0](https://github.com/runwayml/sdk-node/compare/v2.9.0...v2.10.0)

### Features

* **api:** Add Gemini 2.5 Flash Image to t2i ([d4a6bab](https://github.com/runwayml/sdk-node/commit/d4a6bab65c4a49c5497691d7a2095c6f1f57a4d7))

## 2.9.0 (2025-09-10)

Full Changelog: [v2.8.3...v2.9.0](https://github.com/runwayml/sdk-node/compare/v2.8.3...v2.9.0)

### Features

* **api:** Update t2v parameters ([b306edc](https://github.com/runwayml/sdk-node/commit/b306edc37de4cca599e302838e2cdb6d366c650b))
* **api:** Veo3 integration ([f882fe6](https://github.com/runwayml/sdk-node/commit/f882fe69dc5332772d757c9854597aa555b8f108))
* **client:** Make t2v waitable ([be48f62](https://github.com/runwayml/sdk-node/commit/be48f6283e4bf15a8932cb807287d7da80ae2721))

## 2.8.3 (2025-09-09)

Full Changelog: [v2.8.2...v2.8.3](https://github.com/runwayml/sdk-node/compare/v2.8.2...v2.8.3)

### Bug Fixes

* coerce nullable values to undefined ([009871a](https://github.com/runwayml/sdk-node/commit/009871a4cb8b9afc0420e3d83a56eb5c4dc52f6f))


### Chores

* ci build action ([86786bd](https://github.com/runwayml/sdk-node/commit/86786bd820737f4baed65927fffafef3c78d8f72))

## 2.8.2 (2025-08-23)

Full Changelog: [v2.8.1...v2.8.2](https://github.com/runwayml/sdk-node/compare/v2.8.1...v2.8.2)

### Chores

* **deps:** update dependency node-fetch to v2.6.13 ([2dc267e](https://github.com/runwayml/sdk-node/commit/2dc267e1392bd149f625b40e5b1b159dea9cf872))
* **internal:** formatting change ([ab19a7b](https://github.com/runwayml/sdk-node/commit/ab19a7b51d1e58215d211ac826ef13cb6329ce54))
* **internal:** update comment in script ([92a9a82](https://github.com/runwayml/sdk-node/commit/92a9a821073b59ea3d24ba0c03d396d7a57c9b3a))
* update CI script ([2d29401](https://github.com/runwayml/sdk-node/commit/2d29401a59495288bcf1cc0c09124ca82d5d33e6))

## 2.8.1 (2025-08-09)

Full Changelog: [v2.8.0...v2.8.1](https://github.com/runwayml/sdk-node/compare/v2.8.0...v2.8.1)

### Chores

* update @stainless-api/prism-cli to v5.15.0 ([d04ab4d](https://github.com/runwayml/sdk-node/commit/d04ab4da2c72c08cc1561b26acdcc887609a7f55))

## 2.8.0 (2025-08-07)

Full Changelog: [v2.7.0...v2.8.0](https://github.com/runwayml/sdk-node/compare/v2.7.0...v2.8.0)

### Features

* **readme:** Fix for readme example ([821c2ac](https://github.com/runwayml/sdk-node/commit/821c2ac913308db660d2ccae9f331d42f9de8f91))
* **readme:** gen4_turbo ratio ([f637cd6](https://github.com/runwayml/sdk-node/commit/f637cd6839aaf054aa23ea84dcb125144fc79065))


### Chores

* **internal:** move publish config ([be0428c](https://github.com/runwayml/sdk-node/commit/be0428cb967312f488b0012897196b67fe9a49c2))

## 2.7.0 (2025-08-05)

Full Changelog: [v2.6.0...v2.7.0](https://github.com/runwayml/sdk-node/compare/v2.6.0...v2.7.0)

### Features

* **api:** Add gen4_image_turbo model ([b5b89d0](https://github.com/runwayml/sdk-node/commit/b5b89d060a7a537ebe4ad0c8437ef1077d358197))

## 2.6.0 (2025-08-01)

Full Changelog: [v2.5.1...v2.6.0](https://github.com/runwayml/sdk-node/compare/v2.5.1...v2.6.0)

### Features

* **api:** Gen-4 Aleph ([94908de](https://github.com/runwayml/sdk-node/commit/94908de32934cd72cac3d7c3f0eea2f0ab8be14c))

## 2.5.1 (2025-07-30)

Full Changelog: [v2.5.0...v2.5.1](https://github.com/runwayml/sdk-node/compare/v2.5.0...v2.5.1)

### Chores

* **internal:** remove redundant imports config ([8220762](https://github.com/runwayml/sdk-node/commit/82207621f6d1302bb27c6d28239032d1e0b4486b))

## 2.5.0 (2025-07-18)

Full Changelog: [v2.4.2...v2.5.0](https://github.com/runwayml/sdk-node/compare/v2.4.2...v2.5.0)

### Features

* **api:** Act Two, credit usage endpoints ([18ee143](https://github.com/runwayml/sdk-node/commit/18ee143abd8927e3d7013177ab572bcd51761d4c))
* **api:** Awaitability on new resources ([a2a23d6](https://github.com/runwayml/sdk-node/commit/a2a23d66dd07181003af58ec0857bef0b123e8d3))


### Chores

* make some internal functions async ([b9e99f7](https://github.com/runwayml/sdk-node/commit/b9e99f75ee2b6d2df7ea419e39010a048ff276c9))

## 2.4.2 (2025-07-03)

Full Changelog: [v2.4.1...v2.4.2](https://github.com/runwayml/sdk-node/compare/v2.4.1...v2.4.2)

### Bug Fixes

* **client:** don't send `Content-Type` for bodyless methods ([3c7864f](https://github.com/runwayml/sdk-node/commit/3c7864f60ef70ee2905d22234e0c26e85ab5dc29))


### Chores

* mention unit type in timeout docs ([cb3bbfe](https://github.com/runwayml/sdk-node/commit/cb3bbfee497e6deaa3b35d3fe6d4612decb15837))

## 2.4.1 (2025-06-28)

Full Changelog: [v2.4.0...v2.4.1](https://github.com/runwayml/sdk-node/compare/v2.4.0...v2.4.1)

### Bug Fixes

* **ci:** release-doctor — report correct token name ([de3bfe6](https://github.com/runwayml/sdk-node/commit/de3bfe64d95c3debdd5945b1bb12a52fa9fbfe3a))


### Chores

* **ci:** only run for pushes and fork pull requests ([f50556b](https://github.com/runwayml/sdk-node/commit/f50556b82dc0bbc57d8a16724a6400e23e4aafb7))

## 2.4.0 (2025-06-17)

Full Changelog: [v2.3.0...v2.4.0](https://github.com/runwayml/sdk-node/compare/v2.3.0...v2.4.0)

### Features

* **api:** SDK updates, contentModeration for i2v ([2efa44f](https://github.com/runwayml/sdk-node/commit/2efa44f179a0efb48c24189938f8e2a5c192e96d))
* **client:** add support for endpoint-specific base URLs ([86c7ff6](https://github.com/runwayml/sdk-node/commit/86c7ff6b8d5a4ca1d8563e379422a6ff1854a72e))


### Bug Fixes

* publish script — handle NPM errors correctly ([e900012](https://github.com/runwayml/sdk-node/commit/e900012bd796a5a9d6ad736fe2ceef241534e516))


### Chores

* **ci:** enable for pull requests ([95d28a5](https://github.com/runwayml/sdk-node/commit/95d28a5a05c78f32f84f613266c1eff42c3ff730))
* **internal:** make base APIResource abstract ([16c461e](https://github.com/runwayml/sdk-node/commit/16c461e72c656441fd487aad9ab31946c40dab1a))

## 2.3.0 (2025-06-04)

Full Changelog: [v2.2.1...v2.3.0](https://github.com/runwayml/sdk-node/compare/v2.2.1...v2.3.0)

### Features

* **api:** Add video upscale endpoint ([b37f06d](https://github.com/runwayml/sdk-node/commit/b37f06d3f6df4254ccfa4c13e629992434737d3e))

## 2.2.1 (2025-06-04)

Full Changelog: [v2.2.0...v2.2.1](https://github.com/runwayml/sdk-node/compare/v2.2.0...v2.2.1)

### Chores

* **docs:** use top-level-await in example snippets ([263a894](https://github.com/runwayml/sdk-node/commit/263a894e998da45a6b92d3104c24720729dc3111))

## 2.2.0 (2025-05-29)

Full Changelog: [v2.1.1...v2.2.0](https://github.com/runwayml/sdk-node/compare/v2.1.1...v2.2.0)

### Features

* **api:** Add 720p t2i ratios ([3db19cc](https://github.com/runwayml/sdk-node/commit/3db19ccd769b6b56150dad4f0239e2e2edb22066))

## 2.1.1 (2025-05-28)

Full Changelog: [v2.1.0...v2.1.1](https://github.com/runwayml/sdk-node/compare/v2.1.0...v2.1.1)

### Chores

* **docs:** grammar improvements ([a51fc21](https://github.com/runwayml/sdk-node/commit/a51fc219b205a70bb88ca39a819336e353dbc896))
* improve publish-npm script --latest tag logic ([fdb4d2f](https://github.com/runwayml/sdk-node/commit/fdb4d2fdc9d79fbd3c5a7a831635a16a7ed5d111))

## 2.1.0 (2025-05-16)

Full Changelog: [v2.0.3...v2.1.0](https://github.com/runwayml/sdk-node/compare/v2.0.3...v2.1.0)

### Features

* **api:** Gen-4 Image (text-to-image) support ([348a4c9](https://github.com/runwayml/sdk-node/commit/348a4c902980531f4cf45a744f0567a0cd0aefb1))

## 2.0.3 (2025-05-07)

Full Changelog: [v2.0.2...v2.0.3](https://github.com/runwayml/sdk-node/compare/v2.0.2...v2.0.3)

### Chores

* **ci:** bump node version for release workflows ([f024169](https://github.com/runwayml/sdk-node/commit/f024169eca8faaddf3d0f39f8a99a6faeff2792f))


### Documentation

* **readme:** fix typo ([84ba1ba](https://github.com/runwayml/sdk-node/commit/84ba1ba3611532d5b9f6a1f40f49855094566745))

## 2.0.2 (2025-04-30)

Full Changelog: [v2.0.1...v2.0.2](https://github.com/runwayml/sdk-node/compare/v2.0.1...v2.0.2)

### Bug Fixes

* **api:** Fix for parameters with missing descriptions ([8f627e5](https://github.com/runwayml/sdk-node/commit/8f627e50988b5476f225214edd490cf63517a004))
* **api:** Make `ratio` a required parameter for i2v ([fd6196e](https://github.com/runwayml/sdk-node/commit/fd6196e407231faeaec3a2bcaefe3d493ca1800b))


### Chores

* **ci:** add timeout thresholds for CI jobs ([c0f4e1f](https://github.com/runwayml/sdk-node/commit/c0f4e1f591bd5fbdb82f6d08ff7963e84864b9b6))
* **ci:** only use depot for staging repos ([028ff22](https://github.com/runwayml/sdk-node/commit/028ff22bc0fe9f323edac6cbc4a3c3a9f5ca1817))
* **internal:** codegen related update ([6bf11ee](https://github.com/runwayml/sdk-node/commit/6bf11ee3f3131c45b1c064cced0e65884f699f52))

## 2.0.1 (2025-04-15)

Full Changelog: [v2.0.0...v2.0.1](https://github.com/runwayml/sdk-node/compare/v2.0.0...v2.0.1)

### Chores

* **client:** minor internal fixes ([cc5ac03](https://github.com/runwayml/sdk-node/commit/cc5ac0364a3df8c6a3c802c2376d783325706c82))
* **internal:** reduce CI branch coverage ([68e1ec0](https://github.com/runwayml/sdk-node/commit/68e1ec0887803b27e1d8d0877e6b704a2ec808d7))
* **internal:** upload builds and expand CI branch coverage ([d9c6c72](https://github.com/runwayml/sdk-node/commit/d9c6c723a6c33502fbf8b7ed7d08530bcd674a46))

## 2.0.0 (2025-04-09)

Full Changelog: [v1.5.6...v2.0.0](https://github.com/runwayml/sdk-node/compare/v1.5.6...v2.0.0)

### Features

* **api:** Update with gen4_turbo, org endpoint ([#96](https://github.com/runwayml/sdk-node/issues/96)) ([c184086](https://github.com/runwayml/sdk-node/commit/c1840866c3f0ccd2283e61a1747fadc5ad001ba7))

## 1.5.6 (2025-04-06)

Full Changelog: [v1.5.5...v1.5.6](https://github.com/runwayml/sdk-node/compare/v1.5.5...v1.5.6)

### Bug Fixes

* **mcp:** remove unused tools.ts ([#92](https://github.com/runwayml/sdk-node/issues/92)) ([05646a7](https://github.com/runwayml/sdk-node/commit/05646a787db7506d68d4162c1d650ecc77446b1d))

## 1.5.5 (2025-04-04)

Full Changelog: [v1.5.4...v1.5.5](https://github.com/runwayml/sdk-node/compare/v1.5.4...v1.5.5)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#89](https://github.com/runwayml/sdk-node/issues/89)) ([c69252b](https://github.com/runwayml/sdk-node/commit/c69252bc473f18aa4bda2ebb0eea5747d31bd18d))

## 1.5.4 (2025-04-03)

Full Changelog: [v1.5.3...v1.5.4](https://github.com/runwayml/sdk-node/compare/v1.5.3...v1.5.4)

### Bug Fixes

* **client:** send `X-Stainless-Timeout` in seconds ([#85](https://github.com/runwayml/sdk-node/issues/85)) ([42484aa](https://github.com/runwayml/sdk-node/commit/42484aa3a48a382a13cf51ccd24a9a2ca63e88fb))


### Chores

* **internal:** add aliases for Record and Array ([#87](https://github.com/runwayml/sdk-node/issues/87)) ([14c8595](https://github.com/runwayml/sdk-node/commit/14c859547b22eeb606dadede532e87d450a2ca21))

## 1.5.3 (2025-03-28)

Full Changelog: [v1.5.2...v1.5.3](https://github.com/runwayml/sdk-node/compare/v1.5.2...v1.5.3)

### Bug Fixes

* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#82](https://github.com/runwayml/sdk-node/issues/82)) ([38f39c7](https://github.com/runwayml/sdk-node/commit/38f39c7633e8b6f30c20bcee0df71877d11866b8))

## 1.5.2 (2025-03-22)

Full Changelog: [v1.5.1...v1.5.2](https://github.com/runwayml/sdk-node/compare/v1.5.1...v1.5.2)

### Bug Fixes

* avoid type error in certain environments ([#79](https://github.com/runwayml/sdk-node/issues/79)) ([9e23fb8](https://github.com/runwayml/sdk-node/commit/9e23fb8b271f2629a9651a9acd0271415a9f5908))

## 1.5.1 (2025-03-20)

Full Changelog: [v1.5.0...v1.5.1](https://github.com/runwayml/sdk-node/compare/v1.5.0...v1.5.1)

### Chores

* **exports:** cleaner resource index imports ([#76](https://github.com/runwayml/sdk-node/issues/76)) ([2f90f68](https://github.com/runwayml/sdk-node/commit/2f90f686b2e47e3be26f5f86998a4666c06480af))
* **exports:** stop using path fallbacks ([#77](https://github.com/runwayml/sdk-node/issues/77)) ([9518cca](https://github.com/runwayml/sdk-node/commit/9518cca7335f4ef03a0046fe571242ccc13dd8b2))
* **internal:** remove extra empty newlines ([#74](https://github.com/runwayml/sdk-node/issues/74)) ([aacde98](https://github.com/runwayml/sdk-node/commit/aacde98617e57d8c22d3ddaba21e27435eab0e33))

## 1.5.0 (2025-03-11)

Full Changelog: [v1.4.8...v1.5.0](https://github.com/runwayml/sdk-node/compare/v1.4.8...v1.5.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#70](https://github.com/runwayml/sdk-node/issues/70)) ([1b62702](https://github.com/runwayml/sdk-node/commit/1b62702bb1f0c2ae2254b50084a76cb99995b633))
* **client:** accept RFC6838 JSON content types ([#72](https://github.com/runwayml/sdk-node/issues/72)) ([9ffc33f](https://github.com/runwayml/sdk-node/commit/9ffc33f66de7b3f8d4cef97b2d38626b0f949c5d))

## 1.4.8 (2025-03-04)

Full Changelog: [v1.4.7...v1.4.8](https://github.com/runwayml/sdk-node/compare/v1.4.7...v1.4.8)

### Chores

* **internal:** codegen related update ([#67](https://github.com/runwayml/sdk-node/issues/67)) ([e247b5b](https://github.com/runwayml/sdk-node/commit/e247b5b4369b051353505d939fd3fccd8b93a98f))

## 1.4.7 (2025-01-02)

Full Changelog: [v1.4.6...v1.4.7](https://github.com/runwayml/sdk-node/compare/v1.4.6...v1.4.7)

### Chores

* **internal:** codegen related update ([#61](https://github.com/runwayml/sdk-node/issues/61)) ([25349bf](https://github.com/runwayml/sdk-node/commit/25349bf6949ab81b6d44320d96e2fdfa7374c185))
* **internal:** codegen related update ([#63](https://github.com/runwayml/sdk-node/issues/63)) ([07fa1dd](https://github.com/runwayml/sdk-node/commit/07fa1dd8b16348bbad8c7e81027d7a06c5ac16fc))

## 1.4.6 (2024-12-20)

Full Changelog: [v1.4.5...v1.4.6](https://github.com/runwayml/sdk-node/compare/v1.4.5...v1.4.6)

### Bug Fixes

* **client:** normalize method ([#57](https://github.com/runwayml/sdk-node/issues/57)) ([b34ecbb](https://github.com/runwayml/sdk-node/commit/b34ecbb8490f73b869d87ba732ac9d40f7efd303))

## 1.4.5 (2024-12-18)

Full Changelog: [v1.4.4...v1.4.5](https://github.com/runwayml/sdk-node/compare/v1.4.4...v1.4.5)

### Chores

* **internal:** fix some typos ([#54](https://github.com/runwayml/sdk-node/issues/54)) ([5689a88](https://github.com/runwayml/sdk-node/commit/5689a88463814bfc31905510b7dd209224273e18))

## 1.4.4 (2024-12-12)

Full Changelog: [v1.4.3...v1.4.4](https://github.com/runwayml/sdk-node/compare/v1.4.3...v1.4.4)

### Chores

* **internal:** update isAbsoluteURL ([#51](https://github.com/runwayml/sdk-node/issues/51)) ([4aa8cb7](https://github.com/runwayml/sdk-node/commit/4aa8cb7f486114e147da258cc65fc951660244a9))

## 1.4.3 (2024-12-11)

Full Changelog: [v1.4.2...v1.4.3](https://github.com/runwayml/sdk-node/compare/v1.4.2...v1.4.3)

### Chores

* **internal:** codegen related update ([#48](https://github.com/runwayml/sdk-node/issues/48)) ([8db7791](https://github.com/runwayml/sdk-node/commit/8db77912a142373320b0ba16f14442b04da89ee4))

## 1.4.2 (2024-12-10)

Full Changelog: [v1.4.1...v1.4.2](https://github.com/runwayml/sdk-node/compare/v1.4.1...v1.4.2)

### Chores

* **internal:** remove unnecessary getRequestClient function ([#44](https://github.com/runwayml/sdk-node/issues/44)) ([40981f1](https://github.com/runwayml/sdk-node/commit/40981f1fc6afde6f3d9de094540e42f6222d2fdc))

## 1.4.1 (2024-12-05)

Full Changelog: [v1.4.0...v1.4.1](https://github.com/runwayml/sdk-node/compare/v1.4.0...v1.4.1)

### Build System

* **deps:** bump cross-spawn from 7.0.3 to 7.0.6 ([65802b5](https://github.com/runwayml/sdk-node/commit/65802b54041b6cd351c4b28785c22bb542c0f4ae))

## 1.4.0 (2024-11-28)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/runwayml/sdk-node/compare/v1.3.0...v1.4.0)

### Features

* **internal:** make git install file structure match npm ([#38](https://github.com/runwayml/sdk-node/issues/38)) ([d784a50](https://github.com/runwayml/sdk-node/commit/d784a500723af1278295edcdcfcc1396f1ff4d56))


### Chores

* rebuild project due to codegen change ([#33](https://github.com/runwayml/sdk-node/issues/33)) ([f72b350](https://github.com/runwayml/sdk-node/commit/f72b350bd214fa3e2dc50a35882279497b0c1540))
* rebuild project due to codegen change ([#35](https://github.com/runwayml/sdk-node/issues/35)) ([dba4d69](https://github.com/runwayml/sdk-node/commit/dba4d69941e7a075b91fb3f860b3e44710683025))
* remove redundant word in comment ([#37](https://github.com/runwayml/sdk-node/issues/37)) ([b84a2b2](https://github.com/runwayml/sdk-node/commit/b84a2b22fd6a6ee966d909e6038cbc689b131314))


### Documentation

* remove suggestion to use `npm` call out ([#36](https://github.com/runwayml/sdk-node/issues/36)) ([316e011](https://github.com/runwayml/sdk-node/commit/316e0116da78bef877be5ba6525d29b645fe252d))

## 1.3.0 (2024-11-06)

Full Changelog: [v1.2.0...v1.3.0](https://github.com/runwayml/sdk-node/compare/v1.2.0...v1.3.0)

### Features

* **api:** API version 2024-11-06 ([#29](https://github.com/runwayml/sdk-node/issues/29)) ([2f91b22](https://github.com/runwayml/sdk-node/commit/2f91b221833ef12e3c8d2f2e4fc3a0acd73a26d4))
* **api:** Set latest default API version ([#31](https://github.com/runwayml/sdk-node/issues/31)) ([1438a26](https://github.com/runwayml/sdk-node/commit/1438a2674207c3ee008c054dadb039b7ba90ef79))

## 1.2.0 (2024-10-04)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/runwayml/sdk-node/compare/v1.1.0...v1.2.0)

### Features

* **api:** update via SDK Studio ([#18](https://github.com/runwayml/sdk-node/issues/18)) ([5840075](https://github.com/runwayml/sdk-node/commit/5840075e4df7553a26599cdbf16b4c978194a14d))


### Chores

* **internal:** codegen related update ([#20](https://github.com/runwayml/sdk-node/issues/20)) ([a16d214](https://github.com/runwayml/sdk-node/commit/a16d2145326760698ecbeff0d2141c0089690c00))
* **internal:** codegen related update ([#21](https://github.com/runwayml/sdk-node/issues/21)) ([57084bb](https://github.com/runwayml/sdk-node/commit/57084bbb65f445e06ca31155a1909dd6d3004f69))

## 1.1.0 (2024-09-19)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/runwayml/sdk-node/compare/v1.0.0...v1.1.0)

### Features

* **client:** send retry count header ([#15](https://github.com/runwayml/sdk-node/issues/15)) ([8df09cf](https://github.com/runwayml/sdk-node/commit/8df09cf94702396eee729fdf28c0da0bea86de57))

## 1.0.0 (2024-09-19)

### Features

* **api:** launch initial SDK
