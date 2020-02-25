import { GroupJoinPolicy } from './';
export interface GroupRequest {
    name?: string;
    description?: string;
    joinPolicy?: GroupJoinPolicy;
}
