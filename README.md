
<p align="center"><h1 align="center">
  inter-sdk-js
</h1>

<p align="center">
  Inter SDK JS is a library to help you to interact with Inter API
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/inter-sdk-js"><img src="https://badgen.net/npm/v/inter-sdk-js" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/inter-sdk-js"><img src="https://badgen.net/npm/license/inter-sdk-js" alt="license"/></a>
  <a href="https://www.npmjs.org/package/inter-sdk-js"><img src="https://badgen.net/npm/dt/inter-sdk-js" alt="downloads"/></a>
  <a href="https://github.com/maporto/inter-sdk-js/actions?workflow=CI"><img src="https://github.com/maporto/inter-sdk-js/workflows/CI/badge.svg" alt="build"/></a>
  <a href="https://codecov.io/gh/maporto/inter-sdk-js"><img src="https://codecov.io/gh/maporto/inter-sdk-js/graph/badge.svg?token=VUCHDC63EJ" alt="codecov"/></a>
  <a href="https://snyk.io/test/github/maporto/inter-sdk-js"><img src="https://snyk.io/test/github/maporto/inter-sdk-js/badge.svg" alt="Known Vulnerabilities"/></a>
  <a href="./SECURITY.md"><img src="https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg" alt="Responsible Disclosure Policy" /></a>
</p>

# About

Inter SDK JS is a library to help you to interact with Inter API

# Install

```bash
npm install --save inter-sdk-js
```

# Usage

```js
const sdk = require('inter-sdk-js')
const cert = 'your-cert';
const key = 'your-key';
const production = false;

const InterApi = sdk.init(cert, key, production)
```

# Example

# API

## create Cobrança
```js
  const cobranca = {
    seuNumero: '123',
    valorNominal: 2.5,
    dataVencimento: new Date(),
    numDiasAgenda: 0,
    pagador: {
      cpfCnpj: '12345678909',
      nome: 'Fulano de Tal',
      ddd: '11',
      telefone: '123456789',
      cep: '12345678',
      endereco: 'Rua Tal',
      numero: '123',
      complemento: '',
      bairro: 'Bairro Tal',
      cidade: 'São Paulo',
      uf: 'SP',
      tipoPessoa: 'FISICA'
    }
  }

  const response = await InterApi.cobranca.create(cobranca);

  console.log(response)

  // Output { codigoSolicitacao: '123' }
```

## update/create webhook
```js
  const webhook = {
    webhookUrl: 'https://example.com'
  }

  const response = await InterApi.cobranca.updateWebhook(webhook);

  console.log(response)
  // Output { webhookUrl: 'https://example.com'}
```

# Contributing

Please consult [CONTRIBUTING](./CONTRIBUTING.md) for guidelines on contributing to this project.

# Author

**inter-sdk-js** © [Marcos Porto](https://github.com/maporto), Released under the [Apache-2.0](./LICENSE) License.
