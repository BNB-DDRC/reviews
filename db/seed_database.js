var data = require('./seed_data.js');
var mysql = require('mysql');
const fs = require('fs');
const csvParser = require('csv-parse');

const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'musicDB'
});

connection.connect();

const filePath =
  '/Users/richardcao/Documents/hackreactor/badqueso/reviews/data.csv';

var seedDb = function(data) {
  fs.readFile(
    filePath,
    {
      encoding: 'utf-8'
    },
    (err, csvData) => {
      if (err) {
        console.error(err);
      }

      csvParser(
        csvData,
        {
          columns: true,
          delimiter: ','
        },
        (err, data) => {
          if (err) {
            console.error(err);
          } else {
            let records = data;
            console.log(records);

            //  Load into table 'songs'
            for (let i = 0; i < records.length; i++) {
              //   var insertSongsQuery =
              //     'INSERT INTO songs(songName,songId, songNameURL, songArtURL, artistName, duration) VALUES (?,?,?,?,?,?)';
              var house_id = records[i].house_id;
              var review_id = records[i].review_id;
              var guest_name = records[i].guest_name;
              var guest_avatar = records[i].guest_avatar;
              var date = records[i].date;
              var guest_review = records[i].guest_review;
              var host_name = records[i].host_name;
              var host_avatar = records[i].host_avatar;
              var host_response = records[i].host_response;
              var location_rating = records[i].location_rating;
              var checkIn_rating = records[i].checkIn_rating;
              var value_rating = records[i].value_rating;
              var communication_rating = records[i].communication_rating;
              var accuracy_rating = records[i].accuracy_rating;
              var cleanliness_rating = records[i].cleanliness_rating;

              var queryArgs = [
                songName,
                songId,
                songURL,
                songArt,
                artistName,
                duration
              ];

              connection.query(insertSongsQuery, queryArgs, (err, results) => {
                if (err) {
                  console.log('Could not insert into database!');
                } else {
                  console.log('Inserted into database!');
                }
              });
            }
          }
        }
      );
    }
  );
};

seedDb(data);
