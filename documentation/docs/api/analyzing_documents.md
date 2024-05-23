---
sidebar_position: 5
---

# Analyzing documents by api

All provided examples in this guide are shown in python code. To get the code in other programming languages, follow the third party integration guide howto import openapi specifications in Postman.

## Uploading a Document
[Swagger Document API](https://apidocs.legartis.ai/?urls.primaryName=v2%2Fdocument#/document/create_document_v2)

To upload a document, select the v2/Document API and then select the POST `/v2/document/document/` API.

```python
base_url = "api.legartis.ai" 
company = "demo_company" 
document_id = uuid.uuid4() 
pipeline_id = uuid.uuid4()
plabyook_id = 123 # Define playbook as described in playbook section

data = {
    "id": document_id, # UUID used later to pull the document
    "playbook_id": plabyook_id,
    "pipeline_id": pipeline_id, # UUID, automatically triggers the extraction/classification, not just the upload
    "company_id": company,
    "mime_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "title": "Test.docx", 
}
files = {'file': open('nda.docx', 'rb')}
headers = {"Authorization": f"Bearer {access_token}"}
response = requests.post(f"https://document.{base_url}/v2/document/document/", headers=headers, data=data, files=files)
response_data: dict = response.json()
```

## Receiving Document Data
[Swagger API](https://apidocs.legartis.ai/?urls.primaryName=v2%2Fworkflow#/workflow%20pipeline/retrieve_summary_by_id_v2)

To receive the extracted document data use the endpoint: /v2/workflow-pipeline/aggregated/{document_id}/

```python
data = {"company" : "demo_company" }
response = requests.get(f"https://workflow.{base_url}/v2/workflow-pipeline/task/aggregated/{document_id}/",params=data, headers=headers)
response_data: dict = response.json()
```


## Webhook integration

We support webhooks. Please send the URL to be notified to support@legartis.ai.