const reklamy = document.querySelector("#reklamy-propozycja");
let telewizja = new URLSearchParams(window.location.search).get("telewizja ") === "true";
let radio = new URLSearchParams(window.location.search).get("radio") === "true";
let internet = new URLSearchParams(window.location.search).get("internet") === "true";
let autdoor = new URLSearchParams(window.location.search).get("autdoor") === "true";
let tablica = [];
if(reklamy){
    if(internet){
        document.querySelector("#internet").innerHTML += `<a href="reklamy/internetowa/index.html">Spójsz na scenariusz reklamy.</a>`;
    }
    if(telewizja){
        document.querySelector("#telewizja").innerHTML += `<a href="reklamy/telewizyjna/index.html">Spójsz na scenariusz reklamy.</a>`;
    }
    if(radio){
        document.querySelector("#radio").innerHTML += `<a href="reklamy/radiowa/index.html">Spójsz na scenariusz reklamy.</a>`;
    }
    if(autdoor){
        document.querySelector("#autdoor").innerHTML += `<a href="reklamy/autdoorowa/index.html">Spójsz na scenariusz reklamy.</a>`;
    }
}

function fibonarczi(l1475, trueq) {
    tablica[0] = 1;
    console.log(`1. liczba ciągu Fibonarczjego to: ${tablica[0]}.`)
    tablica[1] = 1;
    console.log(`2. liczba ciągu Fibonarczjego to: ${tablica[1]}.`)
    for (let i = 3; i < l1475+1; i++) {
        tablica[i] = tablica[i-1] + tablica[i-2];
        if (tablica[i] === Infinity) {
            console.log("Error! Za duża liczba!")
            if (trueq == true) {
                console.log(`Liczba Φ to ${tablica[tablica.length-1]/tablica[tablica.length-2]}, a φ to ${tablica[tablica.length-2]/tablica[tablica.length-1]}.`)
            } 
            return
        } else {
        console.log(`${i}. liczba ciągu Fibonarczjego to: ${tablica[i]}.`)
        }
    }
    if (trueq == true) {
        console.log(`Liczba Φ to ${tablica[tablica.length-1]/tablica[tablica.length-2]}, a φ to ${tablica[tablica.length-2]/tablica[tablica.length-1]}.`)
    }
}