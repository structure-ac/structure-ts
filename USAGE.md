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
  countryCode: "MA",
  headquarters: "provident",
  id: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
  name: "Estelle Will",
};

sdk.companies.enrich(req).then((res: EnrichCompanyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->