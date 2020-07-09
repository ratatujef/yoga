export function timer() {
  let deadLine = "2020-07-30";

  let timer = document.getElementById("timer"),
    timerHours = timer.querySelector(".hours"),
    timerMinutes = timer.querySelector(".minutes"),
    timerSeconds = timer.querySelector(".seconds");

  timerHours.textContent = "00";
  timerMinutes.textContent = "00";
  timerSeconds.textContent = "00";

  function timerRemaining() {
    function addZero(a) {
      if (a < 10) {
        return "0" + a;
      } else {
        return a;
      }
    }
    let t = new Date(Date.parse(deadLine) - Date.parse(new Date())),
      day = t.getDate(), // if you need days, you can use it too, just get it from HTML by querySelector
      hours = t.getHours(),
      min = t.getMinutes(),
      sec = t.getSeconds();
    if (t >= 0) {
      if (day >= 1) {
        hours += day * 24;
      }
      timerHours.textContent = addZero(hours);
      timerMinutes.textContent = addZero(min);
      timerSeconds.textContent = addZero(sec);
    } else {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  }
  setInterval(timerRemaining, 1000);
}
