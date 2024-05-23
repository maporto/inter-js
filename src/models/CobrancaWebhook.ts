import { IsUrl } from 'class-validator'
import Base from './Base'

export interface CobrancaWebhookInterface {
  webhookUrl: string
}

export default class CobrancaWebhook extends Base {
  /**
   * URL de configuração do webhook. Deve iniciar obrigatoriamente com https://
   *
   * @type {string}
   * @memberof CobrancaWebhook
   * @example 'https://webhook.com.br'
   * @required
   *
   */
  @IsUrl({ require_protocol: true, require_tld: true, protocols: ['https'] })
  public webhookUrl: string

  constructor(cobrancaWebhook: CobrancaWebhookInterface) {
    super()
    this.webhookUrl = cobrancaWebhook.webhookUrl

    return this
  }
}
