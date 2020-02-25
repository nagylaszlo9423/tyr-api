import { Observable } from 'rxjs';
import { BaseAPI } from '../runtime';
import { LoginRequest, LoginResponse, LogoutRequest, RegistrationRequest, RegistrationResponse, TokenResponse } from '../models';
export interface AuthorizeOpRequest {
    responseType?: string;
    clientId?: string;
    redirectUri?: string;
}
export interface LoginOpRequest {
    loginRequest?: LoginRequest;
}
export interface LogoutOpRequest {
    authorization?: string;
}
export interface RegisterOpRequest {
    registrationRequest?: RegistrationRequest;
}
export interface TokenOpRequest {
    grantType?: string;
    code?: string;
    redirectUri?: string;
    clientId?: string;
    refreshToken?: string;
}
export declare class OauthApi extends BaseAPI {
    authorizeOp: ({ responseType, clientId, redirectUri }: AuthorizeOpRequest) => Observable<void>;
    loginOp: ({ loginRequest }: LoginOpRequest) => Observable<LoginResponse>;
    logoutOp: ({ authorization }: LogoutOpRequest) => Observable<LogoutRequest>;
    registerOp: ({ registrationRequest }: RegisterOpRequest) => Observable<RegistrationResponse>;
    tokenOp: ({ grantType, code, redirectUri, clientId, refreshToken }: TokenOpRequest) => Observable<TokenResponse>;
}
