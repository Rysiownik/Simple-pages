const liList = ['author', 'books', 'team', 'events'];

function change(){
    document.querySelectorAll(".sectionLink").forEach((element) => {
        element.classList.remove("active")
    });
}

liList.forEach((liName) => {
    document.querySelector(`.${liName}`).addEventListener("mouseover", () => {
        change();
        document.querySelector(`#${liName}Link`).classList.add("active");
    });
    document.querySelector(`#${liName}Li`).addEventListener("click", () => {
        change();
        document.querySelector(`#${liName}Link`).classList.add("active");
    });
});

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item)=> 
    item.classList.remove('active'));
    this.classList.add('active');
};
list.forEach((item) => 
item.addEventListener('click', activeLink));
