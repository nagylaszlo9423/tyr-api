import { Observable } from 'rxjs';
import { AjaxRequest, AjaxResponse } from 'rxjs/ajax';
export declare const BASE_PATH: string;
export interface ConfigurationParameters {
    basePath?: string;
    middleware?: Middleware[];
    username?: string;
    password?: string;
    apiKey?: string | ((name: string) => string);
    accessToken?: string | ((name?: string, scopes?: string[]) => string);
}
export declare class Configuration {
    private configuration;
    constructor(configuration?: ConfigurationParameters);
    get basePath(): string;
    get middleware(): Middleware[];
    get username(): string | undefined;
    get password(): string | undefined;
    get apiKey(): ((name: string) => string) | undefined;
    get accessToken(): ((name: string, scopes?: string[]) => string) | undefined;
}
export declare class BaseAPI {
    protected configuration: Configuration;
    private middleware;
    constructor(configuration?: Configuration);
    withMiddleware: (middlewares: Middleware[]) => BaseAPI;
    withPreMiddleware: (preMiddlewares: ((request: RequestArgs) => RequestArgs)[]) => BaseAPI;
    withPostMiddleware: (postMiddlewares: ((response: ResponseArgs) => ResponseArgs)[]) => BaseAPI;
    protected request: <T>(requestOpts: RequestOpts) => Observable<T>;
    private createRequestArgs;
    private rxjsRequest;
    private clone;
}
export declare class RequiredError extends Error {
    name: 'RequiredError';
}
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
export declare type Json = any;
export declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export declare type HttpHeaders = {
    [key: string]: string;
};
export declare type HttpQuery = Partial<{
    [key: string]: string | number | null | boolean | Array<string | number | null | boolean>;
}>;
export declare type HttpBody = Json | FormData;
export interface RequestOpts {
    path: string;
    method: HttpMethod;
    headers?: HttpHeaders;
    query?: HttpQuery;
    body?: HttpBody;
    responseType?: 'json' | 'blob' | 'arraybuffer' | 'text';
}
export declare const encodeURI: (value: any) => string;
export declare const querystring: (params: Partial<{
    [key: string]: string | number | boolean | (string | number | boolean)[];
}>) => string;
export declare const throwIfRequired: (params: {
    [key: string]: any;
}, key: string, nickname: string) => void;
export declare const throwIfNullOrUndefined: (value: any, nickname?: string) => void;
export interface RequestArgs extends AjaxRequest {
}
export interface ResponseArgs extends AjaxResponse {
}
export interface Middleware {
    pre?(request: RequestArgs): RequestArgs;
    post?(response: ResponseArgs): ResponseArgs;
}
