export declare class TokenResponse {
    'accessToken': string;
    'accessTokenExpiration': string;
    'refreshToken': string;
    'refreshTokenExpiration': string;
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
