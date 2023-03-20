const container = document.querySelector(".cont");
container.addEventListener("mouseover", ()=>{
    container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth"
    });
});

container.addEventListener("mouseover", ()=>{
    container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth"
    });
});