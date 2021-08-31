class DarkModeCheckBox {
  constructor({ $target }) {
    const darkModeCheckBox = document.createElement("input");
    darkModeCheckBox.setAttribute("type", "checkbox");
    darkModeCheckBox.className = "darkmodecheck";
    $target.appendChild(darkModeCheckBox);

    const userTheme = localStorage.getItem("theme-color");
    const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const selectTheme = userTheme ? userTheme : osTheme;

    darkModeCheckBox.addEventListener("click", (e) => {
      if (e.target.checked) {
        localStorage.setItem("theme-color", "dark");
        document.documentElement.setAttribute("theme-color", "dark");
        darkModeCheckBox.checked = true;
      } else {
        localStorage.setItem("theme-color", "light");
        document.documentElement.setAttribute("theme-color", "light");
      }
    });
  }
}

export default DarkModeCheckBox;
