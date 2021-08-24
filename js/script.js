const coin = {
  state: 0,
  resultImg: [],
  resultString: [],

  flip: function () {
    this.state = Math.floor(Math.random() * 2);
  },

  toString: function () {
    const coinDiv = document.querySelector(".coin");
    const text = document.createElement("div");
    if (coin.state === 0) {
      text.innerText = "Head";
      this.resultString.push("Head");
    } else {
      text.innerText = "Tail";
      this.resultString.push("Tail");
    }
    coinDiv.appendChild(text);
  },

  toHTML: function () {
    const imageDiv = document.querySelector(".image");
    const image = document.createElement("img");
    if (coin.state === 0) {
      image.src = "../assets/image/head.jpg";
      image.classList.add("head");
      this.resultImg.push("Head");
    } else {
      image.src = "../assets/image/tails.jpeg";
      image.classList.add("tail");
      this.resultImg.push("Tail");
    }
    imageDiv.appendChild(image);
  },
};

function display20Flips() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    coin.toString();
  }
}

function display20Images() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    coin.toHTML();
  }
}
display20Flips();
display20Images();
