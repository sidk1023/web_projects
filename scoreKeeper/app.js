const pl1 = document.querySelector('#pl1');
const pl2 = document.querySelector('#pl2');
const rst = document.querySelector('#resetScore');
const score = document.querySelector('h1');
const numGames = document.querySelector('select')
let p1Score = 0;
let p2Score = 0;
freezeGame() 
numGames.addEventListener('change',(evt)=>{
   freezeGame();
})
pl1.addEventListener('click', (evt) => {
    p1Score += 1;
    score.innerText = scoreText(p1Score, p2Score);
    freezeGame()
})
pl2.addEventListener('click', (evt) => {
    p2Score += 1;
    score.innerText = scoreText(p1Score, p2Score);
    freezeGame()

})
rst.addEventListener('click', (evt) => {
    p1Score = 0;
    p2Score = 0;
    score.innerText = scoreText(p1Score, p2Score);
    freezeGame();
})

function scoreText(p1, p2) {
    return `${p1} - ${p2}`;
}
function freezeGame() {
    const total = parseInt(numGames.value);
    if (p1Score + p2Score === total) {
        pl1.disabled = true;
        pl2.disabled = true;

    }
    else {
        pl1.disabled = false;
        pl2.disabled = false;

    }
}