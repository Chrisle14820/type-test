const typingDiv = document.getElementById("typing");
const timerElement = document.getElementById("timer");
// console.log(typingDiv);

// var cursor = true;
//         var speed = 250;
//         setInterval(() => {
//           if(cursor) {
//             document.getElementById('cursor').style.opacity = 0;
//             cursor = false;
//           }else {
//             document.getElementById('cursor').style.opacity = 1;
//             cursor = true;
//           }
//         }, speed);

// const text = "Stimulate test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.";
const text = "Hello World";

const characters = text.split("").map((char) => {
  const span = document.createElement("span");
  span.innerText = char;
  typingDiv.appendChild(span);
  return span;
});

let cursorIndex = 0;
let cursorCharacter = characters[cursorIndex];
cursorCharacter.classList.add("active");

document.addEventListener("keydown", ({ key }) => {
  console.log(key);
  if (key === cursorCharacter.innerText) {
    cursorCharacter.classList.remove("active");
    cursorCharacter.classList.add("done");
    if (cursorIndex >= text.length - 1) {
      // alert("done")
      return;
    }
    cursorCharacter = characters[++cursorIndex];

    cursorCharacter.classList.add("active");
  } else if (key === "Backspace") {
    if (cursorIndex < 1) {
      return;
    }
    cursorCharacter.classList.remove("active");
    cursorCharacter.classList.remove("done");
    cursorCharacter = characters[--cursorIndex];
    cursorCharacter.classList.remove("done");
    cursorCharacter.classList.add("active");
  }
});

function startTimer() {
  timerElement.innerText = 0;
}
