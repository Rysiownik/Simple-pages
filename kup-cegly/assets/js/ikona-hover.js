
const link = document.querySelector(".cegly")
const img = document.querySelector('nav ul li a img');
const newSrc = document.querySelector("#noweSrc").src;
const originalSrc = img.src;

link.addEventListener('mouseover', () => {
    img.src = newSrc;
});
      
link.addEventListener('mouseout', () => {
    img.src = originalSrc;
});