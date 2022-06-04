import '../pages/index.css'; // Импорт главного файла стилей

import {
  popupEdit,
  popupNewCard,
  popupAva,
  buttonOpenProfileEdit,
  buttonOpenNewCard,
  buttonOpenEditAva,
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
  formDellCard,
  popupDellCard,
  linkInputAva,
  renderLoadingAva,
  renderLoadingNewCard,
  profileId,
} from './utils.js';

import { openPopup, closePopup } from './modal.js';

import { enableValidation } from './validate.js';
import { config } from './constants.js';
import {
  loadUserinfo,
  loadCards,
  sendEditProfile,
  sendNewCard,
  dellNewCard,
  meAvatar,
} from './api.js';

import { renderCard, idCardSending } from './card.js';

////////////////////////////////////////////////

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
  // деактивировать кнопку сабмита
  inactiveButton(popupNewCard);
});

//слушатель кнопка открыть - "Обновить аватар"
buttonOpenEditAva.addEventListener('click', function (evt) {
  formAva.reset(); // Очистка полей после кнопки "добавить"
  openPopup(popupAva);
  inactiveButton(popupAva);
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
  sendEditProfile(nameInput.value, jobInput.value);

  closePopup(popupEdit);
}
formProfileElement.addEventListener('submit', sendingFormProfile);

/////////////////////////////////// ОБРАБОТЧИК ОТПРАВКИ "Новое место"////////////////////////////////
function sendingFormCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки.
  renderLoadingNewCard(true);
  //renderCard(titleInput.value, linkInput.value);
  sendNewCard(titleInput.value, linkInput.value);
}
// Прикрепляем обработчик к форме: // он будет следить за событием “submit” - «отправка»
formCards.addEventListener('submit', sendingFormCard);

///////// Загрузка информации о пользователе с сервера //////////////
loadUserinfo();
console.log(profileId);

///////// Загрузка карточек с сервера //////////////
loadCards();

////////////////////////////////////ОБРАБОТЧИК ОТПРАВКИ "Удалить карточку"/////////////////////////

function sendingDellCard(evt) {
  evt.preventDefault();
  dellNewCard(idCardSending);
}
formDellCard.addEventListener('submit', sendingDellCard);

////////////////////////////////////ОБРАБОТЧИК ОТПРАВКИ "Обновление аватара пользователя"/////////////////////////

function sendingMeAvatar(evt) {
  evt.preventDefault();
  renderLoadingAva(true);
  meAvatar(linkInputAva.value);
}
formAva.addEventListener('submit', sendingMeAvatar);
