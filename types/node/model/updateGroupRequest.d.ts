export declare class UpdateGroupRequest {
    'name'?: string;
    'description'?: string;
    'joinPolicy'?: UpdateGroupRequest.JoinPolicyEnum;
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
export declare namespace UpdateGroupRequest {
    enum JoinPolicyEnum {
        INVITEONLY,
        REQUEST,
        PUBLIC
    }
}
