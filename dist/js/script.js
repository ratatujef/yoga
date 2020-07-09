window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tabs = document.getElementsByClassName("info-header-tab"), // класс берется из верстки, элементы табов
    tabswrap = document.querySelector(".info-header"), // класс берется из верстки, обертка табов, для делегирования события
    tabContents = document.querySelectorAll(".info-tabcontent"); // класс из верстки, Содержимое табов, контент.

  myTabs(tabs, tabswrap, tabContents);

  let deadLine = "2020-06-30";

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
  let overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close"),
    btn = document.querySelector(".more"),
    miniBtn = document.querySelectorAll(".description-btn");

  for (let i = 0; i < miniBtn.length; i++) {
    miniBtn[i].addEventListener("click", () => {
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  }

  btn.addEventListener("click", () => {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  close.addEventListener("click", () => {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  });

  //form

  let myform = document.getElementsByTagName("form"),
    input = document.getElementsByTagName("input"),
    statusMessage = document.createElement("div"),
    message = {
      loading: "Загрузка",
      success: "Спасибо, мы свяжеся с вами в ближайшее время!",
      failure: "Произошла ошибка!",
    };
  statusMessage.classList.add("status");
  for (let n = 0; n < myform.length; n++) {
    myform[n].addEventListener("submit", function (e) {
      e.preventDefault();
      myform[n].appendChild(statusMessage);

      let request = new XMLHttpRequest();
      request.open("POST", "server.php");
      request.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );

      let formData = new FormData(myform[n]),
        obj = {};
      formData.forEach((value, key) => {
        obj[key] = value;
      });
      let json = JSON.stringify(obj);

      request.send(json);
      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status == 200) {
          statusMessage.innerHTML = message.success;
        } else if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      });
      for (let i = 0; i < input.length; i++) {
        input[i].value = "";
      }
    });
  }
  // slider

  let sliderIndex = 1,
    sliderItem = document.querySelectorAll(".slider-item"),
    dotsWrap = document.querySelector(".slider-dots"),
    dot = document.querySelectorAll(".dot"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next");

  function showSlide(n) {
    if (n < 1) {
      sliderIndex = sliderItem.length;
    }
    if (n > sliderItem.length) {
      sliderIndex = 1;
    }
    sliderItem.forEach((item) => (item.style.display = "none"));
    dot.forEach((item) => item.classList.remove("dot-active"));
    sliderItem[sliderIndex - 1].style.display = "block";
    dot[sliderIndex - 1].classList.add("dot-active");
  }

  showSlide(sliderIndex);

  function plusSlide(n) {
    showSlide((sliderIndex += n));
  }
  function currentSlide(n) {
    showSlide((sliderIndex = n));
  }
  prev.addEventListener("click", () => {
    plusSlide(-1);
  });
  next.addEventListener("click", () => {
    plusSlide(1);
  });

  dotsWrap.addEventListener("click", (e) => {
    for (let i = 0; i < dot.length + 1; i++) {
      if (e.target.classList.contains("dot") && e.target == dot[i - 1]) {
        currentSlide(i);
      }
    }
  });
  setInterval(() => plusSlide(1), 5000);
  //calc

  let person = document.querySelectorAll(".counter-block-input")[0],
    days = document.querySelectorAll(".counter-block-input")[1],
    place = document.getElementById("select"),
    totalValue = document.getElementById("total"),
    daysData = 0,
    personData = 0,
    total = 0;

  totalValue.textContent = 0;
  person.addEventListener("change", function () {
    personData = this.value;
    if (daysData == "") {
      totalValue.textContent = 0;
    } else {
      total = personData * daysData * 4000;
      totalValue.textContent = total;
    }
  });
  days.addEventListener("change", function () {
    daysData = this.value;
    if (personData == "") {
      totalValue.textContent = 0;
    } else {
      total = personData * daysData * 4000;
      totalValue.textContent = total;
    }
  });
  place.addEventListener("change", function () {
    if (personData != "" && daysData != "") {
      let a = total;
      totalValue.textContent = a * this.options[this.selectedIndex].value;
    }
  });
});
