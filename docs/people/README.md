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
import { Structure } from "structure-ac";
import { EnrichPersonResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "",
  },
});

sdk.people.enrich({
  id: "d019da1f-fe78-4f09-bb00-74f15471b5e6",
}).then((res: EnrichPersonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## search

Search People

### Example Usage

```typescript
import { Structure } from "structure-ac";
import { SearchPeopleResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "",
  },
});

sdk.people.search({
  filter: "repudiandae",
  limit: "quae",
  page: "ipsum",
  query: "quidem",
}).then((res: SearchPeopleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
