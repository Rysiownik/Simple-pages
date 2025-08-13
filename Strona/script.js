var numerZdjecia = 0;
slajder();

function slajder() {
  var img = document.getElementsByClassName("mySlider");
  for (var i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  numerZdjecia++;
  if (numerZdjecia > img.length) {
    numerZdjecia = 1;
  }
  img[numerZdjecia - 1].style.display = "block";
  setTimeout(slajder, 3000);
}

document.getElementById("przyciskDodaj").onclick = function () {
  var nowyElement = document.getElementById("element").value.trim();

  if (nowyElement != "") {
    document.getElementById("komunikat").innerHTML = "";
    document.getElementById("lista").innerHTML +=
      "<li>" + nowyElement + "</li>";
  } else {
    document.getElementById("komunikat").innerHTML = "Uzupełnij pole";
  }
};

document.getElementById("submit").onclick = function () {
  document.getElementById("informacja").innerHTML =
    "Proszę zjawić w salonie w wybranym czasie i wybranej godzinie";
};
