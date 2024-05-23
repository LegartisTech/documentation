---
sidebar_position: 5
---

# Analyzing documents by api

All provided examples in this guide are shown in python code. To get the code in other programming languages, follow the third party integration guide howto import openapi specifications in Postman.

## Uploading a Document
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
To receive the extracted document data use the endpoint: /v2/workflow-pipeline/aggregated/{document_id}/


```python
data = {"company" : "demo_company" }
response = requests.get(f"https://workflow.{base_url}/v2/workflow-pipeline/task/aggregated/{document_id}/",params=data, headers=headers)
response_data: dict = response.json()
```

[//]: # (The JSON object that is being returned, has the following format:)

[//]: # ()
[//]: # (table)

[//]: # ()
[//]: # ()
[//]: # (The Payload includes the most relevant data points. The Legartis API returns two types of information:)

[//]: # ()
[//]: # (A&#41; Information about Clauses &#40;also called PTs, see PT Predictions&#41;)

[//]: # ()
[//]: # (B&#41; Information about Key Data Points &#40;also called KDPs, see KDP Predictions&#41;)

[//]: # ()
[//]: # (PT Predictions)

[//]: # (Returns a list of all the Clauses &#40;PTs&#41; that were predicted by the classifier, including:)

[//]: # ()
[//]: # ("provision_id": string id of the clause found.)

[//]: # ("segment_id": reference to the actual sentence.)

[//]: # ("classifier_id": which classifier version was used)

[//]: # ("confidence": Confidence of the classifier, that this sentence is this type of clause.)

[//]: # (KDP Predictions)

[//]: # (Returns a list of all the Key Data Points that were found in the sentences, including:)

[//]: # ()
[//]: # ("segment_id": reference to the actual sentence,)

[//]: # ()
[//]: # ("status": whether extraction was successful)

[//]: # ()
[//]: # ("definition_name": name of the Key Data Point,)

[//]: # ()
[//]: # ("definition_type": Type of the Key Data Point,)

[//]: # ()
[//]: # (the "data" property includes all relevant data points:)

[//]: # ()
[//]: # ("spans": List containing more precise parts of the text, that are relevant &#40;optional&#41;.)

[//]: # ("class_type": We currently support location data, duration data, amount data and categorical data.)

[//]: # (Location Data)

[//]: # ()
[//]: # ("type": If a location was found, this includes whether it is a city, region or country)

[//]: # ("city_id": unique identifier, which city was extracted,)

[//]: # ("region_id": unique identifier, which region was extracted,)

[//]: # ("country_id": unique identifier, which country was extracted,)

[//]: # ("place_id": additional unique identifier &#40;optional&#41;)

[//]: # (Duration Data)

[//]: # ()
[//]: # ("duration": a integer describing the duration &#40;e.g. 1 in 1 month&#41;)

[//]: # ("duration_unit": a string, describing the duration, can be "month", "year", "week", "day")

[//]: # (Amount Data)

[//]: # ()
[//]: # ("amount": a integer describing the Amount)

[//]: # ("amount_unit": a string, describing the unit, e.g. "CHF", "EUR", "USD")

[//]: # ()
[//]: # (List of Key Data Points)

[//]: # (The number and type of Key Data Points we are extracting is ever changing and expanding. Please find below a list of a few. For a complete list please contact us.)

[//]: # ()
[//]: # (Durations)

[//]: # ()
[//]: # (These Key Data Points include normalized durations consisting of a integer and a unit &#40;year, month, week, day&#41;.)

[//]: # ()
[//]: # (duration_of_contract_all_durations: All durations that are mentioned in regards to the contract duration in normalized form &#40;e.g. 3 months, 2 years&#41;)

[//]: # (notice_period_all_durations: All durations that are)