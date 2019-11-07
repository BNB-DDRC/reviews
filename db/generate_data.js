const faker = require('faker');
const fs = require('fs');
var DateGenerator = require('random-date-generator');

const writeData = fs.createWriteStream('reviews2.csv');

writeData.write(
  'house_id, review_id, accuracy_rating, checkin_rating, cleanliness_rating, communication_rating, date_created, guest_image, guest_name, guest_review, host_image, host_name, host_response, location_rating, value_rating\n',
  'utf8'
);

//sql stuff

const writeDataToListings = fs.createWriteStream('listings.csv');
const writeDataToGuests = fs.createWriteStream('guests.csv');
const writeDataToReviews = fs.createWriteStream('reviews.csv');

writeDataToListings.write('house_id, host_name, host_image\n', 'utf8');
writeDataToGuests.write('user_id, user_name, user_image\n', 'utf8');
writeDataToReviews.write(
  'review_id, user_id, house_id, date_created, guest_review, host_response, location_rating, checkIn_rating, value_rating, communication_rating, accuracy_rating, cleanliness_rating\n',
  'utf8'
);

function writeTenMillionReviews(writer, encoding, callback) {
  var startDate = new Date(2018, 01, 01);
  var endDate = new Date(2019, 10, 10);
  var zeroThroughFive = function getRandomArbitrary(min, max) {
    var num = Math.random() * (max - min) + min;
    return num.toFixed(1);
  };
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let i = 999999999;
  // let i = 1000;
  let review_id = 0;
  let house_id = 1;
  let counter = 0;
  var reviewCount = getRandomArbitrary(1, 8);
  var hostResponseCount = getRandomArbitrary(15, 20);
  let hostResCounter = 0;

  function write() {
    let ok = true;

    do {
      i -= 1;
      review_id += 1;
      var host_response = '';

      // if (hostResCounter === hostResponseCount) {
      //   host_response = faker.lorem.sentences();
      //   hostResCounter = 0;
      // }

      if (counter === reviewCount) {
        reviewCount = getRandomArbitrary(1, 8);
        counter = 0;
        house_id++;
      }

      if (i % 100000 === 0) {
        console.log((house_id / 10000000) * 100 + '%');
      }

      // if (house_id === 10000000) {
      if (house_id === 1000) {
        i = 0;
      }
      counter++;
      hostResCounter++;

      const guest_name = faker.internet.userName();
      const date = DateGenerator.getRandomDateInRange(startDate, endDate);
      const guest_image = faker.image.avatar();
      const guest_review = faker.lorem.paragraph();
      const host_name = faker.internet.userName();
      const host_image = faker.image.avatar();
      // const host_response = faker.lorem.sentences();
      const location_rating = zeroThroughFive(0, 5);
      const checkIn_rating = zeroThroughFive(0, 5);
      const value_rating = zeroThroughFive(0, 5);
      const communication_rating = zeroThroughFive(0, 5);
      const accuracy_rating = zeroThroughFive(0, 5);
      const cleanliness_rating = zeroThroughFive(0, 5);

      const data = `${house_id},${review_id},${accuracy_rating},${checkIn_rating},${cleanliness_rating},${communication_rating},${date},${guest_image},${guest_name},${guest_review},${host_image},${host_name},${host_response},${location_rating},${value_rating}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

//listings csv
function writeTenMillionListings(writer, encoding, callback) {
  let i = 10000000;
  // let i = 100;
  let house_id = 0;

  function write() {
    let ok = true;

    do {
      i -= 1;
      house_id += 1;

      if (i % 100000 === 0) {
        console.log(Math.floor((house_id / 10000000) * 100) + '%');
      }

      const host_name = faker.internet.userName();
      const host_image = faker.image.avatar();

      const data = `${house_id},${host_name},${host_image}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}
//guests table
function writeTwoHundredMillionGuests(writer, encoding, callback) {
  let i = 200000;
  // let i = 100;
  let user_id = 0;

  function write() {
    let ok = true;

    do {
      i -= 1;
      user_id += 1;

      if (i % 10000 === 0) {
        console.log(Math.floor((user_id / 200000) * 100) + '%');
      }

      const user_name = faker.internet.userName();
      const user_image = faker.image.avatar();

      const data = `${user_id},${user_name},${user_image}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}
//reviews table
function writeTenMillionR(writer, encoding, callback) {
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  var startDate = new Date(2018, 01, 01);
  var endDate = new Date(2019, 10, 10);
  var zeroThroughFive = function getRandomArbitrary(min, max) {
    var num = Math.random() * (max - min) + min;
    return num.toFixed(1);
  };
  let i = 50000000;
  // let i = 100;
  let review_id = 0;
  // let house_id = getRandomArbitrary(1, 10000000);
  // let user_id = getRandomArbitrary(1, 200000);

  function write() {
    let ok = true;

    do {
      i -= 1;

      // let house_id = getRandomArbitrary(1, 100);
      // let user_id = getRandomArbitrary(1, 100);
      let house_id = getRandomArbitrary(1, 10000000);
      let user_id = getRandomArbitrary(1, 200000);
      // user_id += 1;
      review_id += 1;

      if (i % 100000 === 0) {
        console.log(Math.floor((review_id / 10000000) * 100) + '%');
      }

      const date_created = DateGenerator.getRandomDateInRange(
        startDate,
        endDate
      );
      const guest_review = faker.lorem.paragraph();
      // const host_response = faker.lorem.sentences();
      const host_response = '';
      const location_rating = zeroThroughFive(0, 5);
      const checkIn_rating = zeroThroughFive(0, 5);
      const value_rating = zeroThroughFive(0, 5);
      const communication_rating = zeroThroughFive(0, 5);
      const accuracy_rating = zeroThroughFive(0, 5);
      const cleanliness_rating = zeroThroughFive(0, 5);

      const data = `${review_id},${user_id},${house_id},${date_created},${guest_review},${host_response},${location_rating},${checkIn_rating},${value_rating},${communication_rating},${accuracy_rating},${cleanliness_rating}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}
//cassandra file
// writeTenMillionReviews(writeData, 'utf-8', () => {
//   writeData.end();
// });

// writeTenMillionListings(writeDataToListings, 'utf-8', () => {
//   writeDataToListings.end();
// });

// writeTwoHundredMillionGuests(writeDataToGuests, 'utf-8', () => {
//   writeDataToGuests.end();
// });

writeTenMillionR(writeDataToReviews, 'utf-8', () => {
  writeDataToReviews.end();
});
