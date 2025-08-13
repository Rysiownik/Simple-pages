function zmiana(){
    document.getElementById("autorLi").classList.remove("aktywny");
    document.getElementById("ksiazkiLi").classList.remove("aktywny");
    document.getElementById("zespolLi").classList.remove("aktywny");
    document.getElementById("wydarzeniaLi").classList.remove("aktywny");
    document.getElementById("kontaktLi").classList.remove("aktywny");
}

function autor() {
    zmiana()
    document.getElementById("autorLi").classList.add("aktywny");
};

function ksiazki () {
    zmiana()
    document.getElementById("ksiazkiLi").classList.add("aktywny");
}

// function ksiazki() {
    // zmiana()
//     document.getElementById("ksiazkiLi").classList.add("aktywny");
// };

function zespol() {
    zmiana()
    document.getElementById("zespolLi").classList.add("aktywny");
};

function wydarzenia() {
    zmiana()
    document.getElementById("wydarzeniaLi").classList.add("aktywny");
};

function kontakt() {
    zmiana()
    document.getElementById("kontaktLi").classList.add("aktywny");
};

document.querySelector(".autor").addEventListener("mouseover", autor);

document.querySelector(".ksiazki").addEventListener("mouseover", ksiazki);

document.querySelector(".zespol").addEventListener("mouseover", zespol);

document.querySelector(".wydarzenia").addEventListener("mouseover", wydarzenia);

document.querySelector(".kontakt").addEventListener("mouseover", kontakt);
