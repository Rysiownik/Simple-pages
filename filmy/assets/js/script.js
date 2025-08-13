const piosenki = document.querySelector('.piosenka');
const volumeSlider = document.getElementById('volumeSlider');
// const seekSlider = document.getElementById('seekSlider');
const poNic = document.getElementById('poNic');
const glosnosc = document.querySelector(".glosnosc");
let pausedTime = 0;
let seekTime = 0;
let wybrana = "kot";
let czyCisza = false;
let poprzedni;

piosenki.addEventListener('play', () => {
    document.querySelector('#odtworz').style.display = 'none';
    document.querySelector('#wstrzymaj').style.display = 'inline-block';
});

piosenki.addEventListener('pause', () => {
    pausedTime = piosenki.currentTime;
    document.querySelector('#wstrzymaj').style.display = 'none';
    document.querySelector('#odtworz').style.display = 'inline-block';
});

piosenki.addEventListener('ended', () => {
    document.querySelector('#wstrzymaj').style.display = 'none';
    document.querySelector('#odtworz').style.display = 'inline-block';
});
// 
// seekSlider.addEventListener('input', () => {
//     seekTime = piosenki.currentTime * (poNic.value / 100);
//     console.log(seekTime);
//     seekSlider.value = seekTime;
// });

document.addEventListener('click', function(e){
    if (e.key == "Enter") {
        document.getElementById("ok").click();
    }
})

volumeSlider.addEventListener('input', function() {
    piosenki.volume = volumeSlider.value;
    poprzedni = piosenki.volume;
    if (piosenki.volume == 0){
        glosnosc.src = "assets/img/cisza.png";
    } else {
        glosnosc.src = "assets/img/dźwięk.png";
    };
});

function zero(){
    if(czyCisza == false){
        poprzedni = piosenki.volume;
        glosnosc.src = "assets/img/cisza.png";
        piosenki.volume = 0;
        volumeSlider.value = 0;
        czyCisza = true;
    } else {
        glosnosc.src = "assets/img/dźwięk.png";
        piosenki.volume = poprzedni;
        volumeSlider.value = poprzedni;
        czyCisza = false;
    };
};

function wstrzymaj(){
    piosenki.pause();
};

function dalej() {
    switch(wybrana) {
        case "kot":
            wybrana = "Plac_podatki";
            document.querySelector('#lista').value = "Plac_podatki";
        break;
        case "Plac_podatki":
            wybrana = "kasztany";
            document.querySelector('#lista').value = "kasztany";
        break;
        case "kasztany":
            wybrana = "kot";
            document.querySelector('#lista').value = "kot";
        break;
    }
    piosenki.src = `assets/audio/${wybrana}.mp3`;
    piosenki.play();
    
}

function doTylu() {
    switch(wybrana) {
        case "kot":
            wybrana = "kasztany";
            document.querySelector('#lista').value = "kasztany";
        break;
        case "Plac_podatki":
            wybrana = "kot";
            document.querySelector('#lista').value = "kot";
        break;
        case "kasztany":
            wybrana = "Plac_podatki";
            document.querySelector('#lista').value = "Plac_podatki";
        break;
    }
    piosenki.src = `assets/audio/${wybrana}.mp3`;
    piosenki.play();
    
}

function odtworz(){
    wybrana = document.querySelector('#lista').value;
    piosenki.src = `assets/audio/${wybrana}.mp3`;
    if (pausedTime > 0) {
        piosenki.currentTime = pausedTime;
        piosenki.play();
        pausedTime = 0;
    } else {
        piosenki.play();
    };
};
