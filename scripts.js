document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header h1");
    header.style.transition = "transform 0.5s";
    header.style.transform = "translateY(-20px)";

    setTimeout(() => {
        header.style.transform = "translateY(0)";
    }, 100);
});
