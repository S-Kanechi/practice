'use strict';
// please do not delete the 'use strict' line above

const button = document.getElementById('color-button').addEventListener('click', changeColor)




function changeColor() {
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  console.log('Button clicked!'); // feel free to change/delete this line
  document.querySelector("body").style.backgroundColor = randomColor;
}


const musicButton = document.createElement("button");
musicButton.className = 'music'
musicButton.innerText = "Change music"
document.body.appendChild(musicButton)
musicButton.addEventListener('click', changeMusic)


const playList=["https://amachamusic.chagasi.com/mp3/yume.mp3",
"https://amachamusic.chagasi.com/mp3/seishishitauchu.mp3",
"https://amachamusic.chagasi.com/mp3/moodynight.mp3",
"https://amachamusic.chagasi.com/mp3/yuubenohoshi.mp3"]

function changeMusic(){
document.querySelector("iframe").src = playList[Math.floor(Math.random()*4)] 
}


const ericButton = document.createElement("button");
ericButton.className = 'mute'
ericButton.innerText = "Change The World"
ericButton.style.width = "300px"
document.body.appendChild(ericButton)
ericButton.addEventListener('click', function(){location.replace("https://www.youtube.com/watch?v=Hj_xLcIP6fg");} )


