# companies

## Overview

Companies

### Available Operations

* [enrich](#enrich) - Enrich a company profile
* [listEmployees](#listemployees) - List company employees
* [listJobs](#listjobs) - List company jobs
* [search](#search) - Search Companies

## enrich

Enrich a company profile

### Example Usage

```typescript
import { Structure } from "structure-ac";
import { EnrichCompanyResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "",
  },
});

sdk.companies.enrich({
  id: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
}).then((res: EnrichCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.EnrichCompanyRequest](../../models/operations/enrichcompanyrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.EnrichCompanyResponse](../../models/operations/enrichcompanyresponse.md)>**


## listEmployees

List company employees

### Example Usage

```typescript
import { Structure } from "structure-ac";
import { ListEmployeesResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "",
  },
});

sdk.companies.listEmployees({
  id: "cb739205-9293-496f-aa75-96eb10faaa23",
  offset: "corporis",
  perPage: "explicabo",
}).then((res: ListEmployeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListEmployeesRequest](../../models/operations/listemployeesrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListEmployeesResponse](../../models/operations/listemployeesresponse.md)>**


## listJobs

List company jobs

### Example Usage

```typescript
import { Structure } from "structure-ac";
import { ListJobsResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "",
  },
});

sdk.companies.listJobs({
  id: "c5955907-aff1-4a3a-afa9-467739251aa5",
  offset: "odit",
  perPage: "quo",
}).then((res: ListJobsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.ListJobsRequest](../../models/operations/listjobsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.ListJobsResponse](../../models/operations/listjobsresponse.md)>**


## search

Search Companies

### Example Usage

```typescript
import { Structure } from "structure-ac";
import { SearchCompaniesResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "",
  },
});

sdk.companies.search({
  filter: "sequi",
  limit: "tenetur",
  page: "ipsam",
  query: "id",
}).then((res: SearchCompaniesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.SearchCompaniesApplicationJSON](../../models/operations/searchcompaniesapplicationjson.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.SearchCompaniesResponse](../../models/operations/searchcompaniesresponse.md)>**

