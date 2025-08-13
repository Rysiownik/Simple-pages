let slowa = {
    ang: [ '1861', '186155', '1859', '1860', '1861' ], //"beff", "bread roll", "cheese", 'chewing gum', 'chilli', 'cream', 'crips', 'cucumber','flour', 'fruit juice', 'garlic', 'grapes', 'honey', 'ice cream', 'lemonade', 'lettuce', 'nuts', 'peach', 'pear', 'pineapple', 'smoothie', 'tuna', 'yoghurt', 'Hang on.', 'You bet!', 'Yuck!', 'noodles', 'pea', 'do your best', 'make a mistake', 'competition', 'contestant', 'oven glass', 'put on weight', 'find out', 'owner', 'street coner', 'bitter', 'bland', 'delicious', 'dry', 'fresh', 'rich', 'sour', 'spicy', 'stale', 'sweet', 'tasty'
    pol: [ 'był początek wojny secesyjnej', "był koniec wojny secesyjnej", 'Piemont uzuskał Lombardię', 'w środkowych i połudnowych włoszach były powstania', 'wiktor emanule został królem zjednoczonych włoch' ], //"wołowina", "bułka", "ser", 'guma do żucia', 'papryczka chilli', 'krem', 'chipsy', 'ogórek','mąka', 'sok owocowy', 'czosnek', 'winogrona', 'miód', 'lody', 'lemoniada', 'sałata', 'orzechy', 'brzoskwinia', 'gruszka', 'ananas', 'koktajl', 'tuńczyk', 'jogurt', 'Poczekaj.', 'Oczywiście, że tak!', 'Fuj!', 'kluski', 'groszek', 'robić coś dobrze', 'popełnić błąd', 'konkurs', 'uczestnik konkursu', 'rękawice kuchenne', 'przytyć', 'dowiedzieć się', 'właścicielka', 'róg ulicy', 'gorzki', 'nijaki', 'pyszny', 'suchy', 'świeży', 'tłusty', 'kwaśny', 'pikantny', 'nieświeży', 'słodki', 'smaczny'
};
const length = slowa.ang.length;
let popOdp = 0;
let bleOdp = 0;
    
do{
    if(slowa.pol.length === 0){
        alert(`Brawo!\nSkończyłeś wypytywanie z wynikiem ${popOdp}/${popOdp+bleOdp}`)
        break;
    }
    const jezyki = Object.keys(slowa);
    console.log(jezyki)
    const randomIndexes = [];

    while (randomIndexes.length < 2) {
        const randomIndex = Math.floor(Math.random() * jezyki.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }
    console.log(randomIndexes)

    // Pobieranie 2 różnych wartości z obiektu
    const randomValues = randomIndexes.map(index => slowa[jezyki[index]]);
    console.log(randomValues)
    const wybraneSlowa = randomValues[0];
    const wybraneSlowaTl = randomValues[1];
    console.log(wybraneSlowa, wybraneSlowaTl)
    const randomIndex = Math.floor(Math.random() * wybraneSlowa.length);
    console.log(randomIndex)
    const slowo = wybraneSlowa[randomIndex];
    const slowoTl = wybraneSlowaTl[randomIndex];
    console.log(slowo, slowoTl)

    let pytanie;
    if (!slowa.ang.includes(slowo)){
        pytanie = `Kiedy ${slowo}?\n ${popOdp+1}/${length}`;
    } else {
        pytanie = `Co się wydażyło w ${slowo}?\n ${popOdp+1}/${length}`;
    }
    const odp = prompt(pytanie);
    if(odp === slowoTl){
        if(slowa.pol.includes(slowo)){
            slowa.pol = slowa.pol.filter(item => item !== slowo);
            slowa.ang = slowa.ang.filter(item => item !== slowoTl);
        } else {
            slowa.ang = slowa.ang.filter(item => item !== slowo);
            slowa.pol = slowa.pol.filter(item => item !== slowoTl);
        }
        popOdp++;
        alert(`To poprawna odpowiedź! \npoprawne odpowiedzi: ${popOdp}, błędne odpowiedzi: ${bleOdp}`);
    } else {
        bleOdp++;
        alert(`Pomyliłeś się! \npoprawna odpowiedź to ${slowoTl} \nporwawne odpowiedzi: ${popOdp}, błędne odpowiedzi: ${bleOdp}`);
    }
} while (true);
// window.location.reload();