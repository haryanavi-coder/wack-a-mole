// selecting all squares
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeftDisplay = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const restartButton = document.querySelector('#restart');


let result = 0;
let hitPosition;
let currentTime = 10;
let moveMoleId = null;
let startTimerId = null;

function randomSquare(){
    squares.forEach((square) => {       // square can be any name, it is provided by squares array by forEach
        square.classList.remove('mole'); // fresh plate to start
    })

    // now we will add mole to random squares
    let randomSquare = squares[Math.floor(Math.random()*9)]; //console.log(randomPosition);
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

// increasing the score
squares.forEach(square => {
    square.addEventListener('mousedown', ()=>{
        if(square.id == hitPosition){
            result++;
            scoreDisplay.textContent = result;
            console.log(scoreDisplay);
            hitPosition = null;
        }
    })
})


// start timer/mole
function moveMole(){
    moveMoleId = setInterval(randomSquare, 400);
}
// pause mole/timer
function stopMole(){
    clearTimeout(moveMoleId);
    clearTimeout(startTimerId);
}

// timer function
function countDown(){
    currentTime--;
    if(currentTime >= 0)   timeLeftDisplay.innerHTML = currentTime;
    else {
        clearInterval(startTimerId);
        clearInterval(moveMoleId);
        alert("Game OVER! Your final score is " + result);
    }
}

function startTimer(){
    startTimerId = setInterval(countDown, 1000);
}

startButton.addEventListener('click', startTimer);
startButton.addEventListener('click', moveMole);
stopButton.addEventListener('click', stopMole);


/***************************************************************/
// restart game
restartButton.addEventListener('click', restartGame);

function restartGame(){
    location.reload();
}




