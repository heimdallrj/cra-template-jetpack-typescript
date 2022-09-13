import axios, { AxiosResponse } from 'axios';

const requestInterceptor = (req: any) => {
  // @todo: modify request,
  // and set accessToken and other headers if required.
  // req.headers.Authorization = `Bearer accessToken`;
  return req;
};

const responseInterceptor = (res: AxiosResponse) => {
  return res.data;
};

type InitType = {
  apiBaseUrl: string;
};
export const init = ({ apiBaseUrl }: InitType) => {
  axios.defaults.baseURL = apiBaseUrl;
  axios.interceptors.request.use(requestInterceptor);
  axios.interceptors.response.use(responseInterceptor);
};

export const setAuthHeader = (token: string) => {
  (axios.defaults.headers as any).Authorization = `Bearer ${token}`;
};

export const resetAuthHeader = () => {
  (axios.defaults.headers as any).Authorization = undefined;
};

export const create = (args: any) => axios.create(args);

export const all = (iterable: any) =>
  axios.all(iterable).then(axios.spread((...args) => args));

export const request = (options: any) => axios(options);

export const get = (url: string, options = {}) => axios.get(url, options);

export const post = (url: string, data: any, options: any = null) =>
  axios.post(url, data, options);

export const put = (url: string, data: any, options: any = null) =>
  axios.put(url, data, options);

export const patch = (url: string, data: any, options: any = null) =>
  axios.patch(url, data, options);

export const del = (url: string) => axios.delete(url);
