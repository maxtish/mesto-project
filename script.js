const popup = document.querySelector("#popup");
const popupNewCards = document.querySelector("#popup-new-cards");
const profileEditButton = document.querySelector("#profile__edit-button");
const profileAddButton = document.querySelector("#profile__add-button");
const popupCloseButton = popup.querySelector("#popup__close");
const popupCloseButtonAdd = popupNewCards.querySelector("#popup__close");

// Открытие попап редактор профиля
function popupOpen() {
  popup.classList.add("popup_opened");
}
profileEditButton.addEventListener("click", popupOpen);

// Закрытие попап редактор профиля
function popupClose() {
  popup.classList.remove("popup_opened");
}
popupCloseButton.addEventListener("click", popupClose);

// Открытие попап добавление карточки
function popupOpenNewCards() {
  popupNewCards.classList.add("popup_opened");
}
profileAddButton.addEventListener("click", popupOpenNewCards);

//Закрытие попап добавление карточки
function popupCloseNewCards() {
  popupNewCards.classList.remove("popup_opened");
}
popupCloseButtonAdd.addEventListener("click", popupCloseNewCards);

// Обработчик «отправки» формы редактирования профиля
const formElement = popup.querySelector("#popup-form"); // Находим форму в DOM // Воспользуйтесь методом querySelector()
const nameInput = popup.querySelector("#name-input"); // Находим поля формы в DOM // Воспользуйтесь инструментом .querySelector()
const jobInput = popup.querySelector("#job-input"); // Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки. // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  const profileName = document.querySelector("#profile__name");
  const profileHobby = document.querySelector("#profile__hobby");
  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  popupClose();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);

//Массив с карточками. При загрузке на странице должно быть 6 карточек, которые добавит JavaScript.
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// like
function like() {
  document
    .querySelector("#elements__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__like_active");
    });
}

// Картинка
function OpenCloseImg() {
  // Открытие попап Картинка
  const popupImg = document.querySelector("#popup-img");
  const elementsImage = document.querySelector("#elements__image");
  function popupOpenImg() {
    popupImg.classList.add("popup_opened");
  }
  elementsImage.addEventListener("click", function (evt) {
    popupOpenImg();
    //console.log(evt)

    const imgTitle = document.querySelector("#popup-img-title");
    const imgLink = document.querySelector("#popup__image-link");

    // подпись к картинке
    imgTitle.textContent = evt.path[1].childNodes[5].innerText;
    //адрес к картинке
    imgLink.src = evt.target.currentSrc;
    imgLink.alt = evt.path[1].childNodes[5].innerText;
  });

  // Закрытие попап Картинка
  const buttonCloseImg = document.querySelector("#popup__close-img");
  function popupCloseImg() {
    popupImg.classList.remove("popup_opened");
  }
  buttonCloseImg.addEventListener("click", popupCloseImg);
}

// Функция добавления карточки
function cardAdd(a, b) {
  const userTemplate = document.querySelector("#user").content;
  const usersOnline = document.querySelector("#elements__list");
  // клонируем содержимое тега template
  const userElement = userTemplate
    .querySelector(".elements__element")
    .cloneNode(true);
  // наполняем содержимым
  userElement.querySelector("#elements__image").src = b;
  userElement.querySelector("#elements__image").alt = a;
  userElement.querySelector("#elements__title").textContent = a;

  // отображаем на странице
  usersOnline.prepend(userElement);

  //Картинка
  OpenCloseImg();
  // like
  like();

  // добавим обработчик удаления
  // выберем кнопку удаления
  const deleteButton = document.querySelector("#button__delete");
  const element = document.querySelector(".elements__element");

  deleteButton.addEventListener("click", function () {
    const listItem = deleteButton.closest(".elements__element");
    listItem.remove();
  });
}

// Добаляем все карточки из массива
initialCards.forEach(function (item) {
  const a = item.name;
  const b = item.link;
  cardAdd(a, b);
});

// Обработчик «отправки» формы добавления карточки
const formElementAdd = document.querySelector("#popup-new-cards"); // Находим форму в DOM // Воспользуйтесь методом querySelector()
const a = popupNewCards.querySelector("#name-input"); // Находим поля формы в DOM // Воспользуйтесь инструментом .querySelector)
const b = popupNewCards.querySelector("#job-input"); // Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formaAddCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки.
  cardAdd(a.value, b.value);
  popupCloseNewCards();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementAdd.addEventListener("submit", formaAddCard);
