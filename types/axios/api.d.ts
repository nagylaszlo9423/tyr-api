import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance } from 'axios';
import { RequestArgs, BaseAPI } from './base';
export interface Audit {
    createdBy?: string;
    createdAt?: string;
    modifiedBy?: string;
    modifiedAt?: string;
}
export interface CreateRouteRequest {
    title?: string;
    description?: string;
    path?: LineStringDto;
}
export interface ErrorResponse {
    cause: string;
    message?: string;
}
export interface LineStringDto {
    type?: string;
    coordinates?: Array<Array<number>>;
}
export interface LoginRequest {
    email?: string;
    password?: string;
    clientId?: string;
    redirectUri?: string;
}
export interface LoginResponse {
    code?: string;
    redirectUri?: string;
}
export interface RegistrationRequest {
    email: string;
    password: string;
}
export interface RegistrationResponse {
    userId?: string;
}
export interface RouteResponse {
    title?: string;
    description?: string;
    path?: LineStringDto;
    audit?: Audit;
}
export interface TokenResponse {
    accessToken?: string;
    accessTokenExpiration?: string;
    refreshToken?: string;
    refreshTokenExpiration?: string;
}
export interface UpdateRouteRequest {
    title?: string;
    description?: string;
    path?: LineStringDto;
}
export declare const DefaultApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    shareInGroup(routeId: object, groupId: object, options?: any): RequestArgs;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): RequestArgs;
};
export declare const DefaultApiFp: (configuration?: Configuration | undefined) => {
    shareInGroup(routeId: object, groupId: object, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<TokenResponse>;
};
export declare const DefaultApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    shareInGroup(routeId: object, groupId: object, options?: any): AxiosPromise<void>;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): AxiosPromise<TokenResponse>;
};
export declare class DefaultApi extends BaseAPI {
    shareInGroup(routeId: object, groupId: object, options?: any): AxiosPromise<void>;
    token(grantType?: string, code?: string, redirectUri?: string, clientId?: string, refreshToken?: string, options?: any): AxiosPromise<TokenResponse>;
}
export declare const OauthApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): RequestArgs;
    login(loginRequest?: LoginRequest | undefined, options?: any): RequestArgs;
    logout(authorization?: string | undefined, options?: any): RequestArgs;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): RequestArgs;
};
export declare const OauthApiFp: (configuration?: Configuration | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    login(loginRequest?: LoginRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LoginResponse>;
    logout(authorization?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RegistrationResponse>;
};
export declare const OauthApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): AxiosPromise<void>;
    login(loginRequest?: LoginRequest | undefined, options?: any): AxiosPromise<LoginResponse>;
    logout(authorization?: string | undefined, options?: any): AxiosPromise<void>;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): AxiosPromise<RegistrationResponse>;
};
export declare class OauthApi extends BaseAPI {
    authorize(responseType?: string, clientId?: string, redirectUri?: string, options?: any): AxiosPromise<void>;
    login(loginRequest?: LoginRequest, options?: any): AxiosPromise<LoginResponse>;
    logout(authorization?: string, options?: any): AxiosPromise<void>;
    register(registrationRequest?: RegistrationRequest, options?: any): AxiosPromise<RegistrationResponse>;
}
export declare const RouteApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    createRoute(createRouteRequest?: CreateRouteRequest | undefined, options?: any): RequestArgs;
    deleteRouteById(id: string, options?: any): RequestArgs;
    getRouteById(id: string, options?: any): RequestArgs;
    updateRouteById(id: string, updateRouteRequest?: UpdateRouteRequest | undefined, options?: any): RequestArgs;
};
export declare const RouteApiFp: (configuration?: Configuration | undefined) => {
    createRoute(createRouteRequest?: CreateRouteRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    deleteRouteById(id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    getRouteById(id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RouteResponse>;
    updateRouteById(id: string, updateRouteRequest?: UpdateRouteRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
export declare const RouteApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    createRoute(createRouteRequest?: CreateRouteRequest | undefined, options?: any): AxiosPromise<string>;
    deleteRouteById(id: string, options?: any): AxiosPromise<void>;
    getRouteById(id: string, options?: any): AxiosPromise<RouteResponse>;
    updateRouteById(id: string, updateRouteRequest?: UpdateRouteRequest | undefined, options?: any): AxiosPromise<void>;
};
export declare class RouteApi extends BaseAPI {
    createRoute(createRouteRequest?: CreateRouteRequest, options?: any): AxiosPromise<string>;
    deleteRouteById(id: string, options?: any): AxiosPromise<void>;
    getRouteById(id: string, options?: any): AxiosPromise<RouteResponse>;
    updateRouteById(id: string, updateRouteRequest?: UpdateRouteRequest, options?: any): AxiosPromise<void>;
}
