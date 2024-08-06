import axios, { AxiosRequestConfig } from 'axios';

export class Api {
  static get = async (
    url: string,
    options?: AxiosRequestConfig<any> | undefined,
  ) => {
    return await axios.get(url, { ...options });
  };
  static post = async (
    url: string,
    body?: any,
    options?: AxiosRequestConfig<any> | undefined,
  ) => {
    return await axios.post(url, body, options);
  };
  static put = async (
    url: string,
    body?: any,
    options?: AxiosRequestConfig<any> | undefined,
  ) => {
    return await axios.put(url, body, options);
  };
  static patch = async (
    url: string,
    body?: any,
    options?: AxiosRequestConfig<any> | undefined,
  ) => {
    return await axios.patch(url, body, options);
  };
  static delete = async (
    url: string,
    params?: any,
    options?: AxiosRequestConfig,
  ) => {
    return await axios.delete(url, { params, ...options });
  };
}
