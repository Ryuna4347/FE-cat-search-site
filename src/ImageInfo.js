class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    $imageInfo.addEventListener("click", (e) => {
      if (e.target.className === "close" || e.target.className === "ImageInfo")
        $imageInfo.style.display = "none";
    });

    document.addEventListener("keydown", (e) => {
      if ($imageInfo.style.display === "block" && e.key === "Escape")
        $imageInfo.style.display = "none";
    });

    this.render();
  }

  setState({ visible, data }) {
    this.visible = visible;
    this.data = data;
    this.render();
  }

  render() {
    if (this.visible) {
      const { name, url, temperament, origin } = this.data;

      this.$imageInfo.innerHTML = `
		  <div class="content-wrapper">
			<div class="title">
			  <span>${name}</span>
			  <div class="close">x</div>
			</div>
			<img src="${url}" alt="${name}"/>        
			<div class="description">
			  <div>성격: ${temperament}</div>
			  <div>태생: ${origin}</div>
			</div>
		  </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}

export default ImageInfo;
