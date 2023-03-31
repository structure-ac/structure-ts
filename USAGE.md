<!-- Start SDK Example Usage -->
```typescript
import {
  EnrichCompanyRequest,
  EnrichCompanyResponse
} from "Structure/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Structure } from "Structure";
const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EnrichCompanyRequest = {
  countryCode: "corrupti",
  headquarters: "provident",
  id: "distinctio",
  name: "quibusdam",
};

sdk.companies.enrich(req).then((res: EnrichCompanyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->