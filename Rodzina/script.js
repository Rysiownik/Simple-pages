let mamaNumer = 0
let tataNumer = 0
let bratNumer = 0
console.log(bratNumer)
let tyNumer = 0
let siostraNumer = 0
let corkaNumer = 0
let synNumer = 0
let mama = ""
let tata = ""
let bracia = [""]
let ty = ""
let siostry = [""]
let corki = [""]
let synowie = [""]
let rodzice = [mama, tata]
let rodzenstwo = [bracia, ty, siostry]
let dzieci = [synowie, corki]
let rodzina = [rodzice, rodzenstwo, dzieci]
document.getElementById("dodawanieCzlankowRodziny").onclick = function () {
    let Imie = document.getElementById("Imie").value.trim();
    let Rola = document.getElementById("Rola").value.trim();
    switch (Rola) {
        case "Mama":
            document.getElementById("Imie").value = "";
            if (Imie != "") {
                mama = Imie
                document.getElementById("Mama").innerHTML = '<p>' + Imie + '</p>';
                mamaNumer = 1
            }
        break; 
        case "Tata":
            document.getElementById("Imie").value = "";
            if (Imie != "") {
                tata = Imie
                document.getElementById("Tata").innerHTML = '<p>' + Imie + '</p>';
                tataNumer = 1
            }
        break; 
        case "Brat":
            document.getElementById("Imie").value = "";
            if (Imie != "") {
                bracia.push(Imie)
                bratNumer += 1;
                console.log(bratNumer)
                if (bratNumer === 1) {
                   bracia.shift()
                    document.getElementById("Brat").innerHTML = '<p>' + Imie + '</p>';
                } else {
                    document.getElementById("brat").innerHTML = '<p>Bracia</p>';
                    document.getElementById("Brat").innerHTML += '<p>' + Imie + '</p>';
                }
            }
        break; 
        case "Ty":
            document.getElementById("Imie").value = "";
            if (Imie != "") {
                ty = Imie
                tyNumer = 1
                document.getElementById("Ty").innerHTML = '<p>' + Imie + '</p>';
            }
        break; 
        case "Siostra":
            document.getElementById("Imie").value = "";
            if (Imie != "") {
                siostry.push(Imie)
                siostraNumer += 1;
                if (siostraNumer === 1) {
                    siostry.shift()
                    document.getElementById("Siostra").innerHTML = '<p>' + Imie + '</p>';
                } else {
                    document.getElementById("siostra").innerHTML = '<p>Siostry</p>';
                    document.getElementById("Siostra").innerHTML += '<p>' + Imie + '</p>';
                }
            }
        break; 
        case "Córka":
            document.getElementById("Imie").value = "";
            if (Imie != "") {
                corki.push(Imie)
                corkaNumer += 1;
                if (corkaNumer === 1) {
                    corki.shift()
                    document.getElementById("Corka").innerHTML = '<p>' + Imie + '</p>';
                } else {
                    document.getElementById("corka").innerHTML = '<p>Córki</p>';
                    document.getElementById("Corka").innerHTML += '<p>' + Imie + '</p>';
                }
            }
        break; 
        case "Syn":
            document.getElementById("Imie").value = "";
            if (Imie != "") {
                synowie.push(Imie)
                synNumer += 1;
                if (synNumer === 1) {
                    synowie.shift()
                    document.getElementById("Syn").innerHTML = '<p>' + Imie + '</p>';
                } else {
                    document.getElementById("syn").innerHTML = '<p>Synowie</p>';
                    document.getElementById("Syn").innerHTML += '<p>' + Imie + '</p>';
                }
            }
        break; 
    }
}
document.getElementById("mama").onclick = function () {
    if (mamaNumer == 0) {
        alert(`Podaj jej imie.`)
    } else {
        alert(`Twoja mama ma na imie ${mama}.`);
    }
}

document.getElementById("tata").onclick = function () {
    if (tataNumer == 0) {
        alert(`Podaj jego imie.`)
    } else {
        alert(`Twoj tata ma na imie ${tata}.`);
    }
}

document.getElementById("brat").onclick = function () {
    if (bratNumer == 0) {
        console.log(bratNumer)
        alert(`Podaj jego imie.`);
    } else if (bratNumer == 1) {
        console.log(bratNumer)
        alert(`Twoj brat ma na imie ${bracia[0]}.`);
    } else {
        console.log(bratNumer)
        let Bracia = bracia.join(", ");
        alert(`Twoi bracia mają na imie: ${Bracia}.`);
    }
}

document.getElementById("ty").onclick = function () {
    if (tyNumer == 0) {
        alert(`Podaj swoje imie.`)
    } else {
        alert(`Ty masz na imie ${ty}.`);
    }
}

document.getElementById("siostra").onclick = function () {
    if (siostraNumer == 0) {
        console.log(siostraNumer)
        alert(`Podaj jej imie.`);
    } else if (siostraNumer == 1) {
        console.log(siostraNumer)
        alert(`Twoja siostra ma na imie ${siostry[0]}.`);
    } else {
        console.log(siostraNumer)
        let Siostry = siostry.join(", ");
        alert(`Twoja siostra mają na imie: ${Siostry}.`);
    }
}

document.getElementById("corka").onclick = function () {
    if (corkaNumer == 0) {
        console.log(corkaNumer)
        alert(`Podaj jej imie.`);
    } else if (corkaNumer == 1) {
        console.log(corkaNumer)
        alert(`Twoja siostra ma na imie ${corki[0]}.`);
    } else {
        console.log(corkaNumer)
        let Corki = corki.join(", ");
        alert(`Twoje siostry mają na imie: ${Corki}.`);
    }
}

document.getElementById("syn").onclick = function () {
    if (synNumer == 0) {
        console.log(synNumer)
        alert(`Podaj jego imie.`);
    } else if (synNumer == 1) {
        console.log(synNumer)
        alert(`Twój syn ma na imie ${synowie[0]}.`);
    } else {
        console.log(synNumer)
        let Synowie = synowie.join(", ");
        alert(`Twoi synowie mają na imie: ${Synowie}.`);
    }
}

document.getElementById("imieMeskieCzyZeskie").onclick = function () {
    let imiona = prompt("Podaj imię bez zmiękczeń w minowniku.")
    if (imiona === "Aaron"||"Adam"||"Adrian"||"Adolf"||"Alan"||"Albert"||"Alek"||"Aleks"||"Aleksander"||"Aleksy"||"Alex"||"Alexander"||"Alfred"||"Allan"||"Alojzy"||"Amadeusz"||"Ambroży"||"Amir"||"Anastazy"||"Anatol"||"Andrzej"||"Antoni"||"Ariel"||"Arkadiusz"||"Arkady"||"Armin"||"Aron"||"Arsen"||"Artur"||"Aureliusz") {
        alert("To jest imię męskie")
    } else if (imiona === "Barnaba"||"Bartłomiej"||"Bartłomiej"||"Bartosz"||"Barnim"||"Bastian"||"Bazyli"||"Bazyl"||"Beniamin"||"Benjamin"||"Bernard"||"Błażej"||"Bogdan"||"Bohdan"||"Bogdaj"||"Bogdał"||"Bogdar"||"Bogdasz"||"Boguchwał"||"Bogumysław"||"Boguard"||"Bogumił"||"Bogusąd"||"Bogusław"||"Bogwiedz"||"Bolebor"||"Bolesław"||"Borys"||"Bożydar"||"Brajan"||"Brayan"||"Brian"||"Bronimir"||"Bronisław"||"Bruno"||"Brunon"||"Bryan") {
        alert("To jest imię męskie")
    } else if (imiona === "Cezary"||"Czarek"||"Choroman"||"Colin"||"Conan"||"Konan"||"Cyprian"||"Cyryl"||"Czesław") {
        alert("To jest imię męskie")
    } else if (imiona === "Dagobert"||"Dalwin"||"Damazy"||"Damian"||"Damir"||"Daniel"||"Darek"||"Dariusz"||"Dariusz"||"David"||"Dawid"||"Denis"||"Derwan"||"Dezyderiusz"||"Dezydery"||"Diego"||"Dimirt"||"Dimitri"||"Dionizy"||"Dobromił"||"Dominik"||"Dorian") {
        alert("To jest imię męskie")
    } else if (imiona === "Edwin"||"Edward"||"Edmund"||"Eliasz"||"Emanuel"||"Emil"||"Emilian"||"Eneasz"||"Ernest"||"Erwin"||"Eryk"||"Eugeniusz"||"Eustachy"||"Euzebiusz"||"Ewald"||"Ewaryst") {
        alert("To jest imię męskie")
    } else if (imiona === "Fabian"||"Feliks"||"Felix"||"Filip"||"Florian"||"Franciszek"||"Frisk"||"Fryderyk") {
        alert("To jest imię męskie")
    } else if (imiona === "Gabor"||"Gabo"||"Gabriel"||"Gien"||"Gienek"||"Gieni"||"Eugeniusz"||"Gniewko"||"Gniewomir"||"Gracjan"||"Grzegorz"||"Gustaw"||"Gwidon") {
        alert("To jest imię męskie")
    } else if (imiona === "Hektor"||"Henryk"||"Hiacynt"||"Hieronim"||"Heromin"||"Hipolit"||"Hubert"||"Hugo") {
        alert("To jest imię męskie")
    } else if (imiona === "Idzi"||"Ignacy"||"Igor"||"Ireneusz"||"Ivo"||"Iwo"||"Izydor") {
        alert("To jest imię męskie")
    } else if (imiona === "Jacek"||"Jacenty"||"Jacob"||"Jamal"||"Jakub"||"Jan"||"Janusz"||"Jarosław"||"Jarogniew"||"Jazon"||"Jeremi"||"Jeremiasz"||"Jerzy"||"Jędrzej"||"Joachim"||"Joda"||"Jonasz"||"Jonatan"||"Jonathan"||"Józef"||"Julian"||"Juliusz") {
        alert("To jest imię męskie")
    } else if (imiona === "Kacper"||"Kai"||"Kaj"||"Kajetan"||"Kamil"||"Karol"||"Kasjan"||"Kasper"||"Kaspian"||"Kastor"||"Castor"||"Kazimierz"||"Kevin"||"Kewin"||"Kilian"||"Klaudiusz"||"Klemens"||"Konan"||"Conan"||"Konrad"||"Konstanty"||"Kordian"||"Kornel"||"Korneliusz"||"Kosma"||"Kryspin"||"Krystian"||"Krzesimir"||"Krzysztof"||"Ksawery"||"Ksawier"||"Kuba") {
        alert("To jest imię męskie")
    } else if (imiona === "Lech"||"Lechosław"||"Leo"||"Leon"||"Leonard"||"Leonardo"||"Leopold"||"Lesław"||"Leszek"||"Lew"||"Liberat"||"Longin"||"Lotariusz"||"Lothar"||"Lucjan"||"Ludwik") {
        alert("To jest imię męskie")
    } else if (imiona === "Łazarz"||"Łucjan"||"Łukasz") {
        alert("To jest imię męskie")
    } else if (imiona === "Maciej"||"Makary"||"Maks"||"Maksym"||"Maksymilian"||"Marcel"||"Marceli"||"Marcin"||"Marek"||"Marian"||"Mariusz"||"Martin"||"Mateusz"||"Matteo"||"Mattaniasz"||"Maurycy"||"Max"||"Maximilian"||"Maxymilian"||"Metody"||"Michael"||"Michał"||"Mieczysław"||"Mietek"||"Mieszko"||"Mikołaj"||"Milan"||"Miłosz"||"Miron"||"Mirosław"||"Mścisław") {
        alert("To jest imię męskie")
    } else if (imiona === "Nataliusz"||"Natan"||"Nataniel"||"Nathan"||"Nathaniel"||"Nicolas"||"Nikifor"||"Nikodem"||"Nikolas"||"Nikita"||"Norbert") {
        alert("To jest imię męskie")
    } else if (imiona === "Odolan"||"Odolen"||"Odylen"||"Oktawian"||"Olaf"||"Oleg"||"Olgierd"||"Oliver"||"Olivier"||"Oliwer"||"Oliwier"||"Orest"||"Orion"||"Oscar"||"Oskar") {
        alert("To jest imię męskie")
    }  else if (imiona === "Pakosław"||"Patryk"||"Paweł"||"Pęcisław"||"Philip"||"Petroniusz"||"Piotr"||"Polikarp"||"Przecław"||"Przemysław") {
        alert("To jest imię męskie")
    } else if (imiona === "Radosław"||"Rafał"||"Remigiusz"||"Robert"||"Roch"||"Roman"||"Romuald"||"Rupert"||"Ryan"||"Ryszard") {
        alert("To jest imię męskie")
    } else if (imiona === "Samuel"||"Sambor"||"Sebastian"||"Sebi"||"Sebion"||"Sedecjasz"||"Sedekiasz"||"Sergiusz"||"Seweryn"||"Sławomir"||"Stanisław"||"Stefan"||"Sulimir"||"Sylwester"||"Syriusz"||"Szczepan"||"Szymon") {
        alert("To jest imię męskie")
    } else if (imiona === "Tadeusz"||"Teodor"||"Teofil"||"Tobiasz"||"Toligniew"||"Tolbir"||"Tomasz"||"Tyberiusz"||"Tymon"||"Tymoteusz"||"Tytus") {
        alert("To jest imię męskie")
    } else if (imiona === "Victor"||"Viktor"||"Vincent") {
        alert("To jest imię męskie")
    } else if (imiona === "Wacław"||"Waldemar"||"Waldek"||"Walenty"||"Wawrzyniec"||"Wiktor"||"Wiesław"||"Wincent"||"Wincenty"||"Wit"||"Witold"||"Władysław"||"Wojciech") {
        alert("To jest imię męskie")
    } else if (imiona === "Xavier"||"Xawery") {
        alert("To jest imię męskie")
    } else if (imiona === "Yoda") {
        alert("To jest imię męskie")
    } else if (imiona === "Zachariasz"||"Zachary"||"Zawisza"||"Zbigniew"||"Zbyszek"||"Zbyszko"||"Zdzisław"||"Zenon"||"Ziemowit"||"Zorian"||"Zygmunt") {
        alert("To jest imię męskie")
    } else if (imiona === "Ada"||"Adamina"||"Adela"||"Adriana"||"Adrianna"||"Agata"||"Agnieszka"||"Alana"||"Aldona"||"Aleksandra"||"Alessandra"||"Alexandra"||"Alfreda"||"Alia"||"Alice"||"Alicja"||"Alina"||"Alisa"||"Aisha"||"Amalia"||"Amanda"||"Amelia"||"Amélia"||"Anastasiia"||"Anastazja"||"Anatolia"||"Anda"||"Andrea"||"Andrzela"||"Andżela"||"Andżelika"||"Aneta"||"Angela"||"Angelika"||"Aniela"||"Anita"||"Anna"||"Antonia"||"Antonina"||"Apolonia"||"Ariela /Arielka"||"Arletta"||"Arleta"||"Asia"||"Joanna"||"Asteria"||"Aurelia"||"Aurora"||"Aya"||"Ayla"||"Balbina"||"Barbara"||"Beata"||"Berenika"||"Bernadeta"||"Bernadetta"||"Bianka"||"Blanka"||"Bogda"||"Bogna"||"Bogumiła"||"Bogusława"||"Bożena"||"Bronisława"||"Brunchilda"||""||"Cameron"||"Carla"||"Carolina"||"Carmen"||"Cataleya"||"Chanel"||"Chanell"||"Chara"||"Cecylia"||"Celina"||"Chiara"||"Clea"||"Czesława"||"Dagmara"||"Daisy"||"Daniela"||"Danuta"||"Daria"||"Dąbrówka"||"Debora"||"Diana"||"Dobrosława"||"Dominika"||"Domroka"||"Dorota"||"Edyta"||"Edmunda"||"Eftalia"||"Ellen"||"Elisabeth"||"Elena"||"Eleonora"||"Elif"||"Eliza"||"Elwira"||"Eltefia"||"Elzna"||"Elżbieta"||"Emanuela"||"Emilia"||"Emily"||"Emma"||"Erna"||"Eryka"||"Eugenia"||"Estera"||"Ewa"||"Ewelina"||"Fatima"||"Faustyna"||"Felicja"||"Filomena"||"Florencja"||"Florentyna"||"Franciszka"||"Francesca"||"Gabriela"||"Gaja"||"Genowefa"||"Gloria"||"Giulia"||"Gizela"||"Grace"||"Greta"||"Halina"||"Hana"||"Hanna"||"Hannah"||"Henryka"||"Henia"||"Helen"||"Helena"||"Hermenegilda"||"Hiacynta"||"Cesia"||"Honorata"||"Hortensja"||"Ida"||"Idalia"||"Iga"||"Ilona"||"Ina"||"Ines"||"Inez"||"Inga"||"Ingrid"||"Inka"||"Irena"||"Irene"||"Iris"||"Irmina"||"Isabelle"||"Ismena"||"Iwona"||"Ivana"||"Ivanka"||"Iza"||"Izabela"||"Izabella"||"Izyda"||"Jadwiga"||"Jagna"||"Jagoda"||"Jana"||"Janette"||"Janina"||"Jaśmina"||"Leah"||"Leokadia"||"Jessica"||"Joanna"||"Jola"||"Jolanta"||"Josephine"||"Jowita"||"Józefa"||"Judyta"||"Julia"||"Julianna"||"Julita"||"Justyna"||"Kaja"||"Kalina"||"Kamila"||"Karina"||"Karen"||"Karolina"||"Kasandra"||"Kasjana"||"Kataleja"||"Katarzyna"||"Kayla"||"Kinga"||"Kesja"||"Klara"||"Klaudia"||"Klementyna"||"Konstancja"||"Kornelia"||"Krystyna"||"Ksenia"||"Lara"||"Larysa"||"Laura"||"Lea"||"Leandra"||"Leonia"||"Lena"||"Letycja"||"Lidia"||"Lila"||"Lili"||"Lilia"||"Liliana"||"Lilianna"||"Lilla"||"Lilly"||"Lily"||"Livia"||"Liwia"||"Liza"||"Lola"||"Lucyna"||"Ludwika"||"Luiza"||"Luna"||"Łucja"||"Magda"||"Magdalena"||"Maja"||"Malina"||"Malika"||"Malwina"||"Malvina"||"Małgorzata"||"Manuela"||"Mercedes"||"Marcela"||"Marcelina"||"Margot"||"Marcjanna"||"Margerita"||"Margarita"||"Maria"||"Marianna"||"Marietta"||"Marica"||"Marika"||"Mariola"||"Marina"||"Marisa"||"Marlena"||"Marsela"||"Mary"||"Marysia"||"Marta"||"Martyna"||"Marzanna"||"Marzena"||"Masza"||"Matylda"||"Maura"||"Maya"||"Megan"||"Melania"||"Melisa"||"Melody"||"Mercedes"||"Mia"||"Michalina"||"Michaela"||"Mija"||"Mila"||"Milla"||"Milena"||"Miłosława"||"Mira"||"Miranda"||"Miriam"||"Mirosława"||"Monika"||"Molly"||"Nadia"||"Nadja"||"Nadine"||"Nadzieja"||"Naomi"||"Narina"||"Nastazja"||"Natalia"||"Natasza"||"Nathalie"||"Nel"||"Nela"||"Neli"||"Nicol"||"Nicola"||"Nicole"||"Nikola"||"Nila"||"Nina"||"Nomi"||"Noemi"||"Noelia"||"Odetta"||"Oda"||"Odeta"||"Oksana"||"Oktawia"||"Ola"||"Olga"||"Olena"||"Olimpia"||"Olivia"||"Oliwia"||"Otylia"||"Pakosława"||"Pamela"||"Patrycja"||"Patricia"||"Paula"||"Paulina"||"Pelagia"||"Penelope"||"Petra"||"Petronia"||"Petronela"||"Pęcisława"||"Piotra"||"Przecława"||"Przybysława"||"Pola"||"Rachela"||"Ranita"||"Renata"||"Renia"||"Regina"||"Rita"||"Roberta"||"Roksana"||"Roma"||"Ronja"||"Rose"||"Rozalia"||"Róża"||"Ruta"||"Sabina"||"Sabrina"||"Salma"||"Salomea"||"Samanta"||"Samira"||"Sandecja"||"Sandra"||"Sara"||"Sarah"||"Sasha"||"Scarlett"||"Simona"||"Selena"||"Sława"||"Sofia"||"Sofiia"||"Sonia"||"Sonja"||"Sophia"||"Sophie"||"Susanna"||"Suzanne"||"Stanisława"||"Stefania"||"Stella"||"Sybilla"||"Sibilla"||"Sylwia"||"Syntia"||"Synthia"||"Tamara"||"Tatiana"||"Taylor"||"Tekla"||"Teresa"||"Tina"||"Tola"||"Tolisława"||"Tomiła"||"Tomira"||"Uliana"||"Uma"||"Urszula"||"Ula"||"Vanessa"||"Vera"||"Veronika"||"Veronica"||"Victoria"||"Viktoria"||"Viktoriia"||"Violetta"||"Vivienne"||"Walentyna"||"Wanda"||"Wanessa"||"Wera"||"Weronika"||"Wiera"||"Wiktoria"||"Wioletta"||"Władysława"||"Władzia"||"Yasmine"||"Zinaida"||"Zoe"||"Zenobia"||"Zeynep"||"Zlata"||"Zofia"||"Zoja"||"Zuza"||"Zuzanna"||"Zyta"||"Żaklina"||"Żaneta") {
        alert("To jest imię kobiece")
    } else {
        alert("Nie znam tego imienia")
    }
}