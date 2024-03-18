/*
Expenses API


The Expenses API allows you to manage accounting and expenses information.


The version of the OpenAPI document: 0.1
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Merchant
 */
export interface Merchant {
    /**
     * Merchant descriptor
     * @type {string}
     * @memberof Merchant
     */
    'raw_descriptor': string;
    /**
     * https://en.wikipedia.org/wiki/Merchant_category_code
     * @type {string}
     * @memberof Merchant
     */
    'mcc': string;
}

