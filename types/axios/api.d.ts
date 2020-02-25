import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance } from 'axios';
import { RequestArgs, BaseAPI } from './base';
export interface AuditDto {
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
export interface CreatedRespone {
    id: string;
}
export interface ErrorResponse {
    cause: string;
    message?: string;
}
export declare enum GroupJoinPolicy {
    INVITEONLY = "INVITE_ONLY",
    REQUEST = "REQUEST",
    PUBLIC = "PUBLIC"
}
export interface GroupPageResponse {
    page: number;
    size: number;
    items: Array<GroupResponse>;
}
export interface GroupPageResponseAllOf {
    items?: Array<GroupResponse>;
}
export interface GroupRequest {
    name?: string;
    description?: string;
    joinPolicy?: GroupJoinPolicy;
}
export interface GroupResponse {
    name: string;
    description: string;
    joinPolicy?: GroupJoinPolicy;
    owner: string;
}
export interface LineStringDto {
    type: string;
    coordinates: Array<Array<number>>;
}
export interface LoginRequest {
    email?: string;
    password?: string;
    clientId?: string;
    redirectUri?: string;
}
export interface LoginResponse {
    code: string;
    redirectUri: string;
}
export interface LogoutRequest {
    accessToken?: string;
}
export interface PageResponse {
    page: number;
    size: number;
    items: Array<object>;
}
export interface RegistrationRequest {
    email: string;
    password: string;
}
export interface RegistrationResponse {
    userId: string;
}
export interface ResourceItemResponse {
    id: string;
    name: string;
    url: string;
}
export interface RouteResponse {
    title: string;
    description: string;
    path: LineStringDto;
    audit: AuditDto;
    images: Array<ResourceItemResponse>;
}
export interface TokenResponse {
    accessToken: string;
    accessTokenExpiration: string;
    refreshToken: string;
    refreshTokenExpiration: string;
}
export interface UpdateRouteRequest {
    title?: string;
    description?: string;
    path?: LineStringDto;
}
export declare const DefaultApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    postOauthLogoutAll(logoutRequest?: LogoutRequest | undefined, options?: any): RequestArgs;
};
export declare const DefaultApiFp: (configuration?: Configuration | undefined) => {
    postOauthLogoutAll(logoutRequest?: LogoutRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
export declare const DefaultApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    postOauthLogoutAll(logoutRequest?: LogoutRequest | undefined, options?: any): AxiosPromise<void>;
};
export declare class DefaultApi extends BaseAPI {
    postOauthLogoutAll(logoutRequest?: LogoutRequest, options?: any): AxiosPromise<void>;
}
export declare const GroupApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    createGroupOp(groupRequest?: GroupRequest | undefined, options?: any): RequestArgs;
    findByIdOp(groupId: string, options?: any): RequestArgs;
    getGroupsPagedOp(page?: number | undefined, size?: number | undefined, options?: any): RequestArgs;
    groupGroupIdDelete(groupId: string, options?: any): RequestArgs;
    joinGroupOp(groupId: string, options?: any): RequestArgs;
    leaveGroupOp(groupId: string, options?: any): RequestArgs;
    updateGroupOp(groupId: string, groupRequest?: GroupRequest | undefined, options?: any): RequestArgs;
};
export declare const GroupApiFp: (configuration?: Configuration | undefined) => {
    createGroupOp(groupRequest?: GroupRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    findByIdOp(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GroupResponse>;
    getGroupsPagedOp(page?: number | undefined, size?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    joinGroupOp(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    leaveGroupOp(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    updateGroupOp(groupId: string, groupRequest?: GroupRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
export declare const GroupApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    createGroupOp(groupRequest?: GroupRequest | undefined, options?: any): AxiosPromise<string>;
    findByIdOp(groupId: string, options?: any): AxiosPromise<GroupResponse>;
    getGroupsPagedOp(page?: number | undefined, size?: number | undefined, options?: any): AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): AxiosPromise<void>;
    joinGroupOp(groupId: string, options?: any): AxiosPromise<void>;
    leaveGroupOp(groupId: string, options?: any): AxiosPromise<void>;
    updateGroupOp(groupId: string, groupRequest?: GroupRequest | undefined, options?: any): AxiosPromise<void>;
};
export declare class GroupApi extends BaseAPI {
    createGroupOp(groupRequest?: GroupRequest, options?: any): AxiosPromise<string>;
    findByIdOp(groupId: string, options?: any): AxiosPromise<GroupResponse>;
    getGroupsPagedOp(page?: number, size?: number, options?: any): AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): AxiosPromise<void>;
    joinGroupOp(groupId: string, options?: any): AxiosPromise<void>;
    leaveGroupOp(groupId: string, options?: any): AxiosPromise<void>;
    updateGroupOp(groupId: string, groupRequest?: GroupRequest, options?: any): AxiosPromise<void>;
}
export declare const OauthApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    authorizeOp(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): RequestArgs;
    loginOp(loginRequest?: LoginRequest | undefined, options?: any): RequestArgs;
    logoutOp(authorization?: string | undefined, options?: any): RequestArgs;
    registerOp(registrationRequest?: RegistrationRequest | undefined, options?: any): RequestArgs;
    tokenOp(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): RequestArgs;
};
export declare const OauthApiFp: (configuration?: Configuration | undefined) => {
    authorizeOp(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    loginOp(loginRequest?: LoginRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LoginResponse>;
    logoutOp(authorization?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LogoutRequest>;
    registerOp(registrationRequest?: RegistrationRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RegistrationResponse>;
    tokenOp(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<TokenResponse>;
};
export declare const OauthApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    authorizeOp(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): AxiosPromise<void>;
    loginOp(loginRequest?: LoginRequest | undefined, options?: any): AxiosPromise<LoginResponse>;
    logoutOp(authorization?: string | undefined, options?: any): AxiosPromise<LogoutRequest>;
    registerOp(registrationRequest?: RegistrationRequest | undefined, options?: any): AxiosPromise<RegistrationResponse>;
    tokenOp(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): AxiosPromise<TokenResponse>;
};
export declare class OauthApi extends BaseAPI {
    authorizeOp(responseType?: string, clientId?: string, redirectUri?: string, options?: any): AxiosPromise<void>;
    loginOp(loginRequest?: LoginRequest, options?: any): AxiosPromise<LoginResponse>;
    logoutOp(authorization?: string, options?: any): AxiosPromise<LogoutRequest>;
    registerOp(registrationRequest?: RegistrationRequest, options?: any): AxiosPromise<RegistrationResponse>;
    tokenOp(grantType?: string, code?: string, redirectUri?: string, clientId?: string, refreshToken?: string, options?: any): AxiosPromise<TokenResponse>;
}
export declare const RouteApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    createRouteOp(createRouteRequest?: CreateRouteRequest | undefined, options?: any): RequestArgs;
    deleteRouteById(id: string, options?: any): RequestArgs;
    getMostPopularRoutesOp(options?: any): RequestArgs;
    getRouteByIdOp(id: string, options?: any): RequestArgs;
    shareInGroupOp(routeId: string, groupId: string, options?: any): RequestArgs;
    updateRouteByIdOp(id: string, updateRouteRequest?: UpdateRouteRequest | undefined, options?: any): RequestArgs;
};
export declare const RouteApiFp: (configuration?: Configuration | undefined) => {
    createRouteOp(createRouteRequest?: CreateRouteRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    deleteRouteById(id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    getMostPopularRoutesOp(options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RouteResponse[]>;
    getRouteByIdOp(id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RouteResponse>;
    shareInGroupOp(routeId: string, groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    updateRouteByIdOp(id: string, updateRouteRequest?: UpdateRouteRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
export declare const RouteApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    createRouteOp(createRouteRequest?: CreateRouteRequest | undefined, options?: any): AxiosPromise<string>;
    deleteRouteById(id: string, options?: any): AxiosPromise<void>;
    getMostPopularRoutesOp(options?: any): AxiosPromise<RouteResponse[]>;
    getRouteByIdOp(id: string, options?: any): AxiosPromise<RouteResponse>;
    shareInGroupOp(routeId: string, groupId: string, options?: any): AxiosPromise<void>;
    updateRouteByIdOp(id: string, updateRouteRequest?: UpdateRouteRequest | undefined, options?: any): AxiosPromise<void>;
};
export declare class RouteApi extends BaseAPI {
    createRouteOp(createRouteRequest?: CreateRouteRequest, options?: any): AxiosPromise<string>;
    deleteRouteById(id: string, options?: any): AxiosPromise<void>;
    getMostPopularRoutesOp(options?: any): AxiosPromise<RouteResponse[]>;
    getRouteByIdOp(id: string, options?: any): AxiosPromise<RouteResponse>;
    shareInGroupOp(routeId: string, groupId: string, options?: any): AxiosPromise<void>;
    updateRouteByIdOp(id: string, updateRouteRequest?: UpdateRouteRequest, options?: any): AxiosPromise<void>;
}
