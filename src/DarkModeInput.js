class DarkModeInput {
  constructor({ $target }) {
    const darkModeSelect = document.createElement("input");
    darkModeSelect.setAttribute("type", "checkbox");
    darkModeSelect.className = "darkModeSelect";
    $target.appendChild(darkModeSelect);

    const userTheme = localStorage.getItem("color-theme");
    const osTheme = window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "light";

    const finalTheme = userTheme ? userTheme : osTheme;
    if (finalTheme === "dark") {
      localStorage.setItem("color-theme", "dark");
      document.documentElement.setAttribute("color-theme", "dark");
      darkModeSelect.setAttribute("checked", true);
    } else {
      localStorage.setItem("color-theme", "light");
      document.documentElement.setAttribute("color-theme", "light");
    }

    darkModeSelect.addEventListener("click", (e) => {
      if (e.target.checked) {
        localStorage.setItem("color-theme", "dark");
        document.documentElement.setAttribute("color-theme", "dark");
      } else {
        localStorage.setItem("color-theme", "light");
        document.documentElement.setAttribute("color-theme", "light");
      }
    });
  }
  render() {}
}
