export function myCalc() {
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
}
