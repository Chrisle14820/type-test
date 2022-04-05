const typingDiv = document.getElementById("typing");
const timerElement = document.getElementById("timer");
let timeLimit = 30;
let timeLeft = timeLimit;
let characterTyped = 0;
let timerText = document.getElementById("timer");
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
// const text = "Hello World";
const text = "There are two ways to type faster: The best way to increase typing speed is to learn to type the correct way. “Touch typing” means you are able to type with all 10 fingers instead of using a “hunt and peck” method of typing. You can learn how to touch type with Typing.com’s free typing lessons. The second way you can learn to type faster is by playing typing games. Keyboard games like Nitro Type can help you practice your typing speed and increase your words per minute score."

const characters = text.split("").map((char) => {
  const span = document.createElement("span");
  span.innerText = char;
  typingDiv.appendChild(span);
  return span;
});

let cursorIndex = 0;
let cursorCharacter = characters[cursorIndex];
cursorCharacter.classList.add("active");


document.addEventListener("keypress", e => {
  if (e.key === cursorCharacter.innerText) {
    // checks to see if the character being pressed matches the character on screen
    cursorCharacter.classList.remove("active");
    cursorCharacter.classList.remove("incorrect");
    cursorCharacter.classList.add("correct");
    characterTyped++
    // console.log(characterTyped);
    if (cursorIndex >= text.length - 1) {
      // alert("done")
      return;
    }

    cursorCharacter = characters[++cursorIndex];
    cursorCharacter.classList.add("active");
  } else if (e.key !== cursorCharacter.innerText) {
    // adds an incorrect name to the class name when the wrong character is pressed
    // cursorCharacter.classList.remove("active");
    cursorCharacter.classList.add("incorrect");
  }
});

// document.getElementById("startTimer").addEventListener("click", countTimer);
function startGame() {
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
};
function resetValues() {
  timeLeft = timeLimit;
  timeElapsed = 0;
  characterTyped = 0;
  timerText.textContent = timeLeft;
};
function updateTimer() {
  if (timeLeft > 0) {
    // decrease the current time left
    timeLeft--;
 
    // update the timer text
    timerText.textContent = timeLeft;
  }
  else {
    // finish the game
    finishGame();
  }
};
function finishGame() {
  clearInterval(timer)
  wpm = Math.round(((characterTyped / 5) / 0.5));
  timerText.textContent = "WPM: " + wpm
};
