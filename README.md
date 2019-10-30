# Reviews Service
This service allows CRUD operations.

## Related Projects
1. link to Carousel github
2. link to Reservations github
3. link to Calendar github


## Table of Contents

1. [API](#API)
2. [Installation](#Installation)
3. [Usage](#Usage)

## API
Routes

## URL
localhost:3003/rooms/:roomId

Using the entrypoint of URL, dynamically render the room page based on id.

## POST
localhost:3003/rooms/:roomId/newId

Create new review with new information.

## GET
localhost:3003/rooms/:roomId

Get all reviews for given room listed.

## UPDATE
localhost:3003/rooms/:roomId/reviewId

Update specific review with id for room listed.

## DELETE
localhost:3003/rooms/:roomId/reviewId

Delete specific review with id for room listed.

## Installation
1. In root directory, use [node package manager](https://www.npmjs.com/get-npm) to install dependencies.
```bash
npm install
```
2. Seed database
```bash
npm run seed-db
```
3. Run webpack
```bash
npm run dev-react
```
4. Start server 
```bash
npm start
```
## Usage
In browser, navigate to localhost:3003/1

