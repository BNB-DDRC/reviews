var cassandra = require("cassandra-driver");
var client = new cassandra.Client({
  contactPoints: ["127.0.0.1"],
  localDataCenter: "datacenter1",
  keyspace: "ddrcreviews"
});

client.connect(err => {
  if (err) {
    // console.log('Could not connect to Cassandra DB!');
    console.error(err);
  } else {
    console.log("Cassandra connected");
  }
});

const getAllReviewIds = (req, res, callback) => {
  // let house_id = req.body.id;
  let id = req.params.houseId;
  var getAllReviewIds = `SELECT * FROM reviews where house_id = ${id}`;
  client.execute(getAllReviewIds, [], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const postReview = (req, res, callback) => {
  var body = req.body;
  var id = req.params.houseId;
  var postReviewQuery = `INSERT INTO reviews(
    house_id, review_id, accuracy_rating, checkin_rating, cleanliness_rating, communication_rating, 
    date_created, guest_image, guest_name, guest_review, host_image, host_name, host_response, 
    location_rating, value_rating) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `;
  const params = [
    // 10000001,
    id,
    // 39990206,
    body.review_id,
    // 4.4,
    body.accuracy_rating,
    // 5.0,
    body.checkin_rating,
    // 4.3,
    body.cleanliness_rating,
    // 4.2,
    body.communication_rating,
    // "Sept 10, 2019",
    body.date_created,
    // "guest image",
    body.guest_image,
    // "guest name",
    body.guest_name,
    // "review wooo",
    body.guest_review,
    // "host image",
    body.host_image,
    // "host name",
    body.host_name,
    // "response wooo",
    body.host_response,
    // 4.3,
    body.location_rating,
    // 4.2
    body.value_rating
  ];

  client
    .execute(postReviewQuery, params, { prepare: true })
    .then(() => {
      console.log("Inserted into db!");
      res.sendStatus(200);
    })
    .catch(() => {
      console.log("Error!");
    });

  // client.execute(postReviewQuery, params, (err, result) => {
  //   if (err) {
  //     callback(err, null);
  //   } else {
  //     callback(null, result);
  //   }
  // });
};

module.exports = {
  getAllReviewIds: getAllReviewIds,
  postReview: postReview
};
