const test = document.querySelector(".test");
const testBtn = document.querySelector("#test");

const cat = document.querySelector(".cat");
const catBtn = document.querySelector("#cat");

const content = document.querySelector(".prime-text-box");
const contentBtn = document.querySelector("#content");

const clearBtn = document.querySelector("#clear");

const userName = document.querySelector(".name");
const surname = document.querySelector(".surname");
const profession = document.querySelector(".prime-title");
const greeting = document.querySelector(".prime-text");

const user = {
  'name': "Кот",
  'surname': "Учёный",
  'profession': "Веб-разработчик",
  'greeting': "Мяу! Я абстрактный владелец портфолио. Ученый, сообразительный, креативный и вообще очень-очень крутой Кот. Умею рисовать, верстать, программировать, хоть у меня и лапки. Легко решу все ваши задачи по размещению ваших идей и вашего бизнеса в мировой паутине.",
}

userName.addEventListener("click", function () {
  userName.innerHTML = user.name;
});

surname.addEventListener("click", function () {
  surname.innerHTML = user.surname;
});

profession.addEventListener("click", function () {
  profession.innerHTML = user.profession;
});

greeting.addEventListener("click", function () {
  greeting.innerHTML = user.greeting;
});

testBtn.addEventListener("click", function () {
  test.classList.add('active');
  cat.classList.remove('active');
});

catBtn.addEventListener("click", function () {
  cat.classList.add('active');
  test.classList.remove('active');
});

clearBtn.addEventListener("click", function () {
  cat.classList.remove('active');
  test.classList.remove('active');
});

contentBtn.addEventListener("click", function () {
  content.classList.toggle('active');
});