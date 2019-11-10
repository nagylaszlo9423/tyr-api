export declare class Audit {
    'createdBy'?: string;
    'createdAt'?: string;
    'modifiedBy'?: string;
    'modifiedAt'?: string;
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
