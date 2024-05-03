const bigA = document.getElementById("bigA");
const authorInfo = document.getElementById("authorInfo");

bigA.addEventListener("click", () => {
    // Toggle the "active" class to show/hide the author info
    authorInfo.classList.toggle("active");
});
