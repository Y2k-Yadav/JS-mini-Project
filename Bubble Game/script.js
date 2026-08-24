let numberContainer = document.getElementsByClassName('numberContainer')
let timervalue = document.getElementsByClassName('timervalue')[0]
let targetValue = document.getElementsByClassName('targetValue')[0]
let scoreValue = document.getElementsByClassName('scoreValue')[0]
let numberOfCircles = 100;
let timer = 60;
let target;
let intervalId;
timervalue.innerHTML = timer


generateNumber()
generateTarget()
timerReset()
scoreReset()
startTimer();


function timerReset() {
    timer = 60;
    timervalue.innerHTML = timer
}

function scoreReset() {
    scoreValue.innerHTML = 0;
}


function startTimer() {
console.log('starting a new timer')
    intervalId = setInterval(() => {
        if (timer <= 0) {
            clearInterval(intervalId);
            numberContainer[0].innerHTML = `
        Game Over
        <br>
        SCORE= ${scoreValue.innerText}
         <button onclick="restartGame()">Reset Game</button>
         `;
            return
        }
        timer--;
        timervalue.innerHTML = timer;

    }, 1000)
}


function restartGame() {
    timerReset();
    generateTarget();
    scoreReset();
    generateNumber();
    startTimer();
}

function generateTarget() {
    target = Math.ceil(Math.random() * 10)
    targetValue.innerText = target
}

function generateNumber() {
    numberContainer[0].innerHTML = ``
    for (let i = 1; i <= numberOfCircles; i++) {
        let divElem = document.createElement('div')
        divElem.setAttribute('class', 'circle')
        let rndNum = Math.ceil(Math.random() * 11)
        divElem.textContent = rndNum
        numberContainer[0].append(divElem)

    }

}


numberContainer[0].addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.className === 'circle') {
        let number = Number(e.target.innerText)
        if (target === number) {
            let score = Number(scoreValue.innerText);
            score += 10;
            scoreValue.innerHTML = score;
            timer = Math.ceil(timer + (timer * 0.01))
            timervalue.innerHTML = timer

        }
        generateTarget()

    }
})