import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance } from 'axios';
import { RequestArgs, BaseAPI } from './base';
export interface AuditDto {
    createdBy?: string;
    createdAt?: string;
    modifiedBy?: string;
    modifiedAt?: string;
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
export interface GroupPathsResponse {
    id?: string;
    name?: string;
    paths?: Array<PathResponse>;
}
export interface GroupRequest {
    name?: string;
    description?: string;
    joinPolicy?: GroupJoinPolicy;
}
export interface GroupResponse {
    id: string;
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
export interface PathListsResponse {
    own?: Array<PathResponse>;
    groups?: Array<GroupPathsResponse>;
    _public?: Array<PathResponse>;
}
export interface PathRequest {
    title?: string;
    description?: string;
    path?: LineStringDto;
}
export interface PathResponse {
    id?: string;
    title: string;
    description: string;
    path: LineStringDto;
    audit: AuditDto;
    images: Array<ResourceItemResponse>;
    isEditable?: boolean;
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
export interface TokenResponse {
    accessToken: string;
    accessTokenExpiration: string;
    refreshToken: string;
    refreshTokenExpiration: string;
}
export declare const GroupApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    createGroup(groupRequest?: GroupRequest | undefined, options?: any): RequestArgs;
    findById(groupId: string, options?: any): RequestArgs;
    getGroupsPaged(page?: number | undefined, size?: number | undefined, options?: any): RequestArgs;
    groupGroupIdDelete(groupId: string, options?: any): RequestArgs;
    joinGroup(groupId: string, options?: any): RequestArgs;
    leaveGroup(groupId: string, options?: any): RequestArgs;
    updateGroup(groupId: string, groupRequest?: GroupRequest | undefined, options?: any): RequestArgs;
};
export declare const GroupApiFp: (configuration?: Configuration | undefined) => {
    createGroup(groupRequest?: GroupRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    findById(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GroupResponse>;
    getGroupsPaged(page?: number | undefined, size?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    joinGroup(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    leaveGroup(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    updateGroup(groupId: string, groupRequest?: GroupRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
export declare const GroupApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    createGroup(groupRequest?: GroupRequest | undefined, options?: any): AxiosPromise<string>;
    findById(groupId: string, options?: any): AxiosPromise<GroupResponse>;
    getGroupsPaged(page?: number | undefined, size?: number | undefined, options?: any): AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): AxiosPromise<void>;
    joinGroup(groupId: string, options?: any): AxiosPromise<void>;
    leaveGroup(groupId: string, options?: any): AxiosPromise<void>;
    updateGroup(groupId: string, groupRequest?: GroupRequest | undefined, options?: any): AxiosPromise<void>;
};
export declare class GroupApi extends BaseAPI {
    createGroup(groupRequest?: GroupRequest, options?: any): AxiosPromise<string>;
    findById(groupId: string, options?: any): AxiosPromise<GroupResponse>;
    getGroupsPaged(page?: number, size?: number, options?: any): AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): AxiosPromise<void>;
    joinGroup(groupId: string, options?: any): AxiosPromise<void>;
    leaveGroup(groupId: string, options?: any): AxiosPromise<void>;
    updateGroup(groupId: string, groupRequest?: GroupRequest, options?: any): AxiosPromise<void>;
}
export declare const OauthApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): RequestArgs;
    login(loginRequest?: LoginRequest | undefined, options?: any): RequestArgs;
    logout(authorization?: string | undefined, options?: any): RequestArgs;
    postOauthLogoutAll(logoutRequest?: LogoutRequest | undefined, options?: any): RequestArgs;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): RequestArgs;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): RequestArgs;
};
export declare const OauthApiFp: (configuration?: Configuration | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    login(loginRequest?: LoginRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LoginResponse>;
    logout(authorization?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LogoutRequest>;
    postOauthLogoutAll(logoutRequest?: LogoutRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RegistrationResponse>;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<TokenResponse>;
};
export declare const OauthApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): AxiosPromise<void>;
    login(loginRequest?: LoginRequest | undefined, options?: any): AxiosPromise<LoginResponse>;
    logout(authorization?: string | undefined, options?: any): AxiosPromise<LogoutRequest>;
    postOauthLogoutAll(logoutRequest?: LogoutRequest | undefined, options?: any): AxiosPromise<void>;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): AxiosPromise<RegistrationResponse>;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): AxiosPromise<TokenResponse>;
};
export declare class OauthApi extends BaseAPI {
    authorize(responseType?: string, clientId?: string, redirectUri?: string, options?: any): AxiosPromise<void>;
    login(loginRequest?: LoginRequest, options?: any): AxiosPromise<LoginResponse>;
    logout(authorization?: string, options?: any): AxiosPromise<LogoutRequest>;
    postOauthLogoutAll(logoutRequest?: LogoutRequest, options?: any): AxiosPromise<void>;
    register(registrationRequest?: RegistrationRequest, options?: any): AxiosPromise<RegistrationResponse>;
    token(grantType?: string, code?: string, redirectUri?: string, clientId?: string, refreshToken?: string, options?: any): AxiosPromise<TokenResponse>;
}
export declare const PathApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    createPath(pathRequest?: PathRequest | undefined, options?: any): RequestArgs;
    deletePathById(id: string, options?: any): RequestArgs;
    getByFilter(filter: string, options?: any): RequestArgs;
    getPathById(id: string, options?: any): RequestArgs;
    getPathList(options?: any): RequestArgs;
    shareInGroup(pathId: string, groupId: string, options?: any): RequestArgs;
    updatePathById(id: string, pathRequest?: PathRequest | undefined, options?: any): RequestArgs;
};
export declare const PathApiFp: (configuration?: Configuration | undefined) => {
    createPath(pathRequest?: PathRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    deletePathById(id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    getByFilter(filter: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<PathResponse[]>;
    getPathById(id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<PathResponse>;
    getPathList(options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<PathListsResponse>;
    shareInGroup(pathId: string, groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    updatePathById(id: string, pathRequest?: PathRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
export declare const PathApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    createPath(pathRequest?: PathRequest | undefined, options?: any): AxiosPromise<string>;
    deletePathById(id: string, options?: any): AxiosPromise<void>;
    getByFilter(filter: string, options?: any): AxiosPromise<PathResponse[]>;
    getPathById(id: string, options?: any): AxiosPromise<PathResponse>;
    getPathList(options?: any): AxiosPromise<PathListsResponse>;
    shareInGroup(pathId: string, groupId: string, options?: any): AxiosPromise<void>;
    updatePathById(id: string, pathRequest?: PathRequest | undefined, options?: any): AxiosPromise<void>;
};
export declare class PathApi extends BaseAPI {
    createPath(pathRequest?: PathRequest, options?: any): AxiosPromise<string>;
    deletePathById(id: string, options?: any): AxiosPromise<void>;
    getByFilter(filter: string, options?: any): AxiosPromise<PathResponse[]>;
    getPathById(id: string, options?: any): AxiosPromise<PathResponse>;
    getPathList(options?: any): AxiosPromise<PathListsResponse>;
    shareInGroup(pathId: string, groupId: string, options?: any): AxiosPromise<void>;
    updatePathById(id: string, pathRequest?: PathRequest, options?: any): AxiosPromise<void>;
}
