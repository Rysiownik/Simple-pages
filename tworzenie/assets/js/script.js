const body1 = document.querySelector('#body1');
let tylul;
let obraz;
let obrazNazwa;
let zawartosc;
let nazwa;
let tesc;

document.querySelector("#stworz").addEventListener('click', function(){
    tylul = document.querySelector("#tytul").value.trim();
    obraz = document.querySelector("#obraz").value.trim();
    nazwa = document.querySelector("#nazwa").value.trim();
    tesc = document.querySelector("#info").value.trim();
    if (tylul == "" || obraz == "" || nazwa == "" || tesc == ""){
        document.querySelector("#p").textContent = "Wypełnij wszytko!";
    } else {
        document.querySelector(".odpowiedz").style.display = "inline";
        document.querySelector("#p").textContent = "";
        switch (obraz) {
            case "2231":
                obrazNazwa = "https://cdn.glitch.global/a8eccb6c-c9b4-429b-8280-18d0223ef938/2231_Okładka2.png?v=1684767280740"
            break;
            case "Rysiownik":
                obrazNazwa = "https://cdn.glitch.global/a8eccb6c-c9b4-429b-8280-18d0223ef938/kot.png?v=1684779839667"
            break;
            case "Aarion":
                obrazNazwa = "https://cdn.glitch.global/a8eccb6c-c9b4-429b-8280-18d0223ef938/Aarion.png?v=1684779839096"
            break;
        }
        zawartosc =`
<div class="column-theree">
    <div id="${nazwa}li" class="liWydarzenia">
        <div>
            <p class="column-theree">${tylul}</p>
            <fieldset class="img">
                <img class="male column-theree" src="${obrazNazwa}">
            </fieldset>
        </div>
        <a id="${nazwa}" onclick="${nazwa}()">Rozwiń</a>
        <a id="${nazwa}zwin" style="display: none;" onclick="${nazwa}zm()">Zwiń</a>
        <div class="book" id="${nazwa}div" style="display: none;">
            <img src="${obrazNazwa}" alt="2231">
            <h3>
                ${tylul}
            </h3>
            <p>
                ${tesc}
            </p>
        </div>
    </div>
</div>
        `
        document.querySelector("#html").innerHTML = zawartosc
        document.querySelector("#css").innerHTML =`
function ${nazwa}(){
    obecnaKategoria = "${nazwa}"
    otwieranie()
}
function ${nazwa}zm(){ 
    obecnaKategoria = "${nazwa}"
    zamykanie()
}
`
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      document.querySelector("#stworz").click();
    }
  });
