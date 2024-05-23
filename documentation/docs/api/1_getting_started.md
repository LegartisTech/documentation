---
sidebar_position: 1
---

# Getting Started Guide


The Legartis API allows third party integrators to access and integrate the functionality of Legartis with other applications. 


This guide is designed to get you started with the Legartis API. Here, you'll learn how to authenticate, request, and parse data from the Legartis API.




## Basic Information

### Services

| Service                      | Description                                                                  |
|:-----------------------------|:-----------------------------------------------------------------------------|
| Document Service | Managing and processing Documents                                            |
| Ontology Service | Managing customer and legartis definitions and contract standard information |
| Pythia Service   | Doing magic AI work                                                          |
| User Service     | Keeping user and company information                                         |
| Workflow Service | Responsible to process document analysis from A to Z                         |


### Service Endpoints

| Service                        | Url                                               |
|:-------------------------------|:--------------------------------------------------|
| Document - Base API Url        | https://document.api.legartis.ai                  |
| Ontology - Base API Url        | https://ontology.api.legartis.ai                  |
| Pythia - Base API Url          | https://pythia.api.legartis.ai                    |
| User - Base API Url            | https://user.api.legartis.ai                      |
| Workflow - Base API Url        | https://workflow.api.legartis.ai                  |


### OpenAPI 3 Specifications

| Service                     | Url                                              |
|:----------------------------|:-------------------------------------------------|
| Auto generated Swagger Docs | https://apidocs.legartis.ai/                     |
| Document Service            | https://document.api.legartis.ai/v2/openapi.json |
| Ontology Service            | https://ontology.api.legartis.ai/v2/openapi.json |
| Pythia Service              | https://pythia.api.legartis.ai/v2/openapi.json   |
| User Service                | https://user.api.legartis.ai/v2/openapi.json     |
| Workflow Service            | https://workflow.api.legartis.ai/v2/openapi.json |


## Authentication


First step to use legartis api's is to get familar with authentication and authorization. 

We are using state of the art OpenID connect provided by keycloak. 

All requests to the Legartis API will need to be authenticated. This is done by providing your API key in the request.


| Service            | Url                                              |
|:-------------------|:-------------------------------------------------|
| OpenID Connect     | https://auth.legartis.ai/                        |


To create an access token, run the following command in your terminal:

```bash
curl --location 'https://auth.legartis.ai/realms/legartis/protocol/openid-connect/token' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'client_id={client_id_provided_by_legartis}' \
  --data-urlencode 'client_secret={client_secret_provided_by_legartis}' \
  --data-urlencode 'grant_type=client_credentials'
```

## API Request

Replace `access_token` with the access token you received in the last step.

```bash
curl -H "Authorization: Bearer {access_token}" \ 
  --location 'https://ontology.api.legartis.ai/v2/provision/' \
  --header 'Accept: application/json'
```

## Conclusion

This guide should help you get started with the Legartis API. Please note that API features may be added, removed, or changed in the future. 

We'll always mark deprecated api's in advance before removing them.