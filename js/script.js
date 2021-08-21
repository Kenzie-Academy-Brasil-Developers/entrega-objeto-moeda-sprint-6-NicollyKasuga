const coin = {
  state: 0,

  flip: function () {
    this.state = Math.floor(Math.random() * 2);
  },

  toString: function () {
    const coinDiv = document.querySelector(".coin");
    const text = document.createElement("div");
    if (coin.state === 0) text.innerText = "Head;";
    if (coin.state === 1) text.innerText = "Tail";
    coinDiv.appendChild(text);
  },

  toHTML: function () {
    const imageDiv = document.querySelector(".image");
    const image = document.createElement("div");
    if (coin.state === 0) image.id = "head";
    if (coin.state === 1) image.id = "tail";
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
