let turn = "X";
let arr = document.getElementsByClassName("box");
reset = () => {
  for (let i = 0; i < 9; i++) {
    arr[i].innerHTML = "";
    turn = "X"; //other wise it starts with O
  }
  document.getElementById("won").innerHTML = "";
};
for (let i = 0; i < 9; i++) {
  arr[i].addEventListener("click", () => {
    if (arr[i].innerHTML === "") {
      arr[i].innerHTML = fun();
      turn = turn === "X" ? "O" : "X";
      if (checkDraw()) {
        document.getElementById("won").innerHTML = "DRAW";
        document.getElementById("won").style.fontSize = "20px";
      }
      if (checkWin()) turn = "";
    }
  });
}
checkDraw = () => {
  for (let i = 0; i < 9; i++) {
    if (arr[i].innerHTML === "") return false;
  }
  if (checkWin()) return false;
  return true;
};

checkWin = () => {
  let pos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < 8; i++) {
    let a = arr[pos[i][0]].innerHTML;
    let b = arr[pos[i][1]].innerHTML;
    let c = arr[pos[i][2]].innerHTML;
    if (a === "X" && b === "X" && c === "X") {
      document.getElementById("won").innerHTML = "X WON";
      document.getElementById("won").style.fontSize = "20px";
      return true;
    }
    if (a === "O" && b === "O" && c === "O") {
      document.getElementById("won").innerHTML = "O WON";
      document.getElementById("won").style.fontSize = "20px";
      return true;
    }
  }
  return false;
};
function fun() {
  if (turn === "") return "";
  return turn === "X" ? "O" : "X";
}
