import DarkModeCheckBox from "./DarkModeCheckBox.js";
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import ImageInfo from "./ImageInfo.js";
import RandomButton from "./RandomButton.js";
import api from "./api.js";

console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.darkModeCheckBox = new DarkModeCheckBox({ $target });

    const $searchBox = document.createElement("div");
    $searchBox.className = "SearchBox";
    $target.appendChild($searchBox);
    console.log("create", $searchBox);

    this.searchInput = new SearchInput({
      $target: $searchBox,
      onSearch: (keyword) => {
        if (!this.searchResult.loading) {
          this.searchResult.setState({ loading: true });
          api.fetchCats(keyword).then(({ data }) => {
            this.setState({ data, loading: false });
          });
        }
      },
    });

    this.randomButton = new RandomButton({
      $target: $searchBox,
      onClick: () => {
        if (!this.searchResult.loading) {
          this.searchResult.setState({ loading: true });
          api.fetchRandomCat().then(({ data }) => {
            console.log(data);
            this.setState({ data, loading: false });
          });
        }
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        api.fetchCatDetail(image.id).then(({ data }) => {
          if (data) {
            this.imageInfo.setState({
              visible: true,
              data: data,
              image,
            });
          }
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}

export default App;
