import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const clientMap = new Map<string, AxiosInstance>();

export const fetchClient = (baseURL?: string) => {
    const mapKey = baseURL || 'undefined';

    let axiosClient = clientMap.get(mapKey);

    if (!axiosClient) {
        axiosClient = axios.create({
            timeout: 30000,
            withCredentials: true,
            baseURL,
            params: {
                format: 'json',
            },
        });

        clientMap.set(mapKey, axiosClient);
    }

    return axiosClient;
}

export const { isAxiosError } = axios;
export type AxiosHttpError<T> = AxiosError<T>;
export type AxiosHttpResponse = AxiosResponse;