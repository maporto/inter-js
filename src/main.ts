import { CobrancaService } from './services'
import { RequestCredential } from './interface'
import { url } from './config'

export default class InterApi {
  private credential: RequestCredential
  private baseUrl: string
  private _cobranca?: CobrancaService

  constructor(cert: string, key: string, production: boolean = false) {
    this.credential = { cert, key }
    this.baseUrl = InterApi.getBaseUrl(production)
  }

  public static init(cert: string, key: string, production: boolean = false): InterApi {
    return new InterApi(cert, key, production)
  }

  private static getBaseUrl(production: boolean): string {
    return production ? url.production : url.sandbox
  }

  private createSerivceIfNotExists<T>(service: T, serviceClass: new (...args: any[]) => T): T {
    if (!service) {
      service = new serviceClass(this.baseUrl, this.credential)
    }

    return service
  }

  public get cobranca(): CobrancaService {
    return this.createSerivceIfNotExists(this._cobranca, CobrancaService) as CobrancaService
  }
}
