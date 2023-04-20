<!-- Start SDK Example Usage -->
```typescript
import {
  EnrichCompanyRequest,
  EnrichCompanyResponse
} from "structure-ac/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Structure } from "structure-ac";
const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EnrichCompanyRequest = {
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.companies.enrich(req).then((res: EnrichCompanyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->