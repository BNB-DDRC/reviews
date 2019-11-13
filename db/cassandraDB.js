var cassandra = require('cassandra-driver');
var client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'ddrcreviews'
});

client.connect(err => {
  if (err) {
    // console.log('Could not connect to Cassandra DB!');
    console.error(err);
  } else {
    console.log('Cassandra connected');
  }
});

const getAllReviewIds = callback => {
  var getAllReviewIds = `SELECT * FROM reviews where house_id = 9999999`;
  client.execute(getAllReviewIds, [], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  getAllReviewIds: getAllReviewIds
};
