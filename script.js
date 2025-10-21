const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicControl");

function tryPlayMusic() {
  music.volume = 0.6;
  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      btn.textContent = "▶️ Bật nhạc";
    });
  }
}

// Thử bật nhạc khi trang load
document.addEventListener("DOMContentLoaded", tryPlayMusic);

// Nếu bị chặn autoplay, thì bật khi chạm hoặc cuộn
window.addEventListener("click", tryPlayMusic, { once: true });
window.addEventListener("touchstart", tryPlayMusic, { once: true });

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔈 Tạm dừng nhạc";
  } else {
    music.pause();
    btn.textContent = "▶️ Bật nhạc";
  }
});
