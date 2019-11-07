DROP KEYSPACE IF EXISTS DDRCReviews;

CREATE KEYSPACE IF NOT EXISTS DDRCReviews WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'};

USE DDRCReviews;

CREATE TABLE DDRCReviews.reviews (
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
    -- WITH CLUSTERING ORDER BY (review_id DESC);
-- );

COPY reviews(house_id, review_id, accuracy_rating, checkin_rating, cleanliness_rating, communication_rating, date_created, guest_image, guest_name, guest_review, host_image, host_name, host_response, location_rating, value_rating) FROM '/Users/richardcao/Documents/hackreactor/badqueso/reviews/full_data.csv' WITH HEADER=TRUE;
