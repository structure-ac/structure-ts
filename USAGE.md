<!-- Start SDK Example Usage -->
```typescript
import { AxiosError } from "axios";
import { Structure } from "structure-ac";
import { EnrichCompanyRequest, EnrichCompanyResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EnrichCompanyRequest = {
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.companies.enrich(req).then((res: EnrichCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->