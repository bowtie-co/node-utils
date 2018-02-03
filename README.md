[![build status](https://img.shields.io/travis/bowtie-co/node-utils.svg?style=flat-square)](https://travis-ci.org/bowtie-co/node-utils)
[![npm version](https://img.shields.io/npm/v/@bowtie/utils.svg?style=flat-square)](https://www.npmjs.com/package/@bowtie/utils)
[![node version](https://img.shields.io/node/v/@bowtie/utils.svg?style=flat-square)](https://nodejs.org)
[![npm downloads](https://img.shields.io/npm/dt/@bowtie/utils.svg?style=flat-square)](https://www.npmjs.com/package/@bowtie/utils)
[![GitHub contributors](https://img.shields.io/github/contributors/bowtie-co/node-utils.svg?style=flat-square)](https://github.com/bowtie-co/node-utils/graphs/contributors)
[![npm license](https://img.shields.io/npm/l/@bowtie/utils.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[![GitHub pull requests](https://img.shields.io/github/issues-pr/bowtie-co/node-utils.svg?style=flat-square)](https://github.com/bowtie-co/node-utils/pulls)
[![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/bowtie-co/node-utils.svg?style=flat-square)](https://github.com/bowtie-co/node-utils/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+)
[![GitHub issues](https://img.shields.io/github/issues/bowtie-co/node-utils.svg?style=flat-square)](https://github.com/bowtie-co/node-utils/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/bowtie-co/node-utils.svg?style=flat-square)](https://github.com/bowtie-co/node-utils/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+)

# @bowtie/utils
JavaScript utilities and helpers

- [Installation](#installation)
- [Usage](#usage)
  - [capitalizeWord](#capitalizeword)
  - [endsWith](#endswith)
  - [startsWith](#startswith)
  - [verifyKeys](#verifykeys)
  - [verifyRequired](#verifyrequired)
  - [verifySchema](#verifyschema)

## Installation

```bash
npm install --save @bowtie/utils
```

## Usage

#### capitalizeWord
#### endsWith
```javascript
const { endsWith } = require('@bowtie/utils');

const fileName = 'cool-thing.png';

if (endsWith(fileName, '.png')) {
  console.log(fileName, 'is a PNG!');
}
```

#### startsWith
#### verifyKeys
#### verifyRequired
#### verifySchema
