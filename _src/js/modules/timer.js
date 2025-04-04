export const startTimer = (duration) => {
  // const display = document.querySelector(".counter__timer");

  const minutesEl = document.querySelector(".counter__minutes");
  const secondsEl = document.querySelector(".counter__seconds");

  if (!minutesEl || !secondsEl) return;

  let timer = duration;
  let minutes, seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
};
