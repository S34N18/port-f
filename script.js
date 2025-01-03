// Controls the dark/light mode toggle functionality
const darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save user preference to local storage
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});