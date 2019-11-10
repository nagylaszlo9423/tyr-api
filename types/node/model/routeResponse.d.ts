import { Audit } from './audit';
import { LineString } from './lineString';
export declare class RouteResponse {
    'title'?: string;
    'description'?: string;
    'path'?: LineString;
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
