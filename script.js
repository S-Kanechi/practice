"use strict";
// please do not delete the 'use strict' line above

function changeColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log("Button clicked!"); // feel free to change/delete this line
  document.querySelector("body").style.backgroundColor = randomColor;
}

function changeLanguage() {
  if (document.querySelector(".music").innerText === "Change the music") {
    musicButton.innerText = "BGM切り替え";
    languageButton.innerText = "言語切り替え(Language)";
    ericButton.innerText = "チェンジ・ザ・ワールド";
    document.getElementById("color-button").innerText = "背景色切り替え";
  } else {
    musicButton.innerText = "Change the music";
    languageButton.innerText = "Change the language(言語)";
    ericButton.innerText = "Change The World";
    document.getElementById("color-button").innerText = "Change the color";
  }
}

function changeMusic() {
  document.querySelector("audio").src = playList[Math.floor(Math.random() * 6)];
}

const button = document
  .getElementById("color-button")
  .addEventListener("click", changeColor);

const playList = [
  "https://amachamusic.chagasi.com/mp3/yume.mp3",
  "https://wingless-seraph.net/material/41_SNES-Battle06.mp3",
  "https://amachamusic.chagasi.com/mp3/moodynight.mp3",
  "https://wingless-seraph.net/material/Battle-Demonic.mp3",
  "https://wingless-seraph.net/material/Battle-Abysswalker.mp3",
  "https://wingless-seraph.net/material/Battle-Sanctuary.mp3",
];

const languageButton = document.createElement("button");
languageButton.className = "language";
languageButton.style.width = "500px";
languageButton.innerText = "Change the language(言語)";
document.querySelector(".operate").appendChild(languageButton);
languageButton.addEventListener("click", changeLanguage);

const musicButton = document.createElement("button");
musicButton.className = "music";
musicButton.innerText = "Change the music";
musicButton.style.width = "500px";
document.querySelector(".operate").appendChild(musicButton);
musicButton.addEventListener("click", changeMusic);

const ericButton = document.createElement("button");
ericButton.className = "eric";
ericButton.innerText = "Change The World";
ericButton.style.width = "500px";
document.querySelector(".operate").appendChild(ericButton);
ericButton.addEventListener("click", function () {
  location.replace("https://www.youtube.com/watch?v=x11NA63gLDM");
});
