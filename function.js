const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    // Toggles the 'active' class on both the hamburger and the menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close the menu when a link is clicked
document.querySelectorAll("nav ul li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

/* --- PROJECT CARD ZOOM LOGIC --- */
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // 1. Remove 'active' class from ALL cards first
        projectCards.forEach(c => c.classList.remove('active'));

        // 2. Add 'active' class to the CLICKED card
        card.classList.add('active');
    });
});