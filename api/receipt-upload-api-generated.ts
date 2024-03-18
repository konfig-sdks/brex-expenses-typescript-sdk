/* tslint:disable */
/* eslint-disable */
/*
Expenses API


The Expenses API allows you to manage accounting and expenses information.


The version of the OpenAPI document: 0.1
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateAsyncFileUploadResponse } from '../models';
// @ts-ignore
import { ReceiptUploadRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ReceiptUploadApi - axios parameter creator
 * @export
 */
export const ReceiptUploadApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *  The `uri` will be a pre-signed S3 URL allowing you to upload the receipt securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will try to match the receipt with existing expenses.  Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this pre-signed S3 URL. We highly recommend using one of AWS SDKs if they\'re available for your language to upload these files. 
         * @summary Create a new receipt upload
         * @param {string} expenseId 
         * @param {ReceiptUploadRequest} receiptUploadRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewReceipt: async (expenseId: string, receiptUploadRequest: ReceiptUploadRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'expenseId' is not null or undefined
            assertParamExists('createNewReceipt', 'expenseId', expenseId)
            // verify required parameter 'receiptUploadRequest' is not null or undefined
            assertParamExists('createNewReceipt', 'receiptUploadRequest', receiptUploadRequest)
            const localVarPath = `/v1/expenses/card/{expense_id}/receipt_upload`
                .replace(`{${"expense_id"}}`, encodeURIComponent(String(expenseId !== undefined ? expenseId : `-expense_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: receiptUploadRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/expenses/card/{expense_id}/receipt_upload',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(receiptUploadRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReceiptUploadApi - functional programming interface
 * @export
 */
export const ReceiptUploadApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReceiptUploadApiAxiosParamCreator(configuration)
    return {
        /**
         *  The `uri` will be a pre-signed S3 URL allowing you to upload the receipt securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will try to match the receipt with existing expenses.  Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this pre-signed S3 URL. We highly recommend using one of AWS SDKs if they\'re available for your language to upload these files. 
         * @summary Create a new receipt upload
         * @param {ReceiptUploadApiCreateNewReceiptRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewReceipt(requestParameters: ReceiptUploadApiCreateNewReceiptRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateAsyncFileUploadResponse>> {
            const receiptUploadRequest: ReceiptUploadRequest = {
                receipt_name: requestParameters.receipt_name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewReceipt(requestParameters.expenseId, receiptUploadRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ReceiptUploadApi - factory interface
 * @export
 */
export const ReceiptUploadApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReceiptUploadApiFp(configuration)
    return {
        /**
         *  The `uri` will be a pre-signed S3 URL allowing you to upload the receipt securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will try to match the receipt with existing expenses.  Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this pre-signed S3 URL. We highly recommend using one of AWS SDKs if they\'re available for your language to upload these files. 
         * @summary Create a new receipt upload
         * @param {ReceiptUploadApiCreateNewReceiptRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewReceipt(requestParameters: ReceiptUploadApiCreateNewReceiptRequest, options?: AxiosRequestConfig): AxiosPromise<CreateAsyncFileUploadResponse> {
            return localVarFp.createNewReceipt(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewReceipt operation in ReceiptUploadApi.
 * @export
 * @interface ReceiptUploadApiCreateNewReceiptRequest
 */
export type ReceiptUploadApiCreateNewReceiptRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof ReceiptUploadApiCreateNewReceipt
    */
    readonly expenseId: string
    
} & ReceiptUploadRequest

/**
 * ReceiptUploadApiGenerated - object-oriented interface
 * @export
 * @class ReceiptUploadApiGenerated
 * @extends {BaseAPI}
 */
export class ReceiptUploadApiGenerated extends BaseAPI {
    /**
     *  The `uri` will be a pre-signed S3 URL allowing you to upload the receipt securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will try to match the receipt with existing expenses.  Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this pre-signed S3 URL. We highly recommend using one of AWS SDKs if they\'re available for your language to upload these files. 
     * @summary Create a new receipt upload
     * @param {ReceiptUploadApiCreateNewReceiptRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReceiptUploadApiGenerated
     */
    public createNewReceipt(requestParameters: ReceiptUploadApiCreateNewReceiptRequest, options?: AxiosRequestConfig) {
        return ReceiptUploadApiFp(this.configuration).createNewReceipt(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}