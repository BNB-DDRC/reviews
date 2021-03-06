import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m30s", target: 100 },
    { duration: "30s", target: 1000 },
    { duration: "20s", target: 0 }
  ]
};

export default function() {
  let res = http.get("http://localhost:3003/6/reviews");
  check(res, {
    "status was 200": r => r.status == 200,
    "transaction time OK": r => r.timings.duration < 200
  });
  sleep(1);
}
