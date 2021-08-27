const TEMPLATE = '<input type="text">';

class SearchInput {
  lastFiveSearch = [];

  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.autofocus = "true";

    $searchInput.addEventListener("click", (e) => {
      if (e.target.value !== "") {
        e.target.value = "";
      }
    });

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
        this.lastFiveSearch.push(e.target.value);
        if (this.lastFiveSearch.length > 5) this.lastFiveSearch.shift();
        console.log(this.lastFiveSearch, e.target.value);
      }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
