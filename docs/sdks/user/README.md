# user

## Overview

User

### Available Operations

* [login](#login) - Login user
* [me](#me) - Show current user

## login

Login user

### Example Usage

```typescript
import { Structure } from "structure-ac";
import { LoginResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "",
  },
});

sdk.user.login({
  email: "Kenny50@yahoo.com",
  password: "rem",
}).then((res: LoginResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.LoginApplicationJSON](../../models/operations/loginapplicationjson.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.LoginResponse](../../models/operations/loginresponse.md)>**


## me

Show current user

### Example Usage

```typescript
import { Structure } from "structure-ac";
import { MeResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "",
  },
});

sdk.user.me().then((res: MeResponse) => {
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

**Promise<[operations.MeResponse](../../models/operations/meresponse.md)>**

