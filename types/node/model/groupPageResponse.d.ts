import { GroupResponse } from './groupResponse';
export declare class GroupPageResponse {
    'page': number;
    'size': number;
    'items': Array<GroupResponse>;
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
