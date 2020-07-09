export function myForms() {
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
}
