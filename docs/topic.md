# Topic

## Schema

Name | Type | Description
---- | ---- | -----------
_id | ObjectId | The id of this topic, a 24-character hexadecimal string
createdDate | Date | When this topic was created, default is the current date.
updatedDate | Date | When this topic was last updated.
name | String | The name of this topic
description | String | The description of this topic
cards | ObjectId[] | Array of [card](./topic.md#schema) ids this topic contains.
dateToNextBeRevised | Date | When this card is due to be revised, default is the current date.

### Example Model

```
{
  "cards": [
    "08b16930d36da74f0906169d"
  ],
  "name": "Computing definitions",
  "description": "COMP6013 module",
  "_id": "6058d0f9cf5ece12f50e53ea",
  "createdDate": "2021-03-22T17:16:41.475Z",
  "dateToNextBeRevised": "2021-03-22T17:16:41.475Z",
  "__v": 0
}
```

## Methods


### GET /topics
This route returns an array of topics, with a 200 response, containing the models as JSON in the body.

#### Example request:

```
GET https://comp6013-17030104.herokuapp.com/api/topics

```

#### Example response:

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "cards": [
        "08b16930d36da74f0906169d"
    ],
    "_id": "6058d0f9cf5ece12f50e53ea",
    "name": "Computing definitions",
    "description": "COMP6013 module",
    "createdDate": "2021-03-22T17:16:41.475Z",
    "dateToNextBeRevised": "2021-03-22T17:16:41.475Z",
    "__v": 0
  }
]
```


### GET /topics/:id
This route returns the topic with the specified id, with a 200 response, containing the model as JSON in the body.

#### Example request:

```
GET https://comp6013-17030104.herokuapp.com/api/topics/8471c20a803ae2675471941f
```

#### Example response:


```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "cards": [
      "08b16930d36da74f0906169d"
  ],
  "_id": "6058d0f9cf5ece12f50e53ea",
  "name": "Computing definitions",
  "description": "COMP6013 module",
  "createdDate": "2021-03-22T17:16:41.475Z",
  "dateToNextBeRevised": "2021-03-22T17:16:41.475Z",
  "__v": 0
}
```


### PUT /topics/:_id
This route creates a single topic with a 200 response, containing the model as JSON in the body.

#### Example request:
```
PUT https://comp6013-17030104.herokuapp.com/api/topics/8471c20a803ae2675471941g
Content-Type: application/json; charset=utf-8

{
  "cards": [
    "08b16930d36da74f0906169d"
  ],
  "name": "Computing definitions",
  "description": "COMP6013 module"
}
```

#### Example response:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```


### POST /topics/
This route creates new topics according to the model sent as JSON in the request body, with a 200 response.

#### Example request:

```
POST https://comp6013-17030104.herokuapp.com/api/topics
Content-Type: application/json; charset=utf-8

[{
  "cards": [
      "08b16930d36da74f0906169d"
  ],
  "name": "Computing definitions",
  "description": "COMP6013 module"
}]
```

#### Example response:


```
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "cards": [
      "08b16930d36da74f0906169d"
  ],
  "name": "Computing definitions",
  "description": "COMP6013 module",
  "_id": "6058d550cf5ece12f50e53eb",
  "createdDate": "2021-03-22T17:35:12.312Z",
  "dateToNextBeRevised": "2021-03-22T17:35:12.312Z",
  "__v": 0
}
```


### PATCH /topics/
This route updates topics according to the model sent as JSON in the request body, with a 200 response, the topic id is required in the body.

#### Example request:

```
PATCH https://comp6013-17030104.herokuapp.com/api/topics
Content-Type: application/json; charset=utf-8

{
  "_id": "6058d550cf5ece12f50e53eb",
  "description": "An updated field"
}
```

#### Example response:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "success": 1
}
```


### DELETE /topics/:_id
This route deletes a topic model with the specified id, with a 204 response.

#### Example request:

```
DELETE https://comp6013-17030104.herokuapp.com/api/topics/8471c20a803ae2675471941f
```

#### Example response:

```
HTTP/1.1 204 No Content
Content-Type: application/json; charset=utf-8
```