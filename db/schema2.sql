DROP DATABASE IF EXISTS testDB;

CREATE DATABASE testDB;

-- \c testDB;

DROP SCHEMA myschema CASCADE;

CREATE SCHEMA IF NOT EXISTS myschema;

DROP TABLE reviews;

CREATE TABLE reviews(
  review_id SERIAL NOT NULL PRIMARY KEY,
  house_id INT,
  guest_name VARCHAR(25) NOT NULL,
  date_created date,
  guest_review VARCHAR(100) NOT NULL,
  host_response VARCHAR(100),
  location_rating INT NOT NULL,
  checkIn_rating INT NOT NULL,
  value_rating INT NOT NULL,
  communication_rating INT NOT NULL,
  accuracy_rating INT NOT NULL,
  cleanliness_rating INT NOT NULL,
  user_id INT NOT NULL
--   FOREIGN KEY user_id REFERENCES guests(user_id),
--   FOREIGN KEY house_id REFERENCES listings(house_id)
);

-- CREATE TABLE listings (
  
--   host_name VARCHAR(25),
--   host_mage VARCHAR(25),
--   house_id serial REFERENCES reviews(house_id)
-- --   PRIMARY KEY (house_id)
-- );

-- CREATE TABLE guests(

--   user_name VARCHAR(25),
--   user_image VARCHAR(25),
--   user_id serial REFERENCES reviews(user_id)
-- --   PRIMARY KEY (user_id)
-- );