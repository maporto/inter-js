import { CredentialScope } from '../../src/interface/CredentialScope'
import fs from 'fs'
import path from 'path'

const credentials = {
  client_id: 'client_id',
  client_secret: 'client_secret',
  scopes: [CredentialScope.COB_READ],
  certificate: {
    certificate: fs.readFileSync(path.resolve(__dirname, 'certificate.crt'), 'utf8'),
    key: fs.readFileSync(path.resolve(__dirname, 'certificate.key'), 'utf8')
  }
}

export default credentials
