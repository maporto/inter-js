import { TokenInterface } from '../models'
import BaseService, { RequestContentType } from './BaseService'

export interface TokenResponse {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}

export default class OAuth2Service extends BaseService {
  private paths = {
    token: '/oauth/v2/token'
  }

  public async create(): Promise<TokenResponse> {
    const tokenBody = {
      grant_type: 'client_credentials',
      client_id: this.credentials.client_id,
      client_secret: this.credentials.client_secret,
      scope: this.credentials.scopes.join(' ')
    } as TokenInterface

    return this.post(this.paths.token, tokenBody, RequestContentType.FORM).then(({ data }) => data)
  }
}
