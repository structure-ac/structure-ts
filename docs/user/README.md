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
import { AxiosError } from "axios";
import { Structure } from "structure-ac";
import { LoginApplicationJSON, LoginResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: LoginApplicationJSON = {
  email: "Kenny50@yahoo.com",
  password: "rem",
};

sdk.user.login(req).then((res: LoginResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## me

Show current user

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Structure } from "structure-ac";
import { MeResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.user.me().then((res: MeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
