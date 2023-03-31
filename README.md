# Structure

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/structure-ac/structure-ts
```

### Yarn

```bash
yarn add https://github.com/structure-ac/structure-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `listUsers` - Show current user accounts

### companies

* `enrich` - Enrich a company profile
* `listEmployees` - List company employees
* `listJobs` - List company jobs
* `search` - Search Companies

### people

* `enrich` - Enrich a person profile
* `search` - Search People

### user

* `login` - Login user
* `me` - Show current user
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
