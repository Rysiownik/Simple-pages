document.getElementById("button").onclick = function () {
    let data = Number(document.getElementById("input").value.trim());
    let wiek = 2023-data;
    let osiagniecie = data + 18;
    if (data <= 2023) {
        if (data > 1907) {
            if (wiek < 18) {
                document.getElementById("p").innerHTML = `Masz ${wiek} lat, więc nie jesteś pełnoletni, a pełnoletność osiągniesz w ${osiagniecie} roku.`;
                console.log(`Urodziłeś się w ${data} roku.`);
                console.log(`Masz ${wiek} lat.`);
                console.log(`Będziesz pełnoletni w ${osiagniecie} roku.`);
            } else {
                document.getElementById("p").innerHTML = `Masz ${wiek} lat, więc jesteś pełnoletni, a pełnoletni jesteś od ${osiagniecie} roku.`;
                console.log(`Urodziłeś się w ${data} roku.`);
                console.log(`Masz ${wiek} lat.`);
                console.log(`Stałeś się pełnoletni w ${osiagniecie} roku.`);
            }
        } else if (data < 1907) {
            document.getElementById("p").innerHTML = `Co!!! Jesteś starszy, od najstarszego żyjącego człowieka na świecie, który urodził się w 1907 roku, a ty się urodziłeś w ${data} roku. Zgłoś się do Księgi rekordów Ginesa.`;
        } else if (data = 1907) {
            document.getElementById("p").innerHTML = `To ty jesteś tym najstarszym człowikiem na świecie?`
        }
    } else {
        document.getElementById("p").innerHTML = `Skoro urodiłeś się w ${data} roku to jeszcze cię nie ma, więc nie możesz kożestać z tej strony. PA PA`;
    }
}
