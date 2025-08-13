document.getElementById("button").onclick = function() {
    let aktualny = " ";
    let slowko = document.getElementById("input").value.trim();
    switch(slowko) {
        case "Ja":
            aktualny = "I"
            console.log(aktualny);
        break;
        case "Ty":
            aktualny = "You"
            console.log(aktualny);
        break;
        case "On":
            aktualny = "He"
            console.log(aktualny);
        break;
        case "Ona":
            aktualny = "She"
            console.log(aktualny);
        break;
        case "Ono":
            aktualny = "It"
            console.log(aktualny);
        break;
        case "To":
            aktualny = "It"
            console.log(aktualny);
        break;
        case "My":
            aktualny = "We"
            console.log(aktualny);
        break;
        case "Wy":
            aktualny = "You"
            console.log(aktualny);
        break;
        case "Oni":
            aktualny = "They"
            console.log(aktualny);
        break;
        case "One":
            aktualny = "They"
            console.log(aktualny);
        break;
        default:
            aktualny = "Musisz wybrać opcję, bo inaczej to nie zadziała"
            console.log(aktualny);
        break;
    }
    document.getElementById("p").innerHTML = aktualny
}

document.getElementById("Ja").onclick = function() {
    document.getElementById("input").value ="Ja";
}
document.getElementById("Ty").onclick = function() {
    document.getElementById("input").value = "Ty";
}
document.getElementById("On").onclick = function() {
    document.getElementById("input").value = "On";
}
document.getElementById("Ona").onclick = function() {
    document.getElementById("input").value = "Ona";
}
document.getElementById("Ono").onclick = function() {
    document.getElementById("input").value = "Ono";
}
document.getElementById("Oni").onclick = function() {
    document.getElementById("input").value = "Oni";
}
document.getElementById("One").onclick = function() {
    document.getElementById("input").value = "One";
}
document.getElementById("To").onclick = function() {
    document.getElementById("input").value = "To";
}
document.getElementById("My").onclick = function() {
    document.getElementById("input").value = "My";
}
document.getElementById("Wy").onclick = function() {
    document.getElementById("input").value = "Wy";
}