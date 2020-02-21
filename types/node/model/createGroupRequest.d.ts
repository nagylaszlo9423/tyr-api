export declare class CreateGroupRequest {
    'name'?: string;
    'description'?: string;
    'joinPolicy'?: CreateGroupRequest.JoinPolicyEnum;
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
export declare namespace CreateGroupRequest {
    enum JoinPolicyEnum {
        INVITEONLY,
        REQUEST,
        PUBLIC
    }
}
