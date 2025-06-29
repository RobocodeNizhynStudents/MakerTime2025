document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("div.projectCard.bwm").addEventListener("click", () => {
        document.querySelector("img.projectImage.bwm").classList.toggle("shown");
    });
    document.querySelector("div.projectCard.tdm").addEventListener("click", () => {
        document.querySelector("div.projectImage.tdm").classList.toggle("shown");
    });
});


