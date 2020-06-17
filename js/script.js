window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tabs = document.getElementsByClassName("info-header-tab"),
    tabswrap = document.querySelector(".info-header"),
    tabContents = document.querySelectorAll(".info-tabcontent");

  function hideTab(a) {
    for (let i = a; i < tabContents.length; i++) {
      tabContents[i].classList.remove("show");
      tabContents[i].classList.add("hide");
    }
  }
  hideTab(1);
  function showTab(b) {
    if (tabContents[b].classList.contains("hide")) {
      tabContents[b].classList.remove("hide");
      tabContents[b].classList.add("show");
    }
  }
  tabswrap.addEventListener("click", function (e) {
    let target = e.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tabs.length; i++) {
        if (target == tabs[i]) {
          hideTab(0);
          showTab(i);
        }
      }
    }
  });
});
