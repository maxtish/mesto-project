//Окна
const popupEdit = document.querySelector('#popup-edit'); // Окно - "Редактировать профиль"
const popupNewCard = document.querySelector('#popup-new-cards'); // Окно - "Новое место"
const popupImage = document.querySelector('#popup-img'); // Окно - "Картинка"
const popupAva = document.querySelector('#popup-ava'); // Окно - "Обновить аватар"

// Кнопки ОТКРЫТЬ
const buttonOpenProfileEdit = document.querySelector('#profile-edit-button'); // Кнопка - открыть "Редактировать профиль"
const buttonOpenNewCard = document.querySelector('#popup-form-cards-button'); // Кнопка - открыть "Новое место"
const buttonOpenEditAva = document.querySelector('#profile-edit-ava-button'); // Кнопка - открыть "Обновить аватар"

// Кнопки ЗАКРЫТЬ
const buttonCloseProfileEdit = popupEdit.querySelector('#popup-close-edit'); // Кнопка закрыть - "Редактировать профиль"
const buttonCloseNewCard = popupNewCard.querySelector('#popup-close-cards'); // Кнопка - закрыть "Новое место"
const buttonCloseImage = popupImage.querySelector('#popup-close-img'); // Кнопка - закрыть "Картинка"
const buttonCloseAva = popupAva.querySelector('#popup-close-ava'); // Кнопка - закрыть "Обновить аватар"

// Форма "Редактировать профиль"
const formElement = popupEdit.querySelector('#profile-edit'); // Форма редактирования профиля
const nameInput = popupEdit.querySelector('#name-input-profile'); // Поле редактирования Имя
const jobInput = popupEdit.querySelector('#job-input-profile'); // Поле редактирования Работа
const profileName = document.querySelector('#profile-name'); // Имя профиля на странице
const profileHobby = document.querySelector('#profile-hobby'); // Работа профиля на странице

// Форма "Новое место"
const formCards = popupNewCard.querySelector('#popup-form-cards'); // Форма "Новое место"
const titleInput = popupNewCard.querySelector('#name-input-cards'); // Поле "Название"
const linkInput = popupNewCard.querySelector('#link-input-cards'); // Поле "Ссылка на картинку"

const cardContainer = document.querySelector('#card-container').content; // template карточки
const elementsList = document.querySelector('#elements-list'); // Место куда необходимо вставлять карточки

// Функция подгрузки информации о пользователе в соответствующие поля
function loadInfoPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
}

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//слушатель кнопка открыть - "Редактировать профиль"
buttonOpenProfileEdit.addEventListener('click', function (evt) {
  // подгружаем информацию о пользователе в соответствующие поля
  loadInfoPopupEdit();
  //Открываем попап
  openPopup(popupEdit);
  enableValidationEvt(evt);
});

//слушатель кнопка открыть - "Новое место"
buttonOpenNewCard.addEventListener('click', function (evt) {
  formCards.reset(); // Очистка полей после кнопки "добавить"
  openPopup(popupNewCard);
  enableValidationEvt(evt);
});

//слушатель кнопка открыть - "Обновить аватар"
buttonOpenEditAva.addEventListener('click', function (evt) {
  formCards.reset(); // Очистка полей после кнопки "добавить"
  openPopup(popupAva);
  enableValidationEvt(evt);
});

// функция закрытия попапа esc
function closeEsc(popup) {
  document.addEventListener('keydown', function (evt) {
    closePopup(popup);
  });
}
/*
closeEsc(popupEdit);
closeEsc(popupNewCard);
closeEsc(popupImage);
closeEsc(popupAva);
*/
//Функция слушатель кнопка закрыть оверлей
function closeOver() {
  document.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      evt.target.classList.toggle('popup_opened');
    }
  });
}

closeOver();

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//слушатель кнопка закрыть - "Редактировать профиль"
buttonCloseProfileEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});
//слушатель кнопка закрыть - "Новое место"
buttonCloseNewCard.addEventListener('click', function () {
  closePopup(popupNewCard);
});

//кнопка закрыть - "Картинка"
buttonCloseImage.addEventListener('click', function () {
  closePopup(popupImage);
});

//слушатель кнопка закрыть - "Обновить аватар"
buttonCloseAva.addEventListener('click', function () {
  closePopup(popupAva);
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
formElement.addEventListener('submit', sendingFormProfile);

// ОБРАБОТЧИК ОТПРАВКИ "Новое место"
function sendingFormCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки.
  renderCard(titleInput.value, linkInput.value);
  closePopup(popupNewCard);
}
// Прикрепляем обработчик к форме: // он будет следить за событием “submit” - «отправка»
formCards.addEventListener('submit', sendingFormCard);

//Массив с карточками. При загрузке на странице должно быть 6 карточек, которые добавит JavaScript.
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

// Функция like
function activatesLike(evt) {
  evt.target.classList.toggle('elements__like_active');
}
// Функция удаления карточки
function deleteCard() {
  const listItem = elementsList
    .querySelector('#button-delete')
    .closest('#elements-element');
  listItem.remove();
}

// Функция создание карточки
function createCard(title, link) {
  // Клонируем содержимое тега template
  const templateCardContainer = cardContainer
    .querySelector('#elements-element')
    .cloneNode(true);
  // Наполняем содержимым
  templateCardContainer.querySelector('#elements-image').src = link;
  templateCardContainer.querySelector('#elements-image').alt = title;
  templateCardContainer.querySelector('#elements-title').textContent = title;

  templateCardContainer
    .querySelector('#button-delete')
    .addEventListener('click', deleteCard); // Слушатель кнопку удаления

  templateCardContainer
    .querySelector('#elements-like')
    .addEventListener('click', activatesLike); //Слушатель Like

  templateCardContainer
    .querySelector('#elements-image')
    .addEventListener('click', () => {
      openImg(title, link);
    }); //Слушатель для открытия Картинка

  return templateCardContainer;
}

// Функция отрисовки карточки
function renderCard(title, link) {
  elementsList.prepend(createCard(title, link));
}
// Добавляем все карточки из массива
initialCards.forEach(function (item) {
  const title = item.name;
  const link = item.link;
  renderCard(title, link);
});

// Картинка открытие
function openImg(title, link) {
  const imgTitle = popupImage.querySelector('#popup-img-title');
  const imgLink = popupImage.querySelector('#popup-image-link');
  imgTitle.textContent = title;
  imgLink.src = link;
  imgLink.alt = title;
  openPopup(popupImage);
}

// Валидация формы - Любой по клику определяем evt.target.id обрезаем -button и получаем id формы которая появилась
// Используем стандартные браузерные тексты ошибок.
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__item_type_error');
  errorElement.classList.add('popup__item-error_active');
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__item_type_error');
  errorElement.classList.remove('popup__item-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
  } else {
    buttonElement.classList.remove('button_inactive');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__item'));

  const buttonElement = formElement.querySelector('.popup__submit');

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (popupElement) => {
  /*const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
    setEventListeners(formElement);
*/
  popupElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

  setEventListeners(popupElement);
  /*
    const fieldsetList = Array.from(
      formElement.querySelectorAll('.popup__set')
    );
    fieldsetList.forEach((fieldsetElement) => {
      setEventListeners(fieldsetElement);
    });
*/
};

const enableValidationEvt = (evt) => {
  const popupElementText = evt.target.id.slice(0, -7);
  const popupElement = document.querySelector(`#${popupElementText}`);

  enableValidation(popupElement);
};
