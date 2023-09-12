import { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
declare const uniAdapter: (config: InternalAxiosRequestConfig) => Promise<AxiosResponse<any>>;
export default uniAdapter;
