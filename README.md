
<p align="center"><h1 align="center">
  inter-js
</h1>

<p align="center">
  Inter JS is a library to help you to interact with Inter API
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/inter-js"><img src="https://badgen.net/npm/v/inter-js" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/inter-js"><img src="https://badgen.net/npm/license/inter-js" alt="license"/></a>
  <a href="https://www.npmjs.org/package/inter-js"><img src="https://badgen.net/npm/dt/inter-js" alt="downloads"/></a>
  <a href="https://github.com/maporto/inter-js/actions?workflow=CI"><img src="https://github.com/maporto/inter-js/workflows/CI/badge.svg" alt="build"/></a>
  <a href="https://codecov.io/gh/maporto/inter-js"><img src="https://codecov.io/gh/maporto/inter-js/graph/badge.svg?token=VUCHDC63EJ" alt="codecov"/></a>
  <a href="https://snyk.io/test/github/maporto/inter-js"><img src="https://snyk.io/test/github/maporto/inter-js/badge.svg" alt="Known Vulnerabilities"/></a>
  <a href="./SECURITY.md"><img src="https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg" alt="Responsible Disclosure Policy" /></a>
</p>

# About

Inter JS is a library to help you to interact with Inter API

# Install

```bash
npm install --save inter-js
```

# Usage

```js
const sdk = require('inter-js')

const credentials = {
  client_id: 'client_id',
  client_secret: 'client_secret',
  scopes: [CredentialScope.COB_READ],
  certificate: {
    certificate: fs.readFileSync(path.resolve(__dirname, 'certificate.crt'), 'utf8'),
    key: fs.readFileSync(path.resolve(__dirname, 'certificate.key'), 'utf8')
  }
}
const production = false;

const InterApi = await sdk.init(credentials, production)
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
      nome: 'Nome da Pessoa',
      ddd: '11',
      telefone: '123456789',
      cep: '12345678',
      endereco: 'Rua 1',
      numero: '123',
      complemento: '',
      bairro: 'Bairro',
      cidade: 'São Paulo',
      uf: 'SP',
      tipoPessoa: 'FISICA'
    }
  }

  const response = await InterApi.cobranca.create(cobranca);

  console.log(response)

  // Output { codigoSolicitacao: '123' }
```


## get Cobrança
```js
  const codigoSolicitacao = '123'; 

  const response = await InterApi.cobranca.getCobranca(codigoSolicitacao);
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

**inter-js** © [Marcos Porto](https://github.com/maporto), Released under the [Apache-2.0](./LICENSE) License.
