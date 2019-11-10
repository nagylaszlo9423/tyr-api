import { LineStringDto } from './lineStringDto';
export declare class CreateRouteRequest {
    'title'?: string;
    'description'?: string;
    'path'?: LineStringDto;
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
