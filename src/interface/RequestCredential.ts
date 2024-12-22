import { CredentialScope } from './CredentialScope'

export default interface RequestCredential {
  client_id: string
  client_secret: string
  scopes: Array<CredentialScope>
  acces_token?: string
}
