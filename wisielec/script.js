let wyrazyIlosc

let losowaLiczba

let idInputow = []

let wyrazy = []

document.getElementById("iloscPrzycisk").addEventListener("click", function () {
  wyrazyIlosc = document.getElementById("iloscWyrazow").value.trim()
  console.log(wyrazyIlosc)
  document.getElementById("pytania").innerHTML = '<ladel> Podaj wyrazy</ladel> <br> <div id="wyrazyDiv"> </div> <button id="przeslijWyrazy">Zapisz</button> <a href="gra.html"> <button id="doGra">Dalej</button> </a>'
  for(let i=wyrazyIlosc; i >= 1; i--){
    losowaLiczba = Math.random()
    document.getElementById("wyrazyDiv").innerHTML += `<input id="wyrazy${losowaLiczba}" class="wyrazyInputy" type="text">`
    idInputow.push(losowaLiczba)
    console.log(losowaLiczba)
  }
    console.log(idInputow)
})

document.getElementById("przeslijWyrazy").addEventListener("click", function () {
  document.getElementById("info").textContent = "Trwa zapisywanie wyrazów."
  for(let i=wyrazyIlosc; i >= 1; i--){
    wyrazy.push(document.getElementById(`wyrazy${idInputow[i-1]}`).value.trim())
  }
  document.getElementById("info").textContent = "Zapisano wyrazy."
})
let wyraz = wyrazy[Math.floor(Math.random() * wyrazy.length)]


document.getElementById("doGra").addEventListener("click", function () {
  document.getElementById("przekazanie").value.trim()
  console.log(wyraz)
})

// document.getElementById("kontener").addEventListener("mouseover", function () {
//   document.getElementById("przekazanie").value = wyraz
//   console.log(wyraz)
// })
