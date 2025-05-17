const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light');
} else {
    body.classList.add('dark');
}

// Toggle theme on button click
toggle.addEventListener('click', () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');
    const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
});

document.addEventListener("DOMContentLoaded", () => {
    // Add click handlers to all card headers
    document.querySelectorAll(".card-dropdown .card-header").forEach(header => {
        header.addEventListener("click", () => {
            const card = header.closest(".card-dropdown");
            if (card) {
                card.classList.toggle("open");
            }
        });
    });
});