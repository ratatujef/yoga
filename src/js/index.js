import { timer } from "./modules/timer";
import { tabsModule } from "./modules/tabs";
import { myModal } from "./modules/modal";
import { myForms } from "./modules/forms";
import { mySlider } from "./modules/slider";
import { myCalc } from "./modules/calc";

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  timer();
  tabsModule();
  myModal();
  myForms();
  mySlider();
  myCalc();
});
