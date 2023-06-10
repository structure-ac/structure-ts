# accounts

## Overview

Accounts

### Available Operations

* [listUsers](#listusers) - Show current user accounts

## listUsers

Show current user accounts

### Example Usage

```typescript
import { Structure } from "structure-ac";
import { ListUsersResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "",
  },
});

sdk.accounts.listUsers().then((res: ListUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListUsersResponse](../../models/operations/listusersresponse.md)>**

