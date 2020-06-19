window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tabs = document.getElementsByClassName("info-header-tab"), // класс берется из верстки, элементы табов
    tabswrap = document.querySelector(".info-header"), // класс берется из верстки, обертка табов, для делегирования события
    tabContents = document.querySelectorAll(".info-tabcontent"); // класс из верстки, Содержимое табов, контент.

  myTabs(tabs, tabswrap, tabContents);

  let deadLine = "2020-06-20";

  let timer = document.getElementById("timer"),
    timerHours = timer.querySelector(".hours"),
    timerMinutes = timer.querySelector(".minutes"),
    timerSeconds = timer.querySelector(".seconds");

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
});

function myTabs(tab, tabWrapper, tabContent) {
  function hideTab(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show"); // Класс show берется из верстки, отвечает за видимость блока
      tabContent[i].classList.add("hide"); // Класс hide берется из верстки, отвечает за скрытие блока
    }
  }
  hideTab(1);
  function showTab(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }
  tabWrapper.addEventListener("click", function (e) {
    let target = e.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTab(0);
          showTab(i);
        }
      }
    }
  });
}

// по уроку

// let deadLine = "2020-06-20";

// function timerRemaining(endTime) {
//   let t = new Date(Date.parse(endTime) - Date.parse(new Date())),
//     day = t / 1000 / 60,
//     hours = t.getHours(t / 1000 / 60 / 60),
//     min = Math.floor((t / 100 / 60) % 60),
//     sec = Math.floor((t / 1000) % 60);
//   return {
//     total: t,
//     hour: hours,
//     minutes: min,
//     seconds: sec,
//   };
// }

// function setClock(endTime, id) {
//   let timer = document.getElementById(id),
//     hours = timer.querySelector(".hours"),
//     minutes = timer.querySelector(".minutes"),
//     seconds = timer.querySelector(".seconds"),
//     timeInterval = setInterval(updateClock, 1000);

//   function updateClock() {
//     let t = timerRemaining(endTime);

//     function getZero(a) {
//       if (a < 10) {
//         return "0" + a;
//       } else {
//         return a;
//       }
//     }
//     hours.textContent = getZero(t.hour);
//     minutes.textContent = getZero(t.minutes);
//     seconds.textContent = getZero(t.seconds);

//     if (t.total <= 0) {
//       hours.textContent = "00";
//       minutes.textContent = "00";
//       seconds.textContent = "00";
//       clearInterval(timeInterval);
//     }
//   }
// }

// setClock(deadLine, "timer");
