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

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.EnrichPersonRequest](../../models/operations/enrichpersonrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.EnrichPersonResponse](../../models/operations/enrichpersonresponse.md)>**


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

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.SearchPeopleApplicationJSON](../../models/operations/searchpeopleapplicationjson.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.SearchPeopleResponse](../../models/operations/searchpeopleresponse.md)>**

