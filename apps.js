const startButton = document.getElementById('starter')
const gridContainer = document.querySelector('.gridContainer')
const scoreContainer = document.querySelector('.scoreContainer')
const tryContainer = document.querySelector('.tryContainer')
const winAlert = document.querySelector('.winGame')
const lostAlert = document.querySelector('.loseGame')
let startClickCount = 0
let score = document.createElement('div')
scoreContainer.appendChild(score)
let hitCount = 0
let tryCount = document.createElement('div');
let trysLeft = 50
tryContainer.appendChild(tryCount)
const userSquares = []
const width = 10

console.log(gridContainer)
console.log(winAlert)
console.log(lostAlert)

const startGame = () => {
  let startClickCount = 0
  startButton.addEventListener('click', (event) => {
    startClickCount++
    console.log(startClickCount)
    if (startClickCount == 1) {
      createGameBoard(gridContainer, userSquares)
    } else location.reload()
 })
}
startGame()

const createGameBoard = () => {
  for (let index = 0; index < width*width; index++) {
    const square = document.createElement('div')  
    square.classList.add("Unclicked")
    square.id = index;
    const mathRandom = Math.random()
    if (mathRandom <= 0.33) {
      square.classList.add(".zombie")
    } else {  
      console.log("Too high for zombie placement")
    }
    gridContainer.appendChild(square) 
    userSquares.push(square)
    const image = document.createElement('img')
    square.appendChild(image)
    image.style.width = "38px";
    image.style.height = "38px";

    square.addEventListener("click", (event) => {
      square.classList.replace("Unclicked", "Clicked")
      if (square.classList.contains("Clicked")) clickCount++
      console.log(clickCount)
      if (mathRandom <= 0.33) {  
        square.classList.add(".HIT")
        square.style.backgroundColor = "red"
        image.src = './image.jpg'
        console.log("HIT!")
      } else {
        square.classList.add(".MISS")
        square.style.backgroundColor = "black"
        square.innerHTML = "MISS";
        square.style.fontSize = "10px"
        square.style.textAlign = "center"
        console.log("MISS!")
      }
    })

    let clickCount = 0

    square.addEventListener("click", function() {
        if (clickCount < 2) trysLeft--
          console.log(trysLeft);
          tryCount.innerHTML = trysLeft
        if (square.classList.contains('.zombie') && clickCount < 2) hitCount++
        console.log(hitCount);
        score.innerHTML = hitCount
      winGame()
      loseGame ()
    })
  }
}

const winGame = () => {
  if (hitCount == 20 && trysLeft >=0) {
    winAlert.innerHTML = "You Won!"}
}

const loseGame = () => {
  if (trysLeft == 0 && hitCount < 20) {
    lostAlert.innerHTML = "You Lost"}
}
