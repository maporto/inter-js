import nock from 'nock'
import { url } from './src/config'

nock(url.sandbox)
  .post('/oauth/v2/token')
  .reply(200, {
    access_token: 'abcde-12345'
  })
  .persist()

nock(url.production)
  .post('/oauth/v2/token')
  .reply(200, {
    access_token: 'abcde-12345'
  })
  .persist()

nock.disableNetConnect()
