import { AuditDto, LineStringDto, ResourceItemResponse } from './';
export interface RouteResponse {
    title: string;
    description: string;
    path: LineStringDto;
    audit: AuditDto;
    images: Array<ResourceItemResponse>;
}
