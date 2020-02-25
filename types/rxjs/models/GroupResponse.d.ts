import { GroupJoinPolicy } from './';
export interface GroupResponse {
    name: string;
    description: string;
    joinPolicy?: GroupJoinPolicy;
    owner: string;
}
