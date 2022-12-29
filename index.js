let homeScore = document.getElementById("home-score")
let totalHome = 0

let inning = document.getElementById("inningCount")
let whatInningIsIt = 0 

let topOfInning = document.getElementById("top-of-inning")
let bottomOfInning = document.getElementById("bottom-of-inning")

let numberOfOuts = document.getElementById("outs-el")
let outs = 0;

function increment(){
    totalHome += 1
    homeScore.textContent = totalHome
}

function howManyOuts() {
   outs++
   numberOfOuts.textContent = outs

   if (outs === 3) {
      outs = 0 - 1
   }

}

function whatInning() {

    whatInningIsIt += 1
    inning.textContent = whatInningIsIt

    if (bottomOfInning.style.opacity == "0.25") {
        topOfInning.style.opacity = "1.0"
        bottomOfInning.style.opacity = "0.25"
    } else {
        topOfInning.style.opacity = "0.25"
        bottomOfInning.style.opacity = "1.0"
    }

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

