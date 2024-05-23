import InterApi from '../src/main'
import nock from 'nock'
import { url } from '../src/config'
import { CobrancaInterface } from '../src/models'
import { EnumTipoPessoa, EnumUF } from '../src/models/Pagador'
import { ValidationError } from 'class-validator'

beforeAll(() => {
  nock.disableNetConnect()
})

describe('Can init app', () => {
  it('should init app', async () => {
    const app = InterApi.init('cert', 'key')
    expect(app).toBeInstanceOf(InterApi)
  })

  it('should init app production', async () => {
    const app = InterApi.init('cert', 'key', true)
    expect(app).toBeInstanceOf(InterApi)
  })
})

describe('Can use Cobranca service', () => {
  const app = InterApi.init('cert', 'key')

  it('should create cobranca', async () => {
    nock(url.sandbox).post('/cobranca/v3/cobrancas').reply(200, {
      codigoSolicitacao: '123'
    })

    const cobranca: CobrancaInterface = {
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
        uf: EnumUF.SP,
        tipoPessoa: EnumTipoPessoa.FISICA
      }
    }

    const response = await app.cobranca.create(cobranca)

    expect(response).toEqual({ codigoSolicitacao: '123' })
  })

  it('should fail to create cobranca if nome is empty', async () => {
    const cobranca: CobrancaInterface = {
      seuNumero: '123',
      valorNominal: 2.5,
      dataVencimento: new Date(),
      numDiasAgenda: 0,
      pagador: {
        cpfCnpj: '12345678909',
        nome: '',
        ddd: '11',
        telefone: '123456789',
        cep: '12345678',
        endereco: 'Rua Tal',
        numero: '123',
        complemento: '',
        bairro: 'Bairro Tal',
        cidade: 'São Paulo',
        uf: EnumUF.SP,
        tipoPessoa: EnumTipoPessoa.FISICA
      }
    }

    expect(app.cobranca.create(cobranca)).rejects.toBeInstanceOf(Array<ValidationError>)
  })

  it('should create cobranca webhook', async () => {
    nock(url.sandbox).put('/cobranca/v3/cobrancas/webhook').reply(204, {})

    const webhook = {
      webhookUrl: 'https://example.com'
    }

    const response = await app.cobranca.updateWebhook(webhook)

    expect(response).toEqual({})
  })

  it('should check if has cobranca webhook', async () => {
    nock(url.sandbox).get('/cobranca/v3/cobrancas/webhook').reply(204, {})

    const response = await app.cobranca.hasWebhook()

    expect(response).toEqual(true)
  })

  it('should check if not has cobranca webhook', async () => {
    nock(url.sandbox).get('/cobranca/v3/cobrancas/webhook').reply(404, {})

    const response = await app.cobranca.hasWebhook()

    expect(response).toEqual(false)
  })

  it('should get cobranca webhook', async () => {
    nock(url.sandbox).get('/cobranca/v3/cobrancas/webhook').reply(200, {
      webhookUrl: 'https://example.com'
    })

    const response = await app.cobranca.getWebhook()

    expect(response).toEqual({ webhookUrl: 'https://example.com' })
  })

  it('should delete cobranca webhook', async () => {
    nock(url.sandbox).delete('/cobranca/v3/cobrancas/webhook').reply(204, {})

    const response = await app.cobranca.deleteWebhook()

    expect(response).toEqual({})
  })
})
