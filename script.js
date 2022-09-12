

const gameboard = (function(){
    let gameboardArray = ["","","","","","","","",""];
    
    return{
        gameboardArray,
    }

})();

const gameLogic = (function(){
    let playerTurn = true;

    const play = function(){
        
    if (playerTurn){
        squares.forEach((e) => {
            e.addEventListener("click", () => {
                e.classList.toggle("blue");
                gameboard.gameboardArray[e.dataset.index] = "x";
                gameLogic.fillGameboard();
        
            })
        })
        playerTurn = false;
    }
    else if(!playerTurn){
        squares.forEach((e) => {
            e.addEventListener("click", () => {
                e.classList.toggle("blue");
                gameboard.gameboardArray[e.dataset.index] = "o";
                
        
            })
        })
        playerTurn = true;
    }

    gameLogic.fillGameboard(); 
    gameLogic.isgameOver();
    
    }

    const fillGameboard = function(){
        let index = 0;
        for(index; index <= 8; index++){
        squares[index].innerHTML = gameboard.gameboardArray[index];    
        }
    }

    const isgameOver = function(){
        if(gameboard.gameboardArray[0] === gameboard.gameboardArray[1] && gameboard.gameboardArray[1] === gameboard.gameboardArray[2] && gameboard.gameboardArray[2] === gameboard.gameboardArray[0]){
            console.log("Juego Terminado");
        }
    }

    return{
        play,
        fillGameboard,
        isgameOver,
    }

})(); 


function createPlayer(name, symbol){
    return {
        name,
        symbol,
    }
}

const player1 = createPlayer("Jugador1", "o");
const player2 = createPlayer("Jugador2", "x")

const squares = document.querySelectorAll(".gameboard-square");

/* squares.forEach((e) => {
    e.addEventListener("click", () => {
        gameLogic.play();
    })
}) */
const board = document.querySelector(".gameboard");

board.addEventListener("click", () => {
    gameLogic.play();
})