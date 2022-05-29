//Окна
export const popupEdit = document.querySelector('#popup-edit'); // Окно - "Редактировать профиль"
export const popupNewCard = document.querySelector('#popup-new-cards'); // Окно - "Новое место"
export const popupImage = document.querySelector('#popup-img'); // Окно - "Картинка"
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
export const formElement = popupEdit.querySelector('#profile-edit'); // Форма редактирования профиля
export const nameInput = popupEdit.querySelector('#name-input-profile'); // Поле редактирования Имя
export const jobInput = popupEdit.querySelector('#job-input-profile'); // Поле редактирования Работа
export const profileName = document.querySelector('#profile-name'); // Имя профиля на странице
export const profileHobby = document.querySelector('#profile-hobby'); // Работа профиля на странице

// Форма "Новое место"
export const formCards = popupNewCard.querySelector('#popup-form-cards'); // Форма "Новое место"
export const titleInput = popupNewCard.querySelector('#name-input-cards'); // Поле "Название"
export const linkInput = popupNewCard.querySelector('#link-input-cards'); // Поле "Ссылка на картинку"

import { enableValidationEvt } from './validate.js';
import {
  loadInfoPopupEdit,
  openPopup,
  closePopup,
  closeEsc,
  closeOver,
} from './modal.js';

// закрыть оверлей
closeOver();
//слушатель кнопка открыть - "Редактировать профиль"
buttonOpenProfileEdit.addEventListener('click', function (evt) {
  // подгружаем информацию о пользователе в соответствующие поля
  loadInfoPopupEdit();
  //Открываем попап
  openPopup(popupEdit);
  closeEsc(popupEdit);
  enableValidationEvt(evt);
});

//слушатель кнопка открыть - "Новое место"
buttonOpenNewCard.addEventListener('click', function (evt) {
  formCards.reset(); // Очистка полей после кнопки "добавить"
  openPopup(popupNewCard);
  closeEsc(popupNewCard);
  enableValidationEvt(evt);
});

//слушатель кнопка открыть - "Обновить аватар"
buttonOpenEditAva.addEventListener('click', function (evt) {
  formCards.reset(); // Очистка полей после кнопки "добавить"
  openPopup(popupAva);
  closeEsc(popupAva);
  enableValidationEvt(evt);
});

//слушатель кнопка закрыть - "Редактировать профиль"
buttonCloseProfileEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});
//слушатель кнопка закрыть - "Новое место"
buttonCloseNewCard.addEventListener('click', function () {
  closePopup(popupNewCard);
});

//слушатель кнопка закрыть - "Картинка"
buttonCloseImage.addEventListener('click', function () {
  closePopup(popupImage);
});

//слушатель кнопка закрыть - "Обновить аватар"
buttonCloseAva.addEventListener('click', function () {
  closePopup(popupAva);
});