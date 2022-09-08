const squares = document.querySelectorAll('.square')
const pow = document.querySelector('pow')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
let result = 0
let hitposition
let currenttime=60

function randomsquare() {
    squares.forEach(square => {
        square.classList.remove('pow')
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('pow')
    hitposition = randomPosition.id

}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == hitposition) {
            result++
            score.innerHTML = result
            hitposition = null
        }
    })
})

function movepow() {
    let timerid = null
    timerid = setInterval(randomsquare, 600)//randomsquare is the function.500ms

}
movepow()

function countdown()
{  
    currenttime--
    timeLeft.innerHTML=currenttime
    if(currenttime == 0){
  clearInterval(countdowntimerid)
  alert("Game over,Final score is :" + result)
  score.innerHTML='0'
    }


}

let countdowntimerid=setInterval(countdown,1000)