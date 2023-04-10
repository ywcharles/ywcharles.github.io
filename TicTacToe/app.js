// program: TicTacToe
// purpose: Recreate a TicTacToe game
// author: Charles Wu


// Table that represents the board
let board = [
    ['','',''],
    ['','',''],
    ['','','']
];

let numTurn = 0
let turn = "X"
let turnDisplay = document.getElementById('turn');

function checkWinner(){
    // check if anyone won the game
    for (let row = 0; row < 3; row++){

        let boardRow = board[row]
        if ((boardRow[0] === boardRow[1] && boardRow[0] === boardRow[2]) && !(board[row][0] === '')){
            return (boardRow[0] + ' won');
        }
    }
    for (let col = 0; col < 3; col++){
        if ((board[0][col]=== board[1][col] && board[0][col]===board[2][col]) && !(board[0][col] === '')){
            return (board[0][col] +  ' won');
        }
    }
    if ((board[0][0] === board[1][1] && board[0][0] === board[2][2])&& !(board[0][0] === '')){
        return (board[0][0]  +  ' won');
    }
    else if ((board[0][2] === board[1][1] && board[0][2] === board[2][0])&& !(board[0][2] === '')){
        return (board[0][2]  +  ' won');
    }
}

function addToBoard(evt){
    let row = evt.target.parentElement.rowIndex;
    let col = evt.target.cellIndex;
    // Check if the cell is empty
    if (board[row][col] === '') {
        // Add the symbol to the cell
        evt.target.innerHTML = turn;
        board[row][col] = turn;
        // switch turns
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
        turnDisplay.innerHTML = ("Turn: "+turn)
        numTurn++
    }
    let result = checkWinner();
    // Display result and remove all event listeners from cells
    if (result){
        turnDisplay.innerHTML = (result)
        tds.forEach(function(td){
            td.removeEventListener('click', addToBoard);
        });
    }
    if (numTurn === 9){
        turnDisplay.innerHTML = "It's a draw"
    }
}

// selects the table and then selects each cell from the table
let myTable = document.getElementById('gameBoard');
let tds = myTable.querySelectorAll('td');

// adds an event listener to each cell
tds.forEach(function(td){
    td.addEventListener('click', addToBoard);
});





