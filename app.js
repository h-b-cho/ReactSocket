const express = require("express");
const http = require("http");
const app = express();
const path = require("path"); // 기본 모듈 불러오기...
const server = http.createServer(app); // const server = require("http").createServer(require("express"));

//소켓아이오를 받아오기 위해 서버 세팅
const socketIO = require("socket.io");
const io = socketIO(server); // const io = socketIO(http.createServer(express()));

app.use(express.static(path.join(__dirname, "src")));

const PORT = process.env.PORT || 5000; // 프로세스 환경에 포트가 지정되어있을 경우 그것을 사용하고 아니라면 5000번 포트를 사용

// app.listen(PORT, () => console.log(`server is running ${PORT}`));
server.listen(PORT, () => console.log(`server is running ${PORT}`));

// nodemon lib 설치 안 했다... js 파일 변경마다 서버 재가동

io.on("connection", (socket) => {
  // 인자는 각각 method 이름, 산출된 object. 'connection method를 사용할 것이고, 커넥션이 이뤄지면 연결에 대한 모든 정보 등을 이 객체에 담는다.' 여기까지가 1차적인 서버 구축. 이제 주고받고를 구현하자.
  socket.on("chatting", (data_from_cli) => {
    // 받는다!(.2)
    io.emit("chatting", `2-3. hellooo! ${data_from_cli}`); // 받고 나서 다시 프론트로 보낸다.(.3)
  });
});
