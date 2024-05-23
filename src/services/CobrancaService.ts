import { Cobranca, CobrancaInterface, CobrancaWebhook, CobrancaWebhookInterface } from '../models'
import BaseService from './BaseService'

export interface CreateCobrancaResponse {
  codigoSolicitacao: string
}

export default class CobrancaService extends BaseService {
  private paths = {
    create: '/cobranca/v3/cobrancas',
    updateWebhook: '/cobranca/v3/cobrancas/webhook',
    getWebhook: '/cobranca/v3/cobrancas/webhook',
    deleteWebhook: '/cobranca/v3/cobrancas/webhook'
  }

  public async create(cobranca: CobrancaInterface): Promise<CreateCobrancaResponse> {
    const cobrancaModel = Cobranca.create(cobranca)

    return this.post(this.paths.create, cobrancaModel).then(({ data }) => data)
  }

  public async updateWebhook(webhook: CobrancaWebhookInterface): Promise<CobrancaWebhookInterface> {
    const cobrancaWebhookModel = CobrancaWebhook.create(webhook)

    return this.put(this.paths.updateWebhook, cobrancaWebhookModel).then(({ data }) => data)
  }

  public async hasWebhook(): Promise<boolean> {
    return this.get(this.paths.getWebhook)
      .then(() => true)
      .catch(() => false)
  }

  public async getWebhook(): Promise<CobrancaWebhookInterface> {
    return this.get(this.paths.getWebhook).then(({ data }) => data)
  }

  public async deleteWebhook(): Promise<object> {
    return this.delete(this.paths.deleteWebhook).then(({ data }) => data)
  }
}
