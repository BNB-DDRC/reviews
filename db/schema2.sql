DROP DATABASE IF EXISTS DDRCReviews;

CREATE DATABASE DDRCReviews;

-- DROP SCHEMA reviewSchema CASCADE;

-- CREATE SCHEMA IF NOT EXISTS reviewSchema;

DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS guests;

CREATE TABLE listings (
  house_id SERIAL PRIMARY KEY,
  host_name VARCHAR(100),
  host_image VARCHAR(100)
);

CREATE TABLE guests (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(100),
  user_image VARCHAR(100)
);

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
--   user_id INT REFERENCES guests(user_id),
--   house_id INT REFERENCES listings(house_id),
  user_id INT REFERENCES guests(user_id),
  house_id INT REFERENCES listings(house_id),
  date_created VARCHAR(100),
  guest_review VARCHAR(500) NOT NULL,
  host_response VARCHAR(500),
  location_rating FLOAT NOT NULL,
  checkIn_rating FLOAT NOT NULL,
  value_rating FLOAT NOT NULL,
  communication_rating FLOAT NOT NULL,
  accuracy_rating FLOAT NOT NULL,
  cleanliness_rating FLOAT NOT NULL
);

-- CREATE TABLE listings_by_review(
--     user_id INT REFERENCES guests(user_id),
--     house_id INT REFERENCES listings(house_id),
--     review_id INT REFERENCES reviews(review_id)
-- )

COPY listings FROM '/Users/richardcao/Documents/hackreactor/badqueso/reviews/listings.csv' DELIMITERS ',' CSV header;
COPY guests FROM '/Users/richardcao/Documents/hackreactor/badqueso/reviews/guests.csv' DELIMITERS ',' CSV header;
COPY reviews FROM '/Users/richardcao/Documents/hackreactor/badqueso/reviews/reviews.csv' DELIMITERS ',' CSV header;