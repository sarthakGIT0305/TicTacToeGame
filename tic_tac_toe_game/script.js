console.log("welcome to tic tac toe");
let bg_music = new Audio("/assets/bgmusic.mp3");
let move_music = new Audio("/assets/move-audio.mp3");
let turn = "X"; 

changeTurn = ()=>{
    return turn === "X" ? "O": "X"
}

