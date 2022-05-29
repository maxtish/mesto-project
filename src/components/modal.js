import { nameInput, jobInput, profileName, profileHobby } from './index.js';

// Функция подгрузки информации о пользователе в соответствующие поля
export function loadInfoPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
}

// функция открытия попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// функция закрытия попапа esc
export function closeEsc(popup) {
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  });
}

//Функция слушатель кнопка закрыть оверлей
export function closeOver() {
  document.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      evt.target.classList.toggle('popup_opened');
    }
  });
}

// функция закрытия попапа
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
