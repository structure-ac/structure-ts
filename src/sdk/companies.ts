/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Companies
 */
export class Companies {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Enrich a company profile
     */
    async enrich(
        req: operations.EnrichCompanyRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.EnrichCompanyResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnrichCompanyRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/companies/{id}/enrich", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.EnrichCompanyResponse = new operations.EnrichCompanyResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `*/*`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.body = out;
                }
                break;
            case [401, 403, 404, 422].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * List company employees
     */
    async listEmployees(
        req: operations.ListEmployeesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ListEmployeesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListEmployeesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/companies/{id}/employees", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ListEmployeesResponse = new operations.ListEmployeesResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `*/*`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.body = out;
                }
                break;
            case [401, 403, 404].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * List company jobs
     */
    async listJobs(
        req: operations.ListJobsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ListJobsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListJobsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/companies/{id}/jobs", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ListJobsResponse = new operations.ListJobsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `*/*`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.body = out;
                }
                break;
            case [401, 403, 404].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Search Companies
     */
    async search(
        req: operations.SearchCompaniesApplicationJSON,
        config?: AxiosRequestConfig
    ): Promise<operations.SearchCompaniesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SearchCompaniesApplicationJSON(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/companies/search";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SearchCompaniesResponse = new operations.SearchCompaniesResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `*/*`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.body = out;
                }
                break;
            case [401, 403].includes(httpRes?.status):
                break;
        }

        return res;
    }
}
