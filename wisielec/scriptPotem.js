let wyraz2 = document.getElementById("przekazanie").value.trim();
console.log(wyraz2);

let litera;

let czyPoprawne = false;

let numerLitery = 0;

let odpowiedzi = [];

let szanse = 11;

let uzyte = [];

let pozostaleLitery = wyraz2.length;

let tabObrazy = [
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/0?v=1684335064457",
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/1?v=1684335070708",
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/2?v=1684335123938",
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/3?v=1684335088666",
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/4?v=1684335115106",
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/5?v=1684335108857",
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/6?v=1684502373707",
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/7?v=1684502354286",
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/8?v=1684335134860",
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/9?v=1684335143298",
  "https://cdn.glitch.global/74311455-6a26-452d-a360-a2e1a9e8ef53/10?v=1684335148156",
];

for (let i = 0; i < wyraz2.length; i++) {
  odpowiedzi[i] = "_";
}

document.getElementById("gra").textContent = odpowiedzi.join(" ");

document.getElementById("ok").addEventListener("click", function () {
  litera = document.getElementById("litera").value.trim();

  if (litera.length == 0) {
    document.getElementById("komunikat").textContent = "Podaj jedną literę!";
  } else {
    czyPoprawne = false;
    document.getElementById("komunikat").textContent = "";
    for (let i = 0; i < wyraz2.length; i++) {
      if (wyraz2[i] == litera) {
        odpowiedzi[i] = litera;
        czyPoprawne = true;
        pozostaleLitery--;
        document.getElementById("gra").textContent = odpowiedzi.join(" ");
      }
    }
    if (czyPoprawne === false) {
      szanse--;
      console.log(szanse);
      document.getElementById(
        "wisielecDiv"
      ).innerHTML = `<img id="wisielec" src="${
        tabObrazy[szanse - 1]
      }" width="300"/>`;
    }
    if (pozostaleLitery == 0) {
      document.getElementById("komunikat").textContent =
        "Gratulacje, odgadłeś hasło!";
    }
  }
  document.getElementById("litera").value = "";
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    document.getElementById("ok").click();
  }
});
