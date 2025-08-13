let piosenki = document.querySelector('#kot');
const volumeSlider = document.getElementById('volumeSlider');
// const seekSlider = document.getElementById('seekSlider');
const poNic = document.getElementById('poNic');
const glosnosc = document.querySelector(".glosnosc");
const petlaPrzycisk = document.querySelector("#petla");
const petlaKoniecPrzycisk = document.querySelector("#petlaKoniec");
const listaPiosenek = ["kot", "Plac_podatki", "kasztany"];
let dodawanie = "";
let pausedTime = 0;
let seekTime = 0;
let wybrana = "kot";
let czyZatrzymana = true;
let czyCisza = false;
let czyPetla = false;
let poprzedni;

for(let i = listaPiosenek.length; i < listaPiosenek.length; i--){
    console.log(listaPiosenek[i-1]);
    dodawanie = document.getElementById(`${listaPiosenek[i-1]}`);
    dodawanie.addEventListener('play', () => {
        czyZatrzymana = false;
        document.querySelector('#odtworz').style.display = 'none';
        document.querySelector('#wstrzymaj').style.display = 'inline-block';
    });

    dodawanie.addEventListener('pause', () => {
        czyZatrzymana = true;
        pausedTime = piosenki.currentTime;
        document.querySelector('#wstrzymaj').style.display = 'none';
        document.querySelector('#odtworz').style.display = 'inline-block';
    });
    
    dodawanie.addEventListener('ended', () => {
        if  (czyPetla == false) {
        document.querySelector('#wstrzymaj').style.display = 'none';
        document.querySelector('#odtworz').style.display = 'inline-block';
        } else {
            piosenki.play();
        }
    });
}
// document.getElementById("kot").addEventListener('play', () => {
//     czyZatrzymana = false;
//     document.querySelector('#odtworz').style.display = 'none';
//     document.querySelector('#wstrzymaj').style.display = 'inline-block';
// });
// document.getElementById("Plac_podatki").addEventListener('play', () => {
//     czyZatrzymana = false;
//     document.querySelector('#odtworz').style.display = 'none';
//     document.querySelector('#wstrzymaj').style.display = 'inline-block';
// });
// document.getElementById("kasztany").addEventListener('play', () => {
//     czyZatrzymana = false;
//     document.querySelector('#odtworz').style.display = 'none';
//     document.querySelector('#wstrzymaj').style.display = 'inline-block';
// });

// document.getElementById("kot").addEventListener('pause', () => {
//     czyZatrzymana = true;
//     pausedTime = piosenki.currentTime;
//     document.querySelector('#wstrzymaj').style.display = 'none';
//     document.querySelector('#odtworz').style.display = 'inline-block';
// });
// document.getElementById("Plac_podatki").addEventListener('pause', () => {
//     czyZatrzymana = true;
//     pausedTime = piosenki.currentTime;
//     document.querySelector('#wstrzymaj').style.display = 'none';
//     document.querySelector('#odtworz').style.display = 'inline-block';
// });
// document.getElementById("kasztany").addEventListener('pause', () => {
//     czyZatrzymana = true;
//     pausedTime = piosenki.currentTime;
//     document.querySelector('#wstrzymaj').style.display = 'none';
//     document.querySelector('#odtworz').style.display = 'inline-block';
// });

// document.getElementById("kot").addEventListener('ended', () => {
//     if  (czyPetla == false) {
//     document.querySelector('#wstrzymaj').style.display = 'none';
//     document.querySelector('#odtworz').style.display = 'inline-block';
//     } else {
//         piosenki.play();
//     }
// });
// document.getElementById("Plac_podatki").addEventListener('ended', () => {
//     if  (czyPetla == false) {
//     document.querySelector('#wstrzymaj').style.display = 'none';
//     document.querySelector('#odtworz').style.display = 'inline-block';
//     } else {
//         piosenki.play();
//     }
// });
// document.getElementById("kasztany").addEventListener('ended', () => {
//     if  (czyPetla == false) {
//     document.querySelector('#wstrzymaj').style.display = 'none';
//     document.querySelector('#odtworz').style.display = 'inline-block';
//     } else {
//         piosenki.play();
//     }
// });
// 
// seekSlider.addEventListener('input', () => {
//     seekTime = piosenki.currentTime * (poNic.value / 100);
//     console.log(seekTime);
//     seekSlider.value = seekTime;
// });

document.addEventListener('click', function(e){
    if (e.key == "space") {
        if (czyZatrzymana == true){
            document.getElementById("wstrzymaj").click();
        } else {
            document.getElementById("odtworz").click();
        }
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

function petla() {
    petlaPrzycisk.style.display = "none";
    petlaKoniecPrzycisk.style.display = "inline-block";
    czyPetla = true;
}

function petlaKoniec() {
    petlaPrzycisk.style.display = "inline-block";
    petlaKoniecPrzycisk.style.display = "none";
    czyPetla = false;
}

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
            document.querySelector("#kot").pause();
        break;
        case "Plac_podatki":
            wybrana = "kasztany";
            document.querySelector('#lista').value = "kasztany";
            document.querySelector("#Plac_podatki").pause();
        break;
        case "kasztany":
            wybrana = "kot";
            document.querySelector('#lista').value = "kot";
            document.querySelector("#kasztany").pause();
        break;
    }
    piosenki = document.querySelector(`#${wybrana}`);
    // piosenki.src = `assets/audio/${wybrana}.mp3`;
    piosenki.play();
    
}

function doTylu() {
    switch(wybrana) {
        case "kot":
            wybrana = "kasztany";
            document.querySelector('#lista').value = "kasztany";
            document.querySelector("#kot").pause();
        break;
        case "Plac_podatki":
            wybrana = "kot";
            document.querySelector('#lista').value = "kot";
            document.querySelector("#Plac_podatki").pause();
        break;
        case "kasztany":
            wybrana = "Plac_podatki";
            document.querySelector('#lista').value = "Plac_podatki";
            document.querySelector("#kasztany").pause();
        break;
    }
    piosenki = document.querySelector(`#${wybrana}`);
    // piosenki.src = `assets/audio/${wybrana}.mp3`;
    piosenki.play();
    
}

function odtworz(){
    wybrana = document.querySelector('#lista').value;
    piosenki = document.querySelector(`#${wybrana}`);
    // piosenki.src = `assets/audio/${wybrana}.mp3`;
    if (pausedTime > 0) {
        piosenki.currentTime = pausedTime;
        piosenki.play();
        pausedTime = 0;
    } else {
        piosenki.play();
    };
};
