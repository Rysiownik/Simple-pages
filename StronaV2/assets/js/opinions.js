const przycisk = document.querySelector("#przyciskDodaj")
przycisk.addEventListener('click', () => {
  let tresc = document.getElementById("tresc").value.trim();
  let nick = document.getElementById("nick").value.trim();

  if (tresc != "") {
    document.getElementById("komunikat").innerHTML = "";
    document.getElementById("op").innerHTML +=
    '<li>'
      '<img src="assets/img/user.png" alt="avatar" class="avatar">' 
      '<a class="name">' + nick + '</a>' 
      '<br> <a class="content">' + tresc + '</a>' 
    '</li>';
  } else {
    document.getElementById("komunikat").innerHTML = "Uzupełnij pole";
  }
});