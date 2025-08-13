let eventsList = []
let eventsMethod = {};
let currentCategory;
let height = 0;
const eventsSection = document.querySelector(".events");

function changeHeights() {
    if (wysokosc != 0) {
        eventsSection.style.height = "520px";
    } else {
        eventsSection.style.height = "100px";
    };
};

function opening(){
    document.getElementById(`${currentCategory}div`).style.display = 'block';
    document.getElementById(`${currentCategory}op`).style.display = "none";
    document.getElementById(`${currentCategory}cl`).style.display = "block";
    height++;
    changeHeights();
};

function closing(){
    document.getElementById(`${currentCategory}div`).style.display = 'none';
    document.getElementById(`${currentCategory}op`).style.display = "block";
    document.getElementById(`${currentCategory}cl`).style.display = "none";
    height--;
    changeHeights();
};

eventsList.forEach(event => {
    eventsMethod[`${event}op`] = () => {
        currentCategory = event;
        opening();
    };
    eventsMethod[`${event}cl`] = () => {
        currentCategory = event;
        closing();
    };
});

eventsList.forEach(event => {
    document.getElementById(`${event}op`).addEventListener("click",eventsMethod[`${event}op`]);
    document.getElementById(`${event}cl`).addEventListener("click",eventsMethod[`${event}cl`]);
});

document.querySelectorAll('section.events #eventsLi a').forEach(eventName => {
    eventName = eventName.slice(0, -2);
    if (eventName !== eventsList[eventsList.length - 1]) {
        eventsList.push(eventName);
    }
});
