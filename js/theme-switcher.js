document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.getElementById("theme-switcher");
    const themeIcon = themeSwitcher.querySelector("i");

    // Select the light and dark theme stylesheets
    const lightTheme = document.getElementById("light-theme");
    const darkTheme = document.getElementById("dark-theme");

    // Function to apply the selected theme
    const setTheme = (theme) => {
        if (theme === "dark") {
            lightTheme.disabled = true;
            darkTheme.disabled = false;
            document.documentElement.setAttribute("data-theme", "dark"); // For CSS variables
            localStorage.setItem("theme", "dark");
            themeIcon.className = "fa-solid fa-sun"; // Switch icon
        } else {
            lightTheme.disabled = false;
            darkTheme.disabled = true;
            document.documentElement.setAttribute("data-theme", "light"); // For CSS variables
            localStorage.setItem("theme", "light");
            themeIcon.className = "fa-solid fa-moon"; // Switch icon
        }
    };

    // Event listener for the theme toggle button
    themeSwitcher.addEventListener("click", () => {
        const currentTheme = localStorage.getItem("theme") || "light";

        setTheme(currentTheme === "light" ? "dark" : "light");
    });

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("theme") || "light";

    setTheme(savedTheme);

    // Monitor dynamically added elements for theme consistency
    const observer = new MutationObserver(() => {
        const currentTheme = localStorage.getItem("theme") || "light";

        setTheme(currentTheme);
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
