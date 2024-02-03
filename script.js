let boxes = document.querySelectorAll(".section");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
let newGameBtn = document.querySelector("#new-game-container");

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
for (let box of boxes) {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
    count++;
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
}
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
   let color = document.querySelector("#msg");
   color.style.backgroundColor="red";
  };

const winnerMsg = (winner) => {
    msg.innerText = `Congratulation, You won 👑 ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

  
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };


  resetBtn.addEventListener("click", () => {
    resetGame();
  });
  newGameBtn.addEventListener("click", resetGame);

const checkWinner = () => {
  for (let pattern of winPattern) {
    let patValue1 = boxes[pattern[0]].innerText;
    let patValue2 = boxes[pattern[1]].innerText;
    let patValue3 = boxes[pattern[2]].innerText;
    if (patValue1 !== "" && patValue2 !== "" && patValue3 !== "") {
      if (patValue1 === patValue2 && patValue2 === patValue3) {
        winnerMsg(patValue1);
      }
    }
  }
};

