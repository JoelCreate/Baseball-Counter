let homeScore = document.getElementById("home-score")
let totalHome = 0

let inning = document.getElementById("inningCount")
let whatInningIsIt = 0

let topOfInning = document.getElementById("top-of-inning")
let bottomOfInning = document.getElementById("bottom-of-inning")


function increment(){
    totalHome += 1
    homeScore.textContent = totalHome
}

function inningUp() {
    whatInningIsIt += 1
    inning.textContent = whatInningIsIt 
}

function inningDown() {
    whatInningIsIt -= 1
    inning.textContent = whatInningIsIt 
}

let ballOneEmpty = document.getElementById("ball-1-empty")
let ballOne = document.getElementById("ball-1-solid")


function ballPlus() {
    ballOne.style.display = "block"
    ballOneEmpty.style.display = "none"   
}

function ballMinus() {
    ballOne.style.display = "none"
    ballOneEmpty.style.display = "block"   
}

