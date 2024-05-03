const cover = document.getElementById("cover");
const notebook = document.querySelector(".notebook");
let isCoverFlipped = false;

cover.addEventListener("click", () => {
    if (!isCoverFlipped) {
        notebook.style.animation = "none"; // Disable initial flip animation
        notebook.style.transform = "rotateY(180deg)";
        isCoverFlipped = true;
    } else {
        notebook.style.animation = "flipCover 1s forwards"; // Apply flip animation again
        isCoverFlipped = false;
    }
});
