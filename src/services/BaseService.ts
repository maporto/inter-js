import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { RequestCredential } from '../interface'
import { Agent } from 'https'
import Base from '../models/Base'

export default class BaseService {
  protected baseUrl: string
  protected credential: RequestCredential

  constructor(baseURL: string, credential: RequestCredential) {
    this.baseUrl = baseURL
    this.credential = credential
  }

  public async post(path: string, data: Base): Promise<AxiosResponse> {
    return axios(this.mountRequestConfig(path, 'POST', data))
  }

  public async put(path: string, data: Base): Promise<AxiosResponse> {
    return axios(this.mountRequestConfig(path, 'PUT', data))
  }

  public async get(path: string): Promise<AxiosResponse> {
    return axios(this.mountRequestConfig(path))
  }

  public async delete(path: string): Promise<AxiosResponse> {
    return axios(this.mountRequestConfig(path, 'DELETE'))
  }

  private mountRequestConfig(path: string, method: Method = 'GET', data?: Base): AxiosRequestConfig {
    const requestConfig: AxiosRequestConfig = {
      url: `${this.baseUrl}${path}`,
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      httpsAgent: new Agent({
        cert: this.credential.cert,
        key: this.credential.key
      })
    }

    if (data) {
      requestConfig.data = JSON.stringify(data)
    }

    return requestConfig
  }
}
