/* eslint-disable indent */
import type { HTTPMethod, Request, Response } from "@/types";
import axios, {
    type AxiosInstance,
    type AxiosError,
    type AxiosResponse,
} from "axios";
import { baseRequestConfig } from "./base";

console.log(process.env.NEXT_PUBLIC_API);
const requestAPI: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: baseRequestConfig.headers,
});

function processSuccessResponse<T>(axiosResponse: AxiosResponse): Response<T> {
    return {
        status: axiosResponse.status,
        data: axiosResponse.data,
    };
}

function processErrorResponse<T>(axiosError: AxiosError): Response<T> {
    return {
        status: axiosError.status ?? axiosError.response?.status ?? 500,
        data: undefined as T,
        error: {
            msg: axiosError.message,
            code: axiosError.code ?? "",
        },
    };
}

function getRequest<T>(request: Omit<Request, "body">): Promise<Response<T>> {
    const response: Promise<Response<T>> = requestAPI
        .get(request.url, { params: request.params })
        .then((value: AxiosResponse) => processSuccessResponse<T>(value))
        .catch((value: AxiosError) => processErrorResponse<T>(value));

    return response;
}

function postRequest<T>(request: Request): Promise<Response<T>> {
    const response: Promise<Response<T>> = requestAPI
        .post(request.url, request.body, { params: request.params })
        .then((value: AxiosResponse) => processSuccessResponse<T>(value))
        .catch((value: AxiosError) => processErrorResponse<T>(value));

    return response;
}

function putRequest<T>(request: Request): Promise<Response<T>> {
    const response: Promise<Response<T>> = requestAPI
        .put(request.url, request.body, { params: request.params })
        .then((value: AxiosResponse) => processSuccessResponse<T>(value))
        .catch((value: AxiosError) => processErrorResponse<T>(value));

    return response;
}

function deleteRequest<T>(request: Request): Promise<Response<T>> {
    const response: Promise<Response<T>> = requestAPI
        .delete(request.url, { params: request.params })
        .then((value: AxiosResponse) => processSuccessResponse<T>(value))
        .catch((value: AxiosError) => processErrorResponse<T>(value));

    return response;
}

export async function request<T>(
    method: HTTPMethod,
    request: Request
): Promise<Response<T>> {
    switch (method) {
        case "GET":
            return await getRequest(request);
        case "POST":
            return await postRequest(request);
        case "PUT":
            return await putRequest(request);
        case "DELETE":
            return await deleteRequest(request);
        default:
            console.log("default");
            return { status: 500, data: undefined as T };
    }
}
