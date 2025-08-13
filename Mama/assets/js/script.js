document.getElementById("odswierzenie").onclick = function() {
    window.location.reload();
}

let numerZdjecia = 0;
slajder();

function slajder() {
  let img = document.getElementsByClassName("mySlider");
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  numerZdjecia++;
  if (numerZdjecia > img.length) {
    numerZdjecia = 1;
  }
  img[numerZdjecia - 1].style.display = "block";
  setTimeout(slajder, 3000);
}