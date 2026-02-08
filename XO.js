const message = document.getElementById("message");
const btn = document.getElementById("ButtonStart");
const statusText = document.getElementById("status");

btn.addEventListener("click", () => {
  message.innerText = "The game has started";
  setTimeout(() => message.remove(), 3000);
});

const cells = document.querySelectorAll(".cell");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const Winning = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => CheckClicked(cell, index));
});

function CheckClicked(cell, index) {
  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  checkForResult();
}

function checkForResult() {
  for (let condition of Winning) {
    const [a, b, c] = condition;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      gameActive = false;

      if (currentPlayer === "X") {
        statusText.textContent = "You win ❤️ Moving on...";
        setTimeout(() => {
          window.location.href = "hearts.html";
        }, 2000);
      } else {
        statusText.textContent = "You lost 😭 Try again";
      }
      return;
    }
  }

  // switch turns
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}


