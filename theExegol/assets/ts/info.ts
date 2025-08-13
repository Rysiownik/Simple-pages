let obecnaKategoria: string;
let wysokosc = 0;
const wydarzeniaSection: HTMLElement = document.querySelector(".wydarzenia");

function zmianaWysokosci() {
    if (wysokosc != 0) {
        wydarzeniaSection.style.height = "520px";
    } else {
        wydarzeniaSection.style.height = "100px";
    };
};

function otwieranie(){
    document.getElementById(`${obecnaKategoria}div`).style.display = 'block';
    document.getElementById(`${obecnaKategoria}`).style.display = "none";
    document.getElementById(`${obecnaKategoria}zwin`).style.display = "block";
    wysokosc++;
    zmianaWysokosci();
};

function zamykanie(){
    document.getElementById(`${obecnaKategoria}div`).style.display = 'none';
    document.getElementById(`${obecnaKategoria}zwin`).style.display = "none";
    document.getElementById(`${obecnaKategoria}`).style.display = "block";
    wysokosc--;
    zmianaWysokosci();
};

function nowyRozdzialIII(){
    obecnaKategoria = "nowyRozdzialIII";
    otwieranie();
};
function nowyRozdzialIIIzm(){
    obecnaKategoria = "nowyRozdzialIII";
    zamykanie();
};


function nowyRozdzialIV(){
    obecnaKategoria = "nowyRozdzialIV"
    otwieranie()
}
function nowyRozdzialIVzm(){
    obecnaKategoria = "nowyRozdzialIV"
    zamykanie()
}


function nowyDiscord(){
    obecnaKategoria = "nowyDiscord"
    otwieranie()
}
function nowyDiscordzm(){
    obecnaKategoria = "nowyDiscord"
    zamykanie()
}
