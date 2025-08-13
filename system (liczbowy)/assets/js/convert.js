const input = document.querySelector('#number');
const output = document.getElementById('output');
const sys10 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '-', '.'];
const sys16 = ['A', 'B', 'C', 'D', 'E', 'F'];
const svgs = ['<img src="assets/svg/safan.svg" alt="cyfra safan">', '<img src="assets/svg/łahudon.svg" alt="cyfra łahudon">', '<img src="assets/svg/ismi.svg" alt="cyfra ismi">', '<img src="assets/svg/fata.svg" alt="cyfra fata">', '<img src="assets/svg/artun.svg" alt="cyfra artun">', '<img src="assets/svg/hatun.svg" alt="cyfra hatun">'];
const pressedKeys = [];

function convert () {
    let number = output.innerHTML.replace(new RegExp(',', 'g'), '.');
    sys16.forEach( (item, i) => {
        number = number.replace(new RegExp(svgs[i], 'g'), item);
    })
    const systemResource = parseInt(document.querySelector("#system-source").value);
    const systemTarget = systemResource === 10 ? 16 : 10;
    let score;
  
    if (systemResource === 10) {
        if (onlyNumber(number, sys10)) {
            score = Number(number).toString(16).toUpperCase();
            //score = convertTo16(number, "");
        } else {
            return error();
        }
    } else {
        if (onlyNumber(number, sys10.concat(sys16))) {
            score = '' + parseInt(number, 16);
        } else {
            return error();
        }
    }
    score = score.split('').map(char => char === '.' ? ',' : char).join('');
    number = number.split('').map(char => char === '.' ? ',' : char).join('');
    sys16.forEach( (item, i) => {
        number = number.replace(new RegExp(item, 'g'), svgs[i]);
    })
    sys16.forEach( (item, i) => {
        score = score.replace(new RegExp(item, 'g'), svgs[i]);
    })
    document.querySelector("#score").innerHTML = `${number} z sys. ${systemResource}. w sys. ${systemTarget}. to ${score}`;
};

function onlyNumber(string, array) {
    for (const char of string) {
        if (!array.includes(char)) {
            return false;
        }
    }
    return true;
}

function error() { 
    document.querySelector("#score").innerHTML = 'Podaj prawdziwą liczbę!';// <img sr<img src="ass<img src="assets/svg/artun.svg" alt="cy<img src="assets/svg/hatun.svg" alt="cyfra hatun">ra artun">ts/svg/ismi.svg" alt="cy<img src="assets/svg/hatun.svg" alt="cyfra hatun">ra ismi">="ass<img src="assets/svg/artun.svg" alt="cy<img src="assets/svg/hatun.svg" alt="cyfra hatun">ra artun">ts/svg/sa<img src="assets/svg/hatun.svg" alt="cyfra hatun">an.svg" alt="<img src="ass<img src="assets/svg/artun.svg" alt="cy<img src="assets/svg/hatun.svg" alt="cyfra hatun">ra artun">ts/svg/ismi.svg" alt="cy<img src="assets/svg/hatun.svg" alt="cyfra hatun">ra ismi">y<img src="assets/svg/hatun.svg" alt="cyfra hatun">ra sa<img src="assets/svg/hatun.svg" alt="cyfra hatun">an">
}
  
document.querySelector("#convert").addEventListener("click", convert);

output.addEventListener('click', startRegistrationKey);

function startRegistrationKey() {
  document.addEventListener('keydown', servePressButton);
}

function servePressButton(e) {
    if (e.key.toUpperCase() === 'BACKSPACE') {
        pressedKeys.pop();
    } else if (e.key.toUpperCase() === 'ENTER') {
        convert();
    } else if (pressedKeys.length < 56) {
        pressedKeys.push(e.key.toUpperCase());
    } 
    let captionExit = pressedKeys.filter( (key) => sys10.concat(sys16).includes(key)).join('');
    sys16.forEach( (item, i) => {
        captionExit = captionExit.replace(new RegExp(item, 'g'), svgs[i]);
    })
    output.innerHTML = captionExit;
}

document.addEventListener('click', stopRejistrationKey);

function stopRejistrationKey(e) {
  if (e.target !== output) {
    document.removeEventListener('keydown', servePressButton);
  }
}

