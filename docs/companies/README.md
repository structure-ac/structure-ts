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
