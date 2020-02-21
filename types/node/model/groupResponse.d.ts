export declare class GroupResponse {
    'name': string;
    'description': string;
    'joinPolicy'?: GroupResponse.JoinPolicyEnum;
    'owner': string;
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
export declare namespace GroupResponse {
    enum JoinPolicyEnum {
        INVITEONLY,
        REQUEST,
        PUBLIC
    }
}
