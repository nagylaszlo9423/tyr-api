import { AuditDto } from './auditDto';
import { LineStringDto } from './lineStringDto';
import { ResourceItemResponse } from './resourceItemResponse';
export declare class RouteResponse {
    'title': string;
    'description': string;
    'path': LineStringDto;
    'audit': AuditDto;
    'images': Array<ResourceItemResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
