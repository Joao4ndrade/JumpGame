const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.gameover');

const jump =() => {
    mario.classList.add('jump');
    setTimeout(()=> {
        mario.classList.remove('jump');
    }, 500)
}

var scorenum= 0;
const scoreLoop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition < marioPosition){
scorennum++;
document.getElementById('score').innerText = 'score: '+ scorenum;}
}, 1500 );

var sec = 0;
const timerLoop = setInterval(() => {
    document.getElementById('timer').innerText = 'time: '+ sec++;
},1000)

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 250 && pipePosition > 50 && marioPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        gameover.style.width = '500px'
        gameover.style.bottom = '50px'
        gameover.style.marginLeft = '550px'

        clearInterval(loop);
    } 
}, 10 );
document.addEventListener('keydown', jump);



