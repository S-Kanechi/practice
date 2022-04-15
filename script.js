"use strict";
// please do not delete the 'use strict' line above

const button = document
  .getElementById("color-button")
  .addEventListener("click", changeColor);

function changeColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log("Button clicked!"); // feel free to change/delete this line
  document.querySelector("body").style.backgroundColor = randomColor;
}

const musicButton = document.createElement("button");
musicButton.className = "music";
musicButton.innerText = "Change the music";
musicButton.style.width = "500px";
document.body.appendChild(musicButton);
musicButton.addEventListener("click", changeMusic);

const playList = [
  "https://amachamusic.chagasi.com/mp3/yume.mp3",
  "https://amachamusic.chagasi.com/mp3/seishishitauchu.mp3",
  "https://amachamusic.chagasi.com/mp3/moodynight.mp3",
  "https://amachamusic.chagasi.com/mp3/yuubenohoshi.mp3",
];

function changeMusic() {
  document.querySelector("iframe").src =
    playList[Math.floor(Math.random() * 4)];
}

const languageButton = document.createElement("button");
languageButton.className = "language";
languageButton.style.width = "500px";
languageButton.innerText = "Change the language(言語)";
document.body.appendChild(languageButton);
languageButton.addEventListener("click", changeLanguage);

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

const ericButton = document.createElement("button");
ericButton.className = "eric";
ericButton.innerText = "Change The World";
ericButton.style.width = "500px";
document.body.appendChild(ericButton);
ericButton.addEventListener("click", function () {
  location.replace("https://www.youtube.com/watch?v=x11NA63gLDM");
});
