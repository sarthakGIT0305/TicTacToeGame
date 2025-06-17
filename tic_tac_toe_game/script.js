console.log("welcome to tic tac toe");
let bg_music = new Audio("/assets/bgmusic.mp3");
let move_music = new Audio("/assets/move-audio.mp3");
let turn = "X";

// changes turns
changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// check winning condition
const checkWin = () => {
  let boxtexts = document.getElementsByClassName('boxText');

  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  wins.forEach(e => {
    if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[1]].innerText !== "")){
      document.querySelector('.info').innerText = boxtexts[e[1]].innerText + " won";
    }
  })
};

// main game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      move_music.play();
      checkWin();
      document.getElementsByClassName(info)[0].innerText = "Turn for " + turn;
    }
  });
});
