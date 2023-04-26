# people

## Overview

People

### Available Operations

* [enrich](#enrich) - Enrich a person profile
* [search](#search) - Search People

## enrich

Enrich a person profile

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Structure } from "structure-ac";
import { EnrichPersonRequest, EnrichPersonResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EnrichPersonRequest = {
  id: "d019da1f-fe78-4f09-bb00-74f15471b5e6",
};

sdk.people.enrich(req).then((res: EnrichPersonResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## search

Search People

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Structure } from "structure-ac";
import { SearchPeopleApplicationJSON, SearchPeopleResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: SearchPeopleApplicationJSON = {
  filter: "repudiandae",
  limit: "quae",
  page: "ipsum",
  query: "quidem",
};

sdk.people.search(req).then((res: SearchPeopleResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
