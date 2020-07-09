export function mySlider() {
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
}
