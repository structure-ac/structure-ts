# accounts

## Overview

Accounts

### Available Operations

* [listUsers](#listusers) - Show current user accounts

## listUsers

Show current user accounts

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Structure } from "structure-ac";
import { ListUsersResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.accounts.listUsers().then((res: ListUsersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
