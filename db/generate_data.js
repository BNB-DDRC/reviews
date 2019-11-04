const faker = require('faker');
const fs = require('fs');
var DateGenerator = require('random-date-generator');

const writeData = fs.createWriteStream('full_data.csv');

writeData.write(
  'house_id, review_id, accuracy_rating, checkin_rating, cleanliness_rating, communication_rating, date_created, guest_image, guest_name, guest_review, host_image, host_name, host_response, location_rating, value_rating\n',
  'utf8'
);
// writeData.write('house_id, review_id\n', 'utf8');
// 'house_id, review_id, guest_name, guest_avatar, date, guest_review, host_name, host_avatar, host_response, location_rating, checkIn_rating, value_rating, communication_rating, accuracy_rating, cleanliness_rating\n',
//   'utf8'

function writeTenMillionUsers(writer, encoding, callback) {
  var startDate = new Date(2018, 01, 01);
  var endDate = new Date(2019, 10, 10);
  var zeroThroughFive = function getRandomArbitrary(min, max) {
    var num = Math.random() * (max - min) + min;
    return num.toFixed(1);
  };
  let i = 10000000;
  // let i = 100;
  let review_id = 0;
  let house_id = 1;
  let counter = 0;
  let houseLimit = true;
  function write() {
    let ok = true;
    do {
      i -= 1;
      review_id += 1;
      // if (house_id === 10) {
      //   houseLimit = false;
      //   house_id = '';
      // }
      // if (houseLimit) {
      //   house_id++;
      // }

      if (counter === 10) {
        counter = 0;
        house_id++;
      }
      counter++;

      const guest_name = faker.internet.userName();
      const date = DateGenerator.getRandomDateInRange(startDate, endDate);
      const guest_image = faker.image.avatar();
      const guest_review = faker.lorem.paragraph();
      const host_name = faker.internet.userName();
      const host_image = faker.image.avatar();
      const host_response = faker.lorem.sentences();
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

writeTenMillionUsers(writeData, 'utf-8', () => {
  writeData.end();
});
