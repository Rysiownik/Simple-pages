const Pin = document.querySelector("#Pin");
let pin = ""
let stareLiczby
let liczby = [];

Pin.addEventListener('input', () => {
    document.querySelector(`#liczba0`).style.display = "none";
    document.querySelector(`#liczba1`).style.display = "none";
    document.querySelector(`#liczba2`).style.display = "none";
    document.querySelector(`#liczba3`).style.display = "none";
    stareLiczby = [...pin];
    pin = Pin.value;
    if (pin<0){
        Pin.value = (pin*-1);
    };
    liczby = [...pin];
    for (let i = 0; i < liczby.length; i++) {
        if(liczby[i] == ""){
            liczby[i] = 0;
        };
        document.querySelector(`#liczba${i}`).style.display = "inline-block";
        document.querySelector(`#liczba${i}`).src = `assets/img/${liczby[i]}.png`;
        if (liczby.length > stareLiczby.length){
            document.getElementById(`${liczby[liczby.length-1]}`).play();
        }
    };
});
