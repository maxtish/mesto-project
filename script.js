const popup = document.querySelector("#popup");
const popupNewCards = document.querySelector("#popup-new-cards");
const profileEditButton = document.querySelector("#profile__edit-button");
const profileAddButton = document.querySelector("#profile__add-button");
const closePopupButton = popup.querySelector("#popup__close");
const closePopupButtonAdd = popupNewCards.querySelector("#popup__close");

// Открытие попап редактор профиля
function openPopup() {
  popup.classList.add("popup_opened");
}
profileEditButton.addEventListener("click", openPopup);

// Закрытие попап редактор профиля
function closePopup() {
  popup.classList.remove("popup_opened");
}
closePopupButton.addEventListener("click", closePopup);

// Открытие попап добавление карточки
function openPopupNewCards() {
  popupNewCards.classList.add("popup_opened");
}
profileAddButton.addEventListener("click", openPopupNewCards);

//Закрытие попап добавление карточки
function closePopupNewCards() {
  popupNewCards.classList.remove("popup_opened");
}
closePopupButtonAdd.addEventListener("click", closePopupNewCards);

// Обработчик «отправки» формы редактирования профиля
const formElement = popup.querySelector("#popup-form"); // Находим форму в DOM // Воспользуйтесь методом querySelector()
const nameInput = popup.querySelector("#name-input"); // Находим поля формы в DOM // Воспользуйтесь инструментом .querySelector()
const jobInput = popup.querySelector("#job-input");
const profileName = document.querySelector("#profile__name");
const profileHobby = document.querySelector("#profile__hobby");

// подгружаем информацию о пользователе всоответствующие поля
nameInput.value = profileName.textContent;
jobInput.value = profileHobby.textContent;
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
// sendingFormProfile
function sendingFormProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки. // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  closePopup();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", sendingFormProfile);

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
function openCloseImg() {
  // Открытие попап Картинка
  const popupImg = document.querySelector("#popup-img");
  const elementsImage = document.querySelector("#elements__image");
  function openPopupImg() {
    popupImg.classList.add("popup_opened");
  }
  elementsImage.addEventListener("click", function (evt) {
    openPopupImg();
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
  function closePopupImg() {
    popupImg.classList.remove("popup_opened");
  }
  buttonCloseImg.addEventListener("click", closePopupImg);
}

// Функция добавления карточки
function addCard(a, b) {
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
  openCloseImg();
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
  addCard(a, b);
});

// Обработчик «отправки» формы добавления карточки
const formElementAdd = document.querySelector("#popup-new-cards"); // Находим форму в DOM // Воспользуйтесь методом querySelector()
const a = popupNewCards.querySelector("#name-input"); // Находим поля формы в DOM // Воспользуйтесь инструментом .querySelector)
const b = popupNewCards.querySelector("#job-input"); // Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
//sendingFormCard
function sendingFormCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки.
  addCard(a.value, b.value);
  closePopupNewCards();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementAdd.addEventListener("submit", sendingFormCard);
