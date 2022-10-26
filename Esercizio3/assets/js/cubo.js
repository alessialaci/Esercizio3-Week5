var cubi = document.querySelectorAll('.cube');
var rightBtn = document.querySelector('.right-arrow');
var leftBtn = document.querySelector('.left-arrow');
var playBtn = document.querySelector('.play-pause');

var rotazione = 0;


// Funzione per far girare ogni cubo

function gira() {
    cubi.forEach(cubo => cubo.style.transform = `rotateY(${rotazione}deg)`);
}


// Freccia destra al click, al mouseover e al mouseout

rightBtn.addEventListener('click', function() {
    rotazione -= 90;
    gira();
});

rightBtn.addEventListener('mouseover', function() {
    rotazione -= 30;
    gira();
});

rightBtn.addEventListener('mouseout', function() {
    rotazione += 30;
    gira();
});


// Freccia sinistra al click, al mouseover e al mouseout

leftBtn.addEventListener('click', function() {
    rotazione += 90;
    gira();
});

leftBtn.addEventListener('mouseover', function() {
    rotazione += 30;
    gira();
});

leftBtn.addEventListener('mouseout', function() {
    rotazione -= 30;
    gira();
});


// Pulsante play-pause

var playing = true;
var cubeInterval = setInterval(nextCube, 2000);

function nextCube() {
    rotazione -= 90;
    gira();
}

function pauseCube() {
    playBtn.innerHTML = '<i class="fas fa-play">';
    playing = false;
    clearInterval(cubeInterval);
}

function playCube() {
    playBtn.innerHTML = '<i class="fas fa-pause">';
    playing = true;
    cubeInterval = setInterval(nextCube, 2000);
}

playBtn.addEventListener('click', function () {
    if (playing) {
        pauseCube();
    } else {
        playCube();
    }
});