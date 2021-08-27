console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.darkModeInput = new DarkModeInput({
      $target,
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        this.setState({
          //검색 시작 시 loading 처리.
          data: null, //
          loading: true,
        });
        api
          .fetchCats(keyword)
          .then(({ data }) => this.setState({ data, loading: false }));
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        api.fetchCatsDetail(image.id).then(({ data }) =>
          this.imageInfo.setState({
            visible: true,
            image: data,
          })
        );
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
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
