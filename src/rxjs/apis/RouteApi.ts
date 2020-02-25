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
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    CreateRouteRequest,
    ErrorResponse,
    RouteResponse,
    UpdateRouteRequest,
} from '../models';

export interface CreateRouteOpRequest {
    createRouteRequest?: CreateRouteRequest;
}

export interface DeleteRouteByIdRequest {
    id: string;
}

export interface GetRouteByIdOpRequest {
    id: string;
}

export interface ShareInGroupOpRequest {
    routeId: string;
    groupId: string;
}

export interface UpdateRouteByIdOpRequest {
    id: string;
    updateRouteRequest?: UpdateRouteRequest;
}

/**
 * no description
 */
export class RouteApi extends BaseAPI {

    /**
     */
    createRouteOp = ({ createRouteRequest }: CreateRouteOpRequest): Observable<string> => {

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<string>({
            path: '/route',
            method: 'POST',
            headers,
            body: createRouteRequest,
        });
    };

    /**
     */
    deleteRouteById = ({ id }: DeleteRouteByIdRequest): Observable<void> => {
        throwIfNullOrUndefined(id, 'deleteRouteById');

        return this.request<void>({
            path: '/route/{id}'.replace('{id}', encodeURI(id)),
            method: 'DELETE',
        });
    };

    /**
     * mostPopularRoutes
     */
    getMostPopularRoutesOp = (): Observable<Array<RouteResponse>> => {
        return this.request<Array<RouteResponse>>({
            path: '/route/most-popular',
            method: 'GET',
        });
    };

    /**
     * Your GET endpoint
     */
    getRouteByIdOp = ({ id }: GetRouteByIdOpRequest): Observable<RouteResponse> => {
        throwIfNullOrUndefined(id, 'getRouteByIdOp');

        return this.request<RouteResponse>({
            path: '/route/{id}'.replace('{id}', encodeURI(id)),
            method: 'GET',
        });
    };

    /**
     */
    shareInGroupOp = ({ routeId, groupId }: ShareInGroupOpRequest): Observable<void> => {
        throwIfNullOrUndefined(routeId, 'shareInGroupOp');
        throwIfNullOrUndefined(groupId, 'shareInGroupOp');

        return this.request<void>({
            path: '/route/{routeId}/share-in-group/{groupId}'.replace('{routeId}', encodeURI(routeId)).replace('{groupId}', encodeURI(groupId)),
            method: 'POST',
        });
    };

    /**
     */
    updateRouteByIdOp = ({ id, updateRouteRequest }: UpdateRouteByIdOpRequest): Observable<void> => {
        throwIfNullOrUndefined(id, 'updateRouteByIdOp');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            path: '/route/{id}'.replace('{id}', encodeURI(id)),
            method: 'PUT',
            headers,
            body: updateRouteRequest,
        });
    };

}
