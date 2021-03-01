# Learnr

## Requirements

- Node v14
- Npm v6
- Connection to [mongoDB](https://www.mongodb.com/) instance v4

## Installation (on master)

1. Clone the repository: `git clone git@github.com:lydiamross/COMP6013.git`
1. Enter the directory: `cd COMP6013`
1. Install dependencies: `npm i`
1. Create a `.env` file by duplicating the `.env.example` and amending as necessary
1. Start the server: `node src/learnr.js`

## Developing

1. Clone the repository: `git clone git@github.com:lydiamross/COMP6013.git`
1. Enter the directory: `cd COMP6013`
1. Make new branch off `development` (this branch has server and client separate)
1. Enter the server directory: `cd server`
1. Install dependencies: `npm i`
1. Create a `.env` file by duplicating the `.env.example` and amending as necessary
1. Start the server: `node src/learnr.js`
1. In another terminal enter the client directory: `cd ../client`
1. Install dependencies: `npm i`
1. Start the client: `npm start`
1. Make your changes using the client hotfixing
1. Squash and merge into deployment branch
1. Run `npm run build` on the client, and move the newly created files in `client/build` to `src/server/public`
1. Squash and merge into master branch (this will automatically update heroku)

## Demo data

### Topics
```
  [
    {
      "_id": "b569ba485a314a7beacafca1",
      "name": "Principles of Secure Operating Systems",
      "cards": ["6b0960bf740cae2327efdd77", "4c5e65945ba2632a781d6525"],
      "dateToNextBeRevised": "2021-02-25T23:06:31.443Z"
    },
    {
      "_id": "1a75cfe68942a876702a201a",
      "name": "Java design patterns",
      "cards": ["b00337f669b95592ebbd9a4e", "82cd9bd30cfebff8c4c05876"],
      "dateToNextBeRevised": "2021-03-05T23:06:31.443Z"
    },
    {
      "_id": "8471c20a803ae2675471941f",
      "name": "Computing terms",
      "cards": ["08b16930d36da74f0906169d", "93a0b8390c0e12a969f870bb"],
      "dateToNextBeRevised": "2021-03-30T23:06:31.443Z"
    }
  ]
```

### Cards
```
  [
    {
      "_id": "6b0960bf740cae2327efdd77",
      "type": "simple",
      "topicId": "b569ba485a314a7beacafca1",
      "question": "What function does the broker play in the operating system",
      "answer": "To manage resources: Time, CPU, Memory, Disk access, etc.",
      "status": "confident",
      "dateToNextBeRevised": "2021-02-25T23:06:31.443Z"
    },
    {
      "_id": "4c5e65945ba2632a781d6525",
      "type": "simple",
      "topicId": "b569ba485a314a7beacafca1",
      "question": "What function does the interface play in the operating system",
      "answer": "To provide or connect with the basic user interface that is used immediately after the computer starts",
      "status": "neutral",
      "dateToNextBeRevised": "2021-02-28T23:06:31.443Z"
    },
    {
      "_id": "b00337f669b95592ebbd9a4e",
      "type": "simple",
      "topicId": "1a75cfe68942a876702a201a",
      "question": "What are behavioural patterns",
      "answer": "These design patterns are specifically concerned with communication between objects",
      "status": "neutral",
      "dateToNextBeRevised": "2021-02-27T23:06:31.443Z"
    },
    {
      "_id": "82cd9bd30cfebff8c4c05876",
      "type": "simple",
      "topicId": "1a75cfe68942a876702a201a",
      "question": "What are structural patterns",
      "answer": "These design patterns concern class and object composition, where inheritance is used to compose interfaces and define ways to compose objects to obtain new functionalities",
      "status": "unsure",
      "dateToNextBeRevised": "2021-03-01T23:06:31.443Z"
    },
    {
      "_id": "08b16930d36da74f0906169d",
      "type": "simple",
      "topicId": "8471c20a803ae2675471941f",
      "question": "Define idempotence",
      "answer": "An idempotent operation is an operation, action or request that can be applied multiple times without changing the result",
      "status": "unsure",
      "dateToNextBeRevised": "2021-03-07T23:06:31.443Z"
    },
    {
      "_id": "93a0b8390c0e12a969f870bb",
      "type": "simple",
      "topicId": "8471c20a803ae2675471941f",
      "question": "Define atomicity",
      "answer": "An operation is considered atomic if it is guaranteed to be isolated from other operations that may be happening at the same time",
      "status": "confident",
      "dateToNextBeRevised": "2021-03-20T23:06:31.443Z"
    }
  ]
```