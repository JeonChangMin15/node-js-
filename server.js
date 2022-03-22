const express = require("express");
const app = express(); //express 사용법
app.use(express.urlencoded({ extended: true })); // 바디파서는 데이터를 읽어오는걸 도와주는 라이브러리다

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://cckdals111:boingo30629@cluster0.5f3sy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  function (error, client) {
    if (error) return console.log(error);
    //서버띄우는 코드 여기로 옮기기
    app.listen("8080", function () {
      console.log("listening on 8080");
    });
  }
);

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

app.get("/write", (request, response) => {
  response.sendFile(__dirname + "/write.html"); // 보낼 페이지 경로를 적어주면 된다
}); // 함수안에 함수가 들어가면 콜백함수다 -> 단계적 순차적으로 실행하고 싶을때 콜백함수를 사용한다

// post를하면 해당 경로로 응답을 준다
app.post("/add", (request, response) => {
  response.send("전송완료");
  console.log(request.body.title);
  console.log(request.body.date);
});
