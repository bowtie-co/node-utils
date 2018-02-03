[![npm version](https://badge.fury.io/js/%40bowtie%2Futils.svg)](https://www.npmjs.com/package/@bowtie/utils)
[![build status](https://travis-ci.org/bowtie-co/node-utils.svg?branch=master)](https://travis-ci.org/bowtie-co/node-utils)

# @bowtie/utils
JavaScript utilities and helpers

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Function List](#function-list)
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

## Basic Usage
```javascript
const BowtieUtils = require('@bowtie/utils');

const fileName = 'cool-thing.png';

if (BowtieUtils.endsWith(fileName, '.png')) {
  console.log(fileName, 'is a PNG!');
}
```

## Function List

#### capitalizeWord
#### endsWith
#### startsWith
#### verifyKeys
#### verifyRequired
#### verifySchema
