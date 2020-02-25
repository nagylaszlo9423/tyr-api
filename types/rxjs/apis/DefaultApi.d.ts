import { Observable } from 'rxjs';
import { BaseAPI } from '../runtime';
import { LogoutRequest } from '../models';
export interface PostOauthLogoutAllRequest {
    logoutRequest?: LogoutRequest;
}
export declare class DefaultApi extends BaseAPI {
    postOauthLogoutAll: ({ logoutRequest }: PostOauthLogoutAllRequest) => Observable<void>;
}
