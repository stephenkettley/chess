const gameBoard = document.getElementById("gameboard");
const playerDisplay = document.getElementById("player");
const infoDisplay = document.getElementById("info-display");

const width = 8;
const startPieces = [
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
];

function createBoard() {
  startPieces.forEach((piece, index) => {
    const square = document.createElement("div");
    square.setAttribute("square-id", index);
    square.classList.add("square");
    square.innerHTML = piece;

    const row = Math.floor((63 - index) / 8) + 1;
    console.log(row);

    if (row % 2 == 0) {
      square.classList.add(index % 2 == 0 ? "purple" : "green");
    } else {
      square.classList.add(index % 2 == 0 ? "green" : "purple");
    }

    if (index <= 15) {
      square.firstChild.firstChild.classList.add("white");
    }

    gameBoard.append(square);
  });
}

createBoard();
