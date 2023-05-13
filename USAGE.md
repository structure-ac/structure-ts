<!-- Start SDK Example Usage -->
```typescript
import { Structure } from "structure-ac";
import { EnrichCompanyResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.companies.enrich({
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
}).then((res: EnrichCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->