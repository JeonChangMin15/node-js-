const express = require("express");
const app = express(); //express 사용법

app.listen(8080, function () {
  console.log("listen on 8080");
}); // listen(서버띄울 포트번호, 띄운 후 실행할 코드)

// 누군가가 /pet 으로 방문을 하면 ... pet 관련된 안내문을 띄워주자

app.get("/beauty", function (request, response) {
  response.send("뷰티샵입니다!!1");
});

app.get("/pet", function (request, response) {
  response.send("여기는 펫 도메인입니다!!!1234");
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html"); // 보낼 페이지 경로를 적어주면 된다
});
