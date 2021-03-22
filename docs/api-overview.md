# REST API
The tables below describes the routes that the HTTP interface provides.

## Topic model
Method | Description
--- | ---
[GET /topics](./topic.md#get-topics) | Gets all the topics
[GET /topics/:id](./topic.md#get-topicsid) | Gets a single topic by id
[PUT /topics](./topic.md#put-topics_id) | Creates a single topic
[POST /topics](./topic.md#post-topics) | Creates one or many topics
[PATCH /topics](./topic.md#patch-topics) | Updates a topic
[DELETE /topics/:id](./topic.md#delete-topics_id) | Deletes a topic by id

## Card model
Method | Description
--- | ---
[GET /cards](./card.md#get-cards) | Gets all the cards
[GET /cards/:topicId](./card.md#get-cardstopicid) | Gets all the cards relating to a single topic
[PUT /cards/:_id](./card.md#put-cards_id) | Creates a single card
[POST /cards](./card.md#post-cards) | Creates one or many cards
[PATCH /cards](./card.md#patch-cards) | Updates a card
[DELETE /cards/:id](./card.md#delete-cards_id) | Deletes a card by id
