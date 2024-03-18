/*
Expenses API


The Expenses API allows you to manage accounting and expenses information.


The version of the OpenAPI document: 0.1
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The pre-signed file upload URI and unique identifier of the request. 
 * @export
 * @interface CreateAsyncFileUploadResponse
 */
export interface CreateAsyncFileUploadResponse {
    /**
     * The unique identifier for the request.
     * @type {string}
     * @memberof CreateAsyncFileUploadResponse
     */
    'id': string;
    /**
     * The pre-signed S3 link that should be used to upload the file. The maximum size accepted for this document is 50 MB. 
     * @type {string}
     * @memberof CreateAsyncFileUploadResponse
     */
    'uri': string;
}

