export type Body = Record<string, any>;
export type HTTPMethod = "GET" | "POST" | "DELETE" | "PUT";
export type QueryParams = Record<string, string | number> | URLSearchParams;
export type Headers = Record<string, string>;
export type BaseRequestConfig = Record<string, string>;

export interface Request {
    url: string;
    headers?: Headers;
    params?: QueryParams;
    body?: Body;
}

export type Error = {
    msg: string;
    code: string;
};

export interface Response<T> {
    status: number;
    data?: T;
    error?: Error;
}
