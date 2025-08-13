const przycisk = document.querySelector("#obrot")
let czyJest = false;

przycisk.addEventListener("click", function(){
    if (czyJest==false){
        przycisk.style.transform = 'rotate(180deg)';
        document.querySelector(".sidebar").style.display = 'block';
        czyJest = true;
    } else {
        przycisk.style.transform = 'rotate(360deg)';
        setTimeout(()=>{
            przycisk.style.transition = "none"
            setTimeout(()=>{
                przycisk.style.transform = 'rotate(0deg)'
                setTimeout(()=>{
                    przycisk.style.transition = "transform 0.5s"
                }, 1)
            }, 500)
        }, 1)
        document.querySelector(".sidebar").style.display = 'none';
        czyJest = false;
    }
})

document.addEventListener('click', (event) => {
    if (!event.target.matches('#obrot') && !event.target.matches('.sidebar')) {
    document.querySelector(".sidebar").style.display = 'none';
      przycisk.style.transition = "none"
      przycisk.style.transform = 'rotate(0deg)';
      przycisk.style.transition = "transform 0.5s"
    }
});
