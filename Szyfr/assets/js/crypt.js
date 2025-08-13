const usedSigns = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż', '.', ',', ' '];
const usedSignsForKey = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż', ' '];
const usedSignsForCipher = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż', '.', ',', '|', '/', ' '];
const cipherClave = [
    ['y', 'z', 'ź', 'ż'], 
    ['a', 'ą', 'b'], 
    ['c', 'ć', 'd'], 
    ['e', 'ę', 'f'], 
    ['g', 'h', 'i'], 
    ['j', 'k', 'l'], 
    ['ł', 'm', 'n'], 
    ['ń', 'o', 'ó'], 
    ['p', 'r', 's'], 
    ['ś', 't', 'u', 'w'],
];

const selected = document.querySelector('#crypt');
document.querySelector('#btnCrypt').addEventListener('click', () => {
    const source = selected.value;
    const sourceMessage = document.querySelector('#message').value;
    const key = document.querySelector('#key').value;
    const errorElement = document.querySelector('#error');
    function keyNumbers(){
        const keyNumber = [];
        key.split('').forEach(mark => {
            cipherClave.forEach((boardInternal, i) => {
                let firstDigit = i.toString();
                if (boardInternal.includes(mark)) {
                    keyNumber.push(Number(firstDigit + boardInternal.indexOf(mark).toString()));
                }
            });
        });
        return keyNumber;
    }

    let result = '';

    if (source === 'encrypt') {
        if (onlyUsedSigns(sourceMessage, usedSigns) && onlyUsedSigns(key, usedSignsForKey)) {
            let numbers = [];
            let capitals = [];
            errorElement.innerHTML = '';

            sourceMessage.split('').forEach(mark => {
                let isCapital = false;

                if (mark === '.') {
                    numbers.push('|');
                    capitals.push(false);
                    return;
                } else if (mark === ',') {
                    numbers.push('/');
                    capitals.push(false);
                    return;
                } else if (mark === ' ') {
                    numbers.push(mark);
                    capitals.push(false);
                    return;
                };

                cipherClave.forEach((boardInternal, i) => {
                    let firstDigit = i.toString();
                    if (boardInternal.includes(mark.toLowerCase())) {
                        isCapital = (mark === mark.toUpperCase());
                        mark = mark.toLowerCase();
                        numbers.push(Number(firstDigit + boardInternal.indexOf(mark).toString()));
                        capitals.push(isCapital);
                        return;
                    };
                });
            });

            let keyNumber = keyNumbers();
            numbers.forEach((number, i) => {
                let dots = [''];
                let mark = '';
                if (number === '|' || number === '/' || number === ' ') {
                    mark = number;
                } else {
                    number = number + keyNumber.shift();
                    if (keyNumber.length === 0) {
                        keyNumber = keyNumbers();
                    };

                    if (number > 99) {
                        mark = ',' + mark;
                        number -= 100;
                    };
                    while (cipherClave
                        [Number(number.toString().split('').length === 1 ? "0" : number.toString().split('')[0])]
                        [Number(number.toString().split('').length === 1 ? number.toString().split('')[0] : number.toString().split('')[1])] === undefined) {
                        dots.unshift('.');
                        number -= 1;
                    };
                    mark += (!capitals[i] ? cipherClave
                        [Number(number.toString().split('').length === 1 ? "0" : number.toString().split('')[0])]
                        [Number(number.toString().split('').length === 1 ? number.toString().split('')[0] : number.toString().split('')[1])]
                        : cipherClave
                        [Number(number.toString().split('').length === 1 ? "0" : number.toString().split('')[0])]
                        [Number(number.toString().split('').length === 1 ? number.toString().split('')[0] : number.toString().split('')[1])]
                        .toUpperCase()) + dots.join('');
                };
                result += mark;
            });
        } else {
            errorElement.innerHTML = 'Podaj poprawny tekst i/lub klucz!';
        };
    } else {
        if (onlyUsedSigns(sourceMessage, usedSignsForCipher) && onlyUsedSigns(key, usedSignsForKey)) {
            let numbers = [];
            let capitals = [];
            errorElement.innerHTML = '';
            
            sourceMessage.split('').forEach((mark) => {
                let isCapital = false;
                if (mark === ',') {
                    numbers.push(100);
                } else if (mark === '.') {
                    if (numbers.length === 0 || (typeof numbers[numbers.length - 1]) === 'string') {
                        errorElement.innerHTML = 'Podaj poprawny tekst i/lub klucz!';
                    } else {
                        numbers[numbers.length-1] = numbers[numbers.length-1] + 1;
                    };
                } else if (mark === '|' || mark === '/' || mark === ' ') {
                    if(numbers[numbers.length - 1] !== 100) {
                        mark = mark.split('').map(char => char === '|' ? '.' : char).map(char => char === '/' ? ',' : char).join('');
                        numbers.push(mark);
                        capitals.push(isCapital);
                    };
                } else {
                    cipherClave.forEach((boardInternal, i) => {
                        let firstDigit = i.toString();
                        if (boardInternal.includes(mark.toLowerCase())) {
                            isCapital = (mark === mark.toUpperCase());
                            mark = mark.toLowerCase();
                            if (numbers.length === 0 || numbers[numbers.length-1] !== 100) {
                                numbers.push(Number(firstDigit + boardInternal.indexOf(mark).toString()));
                            } else {
                                numbers[numbers.length-1] += Number(firstDigit + boardInternal.indexOf(mark).toString());
                            };
                            capitals.push(isCapital);
                        };
                    });
                };
            });
            if (numbers[numbers.length-1] === 100) {
                numbers.pop();
            };

            
            let keyNumber = keyNumbers();
            numbers.forEach((number, i) => {
                let mark = '';
                if (number === ',' || number === '.' || number === ' ') {
                    mark = number;
                } else {
                    number = number - keyNumber.shift();
                    if (keyNumber.length === 0) {
                        keyNumber = keyNumbers();
                    };

                    mark += (!capitals[i] ? cipherClave
                        [Number(number.toString().split('').length === 1 ? "0" : number.toString().split('')[0])]
                        [Number(number.toString().split('').length === 1 ? number.toString().split('')[0] : number.toString().split('')[1])]
                        : cipherClave
                        [Number(number.toString().split('').length === 1 ? "0" : number.toString().split('')[0])]
                        [Number(number.toString().split('').length === 1 ? number.toString().split('')[0] : number.toString().split('')[1])]
                        .toUpperCase());
                };
                result += mark;
            });
        } else {
            errorElement.innerHTML = 'Podaj poprawny tekst i/lub klucz!';
        };
    };
    document.querySelector('#result').innerHTML = result;
});

function onlyUsedSigns(string, array) {
    string = string.toLowerCase();
    for (const char of string) {
        if (!array.includes(char)) {
            return false;
        };
    };
    return true;
};
