export function myModal() {
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
}
