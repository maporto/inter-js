import { CredentialScope } from './CredentialScope'

export interface Certificate {
  certificate: string
  key: string
}

export default interface RequestCredential {
  client_id: string
  client_secret: string
  certificate: Certificate
  scopes: Array<CredentialScope>
  access_token?: string
}
