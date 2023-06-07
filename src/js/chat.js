const socket = io(); // io() 함수를 통해 이 객체에 클라이언트 소켓이 담긴다.

// socket.emit("chatting", "1. from front"); // 주고받고를 구현 첫 번째. 보내준다!(.1) emit() 함수를 통해, 'chatting이라는 id의 채널'과 내용 문자열을 서버에 보낸다.
// socket.on("chatting", (data_recieved) => {
//   console.log(`4. done! ${data_recieved}`); // 확인받았다.(.4) 콘솔에는 다음과 같이 찍힌다. // 4. done! 2-3. hellooo! 1. from front
// });

const nickname = document.querySelector("#nickname");
const chatlist = document.querySelector(".chatting-list");
const chatinput = document.querySelector(".chatting-input");
const sendbutton = document.querySelector(".send-button");

sendbutton.addEventListener("click", () => {
  const param = {
    name: nickname.value,
    msg: chatinput.value,
  };
  socket.emit("chatting", param);
});
