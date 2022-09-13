
const gameboard = (function () {
    let gameboardArray = ["", "", "", "", "", "", "", "", ""];

    return {
        gameboardArray,
    }

})();

const gameLogic = (function () {

    const squares = document.querySelectorAll(".gameboard-square");
    const windowGameOver = document.querySelector(".window-game-over");
    const windowRestartButton = document.querySelector(".restart-button-window");
    const result =document.querySelector(".result");


    let squareIndex = 0;

    const play = function () {
        let playerTurn = true;

        windowRestartButton.addEventListener("click", ()=>{
            gameLogic.restartGame();
        })

        squares.forEach(e => {
            e.addEventListener("click", () => {
                squareIndex = e.dataset.index;
            
                if (!gameboard.gameboardArray[squareIndex]) {
                    if (playerTurn === true) {
                        
                        e.classList.toggle("blue");
                        gameboard.gameboardArray[e.dataset.index] = "x";
                        playerTurn = false;
                    } else if (playerTurn === false) {
                        /* e.classList.add("red"); */
                        gameboard.gameboardArray[e.dataset.index] = "o";
                        playerTurn = true;
                
                    }
                    
                }
                gameLogic.fillGameboard();
                gameLogic.isgameOver();
                gameLogic.isATie();
                
            })
        })
    }


    const fillGameboard = function () {
        let index = 0;
        for (index; index <= 8; index++) {
            squares[index].innerHTML = gameboard.gameboardArray[index];
        }
    }

    const restartGame = function(){
        gameboard.gameboardArray = ["","","","","","","","",""];
        fillGameboard();
        windowGameOver.classList.toggle("hidden");
        squares.forEach((e) => {
            e.classList.remove("green");
        })
        resetColors();
    }

    const isATie = function () {
        if (gameboard.gameboardArray[0] && gameboard.gameboardArray[1] && gameboard.gameboardArray[2] && gameboard.gameboardArray[3] && gameboard.gameboardArray[4] && gameboard.gameboardArray[5] && gameboard.gameboardArray[6] && gameboard.gameboardArray[7] && gameboard.gameboardArray[8]) {
            windowGameOver.classList.toggle("hidden");
            result.innerHTML = "It's a Tie";
        }
        
    }

    const resetColors = function(){
        squares.forEach((e) => {
            e.classList.remove("blue");
        })
    }

    const isgameOver = function () {
        switch (true) {

            /*Player 1*/
            case (gameboard.gameboardArray[0] === "x" && gameboard.gameboardArray[1] === "x" && gameboard.gameboardArray[2] === "x"):
                squares[0].classList.add("green");
                squares[1].classList.add("green");
                squares[2].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 1 wins";
    
                break;

            case (gameboard.gameboardArray[3] === "x" && gameboard.gameboardArray[4] === "x" && gameboard.gameboardArray[5] === "x"):
                squares[3].classList.add("green");
                squares[4].classList.add("green");
                squares[5].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 1 wins";
                break;

            case (gameboard.gameboardArray[6] === "x" && gameboard.gameboardArray[7] === "x" && gameboard.gameboardArray[8] === "x"):
                squares[6].classList.add("green");
                squares[7].classList.add("green");
                squares[8].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 1 wins";
                break;

            case (gameboard.gameboardArray[0] === "x" && gameboard.gameboardArray[3] === "x" && gameboard.gameboardArray[6] === "x"):
                squares[0].classList.add("green");
                squares[3].classList.add("green");
                squares[6].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 1 wins";
                break;

            case (gameboard.gameboardArray[1] === "x" && gameboard.gameboardArray[4] === "x" && gameboard.gameboardArray[7] === "x"):
                squares[1].classList.add("green");
                squares[4].classList.add("green");
                squares[7].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 1 wins";
                break;

            case (gameboard.gameboardArray[2] === "x" && gameboard.gameboardArray[5] === "x" && gameboard.gameboardArray[8] === "x"):
                squares[2].classList.add("green");
                squares[5].classList.add("green");
                squares[8].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 1 wins";
                break;

            case (gameboard.gameboardArray[0] === "x" && gameboard.gameboardArray[4] === "x" && gameboard.gameboardArray[8] === "x"):
                squares[0].classList.add("green");
                squares[4].classList.add("green");
                squares[8].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 1 wins";
                break;

            case (gameboard.gameboardArray[2] === "x" && gameboard.gameboardArray[4] === "x" && gameboard.gameboardArray[6] === "x"):
                squares[2].classList.add("green");
                squares[4].classList.add("green");
                squares[6].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 1 wins";
                break;



            /*Player 2*/
            case (gameboard.gameboardArray[0] === "o" && gameboard.gameboardArray[1] === "o" && gameboard.gameboardArray[2] === "o"):
                squares[0].classList.add("green");
                squares[1].classList.add("green");
                squares[2].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 2 wins";
                break;

            case (gameboard.gameboardArray[3] === "o" && gameboard.gameboardArray[4] === "o" && gameboard.gameboardArray[5] === "o"):
                squares[3].classList.add("green");
                squares[4].classList.add("green");
                squares[5].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 2 wins";
                break;

            case (gameboard.gameboardArray[6] === "o" && gameboard.gameboardArray[7] === "o" && gameboard.gameboardArray[8] === "o"):
                squares[6].classList.add("green");
                squares[7].classList.add("green");
                squares[8].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 2 wins";
                break;

            case (gameboard.gameboardArray[0] === "o" && gameboard.gameboardArray[3] === "o" && gameboard.gameboardArray[6] === "o"):
                squares[0].classList.add("green");
                squares[3].classList.add("green");
                squares[6].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 2 wins";
                break;

            case (gameboard.gameboardArray[1] === "o" && gameboard.gameboardArray[4] === "o" && gameboard.gameboardArray[7] === "o"):
                squares[1].classList.add("green");
                squares[4].classList.add("green");
                squares[7].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 2 wins";
                break;

            case (gameboard.gameboardArray[2] === "o" && gameboard.gameboardArray[5] === "o" && gameboard.gameboardArray[8] === "o"):
                squares[2].classList.add("green");
                squares[5].classList.add("green");
                squares[8].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 2 wins";
                break;

            case (gameboard.gameboardArray[0] === "o" && gameboard.gameboardArray[4] === "o" && gameboard.gameboardArray[8] === "o"):
                squares[0].classList.add("green");
                squares[4].classList.add("green");
                squares[8].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 2 wins";
                break;

            case (gameboard.gameboardArray[2] === "o" && gameboard.gameboardArray[4] === "o" && gameboard.gameboardArray[6] === "o"):
                squares[2].classList.add("green");
                squares[4].classList.add("green");
                squares[6].classList.add("green");
                windowGameOver.classList.toggle("hidden");
                result.innerHTML = "Player 2 wins";
                break;

        }
    }

    return {
        play,
        fillGameboard,
        isgameOver,
        isATie,
        restartGame,
        resetColors,
    }

})();


function createPlayer(name, symbol) {
    return {
        name,
        symbol,
    }
}

const player1 = createPlayer("Jugador1", "o");
const player2 = createPlayer("Jugador2", "x")
const board = document.querySelector(".gameboard");

/* board.addEventListener("click", () => {
    gameLogic.play();
})  */

gameLogic.play(); 