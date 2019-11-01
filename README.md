# Reviews Service
This service allows CRUD operations.

## Related Projects
1. https://github.com/BNB-DDRC/photo-gallery
2. https://github.com/BNB-DDRC/reservations
3. https://github.com/BNB-DDRC/calendar


## Table of Contents

1. [API](#API)
2. [Installation](#Installation)
3. [Usage](#Usage)

## API Documentation


### Create (POST)
Create new review with new information.

```bash
POST /:roomId/newId
```


### Read (GET)
Get all reviews for given room listed.

```bash
GET /:roomId/reviews
```

### UPDATE
Update specific review with id for room listed.

```bash
UPDATE /:roomId/:reviewId
```

### DELETE
Delete specific review with id for room listed.
```bash
DELETE /:roomId/:reviewId
```

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

