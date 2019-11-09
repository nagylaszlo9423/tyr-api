export declare class LoginRequest {
    'email'?: string;
    'password'?: string;
    'clientId'?: string;
    'redirectUri'?: string;
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
