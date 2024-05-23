---
sidebar_position: 3
---

# Create playbook
[Swagger API](https://apidocs.legartis.ai/?urls.primaryName=v2%2Fontology#/playbook.playbook/create_playbook_v2)

A playbook is a collection of provision subscriptions that you want to analyze in a document. Typically, Legartis sets up an initial playbook for you.

```python
import os
from ontology_openapi_sdk import ApiClient, Configuration, PlaybookApi, PlaybookCreateData, PlaybookLanguageData

# Configure API client settings
configuration = Configuration()
configuration.host = os.environ["ONTOLOGY_SERVICE_HOST"]
configuration.access_token = ... # see getting started section

# Load existing playbooks
playbook_api = PlaybookApi(ApiClient(configuration))
for playbook in playbook_api.list_playbooks_v2().items:
    print(playbook.id, playbook.name)
```

```python
import os

from ontology_openapi_sdk import ApiClient, Configuration, PlaybookApi, PlaybookCreateData, PlaybookLanguageData

# Configure API client settings
configuration = Configuration()
configuration.host = os.environ["ONTOLOGY_SERVICE_HOST"]
configuration.access_token = ... # see getting started section

# Create a playbook with specified languages and company details
playbook_api = PlaybookApi(ApiClient(configuration))
plabyook = playbook_api.create_playbook_v2(
    body=PlaybookCreateData(
        languages=[
            PlaybookLanguageData(
                name="API Playbook",
                code="de",
                enabled=True,
            ),
            PlaybookLanguageData(
                name="API Playbook",
                code="en",
                enabled=True,
            ),
        ],
        company_id="{your authorized company id}",
        contract_type_id="nda_mutual",
    )
)

print(plabyook.id)

# Or load existing playbooks
for playbook in playbook_api.list_playbooks_v2().items:
    print(playbook.id, playbook.name)
```

## Get list of playbook provisions filtered by a playbook
[Swagger API](http://localhost:8095/?urls.primaryName=v2%2Fontology#/playbookprovision/list_playbook_provisions_v2)

```python
playbook_provision_api = PlaybookprovisionApi(ApiClient(configuration))
for playbook_provision in playbook_provision_api.list_playbook_provisions_v2(playbook_id=123):
    print(playbook_provision.id, playbook_provision)
```

## Get list of all provisions
[Swagger API](http://localhost:8095/?urls.primaryName=v2%2Fontology#/provision/list_provisions_v3)

```python
provision_api = ProvisionApi(ApiClient(configuration))
for provision in provision_api.list_provisions_v3(with_subscriptions=True).items:
    print(provision.id, provision)
```