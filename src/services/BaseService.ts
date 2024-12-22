/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { RequestCredential } from '../interface'
import Base from '../models/Base'

export default class BaseService {
  protected baseUrl: string
  protected credentials: RequestCredential

  constructor(baseURL: string, credentials: RequestCredential) {
    this.baseUrl = baseURL
    this.credentials = credentials
  }

  public async post(path: string, data: Base | any): Promise<AxiosResponse> {
    return axios(this.mountRequestConfig(path, 'POST', data))
  }

  public async put(path: string, data: Base | any): Promise<AxiosResponse> {
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
    data?: Base
  ): AxiosRequestConfig {
    const requestConfig: AxiosRequestConfig = {
      url: `${this.baseUrl}${path}`,
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (data) {
      requestConfig.data = JSON.stringify(data)
    }

    return requestConfig
  }
}
