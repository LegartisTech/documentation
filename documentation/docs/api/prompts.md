---
sidebar_position: 4
---

# Create data points
[Swagger API](https://apidocs.legartis.ai/?urls.primaryName=v2%2Fontology#/prompts.automatedcheckpoint/create_acp_by_id_v2)

All provided examples in this guide are shown in python code. To get the code in other programming languages, follow the third party integration guide howto import openapi specifications in Postman.

## Create prompt
A prompt is a question or statement designed to extract specific information from a contract.

```python
plabyook_id = 123 # Define playbook as described in playbook section

# Configure API client settings
configuration = Configuration()
configuration.host = os.environ["ONTOLOGY_SERVICE_HOST"]
configuration.access_token = ... # see getting started section

automated_checkpoint_api = AutomatedcheckpointApi(ApiClient(configuration))

# Define a UUID for a jurisdiction court boolean template
jurisdiction_court_boolean_template_id = "acc20b29-3a7d-43e2-ad89-aeb5eea5ec7a"  # uuid4()

# Create an automated checkpoint by ID
jurisdiction_court_boolean_acp: AutomatedCheckpointReadData = automated_checkpoint_api.create_acp_by_id_v2(
    body=AutomatedCheckpointCreateData(
        friendly_id="company_jurisdiction_court_prompt",
        provision_id="jurisdiction_courts",
        normalization_type=NormalizationType.BOOLEAN,
        templates=[
            SingleAutomatedCheckpointCreateData(
                id=jurisdiction_court_boolean_template_id,
                name="Jurisdiction Court Prompt",
                prompt="Is the court in Hamburg?",
                language="de",
                prompt_type="boolean",
                released=True,
                model=FLAN_MODEL_UUID,
            )
        ],
    ),
)

# Print friendly id which is a combination of {company}_{passed friendly_id}
print(jurisdiction_court_boolean_acp.friendly_id)

```

## Assign prompt to a playbook provision

[Swagger API](https://apidocs.legartis.ai/?urls.primaryName=v2%2Fontology#/provision.playbookprovision/update_full_playbook_provision_v2)

To evaluate a prompt, assign it to a playbook provision. A playbook provision is a subscription to a specific provision within a playbook, directly linking the prompt to the relevant section of the playbook.

```python
plabyook_id = 123 # Define playbook as described in playbook section
jurisdiction_court_boolean_friendly_id = "legartis_company_jurisdiction_court_prompt"

# Configure API client settings
configuration = Configuration()
configuration.host = os.environ["ONTOLOGY_SERVICE_HOST"]
configuration.access_token = ... # see getting started section

playbook_provision_api = PlaybookprovisionApi(ApiClient(configuration))

# Update the playbook provision with the created playbook and automated checkpoint
playbook_provision = playbook_provision_api.update_full_playbook_provision_v2(
    playbook_provision_id="5ee22753-4657-44dd-bc5d-e691dd13c888",
    body=FullPlaybookProvisionUpdate(
        playbook_provision=LegartisSdkOntologyServiceHttpHelperModelsPlaybookProvisionPlaybookProvisionUpdateData(
            provision_id="jurisdiction_courts",
            playbook_id=plabyook_id,  # see 'playbook section'
            enabled=True,
            definition_type="internal",
        ),
        standard_texts=[],
        prompts=[
            FullPlaybookProvisionPromptConnectionUpdateData(
                is_active=True,
                friendly_id=jurisdiction_court_boolean_friendly_id,
                rule=dict(
                    data=OrRuleInput(
                        terms=[
                            LocationRule(country_id="DE", region_id="DE-HH", city_id="1276041799"),
                        ]
                    )
                ),
            )
        ],
        manual_requirement=None,
    ),
)

# Print the updated playbook provision details
print(playbook_provision.playbook_provision.id)


```