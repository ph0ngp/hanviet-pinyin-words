# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.7] - 2024-12-02

### Added
- Add radicals 礻, 阝,⻏, 耂, 覀, 牜

## [2.1.6] - 2024-12-02

### Added
- Add 2 new characters: 肀 and 釒

## [2.1.5] - 2024-11-28

### Added
- Add `getAllHanvietsOfChar` function to get all hanviets of a character.

## [2.1.4] - 2024-10-25

### Added
- Add `firstCharUpperCase` option to convert the first character of each word of the result to uppercase.

## [2.1.3] - 2024-10-16

### Added
- Convert full-width comma and period to corresponding ASCII characters.

## [2.1.2] - 2024-10-16

### Changed
- Expand the preserved character set to include all printable ASCII characters.
- Update hanvietData.js entries

## [2.1.1] - 2024-10-06

### Changed
- Minify hanvietData.js

## [2.1.0] - 2024-10-05

### Changed
- Separate hanviet data to its own project. This project serves only as the conversion API for the data.
- Update some words in hanviet data.

## [2.0.2] - 2024-10-05

### Changed
- Workaround for `pnpm publish` to fix `ERR_PNPM_GIT_UNKNOWN_BRANCH` https://github.com/pnpm/pnpm/issues/5894

## [2.0.1] - 2024-10-04

### Added
- Added auto npm publish github action when a new release is published.

## [2.0.0] - 2024-10-04

### Added
- Added CHANGELOG.md
- New `getHanviet` function for converting Chinese characters to Sino-Vietnamese (Hán Việt) words.
- Export of `hanvietData` for direct access to the Hán Việt dictionary.
- Comprehensive test suite.
- Use Prettier for code formatting.
- CI github actions: include test, lint, format

### Changed
- Updated project structure to use ES modules.
- Improved README with more detailed usage instructions and examples.

## [1.0.0] - 2024-10-03

### Added
- Initial release of hanviet-pinyin-words.
- Basic dataset only.
- README with basic usage instructions.
- MIT License.

[Unreleased]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.1.7...HEAD
[2.1.7]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.1.6...v2.1.7
[2.1.6]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.1.5...v2.1.6
[2.1.5]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.1.4...v2.1.5
[2.1.4]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.1.3...v2.1.4
[2.1.3]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.1.2...v2.1.3
[2.1.2]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.0.2...v2.1.0
[2.0.2]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/ph0ngp/hanviet-pinyin-words/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/ph0ngp/hanviet-pinyin-words/releases/tag/v1.0.0