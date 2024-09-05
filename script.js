const gameCells = document.querySelectorAll('.GameBoardCell');
const btnStartGame = document.querySelector('#btnStart');
const cGameBoard = document.querySelector('#GameBoard');
const infoUsers = document.querySelector('#InfoUsers');
const modal = document.querySelector('#modal');
const txtUsername1 = document.querySelector('#username1');
const txtUsername2 = document.querySelector('#username2');
const message = document.querySelector('#message');
const lblPlayer1 = document.querySelector('#player1Name');
const lblPlayer2 = document.querySelector('#player2Name');
const lblPlayer1Score = document.querySelector('#player1Score');
const lblPlayer2Score = document.querySelector('#player2Score');
const btnResetGame = document.querySelector('#btnReset');

let user1, user2;

(function Game()
{
    btnStartGame.addEventListener('click', function(e)
    {
        if(txtUsername1.value == "")
        {
            user1 = createUsers("Player 1");
        }
        else
        {
            user1 = createUsers(txtUsername1.value);
        }

        if(txtUsername2.value == "")
        {
            user2 = createUsers("Player 2");
        }
        else 
        {
            user2 = createUsers(txtUsername2.value);
        }
    
        e.preventDefault();
    
        infoUsers.setAttribute('style', 'display:none');
        cGameBoard.setAttribute('style', 'display:grid');
    
        lblPlayer1.textContent = `${user1.getUsername()}:`;
        lblPlayer2.textContent = `${user2.getUsername()}:`;
    });

    startGame();

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

            if (turn > 9) 
                {
                gameCells.forEach(gameCell => 
                    {
                        gameCell.setAttribute('style', 'pointer-events:none');
                    });

                    modal.showModal();
                    message.textContent = "It's a tie. 🤝🏽 ";
            }
        });
    });
}

function checkWinner(board)
{
    //X won (horizontal):
    if(board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X" || 
        board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X" ||
        board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
    {
        modal.showModal();
        message.textContent = `${user1.getUsername()} won! 🏆`;

        user1.giveScore();
        lblPlayer1Score.textContent = user1.getScore();

        return true;
    }
    //X won (vertical):
    else if(board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X" || 
            board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X" ||
            board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
    {
        modal.showModal();
        message.textContent = `${user1.getUsername()} won! 🏆`;

        user1.giveScore();
        lblPlayer1Score.textContent = user1.getScore();

        return true;
    }
    //X won (diagonal):
    else if(board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X" || 
            board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
    {
        modal.showModal();
        message.textContent = `${user1.getUsername()} won! 🏆`;

        user1.giveScore();
        lblPlayer1Score.textContent = user1.getScore();

        return true;
    }

    //O won (horizontal):
    if(board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O" || 
        board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O" ||
        board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
    {
        modal.showModal();
        message.textContent = `${user2.getUsername()} won! 🏆`;

        user2.giveScore();
        lblPlayer2Score.textContent = user2.getScore();

        return true;
    }
    //O won (vertical):
    else if(board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O" || 
            board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O" ||
            board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
    {
        modal.showModal();
        message.textContent = `${user2.getUsername()} won! 🏆`;

        user2.giveScore();
        lblPlayer2Score.textContent = user2.getScore();

        return true;
    }
    //O won (diagonal):
    else if(board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O" || 
            board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
    {
        modal.showModal();
        message.textContent = `${user2.getUsername()} won! 🏆`;

        user2.giveScore();
        lblPlayer2Score.textContent = user2.getScore();

        return true;
    }

    return false;

}

function createUsers (username)
{
     let score = 0;

    return {
        getUsername: function()
        {
            return username; 
        } ,

        getScore: function()
        {
            return score; 
        }, 

        giveScore: function()
        {
            score++; 
        }, 

        resetScore: function()
        {
            score = 0;
        }
    }
}

function startGame()
{
    gameBoard = createGameBoard(3, 3);
    gameBoard.ShowGameBoard();

    gameBoard.StartGameFlow(gameBoard);
}

function resetGame()
{
    user1.resetScore();
    user2.resetScore();

    lblPlayer1Score.textContent = '0';
    lblPlayer2Score.textContent = user2.getScore();

    gameCells.forEach(gameCell => {
        gameCell.textContent = "";
    });
}


//[0][0]    [0][1]  [0][2]
//[1][0]    [1][1]  [1][2]
//[2][0]    [2][1]  [2][2]