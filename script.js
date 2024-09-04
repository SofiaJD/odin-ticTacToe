let gameCells = document.querySelectorAll('.GameBoardCell');

(function Game()
{
    let gameBoard = createGameBoard(3, 3);
    gameBoard.ShowGameBoard();

    gameBoard.StartGameFlow(gameBoard);
})();


function createGameBoard(rows, columns)
{
    let board = new Array(rows);

    for(let i = 0; i < rows; i++ )
    {   
        board[i] = new Array(columns);
    }

    return { 
        ShowGameBoard: function()
        {
            gameCells.forEach((gameCell, index) => 
            {
                let row = Math.floor(index / columns);
                let col = index % columns;

                gameCell.textContent = board[row][col];
            });
        },

        StartGameFlow: function()
        {
            GameFlow(board);
        }
    };
}


function GameFlow(board) 
{
    let turn = 1; 

    gameCells.forEach((gameCell, index) => {
        gameCell.addEventListener("click", function () {
            let row = Math.floor(index / 3);
            let col = index % 3; 

            if (board[row][col] !== undefined) {
                alert('That position is taken. Please try a different one.');
                return;
            }

            if (turn % 2 === 0) {
                board[row][col] = "O";
                gameCell.textContent = "O";
            } else {
                board[row][col] = "X";
                gameCell.textContent = "X";
            }

            turn++;

            if (checkWinner(board)) {
                gameCells.forEach(gameCell => 
                {
                    gameCell.setAttribute('style', 'pointer-events:none');
                });
                return;
            }

            // Verifica si es empate
            if (turn > 9) {
                gameCells.forEach(gameCell => 
                    {
                        gameCell.setAttribute('style', 'pointer-events:none');
                    });

                alert("It's a tie! 🤝🏽");
            }
        });
    });
}

function checkWinner(board)
{
    //X wins (horizontal):
    if(board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X" || 
        board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X" ||
        board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
    {
        alert("Player X wins! 🏆");
        return true;
    }
    //X wins (vertical):
    else if(board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X" || 
            board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X" ||
            board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
    {
        alert("Player X wins! 🏆");
        return true;
    }
    //X wins (diagonal):
    else if(board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X" || 
            board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
    {
        alert("Player X wins! 🏆");
        return true;
    }

    //O wins (horizontal):
    if(board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O" || 
        board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O" ||
        board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
    {
        alert("Player O wins! 🏆");
        return true;
    }
    //O wins (vertical):
    else if(board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O" || 
            board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O" ||
            board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
    {
        alert("Player O wins! 🏆");
        return true;
    }
    //O wins (diagonal):
    else if(board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O" || 
            board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
    {
        alert("Player O wins! 🏆");
        return true;
    }

    return false;

}

//[0][0]    [0][1]  [0][2]
//[1][0]    [1][1]  [1][2]
//[2][0]    [2][1]  [2][2]