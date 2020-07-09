export function tabsModule() {
  let tabs = document.getElementsByClassName("info-header-tab"),
    tabswrap = document.querySelector(".info-header"),
    tabContents = document.querySelectorAll(".info-tabcontent");
  myTabs(tabs, tabswrap, tabContents);

  function myTabs(tab, tabWrapper, tabContent) {
    function hideTab(a) {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
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
}
