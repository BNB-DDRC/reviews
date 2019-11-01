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
POST /:roomId/reviews
```

#### Body
| Name          | Type          | Description   |
| :------------ | :-------------| :-------------|
| userId        | integer       | Required. User identifier.   |
| roomId        | integer       | Required. Room identifier for reviewed room.    |
| text          | string        | Required. The review description.     |
| locationRating| integer       | Required. Location rating ror reviewed room.     |
| checkInRating | integer       | Required. Check-in rating for reviewed room.     |
| value         | integer       | Required. Value rating for reviewed room.    |
| communication | integer       | Required. Communication rating for reviewed room.   |
| accuracy      | cleanliness   | Required. Accuracy rating for reviewed room.    |



### Read (GET)
Get reviews by keyword.

```bash
GET /:roomId/reviews
```

#### Parameters
| Name          | Type          | Description   |
| :------------ | :-------------| :-------------|
| roomId        | integer       | Required. Room identifier for specified room    |
| keyword       | array         | Optional. Filter reviews of the room by keyword(s)     |


### Response
| Name          | Type          | Description   |
| :------------ | :-------------| :-------------|
| userName      | string        | User name     |
| userImage     | string        | User image    |
| date          | date          | Date of posted review |
| text          | string        | User review body     |

### UPDATE
Update specific review with id for room listed.

```bash
UPDATE /:roomId/:reviewId
```

#### Parameter
| Name          | Type          | Description   |
| :------------ | :-------------| :-------------|
| reviewId      | integer       | Required. Review identifier for specified review to be updated.|


### DELETE
Delete specific review with id for room listed.

```bash
DELETE /:roomId/:reviewId
```

| Name          | Type          | Description   |
| :------------ | :-------------| :-------------|
| reviewId      | integer       | Required. Review identifier for specified review to be deleted.|


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

