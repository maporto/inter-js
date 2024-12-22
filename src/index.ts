import { CobrancaService } from './services'
import { RequestCredential } from './interface'
import { url } from './config'
import { OAuth2Service } from './services'

export default class InterApi {
  private credentials: RequestCredential
  private baseUrl: string
  private _cobranca?: CobrancaService
  private _oauth?: OAuth2Service

  constructor(credentials: RequestCredential, production: boolean = false) {
    this.credentials = credentials
    this.baseUrl = InterApi.getBaseUrl(production)
  }

  public static async init(
    credentials: RequestCredential,
    production: boolean = false
  ): Promise<InterApi> {
    const interApi = new InterApi(credentials, production)
    await interApi.generateToken()

    return interApi
  }

  private async generateToken(): Promise<void> {
    const { access_token } = await this.oauth.create()
    this.credentials.access_token = access_token
  }

  private static getBaseUrl(production: boolean): string {
    return production ? url.production : url.sandbox
  }

  private createSerivceIfNotExists<T>(service: T, serviceClass: new (...args: any[]) => T): T {
    if (!service) {
      service = new serviceClass(this.baseUrl, this.credentials)
    }

    return service
  }

  public get cobranca(): CobrancaService {
    return this.createSerivceIfNotExists(this._cobranca, CobrancaService) as CobrancaService
  }

  public get oauth(): OAuth2Service {
    return this.createSerivceIfNotExists(this._oauth, OAuth2Service) as OAuth2Service
  }
}
