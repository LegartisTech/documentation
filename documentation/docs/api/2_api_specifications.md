---
sidebar_position: 2
---

# Api Specifications

## Pagination

We use state of the art limit offset pagination. Use the following query parameters to control data loading.


| Parameter | Url                                 |
|:----------|:------------------------------------|
| limit     | Limits the result, Max. 100 entries |
| offset    | Offset of the results to be loaded  |



## Error Handling

If there's an issue with a request, the API will respond with an error message in the following format:

```json
{
  "code": "error_code",
  "detail": "Short explanation of the problem ocurred"
}
```

### Error status

Below you'll find a list of commonly used error status by legartis

| Status | Url                                                                                                                  |
|:-------|:---------------------------------------------------------------------------------------------------------------------|
| 400    | Generic response status.                                                                                             |
| 404    | Object or (related) entity not found.                                                                                |
| 405    | Method not allowed. This api request is likely not supported by legartis. Consult swagger docs for more information. |
| 429    | Too many requests. You probably got throttled.                                                                       |
| 500    | Server error - Those error codes will be automatically sent to legartis as they shouldn't happen.                    |

