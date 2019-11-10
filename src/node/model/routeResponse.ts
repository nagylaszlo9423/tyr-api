/**
 * swagger
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Audit } from './audit';
import { LineStringDto } from './lineStringDto';

export class RouteResponse {
    'title'?: string;
    'description'?: string;
    'path'?: LineStringDto;
    'audit'?: Audit;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "LineStringDto"
        },
        {
            "name": "audit",
            "baseName": "audit",
            "type": "Audit"
        }    ];

    static getAttributeTypeMap() {
        return RouteResponse.attributeTypeMap;
    }
}

