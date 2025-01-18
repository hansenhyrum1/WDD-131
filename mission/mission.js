const themeSelector = document.querySelector("#theme");
function changeTheme() {
    const current_theme = themeSelector.value;

    if (current_theme == "dark")
    {
        document.body.classList.add("dark");
        document.querySelector("#logo").src = "byui-logo_white.png";
    }
    else
    {
        document.body.classList.remove("dark");
        document.querySelector("#logo").src = "byui-logo_blue.png"; 
    }
}

themeSelector.addEventListener('change', changeTheme);

changeTheme();