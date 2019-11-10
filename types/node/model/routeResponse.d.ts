import { Audit } from './audit';
import { LineStringDto } from './lineStringDto';
export declare class RouteResponse {
    'title'?: string;
    'description'?: string;
    'path'?: LineStringDto;
    'audit'?: Audit;
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
