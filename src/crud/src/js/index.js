let inputs = document.querySelectorAll(".input-date"); // получаем инпуты
let buttons = document.querySelectorAll(".button"); // получаем кнопки
let list = document.querySelector("#list"); // получаем ul в котором будут созданы элементы li
let li = document.querySelector("#list").children; // получаем li, которые будут в будущем созданы
let id = document.querySelector("#id");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName"); // получение значени
let age = document.querySelector("#age"); // получение значения инпута с возрастом
let users = []; // новый массив в котором будут находиться айдишники
let isValue = true; // проверка есть ли такой же айди при создании
let newKey; // проверка
let create = document.querySelector(".btn-create"); // получение кнопки create
let read = document.querySelector(".btn-read"); // получение кнопки read
let update = document.querySelector(".btn-update"); // получение кнопки update
let del = document.querySelector(".btn-delete"); // получение кнопки delete

create.addEventListener("click", function getLine() {
  users.push(inputs[0].value);
  let line = document.createElement("li");
  for (let i = 0; i < inputs.length; i++) {
    line.innerHTML += `<div>${inputs[i].value}</div>`;
    inputs[i].value = "";
    list.append(line);
  }
});

update.addEventListener("click", function updateLine() {
  if (
    id.value == "" ||
    firstName.value == "" ||
    lastName.value == "" ||
    age.value == ""
  ) {
    alert("24124521e323123");
  } else {
    newKey = id.value;
    isValue = true;
    for (let i = 0; i < users.length; i++) {
      if (newKey == users[i]) {
        isValue = false;
        let repeat = users.indexOf(newKey);
        li[repeat].innerHTML = "";
        for (i = 0; i < inputs.length; i++) {
          li[repeat].innerHTML += `<div>${inputs[i].value}</div>`;
          inputs[i].value = "";
        }
      }
    }
  }
  if (isValue == true) {
    alert("trararata");
  }
  isValue = false;
});

del.addEventListener("click", function delLine() {
  newKey = id.value;
  isValue = false;
  for (let i = 0; i < users.length; i++) {
    if (newKey == users[i]) {
      let repeat = users.indexOf(newKey);
      id.value = "";
      li[repeat].remove();
      users.splice(repeat, 1);
      isValue = true;
    }
  }
  if (isValue == false) {
    alert("This id is absent");
  }
  isValue = true;
});
