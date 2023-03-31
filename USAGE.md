<!-- Start SDK Example Usage -->
```typescript
import {
  AccountsResponse
} from "Structure/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Structure } from "Structure";
const sdk = new Structure({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.accounts.accounts().then((res: AccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->