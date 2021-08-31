class RandomButton {
  constructor({ $target, onClick }) {
    const randomButton = document.createElement("input");
    randomButton.className = "RandomButton";
    randomButton.setAttribute("type", "button");
    randomButton.value = "랜덤";

    $target.appendChild(randomButton);

    randomButton.addEventListener("click", (e) => onClick());

    this.loading = false;
  }
}

export default RandomButton;
