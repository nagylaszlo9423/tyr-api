import { Observable } from 'rxjs';
import { BaseAPI } from '../runtime';
import { GroupPageResponse, GroupRequest, GroupResponse } from '../models';
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
export declare class GroupApi extends BaseAPI {
    createGroupOp: ({ groupRequest }: CreateGroupOpRequest) => Observable<string>;
    findByIdOp: ({ groupId }: FindByIdOpRequest) => Observable<GroupResponse>;
    getGroupsPagedOp: ({ page, size }: GetGroupsPagedOpRequest) => Observable<GroupPageResponse>;
    groupGroupIdDelete: ({ groupId }: GroupGroupIdDeleteRequest) => Observable<void>;
    joinGroupOp: ({ groupId }: JoinGroupOpRequest) => Observable<void>;
    leaveGroupOp: ({ groupId }: LeaveGroupOpRequest) => Observable<void>;
    updateGroupOp: ({ groupId, groupRequest }: UpdateGroupOpRequest) => Observable<void>;
}
