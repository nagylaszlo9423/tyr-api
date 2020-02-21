import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance } from 'axios';
import { RequestArgs, BaseAPI } from './base';
export interface AuditDto {
    createdBy?: string;
    createdAt?: string;
    modifiedBy?: string;
    modifiedAt?: string;
}
export interface CreateGroupRequest {
    name?: string;
    description?: string;
    joinPolicy?: CreateGroupRequestJoinPolicyEnum;
}
export declare enum CreateGroupRequestJoinPolicyEnum {
    INVITEONLY = "INVITE_ONLY",
    REQUEST = "REQUEST",
    PUBLIC = "PUBLIC"
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
export interface GroupPageResponse {
    page: number;
    size: number;
    items: Array<GroupResponse>;
}
export interface GroupPageResponseAllOf {
    items?: Array<GroupResponse>;
}
export interface GroupResponse {
    name: string;
    description: string;
    joinPolicy?: GroupResponseJoinPolicyEnum;
    owner: string;
}
export declare enum GroupResponseJoinPolicyEnum {
    INVITEONLY = "INVITE_ONLY",
    REQUEST = "REQUEST",
    PUBLIC = "PUBLIC"
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
export interface UpdateGroupRequest {
    name?: string;
    description?: string;
    joinPolicy?: UpdateGroupRequestJoinPolicyEnum;
}
export declare enum UpdateGroupRequestJoinPolicyEnum {
    INVITEONLY = "INVITE_ONLY",
    REQUEST = "REQUEST",
    PUBLIC = "PUBLIC"
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
    createGroup(createGroupRequest?: CreateGroupRequest | undefined, options?: any): RequestArgs;
    findById(groupId: string, options?: any): RequestArgs;
    getGroupsPaged(page?: number | undefined, size?: number | undefined, options?: any): RequestArgs;
    groupGroupIdDelete(groupId: string, options?: any): RequestArgs;
    joinGroup(groupId: string, options?: any): RequestArgs;
    leaveGroup(groupId: string, options?: any): RequestArgs;
    updateGroup(groupId: string, updateGroupRequest?: UpdateGroupRequest | undefined, options?: any): RequestArgs;
};
export declare const GroupApiFp: (configuration?: Configuration | undefined) => {
    createGroup(createGroupRequest?: CreateGroupRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    findById(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GroupResponse>;
    getGroupsPaged(page?: number | undefined, size?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    joinGroup(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    leaveGroup(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    updateGroup(groupId: string, updateGroupRequest?: UpdateGroupRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
export declare const GroupApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    createGroup(createGroupRequest?: CreateGroupRequest | undefined, options?: any): AxiosPromise<string>;
    findById(groupId: string, options?: any): AxiosPromise<GroupResponse>;
    getGroupsPaged(page?: number | undefined, size?: number | undefined, options?: any): AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): AxiosPromise<void>;
    joinGroup(groupId: string, options?: any): AxiosPromise<void>;
    leaveGroup(groupId: string, options?: any): AxiosPromise<void>;
    updateGroup(groupId: string, updateGroupRequest?: UpdateGroupRequest | undefined, options?: any): AxiosPromise<void>;
};
export declare class GroupApi extends BaseAPI {
    createGroup(createGroupRequest?: CreateGroupRequest, options?: any): AxiosPromise<string>;
    findById(groupId: string, options?: any): AxiosPromise<GroupResponse>;
    getGroupsPaged(page?: number, size?: number, options?: any): AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): AxiosPromise<void>;
    joinGroup(groupId: string, options?: any): AxiosPromise<void>;
    leaveGroup(groupId: string, options?: any): AxiosPromise<void>;
    updateGroup(groupId: string, updateGroupRequest?: UpdateGroupRequest, options?: any): AxiosPromise<void>;
}
export declare const OauthApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): RequestArgs;
    login(loginRequest?: LoginRequest | undefined, options?: any): RequestArgs;
    logout(authorization?: string | undefined, options?: any): RequestArgs;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): RequestArgs;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): RequestArgs;
};
export declare const OauthApiFp: (configuration?: Configuration | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    login(loginRequest?: LoginRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LoginResponse>;
    logout(authorization?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LogoutRequest>;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RegistrationResponse>;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<TokenResponse>;
};
export declare const OauthApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): AxiosPromise<void>;
    login(loginRequest?: LoginRequest | undefined, options?: any): AxiosPromise<LoginResponse>;
    logout(authorization?: string | undefined, options?: any): AxiosPromise<LogoutRequest>;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): AxiosPromise<RegistrationResponse>;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): AxiosPromise<TokenResponse>;
};
export declare class OauthApi extends BaseAPI {
    authorize(responseType?: string, clientId?: string, redirectUri?: string, options?: any): AxiosPromise<void>;
    login(loginRequest?: LoginRequest, options?: any): AxiosPromise<LoginResponse>;
    logout(authorization?: string, options?: any): AxiosPromise<LogoutRequest>;
    register(registrationRequest?: RegistrationRequest, options?: any): AxiosPromise<RegistrationResponse>;
    token(grantType?: string, code?: string, redirectUri?: string, clientId?: string, refreshToken?: string, options?: any): AxiosPromise<TokenResponse>;
}
export declare const RouteApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    createRoute(createRouteRequest?: CreateRouteRequest | undefined, options?: any): RequestArgs;
    deleteRouteById(id: string, options?: any): RequestArgs;
    getMostPopularRoutes(options?: any): RequestArgs;
    getRouteById(id: string, options?: any): RequestArgs;
    shareInGroup(routeId: string, groupId: string, options?: any): RequestArgs;
    updateRouteById(id: string, updateRouteRequest?: UpdateRouteRequest | undefined, options?: any): RequestArgs;
};
export declare const RouteApiFp: (configuration?: Configuration | undefined) => {
    createRoute(createRouteRequest?: CreateRouteRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    deleteRouteById(id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    getMostPopularRoutes(options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RouteResponse[]>;
    getRouteById(id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RouteResponse>;
    shareInGroup(routeId: string, groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    updateRouteById(id: string, updateRouteRequest?: UpdateRouteRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
export declare const RouteApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    createRoute(createRouteRequest?: CreateRouteRequest | undefined, options?: any): AxiosPromise<string>;
    deleteRouteById(id: string, options?: any): AxiosPromise<void>;
    getMostPopularRoutes(options?: any): AxiosPromise<RouteResponse[]>;
    getRouteById(id: string, options?: any): AxiosPromise<RouteResponse>;
    shareInGroup(routeId: string, groupId: string, options?: any): AxiosPromise<void>;
    updateRouteById(id: string, updateRouteRequest?: UpdateRouteRequest | undefined, options?: any): AxiosPromise<void>;
};
export declare class RouteApi extends BaseAPI {
    createRoute(createRouteRequest?: CreateRouteRequest, options?: any): AxiosPromise<string>;
    deleteRouteById(id: string, options?: any): AxiosPromise<void>;
    getMostPopularRoutes(options?: any): AxiosPromise<RouteResponse[]>;
    getRouteById(id: string, options?: any): AxiosPromise<RouteResponse>;
    shareInGroup(routeId: string, groupId: string, options?: any): AxiosPromise<void>;
    updateRouteById(id: string, updateRouteRequest?: UpdateRouteRequest, options?: any): AxiosPromise<void>;
}
