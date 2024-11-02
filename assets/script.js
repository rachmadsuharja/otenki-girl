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

window.addEventListener("load", () => {
  setTimeout(() => {
    const loading = document.getElementById("loading");
    loading.style.opacity = "0";
    loading.addEventListener("transitionend", function () {
      loading.style.display = "none";
    });
  }, 1000);
});
