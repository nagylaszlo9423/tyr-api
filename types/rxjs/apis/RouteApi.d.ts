import { Observable } from 'rxjs';
import { BaseAPI } from '../runtime';
import { CreateRouteRequest, RouteResponse, UpdateRouteRequest } from '../models';
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
export declare class RouteApi extends BaseAPI {
    createRouteOp: ({ createRouteRequest }: CreateRouteOpRequest) => Observable<string>;
    deleteRouteById: ({ id }: DeleteRouteByIdRequest) => Observable<void>;
    getMostPopularRoutesOp: () => Observable<RouteResponse[]>;
    getRouteByIdOp: ({ id }: GetRouteByIdOpRequest) => Observable<RouteResponse>;
    shareInGroupOp: ({ routeId, groupId }: ShareInGroupOpRequest) => Observable<void>;
    updateRouteByIdOp: ({ id, updateRouteRequest }: UpdateRouteByIdOpRequest) => Observable<void>;
}
