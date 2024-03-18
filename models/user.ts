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
 * @interface User
 */
export interface User {
    /**
     * Unique ID for the User.
     * @type {string}
     * @memberof User
     */
    'id': string;
    /**
     * First name of the User.
     * @type {string}
     * @memberof User
     */
    'first_name': string;
    /**
     * Last name of the User.
     * @type {string}
     * @memberof User
     */
    'last_name': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'department_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'location_id'?: string | null;
}

