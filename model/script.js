let marka
let model
let rocznik
let kolor
let cena

let samochod = {
    marka: "Literówka",
    model: "ToYpRi",
    rocznik: 2023,
    kolor: "czerwony",
    cena: 2500,
    wypisanie:function(marka,model,rocznik,kolor,cena) {
        return this.marka, this.model, this.rocznik, this.kolor, this.cena;
    }
}
console.log(samochod.marka)
console.log(samochod.model)
console.log(samochod.rocznik)
console.log(samochod.kolor)
console.log(samochod.cena)

function poprawienie () {
    marka = samochod.marka
    document.getElementById("marka").innerHTML = marka
    model = samochod.model
    document.getElementById("model").innerHTML = model
    rocznik = samochod.rocznik
    document.getElementById("rocznik").innerHTML = rocznik + " rok"
    kolor = samochod.kolor
    document.getElementById("kolor").innerHTML = kolor
    cena = samochod.cena
    document.getElementById("cena").innerHTML = cena + " zł"
}

poprawienie ()

document.getElementById("zmienMarke").onclick = function () {
    marka = prompt("Podaj nową markę.");
    document.getElementById("marka").innerHTML = marka
    document.getElementById("model").innerHTML = model
    document.getElementById("rocznik").innerHTML = rocznik + " rok"
    document.getElementById("kolor").innerHTML = kolor
    document.getElementById("cena").innerHTML = cena + " zł"
}
document.getElementById("zmienModel").onclick = function () {
    model = prompt("Podaj nowy model.");
        document.getElementById("marka").innerHTML = marka
        document.getElementById("model").innerHTML = model
        document.getElementById("rocznik").innerHTML = rocznik + " rok"
        document.getElementById("kolor").innerHTML = kolor
        document.getElementById("cena").innerHTML = cena + " zł"
}
document.getElementById("zmienRocznik").onclick = function () {
    rocznik = prompt("Podaj nowy rocznik.");
        document.getElementById("marka").innerHTML = marka
        document.getElementById("model").innerHTML = model
        document.getElementById("rocznik").innerHTML = rocznik + " rok"
        document.getElementById("kolor").innerHTML = kolor
        document.getElementById("cena").innerHTML = cena + " zł"
}
document.getElementById("zmienKolor").onclick = function () {
    kolor = prompt("Podaj nowy kolor.");
        document.getElementById("marka").innerHTML = marka
        document.getElementById("model").innerHTML = model
        document.getElementById("rocznik").innerHTML = rocznik + " rok"
        document.getElementById("kolor").innerHTML = kolor
        document.getElementById("cena").innerHTML = cena + " zł"
}
document.getElementById("zmienCene").onclick = function () {
    cena = prompt("Podaj nową cenę.");
        document.getElementById("marka").innerHTML = marka
        document.getElementById("model").innerHTML = model
        document.getElementById("rocznik").innerHTML = rocznik + " rok"
        document.getElementById("kolor").innerHTML = kolor
        document.getElementById("cena").innerHTML = cena + " zł"
}
