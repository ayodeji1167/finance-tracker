import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { axios } from '.';
import { getToken } from '@/utils/persistToken';
import storage from '@/utils/storage';

export function rejectErrorInterceptor(error: AxiosError) {
  return Promise.reject(error);
}

//Append bearer token to headers
export function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = getToken().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';

  return config;
}

export async function refreshTokenInterceptor(error: any) {
  const prevRequest = { ...error?.config };
  //dummy refresh token
  const refreshToken = '24evin09gbnw';

  // Check if the response is unauthorized (401 or 520) and the request hasn't been retried yet
  if ([401, 520].includes(error?.response?.status) && !prevRequest?.sent) {
    prevRequest.sent = true;

    try {
      //  refresh token
      // const response = await refreshToken();

      // setAccessToken(response?.data?.accessToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;
      return axios(prevRequest);
    } catch (err: any) {
      storage.reset();
      window.location.assign(window.location.origin);

      return Promise.reject(err);
    }
  }

  return Promise.reject(error);
}
