import { LineString } from './lineString';
export declare class CreateRouteRequest {
    'title'?: string;
    'description'?: string;
    'path'?: LineString;
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
