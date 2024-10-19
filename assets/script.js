function playBGM() {
  const audio = document.getElementById("bgm");
  audio.play();
}

function playVoice() {
  const audio = document.getElementById("voice");
  audio.play();
}

function letsGo() {
  playBGM();
  playVoice();
}
