//Окна
const popupEdit = document.querySelector("#popup-edit"); // Окно - "Редактировать профиль"
const popupNewCard = document.querySelector("#popup-new-cards"); // Окно - "Новое место"
const popupImage = document.querySelector("#popup-img"); // Окно - "Картинка"

// Кнопки ОТКРЫТЬ
const buttonOpenProfileEdit = document.querySelector("#profile-edit-button"); // Кнопка - открыть "Редактировать профиль"
const buttonOpenNewCard = document.querySelector("#profile-add-button"); // Кнопка - открыть "Новое место"

// Кнопки ЗАКРЫТЬ
const buttonCloseProfileEdit = popupEdit.querySelector("#popup-close-edit"); // Кнопка закрыть - "Редактировать профиль"
const buttonCloseNewCard = popupNewCard.querySelector("#popup-close-cards"); // Кнопка - закрыть "Новое место"

// Форма "Редактировать профиль"
const formElement = popupEdit.querySelector("#popup-form-profile"); // Форма редактирования профиля
const nameInput = popupEdit.querySelector("#name-input-profile"); // Поле редактирования Имя
const jobInput = popupEdit.querySelector("#job-input-profile"); // Поле редактирования Работа
const profileName = document.querySelector("#profile-name"); // Имя профиля на странице
const profileHobby = document.querySelector("#profile-hobby"); // Работа профиля на странице

// Форма "Новое место"
const titleInput = popupNewCard.querySelector("#name-input-cards"); // Поле "Название"
const linkInput = popupNewCard.querySelector("#link-input-cards"); // Поле "Ссылка на картинку"

const cardContainer = document.querySelector("#card-container").content; // template карточки
const elementsList = document.querySelector("#elements-list"); // Место куда необходимо вставлять карточки

// Функция подгрузки информации о пользователе в соответствующие поля
function loadInfoPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
}

// Функция очистки поля после кнопки "добавить"
function clearInputFormCard() {
  titleInput.value = "";
  linkInput.value = "";
}

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//слушатель кнопка открыть - "Редактировать профиль"
buttonOpenProfileEdit.addEventListener("click", function () {
  // подгружаем информацию о пользователе в соответствующие поля
  loadInfoPopupEdit();
  //Открываем попап
  openPopup(popupEdit);
});
//слушатель кнопка открыть - "Новое место"
buttonOpenNewCard.addEventListener("click", function () {
  clearInputFormCard();
  openPopup(popupNewCard);
});

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//слушатель кнопка закрыть - "Редактировать профиль"
buttonCloseProfileEdit.addEventListener("click", function () {
  closePopup(popupEdit);
});
//слушатель кнопка закрыть - "Новое место"
buttonCloseNewCard.addEventListener("click", function () {
  closePopup(popupNewCard);
});

//ОБРАБОТЧИК ОТПРАВКИ "Редактировать профиль"
function sendingFormProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки. // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  closePopup(popupEdit);
}
// Прикрепляем обработчик к форме:// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", sendingFormProfile);

// ОБРАБОТЧИК ОТПРАВКИ "Новое место"
function sendingFormCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки.
  renderCard(titleInput.value, linkInput.value);
  closePopup(popupNewCard);
}
// Прикрепляем обработчик к форме: // он будет следить за событием “submit” - «отправка»
popupNewCard.addEventListener("submit", sendingFormCard);

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

// Функция like
function activatesLike() {
  elementsList
    .querySelector("#elements-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__like_active");
    });
}
// Функция удаления карточки
function deleteCard() {
  const deleteButton = elementsList.querySelector("#button-delete"); // выберем кнопку удаления
  deleteButton.addEventListener("click", function () {
    const listItem = deleteButton.closest("#elements-element");
    listItem.remove();
  });
}

// Функция создание карточки
function createCard(title, link) {
  // Клонируем содержимое тега template
  const templateCardContainer = cardContainer
    .querySelector("#elements-element")
    .cloneNode(true);
  // Наполняем содержимым
  templateCardContainer.querySelector("#elements-image").src = link;
  templateCardContainer.querySelector("#elements-image").alt = title;
  templateCardContainer.querySelector("#elements-title").textContent = title;

  return templateCardContainer;
}
// Функция отрисовки карточки
function renderCard(title, link) {
  createCard(title, link);

  // Отображаем на странице
  elementsList.prepend(createCard(title, link));

  deleteCard(); // Функция удаления карточки
  activatesLike(); // Функция Like
  openImg(); // Картинка открытие по клику
}
// Добавляем все карточки из массива
initialCards.forEach(function (item) {
  const title = item.name;
  const link = item.link;
  renderCard(title, link);
});

// Картинка открытие
function openImg() {
  const buttonOpenImage = elementsList.querySelector("#elements-image"); // Кнопка - открыть "Картинка"
  const buttonCloseImage = popupImage.querySelector("#popup-close-img"); // Кнопка - закрыть "Картинка"
  const elementsTitle =
    elementsList.querySelector("#elements-title").textContent; // Подпись к картинке
  //СЛУШАТЕЛИ - "Картинка"
  //слушатель кнопка открыть - "Картинка"
  buttonOpenImage.addEventListener("click", function (evt) {
    openPopup(popupImage);
    const imgTitle = popupImage.querySelector("#popup-img-title");
    const imgLink = popupImage.querySelector("#popup-image-link");
    imgTitle.textContent = elementsTitle;
    imgLink.src = buttonOpenImage.src;
  });

  //слушатель кнопка закрыть - "Картинка"
  buttonCloseImage.addEventListener("click", function () {
    closePopup(popupImage);
  });
}
