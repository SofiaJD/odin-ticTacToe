// (function GameBoard ()
// {
//     let rows = 3; 
//     let columns = 3; 
    
//     let board = new Array(rows);

//     for(let i = 0; i < rows; i++ )
//     {   
//         board[i] = new Array(columns);
//     }

//     return { showGameBoard: function()
//         {
//             console.log(board);
//         }
//      };
// })();

// const varGameBoard = GameBoard();
// varGameBoard.showGameBoard();


// GameBoard.showGameBoard;

(function Game()
{
    let rows = 3; 
    let columns = 3; 
    
    let board = new Array(rows);

    for(let i = 0; i < rows; i++ )
    {   
        board[i] = new Array(columns);
    }

    console.log(board);

    GameFlow(board);

})();

function GameFlow(board)
{
    for(let i = 1; i < 10; i++)
    {
        console.log(i + "° turno:");

        let fila = prompt("Ingrese la posicion (fila) del movimiento:");
        console.log("La fila es: " + fila);
    
        let columna = prompt("Ingrese la posicion (columna) del movimiento:");
        console.log("La columna es: " + columna);

        if(board[fila][columna] != undefined )
        {
            console.log('Esa posicion esta ocupada. Intente con una diferente.');
            i--; 
        }
        else 
        {
            if(i % 2 == 0)
            {
                board[fila][columna] = "O"; 
            }
            else 
            {
                board[fila][columna] = "X";
            }
        }
        
        console.log(board);

        if(checkWinner(board))
        {
            break;
        }

        if(i == 9 && !checkWinner(board))
        {
            console.log("It's a tie! 🤝🏽");
        }
    }
}

function checkWinner(board)
{
    //X wins (horizontal):
    if(board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X" || 
        board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X" ||
        board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
    {
        console.log("Player X wins! 🏆");
        return true;
    }
    //X wins (vertical):
    else if(board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X" || 
            board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X" ||
            board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
    {
        console.log("Player X wins! 🏆");
        return true;
    }
    //X wins (diagonal):
    else if(board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X" || 
            board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
    {
        console.log("Player X wins! 🏆");
        return true;
    }

    //O wins (horizontal):
    if(board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O" || 
        board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O" ||
        board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
    {
        console.log("Player O wins! 🏆");
        return true;
    }
    //O wins (vertical):
    else if(board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O" || 
            board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O" ||
            board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
    {
        console.log("Player O wins! 🏆");
        return true;
    }
    //O wins (diagonal):
    else if(board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O" || 
            board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
    {
        console.log("Player O wins! 🏆");
        return true;
    }

    return false;

}

//[0][0]    [0][1]  [0][2]
//[1][0]    [1][1]  [1][2]
//[2][0]    [2][1]  [2][2]
