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
import { AxiosError } from "axios";
import { Structure } from "structure-ac";
import { EnrichCompanyRequest, EnrichCompanyResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EnrichCompanyRequest = {
  id: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
};

sdk.companies.enrich(req).then((res: EnrichCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listEmployees

List company employees

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Structure } from "structure-ac";
import { ListEmployeesRequest, ListEmployeesResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ListEmployeesRequest = {
  id: "cb739205-9293-496f-aa75-96eb10faaa23",
  offset: "corporis",
  perPage: "explicabo",
};

sdk.companies.listEmployees(req).then((res: ListEmployeesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listJobs

List company jobs

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Structure } from "structure-ac";
import { ListJobsRequest, ListJobsResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ListJobsRequest = {
  id: "c5955907-aff1-4a3a-afa9-467739251aa5",
  offset: "odit",
  perPage: "quo",
};

sdk.companies.listJobs(req).then((res: ListJobsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## search

Search Companies

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Structure } from "structure-ac";
import { SearchCompaniesApplicationJSON, SearchCompaniesResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: SearchCompaniesApplicationJSON = {
  filter: "sequi",
  limit: "tenetur",
  page: "ipsam",
  query: "id",
};

sdk.companies.search(req).then((res: SearchCompaniesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
