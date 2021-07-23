# Flashcards

## Requirements

- Node v14
- Npm v6
- Connection to [mongoDB](https://www.mongodb.com/) instance v4

## Installation

1. Clone the repository: `git clone git@github.com:lydiamross/flashcards.git`
1. Enter the directory: `cd flashcards`
1. Install dependencies: `npm i`
1. Create a `.env` file by duplicating the `.env.example` and amending as necessary
1. Start the server: `node server.js`

## Development

1. Follow the installation steps above
1. Make new branch off `master`
1. Set the `NODE_ENV` variable in your `.env` file equal to `development`
1. Start the server: `npm start`
1. In another terminal enter the client directory: `cd client`
1. Install dependencies: `npm i`
1. Start the client: `npm start`
1. Make your changes using the client hotfixing

## Deployment

1. When your changes are ready to be deployed, run `npm run build` in the client directory
1. Squash and merge into master branch

## REST API Documentation

Find the API documentation [here](./docs/api-overview.md)