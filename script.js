document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    if (!toggleButton) {
        console.error("Dark mode toggle button not found!");
        return;
    }

    function enableDarkMode() {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        toggleButton.textContent = "Light Mode";
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
        toggleButton.textContent = "Dark Mode";
    }

    if (localStorage.getItem("dark-mode") === "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});
