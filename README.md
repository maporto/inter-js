
<p align="center"><h1 align="center">
  inter-sdk-js
</h1>

<p align="center">
  Functions to resolve comomn problens with ObjectId
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/inter-sdk-js"><img src="https://badgen.net/npm/v/inter-sdk-js" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/inter-sdk-js"><img src="https://badgen.net/npm/license/inter-sdk-js" alt="license"/></a>
  <a href="https://www.npmjs.org/package/inter-sdk-js"><img src="https://badgen.net/npm/dt/inter-sdk-js" alt="downloads"/></a>
  <a href="https://github.com/maporto/inter-sdk-js/actions?workflow=CI"><img src="https://github.com/maporto/inter-sdk-js/workflows/CI/badge.svg" alt="build"/></a>
  <a href="https://codecov.io/gh/maporto/inter-sdk-js"><img src="https://codecov.io/gh/maporto/inter-sdk-js/graph/badge.svg?token=DOS32MRBW3" alt="codecov"/></a>
  <a href="https://snyk.io/test/github/maporto/inter-sdk-js"><img src="https://snyk.io/test/github/maporto/inter-sdk-js/badge.svg" alt="Known Vulnerabilities"/></a>
  <a href="./SECURITY.md"><img src="https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg" alt="Responsible Disclosure Policy" /></a>
</p>

# About

Functions to resolve comomn problens with ObjectId

# Install

```bash
npm install --save inter-sdk-js
```

# Usage

```js
const { isObjectId, extractIdString, extractIdObjectId } = require('inter-sdk-js')
```

# Example

# API

## isObjectId
```js
const { isObjectId } = require('inter-sdk-js')

const id = '5e4e2f3b8a4f4c001e0e4c2d'

console.log(isObjectId(id))

// Output: true
```

## extractIdString
```js
const { extractIdString } = require('inter-sdk-js')

const idString = '5e4e2f3b8a4f4c001e0e4c2d'
const idInDocument = {
  _id: '5e4e2f3b8a4f4c001e0e4c2d'
}

console.log(extractIdString(id))

// Output: 5e4e2f3b8a4f4c001e0e4c2d

console.log(extractIdString(idInDocument))

// Output: 5e4e2f3b8a4f4c001e0e4c2d
```

## extractIdObjectId
```js
const { extractIdObjectId } = require('inter-sdk-js')

const idString = '5e4e2f3b8a4f4c001e0e4c2d'
const idInDocument = {
  _id: '5e4e2f3b8a4f4c001e0e4c2d'
}

console.log(extractIdObjectId(id))

// Output: ObjectId('5e4e2f3b8a4f4c001e0e4c2d')

console.log(extractIdObjectId(idInDocument))

// Output: ObjectId('5e4e2f3b8a4f4c001e0e4c2d')
```

# Contributing

Please consult [CONTRIBUTING](./CONTRIBUTING.md) for guidelines on contributing to this project.

# Author

**inter-sdk-js** © [Marcos Porto](https://github.com/maporto), Released under the [Apache-2.0](./LICENSE) License.
