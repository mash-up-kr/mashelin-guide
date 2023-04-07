<h1 align="center">
  <br />
  🍙
  <br />
  Mashelin Guide
  <sup>
    <br />
    <br />
  </sup>
</h1>

<div align="center">
    <a href="https://github.com/mash-up-kr/mashelin-guide/blob/master/LICENSE">
      <img alt="GitHub" src="https://img.shields.io/github/license/mash-up-kr/mashelin-guide">
    </a>
    <br />
    <sup>매쉬업 공인 맛집 탐색기 NPM Package and CLI</sup>
    <br />
    <br />
</div>

# 📖 About

TBD

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Options](#options)
  - [Examples](#examples)
- [Set Up Locally](#setup-locally)
- [Programmatic Usage](#programmatic-usage)
- [Roadmap](#roadmap)
- [Known bugs](#known-bugs)
- [Contributing](#contributing)
- [License](#license)

<a name="features"></a>

# ✅ Features

- **맛집 검색:** 매쉬업 멤버들의 맛집 픽을 검색할 수 있습니다.

- **맛집 지도로 보기:** 검색한 맛집 목록을 지도로 바로 볼 수 있습니다.

- **조건부 검색:** 다양한 검색 옵션들을 활용해서 오늘 모임에서 갈만한 맛집을 손쉽게 검색하세요.

- **손쉬운 사용:** 카카오맵, 네이버맵 어플리케이션이 필요 없습니다. 맥북을 켜고 터미널을 열어서 커맨드만 실행하면 됩니다!

- **커뮤니티에 의해 최신화되는 목록:** 맛집 목록은 누구나 추가할 수 있습니다. 부담가지지 말고 언제든지 PR을 올려주세요.

<a name="installation"></a>

# Installation

설치하지 않아도 바로 사용할 수 있습니다! 다음 명령어를 터미널에서 실행해보세요:

```bash
npx mashelin-guide
```

혹은 설치해서 사용하고 싶은 경우:

```bash
npm i -g mashelin-guide
```

<a name="usage"></a>

# 📋 Usage

```bash
npx mashelin-guide
# or just mashelin-guide if installed globally
```

라이브러리로 사용하고 싶으면 [Programmatic Usage](#programmatic-usage) 섹션을 참고해주세요

<a name="options"></a>

## Options

| ARGUMENT      | DESCRIPTION                          |
| ------------- | ------------------------------------ |
| -s, --size    | 출력할 맛집 목록의 갯수를 제한합니다 |
| -v, --version | 버전을 표시합니다                    |

**Warning:** _이후 릴리즈되는 버전에서 옵션이 바뀔 수 도 있습니다_

<a name="examples"></a>

## Examples

<a name="setup-locally"></a>

# 📟 Set Up Locally

```bash
# -- 레포를 클론해주세요
git clone https://github.com/mash-up-kr/mashelin-guide.git

# -- 디렉토리 내부로 이동합니다
cd mashelin-guide

# -- 의존성을 설치해주세요
pnpm install

# -- 실행!
pnpm run start
```

<a name="programmatic-usage"></a>

# 🧑🏻‍💻 Programmatic usage

```ts
import { MashelinGuide } from 'mashelin-guide';

// TBD
```

기본적으로 mashelin-guide는 터미널에서 사용하는 커맨드라인 프로그램이지만, 이 기능을 다른 프로젝트에서 import하여 사용하고 싶을 때가 있습니다.

<a name="roadmap"></a>

# 🔮 Roadmap

- [ ] 릴리즈 0.1.0 !
- [ ] 코드 개선
  - [ ] 성능 개선
- [ ] 복잡한 쿼리 추가
- [ ] 지도로 보기 추가
- [ ] API, CLI, Interactive CLI 분리
- [ ] Contribution 문서 구체화
- [ ] PR / master merge CI
- [ ] Release 자동화 Github Action
- [ ] 마스터 브랜치의 데이터를 직접 가져오기

<a name="known-bugs"></a>

# 🐞 Known bugs

- Sometimes, CLI is blocked while folder is deleting.

> 버그를 찾게 된다면 주저하지 말고 이슈를 열어주세요 :)

<a name="contributing"></a>

# 💞 Contributing

이 프로젝트에 기여를 하고 싶다면 [CONTRIBUTING.md](.github/CONTRIBUTING.md)을 참고해주세요

<a name="license"></a>

# 📜 License

MIT © [Karl Saehun Chung](https://github.com/minidonut) and [Hyeon Cho](https://github.com/hye-on) and [ Jiwon Park](https://github.com/pjw5521)

🐱🐤
