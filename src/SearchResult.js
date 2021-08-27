class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  loading = false;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("section");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData.data;
    this.loading = nextData.loading;
    this.render();
  }

  render() {
    if (this.loading) {
      this.$searchResult.innerHTML = "<p>현재 데이터를 불러오고 있습니다.</p>";
    } else if (!this.loading && this.data.length === 0) {
      this.$searchResult.innerHTML = "<p>검색 결과가 없습니다.</p>";
    } else {
      this.$searchResult.innerHTML = this.data
        .map(
          (cat) => `
			  <article class="item">
				<img src=${cat.url} alt=${cat.name} />
			  </article>
			`
        )
        .join("");

      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onClick(this.data[index]);
        });
      });
    }
  }
}
