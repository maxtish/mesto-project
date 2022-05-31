import { ESC_CODE } from './constants.js';

// функция открытия попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  addEvent();
}

// функция закрытия попапа
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeEvent();
}

// функция закрытия попапа esc
function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// функция кнопка закрыть оверлей
function closeOver(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//функция слушатель кнопка закрыть
function closedPopup(evt) {
  if (evt.target.classList.contains('popup__close')) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Установка слушателей
function addEvent() {
  document.addEventListener('keydown', closeByEsc); // слушатель кнопка закрытия попапа esc
  document.addEventListener('mousedown', closeOver); // слушатель кнопка закрыть попапа оверлей
  document.addEventListener('click', closedPopup); // Слушатель крестик закрыть
}

// удаление слушателей
function removeEvent() {
  document.removeEventListener('keydown', closeByEsc); // слушатель кнопка закрытия попапа esc
  document.removeEventListener('mousedown', closeOver); // слушатель кнопка закрыть попапа оверлей
  document.removeEventListener('click', closedPopup); // Слушатель крестик закрыть
}
