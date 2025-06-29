document.addEventListener("DOMContentLoaded", () => {
    if(document.title === "My projects | NexusSysDev") {
        const bwmCard = document.querySelector(".projectCard.bwm");
        const bwmImage = document.querySelector(".projectImage.bwm");
        if(bwmCard && bwmImage) {
            bwmCard.addEventListener("click", () => {
                bwmImage.classList.toggle("shown");
                bwmCard.classList.toggle("active");
            });
        }

        const arrowCard = document.querySelector(".projectCard.arrow");
        const arrowImage = document.querySelector(".projectImage.arrow");
        if(arrowCard && arrowImage) {
            arrowCard.addEventListener("click", () => {
                arrowImage.classList.toggle("shown");
                arrowCard.classList.toggle("active");

            });
        }
    }
});

function updateMainHeight() {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const main = document.querySelector("main");

    const headerHeight = header.offsetHeight;
    const footerHeight = footer.offsetHeight;
    const headerStyle = getComputedStyle(header);
    const headerMargin = parseInt(headerStyle.marginTop) + parseInt(headerStyle.marginBottom);
    const footerStyle = getComputedStyle(footer);
    const footerMargin = parseInt(footerStyle.marginTop) + parseInt(footerStyle.marginBottom);
    const windowHeight = window.innerHeight;

    main.style.minHeight = (windowHeight - headerHeight - headerMargin - footerHeight - footerMargin) + "px";
}
window.addEventListener("resize", updateMainHeight);
window.addEventListener("DOMContentLoaded", updateMainHeight);
console.log("Hello from console >:3");
