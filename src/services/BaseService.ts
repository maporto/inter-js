import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { RequestCredential } from '../interface'
import { Agent } from 'https'
import Base from '../models/Base'

export enum RequestContentType {
  JSON = 'application/json',
  FORM = 'application/x-www-form-urlencoded'
}

export default class BaseService {
  protected baseUrl: string
  protected credentials: RequestCredential

  constructor(baseURL: string, credentials: RequestCredential) {
    this.baseUrl = baseURL
    this.credentials = credentials
  }

  public async post(
    path: string,
    data: Base | object,
    type: RequestContentType = RequestContentType.JSON
  ): Promise<AxiosResponse> {
    return axios(this.mountRequestConfig(path, 'POST', data, type))
  }

  public async put(path: string, data: Base | object): Promise<AxiosResponse> {
    return axios(this.mountRequestConfig(path, 'PUT', data))
  }

  public async get(path: string): Promise<AxiosResponse> {
    return axios(this.mountRequestConfig(path))
  }

  public async delete(path: string): Promise<AxiosResponse> {
    return axios(this.mountRequestConfig(path, 'DELETE'))
  }

  private mountRequestConfig(
    path: string,
    method: Method = 'GET',
    data?: Base | object,
    type: RequestContentType = RequestContentType.JSON
  ): AxiosRequestConfig {
    const requestConfig: AxiosRequestConfig = {
      url: `${this.baseUrl}${path}`,
      method
    }

    requestConfig.headers = {
      'Content-Type': type
    }

    if (this.credentials.access_token) {
      requestConfig.headers['Authorization'] = `Bearer ${this.credentials.access_token}`
    }

    const httpsAgent = new Agent({
      cert: this.credentials.certificate.certificate,
      key: this.credentials.certificate.key,
      rejectUnauthorized: false
    })

    requestConfig.httpsAgent = httpsAgent

    if (!data) {
      return requestConfig
    }

    if (type === RequestContentType.JSON) {
      requestConfig.data = JSON.stringify(data)
    }

    if (type === RequestContentType.FORM) {
      requestConfig.data = new URLSearchParams()

      Object.entries(data).forEach(([key, value]) => {
        requestConfig.data.append(key, value)
      })
    }

    return requestConfig
  }
}
