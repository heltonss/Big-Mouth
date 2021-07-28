# Big Mouth

### Get a fingerprint of the device of yours users with informations how Browser, Shell, Memory, Language etc...

![Word of mouth](big_mouth.svg)

## Table of contents

- [Install](#install)
- [Contributing](#contributing)
- [License](#license)

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i bigmouth --save
```

## Introduction

Here is a brief of example what you can do

```ts
import { Browser, User, OperationSystem } from "bigmouth";

//with a object Browser.fingerprint you able get
Browser.fingerprint();
//  {
//    id: "0526d9cb-9e74-40d0-a2ca-d489ffad32fe"
//    browser: "chrome"
//    cookieEnabled: true
//    deviceMemory: 8
//    language: "pt-BR"
//    platform: "MacIntel"
//  }
```

Or you can get individually

```ts
Browser.platform();
// MacIntel
```

## The properties are disponibles, but User is OperatingSystem are more helpful in applications NodeJS

- Browser
  - getPlatform: string
  - getLanguage: string
  - getDeviceMemory: number | string
  - isCookieEnabled: boolean
  - getBrowser: string
  - getPositionUser: string
  - fingerprint: object
- User
  - username: string
  - shell: string
  - fingerprint: object
- OperationSystem
  - getNameOS: string
  - getReleaseOS: string
  - getQuantityMemory: number
  - getCpus: object[]
  - fingerprint: object

<br/>
<br/>

# Contributing

Confer our [guide](CONTRIBUTING) of contribution.
<br/>
<br/>

# License

By contributing, you agree that your contributions will be licensed under its [MIT License](License).
