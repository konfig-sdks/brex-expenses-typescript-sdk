/*
Expenses API


The Expenses API allows you to manage accounting and expenses information.


The version of the OpenAPI document: 0.1
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { User } from './user';

/**
 * 
 * @export
 * @interface ExpandableExpenseUser
 */
export interface ExpandableExpenseUser {
    /**
     * Unique ID for the User.
     * @type {string}
     * @memberof ExpandableExpenseUser
     */
    'id': string;
    /**
     * First name of the User.
     * @type {string}
     * @memberof ExpandableExpenseUser
     */
    'first_name': string;
    /**
     * Last name of the User.
     * @type {string}
     * @memberof ExpandableExpenseUser
     */
    'last_name': string;
    /**
     * 
     * @type {string}
     * @memberof ExpandableExpenseUser
     */
    'department_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExpandableExpenseUser
     */
    'location_id'?: string | null;
}
