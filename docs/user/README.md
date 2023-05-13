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
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
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

## me

Show current user

### Example Usage

```typescript
import { Structure } from "structure-ac";
import { MeResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.user.me().then((res: MeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
