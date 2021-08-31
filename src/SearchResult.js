class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("section");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState({ data, loading }) {
    this.data = data;
    this.loading = loading;
    this.render();
  }

  render() {
    if (this.loading) {
      this.$searchResult.innerHTML = "<div>로딩중입니다.</div>";
    } else {
      if (!this.data || this.data.length === 0) {
        this.$searchResult.innerHTML =
          "<article ><p>검색 결과가 없습니다.</p></article>";
      } else {
        this.$searchResult.innerHTML = this.data
          .map(
            (cat) => `
				<article class="item" title=${cat.name}>
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
}

export default SearchResult;
