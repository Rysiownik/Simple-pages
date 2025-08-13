let punkty = 0
document.getElementById("button").onclick = function () {
    let liczbaStralow = Number(prompt("Ile chcesz mieć strzałow?"))
    let wylosowanaLiczba = Math.floor(Math.random() * 101)
    console.log(wylosowanaLiczba)
    let strzal = Number(prompt("Zgadnij liczbę z przedziału 0 - 100"))
    while (strzal != wylosowanaLiczba && liczbaStralow > 0) {
        if (strzal > wylosowanaLiczba) {
            alert("Podałeś za dużą liczbę.")
            liczbaStralow--
            if (liczbaStralow == 1) {
                strzal = Number(prompt(`Zgadnij liczbę z przedziału 0 - 100.(Zostało ci ${liczbaStralow} strał.)`))
            } else if (liczbaStralow <= 4 ) {
                strzal = Number(prompt(`Zgadnij liczbę z przedziału 0 - 100.(Zostało ci ${liczbaStralow} strały.)`))
            } else {
                strzal = Number(prompt(`Zgadnij liczbę z przedziału 0 - 100.(Zostało ci ${liczbaStralow} strałów.)`))
            }
        } else if (strzal < wylosowanaLiczba) {
            alert("Podałeś za małą liczbę.")
            liczbaStralow--
            if (liczbaStralow == 1) {
                strzal = Number(prompt(`Zgadnij liczbę z przedziału 0 - 100.(Zostało ci ${liczbaStralow} strał.)`))
            } else if (liczbaStralow <= 4 ) {
                strzal = Number(prompt(`Zgadnij liczbę z przedziału 0 - 100.(Zostało ci ${liczbaStralow} strały.)`))
            } else {
                strzal = Number(prompt(`Zgadnij liczbę z przedziału 0 - 100.(Zostało ci ${liczbaStralow} strałów.)`))
            }
        }
    }
    if (liczbaStralow === 0) {
        alert("Przegrałeś.")
    }
    if (strzal === wylosowanaLiczba) {
        alert("Brawo!!! Wygrałeś!!!")
        punkty++
        console.log(punkty)
        if (punkty === 1){
            document.getElementById("h3").innerHTML = `Masz ${punkty} punkt.`
        } else if (punkty === 2 || punkty === 3 || punkty === 4){
            document.getElementById("h3").innerHTML = `Masz ${punkty} punkty.`
        } else {
            document.getElementById("h3").innerHTML = `Masz ${punkty} punktów.`
        }
    }
}


document.getElementById("dodatek").onclick = function () {
    let tab = new Array()
    console.log(tab)
    let tabIlosc = Number(prompt("Ile chcesz mieć zmiennych?"))
    console.log(tabIlosc)
    for (let iTab = 0; iTab < tabIlosc; iTab++) {
        tab.push(Number(prompt("Podaj zmienną")));
    }
    let tabLiczba = tab.length
    console.log(tab.length)
    tab.reverse()
    console.log(tab)
    for (let i = tabLiczba; i > 0; i--) {
        console.log(i)
        alert(tab[tabLiczba-1]);
        console.log(tab[tabLiczba-1])
        tabLiczba--
        console.log(tab)
        tab.pop()
        console.log(tab)
        tabLiczba = tab.length
        console.log(tabLiczba)
    }
}