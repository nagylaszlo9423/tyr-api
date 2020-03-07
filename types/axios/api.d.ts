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
export interface GroupMemberPageResponse {
    page: number;
    size: number;
    items: Array<GroupMemberResponse>;
    total: number;
}
export interface GroupMemberPageResponseAllOf {
    items?: Array<GroupMemberResponse>;
}
export interface GroupMemberResponse {
    id?: string;
    email?: string;
}
export interface GroupPageResponse {
    page: number;
    size: number;
    items: Array<GroupResponse>;
    total: number;
}
export interface GroupPageResponseAllOf {
    items?: Array<GroupResponse>;
}
export interface GroupRequest {
    name?: string;
    description?: string;
    joinPolicy?: number;
}
export interface GroupResponse {
    id: string;
    name: string;
    description: string;
    joinPolicy: number;
    owner: string;
    isEditable: boolean;
    audit: AuditDto;
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
    total: number;
}
export interface PathPageResponse {
    page: number;
    size: number;
    items: Array<PathResponse>;
    total: number;
}
export interface PathPageResponseAllOf {
    items?: Array<PathResponse>;
}
export interface PathRequest {
    name?: string;
    description?: string;
    path?: LineStringDto;
}
export interface PathResponse {
    id: string;
    name: string;
    description: string;
    path: LineStringDto;
    audit: AuditDto;
    images: Array<ResourceItemResponse>;
    isEditable: boolean;
    visibility?: number;
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
    getGroupsPaged(page?: number | undefined, size?: number | undefined, search?: string | undefined, filters?: number[] | undefined, sortBy?: string | undefined, options?: any): RequestArgs;
    groupGroupIdDelete(groupId: string, options?: any): RequestArgs;
    joinGroup(groupId: string, options?: any): RequestArgs;
    leaveGroup(groupId: string, options?: any): RequestArgs;
    updateGroup(groupId: string, groupRequest?: GroupRequest | undefined, options?: any): RequestArgs;
};
export declare const GroupApiFp: (configuration?: Configuration | undefined) => {
    createGroup(groupRequest?: GroupRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    findById(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GroupResponse>;
    getGroupsPaged(page?: number | undefined, size?: number | undefined, search?: string | undefined, filters?: number[] | undefined, sortBy?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    joinGroup(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    leaveGroup(groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    updateGroup(groupId: string, groupRequest?: GroupRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GroupResponse>;
};
export declare const GroupApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    createGroup(groupRequest?: GroupRequest | undefined, options?: any): AxiosPromise<string>;
    findById(groupId: string, options?: any): AxiosPromise<GroupResponse>;
    getGroupsPaged(page?: number | undefined, size?: number | undefined, search?: string | undefined, filters?: number[] | undefined, sortBy?: string | undefined, options?: any): AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): AxiosPromise<void>;
    joinGroup(groupId: string, options?: any): AxiosPromise<void>;
    leaveGroup(groupId: string, options?: any): AxiosPromise<void>;
    updateGroup(groupId: string, groupRequest?: GroupRequest | undefined, options?: any): AxiosPromise<GroupResponse>;
};
export declare class GroupApi extends BaseAPI {
    createGroup(groupRequest?: GroupRequest, options?: any): AxiosPromise<string>;
    findById(groupId: string, options?: any): AxiosPromise<GroupResponse>;
    getGroupsPaged(page?: number, size?: number, search?: string, filters?: Array<number>, sortBy?: string, options?: any): AxiosPromise<GroupPageResponse>;
    groupGroupIdDelete(groupId: string, options?: any): AxiosPromise<void>;
    joinGroup(groupId: string, options?: any): AxiosPromise<void>;
    leaveGroup(groupId: string, options?: any): AxiosPromise<void>;
    updateGroup(groupId: string, groupRequest?: GroupRequest, options?: any): AxiosPromise<GroupResponse>;
}
export declare const OauthApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): RequestArgs;
    login(loginRequest?: LoginRequest | undefined, options?: any): RequestArgs;
    logout(authorization?: string | undefined, options?: any): RequestArgs;
    postOauthLogoutAll(page?: number | undefined, size?: number | undefined, logoutRequest?: LogoutRequest | undefined, options?: any): RequestArgs;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): RequestArgs;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): RequestArgs;
};
export declare const OauthApiFp: (configuration?: Configuration | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    login(loginRequest?: LoginRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LoginResponse>;
    logout(authorization?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LogoutRequest>;
    postOauthLogoutAll(page?: number | undefined, size?: number | undefined, logoutRequest?: LogoutRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RegistrationResponse>;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<TokenResponse>;
};
export declare const OauthApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    authorize(responseType?: string | undefined, clientId?: string | undefined, redirectUri?: string | undefined, options?: any): AxiosPromise<void>;
    login(loginRequest?: LoginRequest | undefined, options?: any): AxiosPromise<LoginResponse>;
    logout(authorization?: string | undefined, options?: any): AxiosPromise<LogoutRequest>;
    postOauthLogoutAll(page?: number | undefined, size?: number | undefined, logoutRequest?: LogoutRequest | undefined, options?: any): AxiosPromise<void>;
    register(registrationRequest?: RegistrationRequest | undefined, options?: any): AxiosPromise<RegistrationResponse>;
    token(grantType?: string | undefined, code?: string | undefined, redirectUri?: string | undefined, clientId?: string | undefined, refreshToken?: string | undefined, options?: any): AxiosPromise<TokenResponse>;
};
export declare class OauthApi extends BaseAPI {
    authorize(responseType?: string, clientId?: string, redirectUri?: string, options?: any): AxiosPromise<void>;
    login(loginRequest?: LoginRequest, options?: any): AxiosPromise<LoginResponse>;
    logout(authorization?: string, options?: any): AxiosPromise<LogoutRequest>;
    postOauthLogoutAll(page?: number, size?: number, logoutRequest?: LogoutRequest, options?: any): AxiosPromise<void>;
    register(registrationRequest?: RegistrationRequest, options?: any): AxiosPromise<RegistrationResponse>;
    token(grantType?: string, code?: string, redirectUri?: string, clientId?: string, refreshToken?: string, options?: any): AxiosPromise<TokenResponse>;
}
export declare const PathApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    createPath(pathRequest?: PathRequest | undefined, options?: any): RequestArgs;
    deletePathById(id: string, options?: any): RequestArgs;
    findAllAvailableByFilters(page?: number | undefined, size?: number | undefined, search?: string | undefined, filters?: number[] | undefined, sortBy?: string | undefined, options?: any): RequestArgs;
    getPathById(id: string, options?: any): RequestArgs;
    shareInGroup(pathId: string, groupId: string, options?: any): RequestArgs;
    updatePathById(id: string, pathRequest?: PathRequest | undefined, options?: any): RequestArgs;
};
export declare const PathApiFp: (configuration?: Configuration | undefined) => {
    createPath(pathRequest?: PathRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    deletePathById(id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    findAllAvailableByFilters(page?: number | undefined, size?: number | undefined, search?: string | undefined, filters?: number[] | undefined, sortBy?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<PathPageResponse>;
    getPathById(id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<PathResponse>;
    shareInGroup(pathId: string, groupId: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    updatePathById(id: string, pathRequest?: PathRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
export declare const PathApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    createPath(pathRequest?: PathRequest | undefined, options?: any): AxiosPromise<string>;
    deletePathById(id: string, options?: any): AxiosPromise<void>;
    findAllAvailableByFilters(page?: number | undefined, size?: number | undefined, search?: string | undefined, filters?: number[] | undefined, sortBy?: string | undefined, options?: any): AxiosPromise<PathPageResponse>;
    getPathById(id: string, options?: any): AxiosPromise<PathResponse>;
    shareInGroup(pathId: string, groupId: string, options?: any): AxiosPromise<void>;
    updatePathById(id: string, pathRequest?: PathRequest | undefined, options?: any): AxiosPromise<void>;
};
export declare class PathApi extends BaseAPI {
    createPath(pathRequest?: PathRequest, options?: any): AxiosPromise<string>;
    deletePathById(id: string, options?: any): AxiosPromise<void>;
    findAllAvailableByFilters(page?: number, size?: number, search?: string, filters?: Array<number>, sortBy?: string, options?: any): AxiosPromise<PathPageResponse>;
    getPathById(id: string, options?: any): AxiosPromise<PathResponse>;
    shareInGroup(pathId: string, groupId: string, options?: any): AxiosPromise<void>;
    updatePathById(id: string, pathRequest?: PathRequest, options?: any): AxiosPromise<void>;
}
export declare const UserApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    getGroupMembers(groupId: string, page?: number | undefined, size?: number | undefined, options?: any): RequestArgs;
};
export declare const UserApiFp: (configuration?: Configuration | undefined) => {
    getGroupMembers(groupId: string, page?: number | undefined, size?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GroupMemberPageResponse>;
};
export declare const UserApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    getGroupMembers(groupId: string, page?: number | undefined, size?: number | undefined, options?: any): AxiosPromise<GroupMemberPageResponse>;
};
export declare class UserApi extends BaseAPI {
    getGroupMembers(groupId: string, page?: number, size?: number, options?: any): AxiosPromise<GroupMemberPageResponse>;
}
