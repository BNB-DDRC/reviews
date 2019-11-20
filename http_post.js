import http from "k6/http";

export default function() {
  var url = "http://localhost:3000/10000002/reviews";
  var payload = JSON.stringify({
    review_id: 39990207,
    accuracy_rating: 4.400000095367432,
    checkin_rating: 5,
    cleanliness_rating: 4.300000190734863,
    communication_rating: 4.199999809265137,
    date_created: "Sept 10, 2019",
    guest_image: "guest image",
    guest_name: "guest name",
    guest_review: "review wooo",
    host_image: "host image",
    host_name: "host name",
    host_response: "response wooo",
    location_rating: 4.300000190734863,
    value_rating: 4.199999809265137
  });
  var params = { headers: { "Content-Type": "application/json" } };
  http.post(url, payload, params);
}
