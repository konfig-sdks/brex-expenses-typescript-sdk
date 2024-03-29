/*
Expenses API


The Expenses API allows you to manage accounting and expenses information.


The version of the OpenAPI document: 0.1
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The receipt associated with the expense.
 * @export
 * @interface Receipt
 */
export interface Receipt {
    /**
     * The unique identifier for the receipt.
     * @type {string}
     * @memberof Receipt
     */
    'id': string;
    /**
     * [Presigned S3 link](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html)(s) to download file(s) of the receipt. Link(s) expire in 15 minutes.
     * @type {Array<string>}
     * @memberof Receipt
     */
    'download_uris'?: Array<string> | null;
}

