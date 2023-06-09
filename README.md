<div align="center">
    <picture>
        <source srcset="https://user-images.githubusercontent.com/6267663/229523981-b357a689-adc6-4905-ac0e-e432aee5800b.png" media="(prefers-color-scheme: dark)">
        <img src="https://user-images.githubusercontent.com/6267663/229523981-b357a689-adc6-4905-ac0e-e432aee5800b.png">
    </picture>
    <h1>Typescript SDK</h1>
   <p>Discover rich information on people and companies</p>
   <a href="https://docs.structure.ac/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=2564ec&style=for-the-badge" /></a>
   <a href="https://github.com/structure-ac/structure-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/structure-ac/structure-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/structure-ac/structure-ts/releases"><img src="https://img.shields.io/github/v/release/structure-ac/structure-ts?sort=semver&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add structure-ac
```

### Yarn

```bash
yarn add structure-ac
```
<!-- End SDK Installation -->

## Authentication
You'll need to authenticate your requests to access any of the endpoints in the Structure API. In this guide, we'll look at how authentication works. Structure offers authentication for your API requests with a token.

### OAuth2 with bearer token
Authentication with the Structure API is using OAuth2. When establishing a connection using OAuth2, you will need your access token — you will find it in the [Structure dashboard](https://www.structure.ac/api_tokens) under API settings.

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Structure } from "structure-ac";
import { EnrichCompanyResponse } from "structure-ac/dist/sdk/models/operations";

const sdk = new Structure({
  security: {
    bearerAuth: "",
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/sdks/accounts/README.md)

* [listUsers](docs/sdks/accounts/README.md#listusers) - Show current user accounts

### [companies](docs/sdks/companies/README.md)

* [enrich](docs/sdks/companies/README.md#enrich) - Enrich a company profile
* [listEmployees](docs/sdks/companies/README.md#listemployees) - List company employees
* [listJobs](docs/sdks/companies/README.md#listjobs) - List company jobs
* [search](docs/sdks/companies/README.md#search) - Search Companies

### [people](docs/sdks/people/README.md)

* [enrich](docs/sdks/people/README.md#enrich) - Enrich a person profile
* [search](docs/sdks/people/README.md#search) - Search People

### [user](docs/sdks/user/README.md)

* [login](docs/sdks/user/README.md#login) - Login user
* [me](docs/sdks/user/README.md#me) - Show current user
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
