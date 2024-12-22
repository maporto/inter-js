import InterApi from '../src/index'
import sampleCredentials from './samples/credentials'

describe('Can init app', () => {
  it('should init app', async () => {
    const app = await InterApi.init(sampleCredentials)
    expect(app).toBeInstanceOf(InterApi)
  })

  it('should init app production', async () => {
    const app = await InterApi.init(sampleCredentials, true)
    expect(app).toBeInstanceOf(InterApi)
  })
})
