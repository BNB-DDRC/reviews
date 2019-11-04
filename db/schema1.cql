DROP KEYSPACE IF EXISTS donutstore;

CREATE KEYSPACE IF NOT EXISTS donutstore WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'};

CREATE TABLE donutstore.reviews (
    house_id INT,
    review_id INT,
    accuracy_rating FLOAT,
    checkIn_rating FLOAT,
    cleanliness_rating FLOAT,
    communication_rating FLOAT,
    date_created VARCHAR,
    guest_image VARCHAR,
    guest_name VARCHAR,
    guest_review VARCHAR,
    host_image VARCHAR,
    host_name VARCHAR,
    host_response VARCHAR,
    location_rating FLOAT,
    value_rating FLOAT,
    PRIMARY KEY (house_id, review_id)
);

-- INSERT INTO donutstore.reviews (house_id, review_id, guest_name, date_created, guest_review, guest_image) VALUES (1, 1, 'bob smith', toTimeStamp(now()), 'place is good', 'random guest image url');