// tslint:disable
/**
 * swagger
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    ErrorResponse,
    GroupPageResponse,
    GroupRequest,
    GroupResponse,
} from '../models';

export interface CreateGroupOpRequest {
    groupRequest?: GroupRequest;
}

export interface FindByIdOpRequest {
    groupId: string;
}

export interface GetGroupsPagedOpRequest {
    page?: number;
    size?: number;
}

export interface GroupGroupIdDeleteRequest {
    groupId: string;
}

export interface JoinGroupOpRequest {
    groupId: string;
}

export interface LeaveGroupOpRequest {
    groupId: string;
}

export interface UpdateGroupOpRequest {
    groupId: string;
    groupRequest?: GroupRequest;
}

/**
 * no description
 */
export class GroupApi extends BaseAPI {

    /**
     * createGroup
     */
    createGroupOp = ({ groupRequest }: CreateGroupOpRequest): Observable<string> => {

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<string>({
            path: '/group',
            method: 'POST',
            headers,
            body: groupRequest,
        });
    };

    /**
     * findById
     */
    findByIdOp = ({ groupId }: FindByIdOpRequest): Observable<GroupResponse> => {
        throwIfNullOrUndefined(groupId, 'findByIdOp');

        return this.request<GroupResponse>({
            path: '/group/{groupId}'.replace('{groupId}', encodeURI(groupId)),
            method: 'GET',
        });
    };

    /**
     * getGroupsPaged
     */
    getGroupsPagedOp = ({ page, size }: GetGroupsPagedOpRequest): Observable<GroupPageResponse> => {

        const query: HttpQuery = {};

        if (page != null) { query['page'] = page; }
        if (size != null) { query['size'] = size; }

        return this.request<GroupPageResponse>({
            path: '/group/page',
            method: 'GET',
            query,
        });
    };

    /**
     */
    groupGroupIdDelete = ({ groupId }: GroupGroupIdDeleteRequest): Observable<void> => {
        throwIfNullOrUndefined(groupId, 'groupGroupIdDelete');

        return this.request<void>({
            path: '/group/{groupId}'.replace('{groupId}', encodeURI(groupId)),
            method: 'DELETE',
        });
    };

    /**
     * joinGroup
     */
    joinGroupOp = ({ groupId }: JoinGroupOpRequest): Observable<void> => {
        throwIfNullOrUndefined(groupId, 'joinGroupOp');

        return this.request<void>({
            path: '/group/{groupId}/join'.replace('{groupId}', encodeURI(groupId)),
            method: 'POST',
        });
    };

    /**
     * leaveGroup
     */
    leaveGroupOp = ({ groupId }: LeaveGroupOpRequest): Observable<void> => {
        throwIfNullOrUndefined(groupId, 'leaveGroupOp');

        return this.request<void>({
            path: '/group/{groupId}/leave'.replace('{groupId}', encodeURI(groupId)),
            method: 'POST',
        });
    };

    /**
     * updateGroup
     */
    updateGroupOp = ({ groupId, groupRequest }: UpdateGroupOpRequest): Observable<void> => {
        throwIfNullOrUndefined(groupId, 'updateGroupOp');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            path: '/group/{groupId}'.replace('{groupId}', encodeURI(groupId)),
            method: 'PUT',
            headers,
            body: groupRequest,
        });
    };

}
