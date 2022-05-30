import '../pages/index.css'; // Импорт главного файла стилей

import {
  popupEdit,
  popupNewCard,
  popupImage,
  popupAva,
  buttonOpenProfileEdit,
  buttonOpenNewCard,
  buttonOpenEditAva,
  buttonCloseProfileEdit,
  buttonCloseNewCard,
  buttonCloseImage,
  buttonCloseAva,
  formProfileElement,
  nameInput,
  jobInput,
  profileName,
  profileHobby,
  formCards,
  titleInput,
  linkInput,
  formAva,
  inactiveButton,
} from './utils.js';

import { openPopup, closePopup } from './modal.js';

import { enableValidation } from './validate.js';
import { config } from './globalscope.js';

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

import { renderCard } from './card.js'; // Добавляем все карточки из массива
initialCards.forEach(function (item) {
  const title = item.name;
  const link = item.link;
  renderCard(title, link);
});

enableValidation(popupEdit, config);
enableValidation(popupNewCard, config);
enableValidation(popupAva, config);

//слушатель кнопка открыть - "Редактировать профиль"
buttonOpenProfileEdit.addEventListener('click', function (evt) {
  // подгружаем информацию о пользователе в соответствующие поля
  loadInfoPopupEdit();
  openPopup(popupEdit);
});

//слушатель кнопка открыть - "Новое место"
buttonOpenNewCard.addEventListener('click', function (evt) {
  formCards.reset(); // Очистка полей после кнопки "сохранить"
  openPopup(popupNewCard);

  // При открытии формы добавления карточки также необходимо деактивировать кнопку сабмита
  inactiveButton(popupNewCard);
});

//слушатель кнопка открыть - "Обновить аватар"
buttonOpenEditAva.addEventListener('click', function (evt) {
  formAva.reset(); // Очистка полей после кнопки "добавить"
  openPopup(popupAva);
});

// Функция подгрузки информации о пользователе в соответствующие поля
function loadInfoPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
}

////////////////////////////////////ОБРАБОТЧИК ОТПРАВКИ "Редактировать профиль"/////////////////////////

function sendingFormProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки. // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  closePopup(popupEdit);
}
formProfileElement.addEventListener('submit', sendingFormProfile);

/////////////////////////////////// ОБРАБОТЧИК ОТПРАВКИ "Новое место"////////////////////////////////
function sendingFormCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки.
  renderCard(titleInput.value, linkInput.value);
  closePopup(popupNewCard);
}
// Прикрепляем обработчик к форме: // он будет следить за событием “submit” - «отправка»
formCards.addEventListener('submit', sendingFormCard);
