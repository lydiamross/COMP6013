# Card

## Schema

Name | Type | Description
---- | ---- | -----------
_id | ObjectId | The id of this card, a 24-character hexadecimal string
createdDate | Date | When this card was created, default is the current date.
updatedDate | Date | When this card was last updated.
type | Enum | The content type of this card, only `simple` is currently used.
topicId | ObjectId | Id of the [topic](./topic.md#schema) this card belongs to.
question | String | The question of this card **required*.
answer | String | The answer of this card **required*.
status | Enum | The last status of this card, either `confident`, `neutral`, or `unsure`,
dateToNextBeRevised | Date | When this card is due to be revised, default is tomorrow

### Example Model

```
{
  "_id": "93a0b8390c0e12a969f870bb",
  "createdDate": "2021-03-01T09:00:00.000Z",
  "updatedDate": "2021-03-01T10:10:00.000Z",
  "type": "simple",
  "topicId": "8471c20a803ae2675471941f",
  "question": "Define atomicity",
  "answer": "An operation is considered atomic if it is guaranteed to be isolated from other operations that may be happening at the same time",
  "status": "confident",
  "dateToNextBeRevised": "2021-03-11T10:10:00.000Z",
}
```

## Methods


### GET /cards
This route returns an array of cards, with a 200 response, containing the models as JSON in the body.

#### Example request:

```
GET https://comp6013-17030104.herokuapp.com/api/cards

```

#### Example response:

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "dateToNextBeRevised": "2021-03-15T17:04:19.441Z",
    "_id": "08b16930d36da74f0906169d",
    "type": "simple",
    "topicId": "8471c20a803ae2675471941f",
    "question": "Define idempotence",
    "answer": "An idempotent operation is an operation, action or request that can be applied multiple times without changing the result",
    "status": "confident",
    "createdDate": "2021-03-01T23:25:57.789Z",
    "__v": 0,
    "updatedDate": "2021-03-14T17:04:19.441Z"
  }
]
```


### GET /cards/:topicId
This route returns an array of cards belonging to the specific topic id, with a 200 response, containing the models as JSON in the body.

#### Example request:

```
GET https://comp6013-17030104.herokuapp.com/api/cards/8471c20a803ae2675471941f
```

#### Example response:


```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "dateToNextBeRevised": "2021-03-15T17:04:19.441Z",
    "_id": "08b16930d36da74f0906169d",
    "type": "simple",
    "topicId": "8471c20a803ae2675471941f",
    "question": "Define idempotence",
    "answer": "An idempotent operation is an operation, action or request that can be applied multiple times without changing the result",
    "status": "confident",
    "createdDate": "2021-03-01T23:25:57.789Z",
    "__v": 0,
    "updatedDate": "2021-03-14T17:04:19.441Z"
  }
]
```


### PUT /cards/:_id
This route creates a single card with a 200 response, containing the model as JSON in the body.

#### Example request:
```
PUT https://comp6013-17030104.herokuapp.com/api/cards/cf9a6ad366cca50e960511b1
Content-Type: application/json; charset=utf-8

{
  "topicId": "8471c20a803ae2675471941f",
  "question": "Define atomicity",
  "answer": "An operation is considered atomic if it is guaranteed to be isolated from other operations that may be happening at the same time"
}
```

#### Example response:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```


### POST /cards/
This route creates new cards according to the model sent as JSON in the request body, with a 200 response.

#### Example request:

```
POST https://comp6013-17030104.herokuapp.com/api/cards
Content-Type: application/json; charset=utf-8

[{
  "topicId": "8471c20a803ae2675471941f",
  "question": "Define atomicity",
  "answer": "An operation is considered atomic if it is guaranteed to be isolated from other operations that may be happening at the same time"
}]
```

#### Example response:


```
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "type": "simple",
  "status": "unsure",
  "dateToNextBeRevised": "2021-03-23T16:44:51.368Z",
  "topicId": "8471c20a803ae2675471941f",
  "question": "Define atomicity",
  "answer": "An operation is considered atomic if it is guaranteed to be isolated from other operations that may be happening at the same time",
  "_id": "6058ca1a3ffffb1226564e31",
  "createdDate": "2021-03-22T16:47:22.661Z",
  "__v": 0
}
```


### PATCH /cards/
This route updates cards according to the model sent as JSON in the request body, with a 200 response, the card id is required in the body.

#### Example request:

```
PATCH https://comp6013-17030104.herokuapp.com/api/cards
Content-Type: application/json; charset=utf-8

{
  "_id": "6058ca1a3ffffb1226564e31",
  "answer": "An updated field"
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


### DELETE /cards/:_id
This route deletes a card model with the specified id, with a 204 response.

#### Example request:

```
DELETE https://comp6013-17030104.herokuapp.com/api/cards/8471c20a803ae2675471941f
```

#### Example response:

```
HTTP/1.1 204 No Content
Content-Type: application/json; charset=utf-8

{
  "success": 1
}
```