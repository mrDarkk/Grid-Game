let sign = "X";
let disp = document.getElementById("player");
let box;

function printMark(number) {
    let box = document.getElementById("r" + number); // Selecting the element by its ID and storing its value to box

    if (box.innerText == "") //checking for the empty ones
    {
        box.innerText = sign; //sign is assigned only when it's empty initially
        winnerOfGame();
        checkSign();
        disp.innerHTML = "<center>Turn : " + sign + "  's Turn" + "</center>"; //displays which players's turn
    }
}
// To change the sign on respective turn
function checkSign() {
    if (sign == "X") {
        sign = "O";
    } else sign = "X";
}
//A handy function that will be used further
function getBox(no) {
    return document.getElementById("r" + no).innerHTML;
}
///For checking the moves

function checkMove(a, b, c, m) {
    if (getBox(a) == m && getBox(b) == m && getBox(c) == m) return true;
    else return false;
}
//master function to decide the winner of this game

function winnerOfGame() {
    if (
        checkMove(1, 2, 3, sign) ||
        checkMove(4, 5, 6, sign) ||
        checkMove(7, 8, 9, sign) ||
        checkMove(1, 4, 7, sign) ||
        checkMove(2, 5, 8, sign) ||
        checkMove(3, 6, 9, sign) ||
        checkMove(1, 5, 9, sign) ||
        checkMove(7, 5, 3, sign)
    ) {
        disp.innerHTML = "<center> Congratulations!! " + sign + " you Won This Match <i class='fas fa-chess-queen' style='font-size:28px;color:green'></i>" + "</center>";
        for (let i = 1; i <= 9; i++) {
            document.getElementById("r" + i).innerHTML = "";
        } // to reset the game once a player wins
        throw "Game End"; // so that game doesn't continue after winning
    } else {
        if ( // for non-empty boxes with no player winning
            getBox(1) != "" &&
            getBox(2) != "" &&
            getBox(3) != "" &&
            getBox(4) != "" &&
            getBox(5) != "" &&
            getBox(6) != "" &&
            getBox(7) != "" &&
            getBox(8) != "" &&
            getBox(9) != ""
        ) {
            disp.innerHTML = "<center> ohhhh!! It's a Tie ... <i class='far fa-frown' style='font-size:28px;color:red'></i></center>";
            for (let i = 1; i <= 9; i++) {
                document.getElementById("r" + i).innerHTML = "";
            }
            throw "IT'S A TIE";

        }
    }
}