const axios = require("axios");
let apiUrl=''

apiUrl = "http://localhost:7000/api/votes/1";
axios.get(apiUrl).then((res) => {
  console.log("kakunin_status:", res.status);
  console.log("kakunin_data:", res.data)
});

 apiUrl = "http://localhost:7000/api/votes";
axios.get(apiUrl).then((res) => {
  console.log("kakunin_status:", res.status);
  console.log("kakunin_data:", res.data)
});

// apiUrl = "http://localhost:7000/api/answer";
// axios.post(apiUrl,{user_id: 3, vote_title_id: 2,answer:1},).then((res) => {
//   console.log("kakunin_status:", res.status);
//   console.log("kakunin_data:", res.data)
// });

