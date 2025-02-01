const menuButton = document.querySelector("#mButton");
const menu = document.querySelector("#menu");

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide")
    }
}

handleResize();

window.addEventListener("resize", handleResize);

function modalTemplate(pic, alt) {
    return `
    <div class="modal"> 
    <button class="cButton">X</button> 
    <img src="${pic}" alt="${alt}"> 
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName !== "IMG") return;
    const imgSrc = clickedElement.src.split("-")[0] + "-full.jpeg";
    document.body.insertAdjacentHTML("afterbegin", modalTemplate(imgSrc, clickedElement.alt));
    document.querySelector(".cButton").addEventListener("click", closeModal);
}

function closeModal() {
    document.querySelector(".modal").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);