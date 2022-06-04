// Окна
export const popupEdit = document.querySelector('#popup-edit'); // Окно - "Редактировать профиль"
export const popupNewCard = document.querySelector('#popup-new-cards'); // Окно - "Новое место"
export const popupImage = document.querySelector('#popup-img'); // Окно - "Картинка"
export const popupAva = document.querySelector('#popup-ava'); // Окно - "Обновить аватар"
export const popupDellCard = document.querySelector('#popup-del-cards'); // Окно - "Удалить катрочку"

// Кнопки ОТКРЫТЬ
export const buttonOpenProfileEdit = document.querySelector(
  '#profile-edit-button'
); // Кнопка - открыть "Редактировать профиль"
export const buttonOpenNewCard = document.querySelector(
  '#popup-form-cards-button'
); // Кнопка - открыть "Новое место"
export const buttonOpenEditAva = document.querySelector(
  '#profile-edit-ava-button'
); // Кнопка - открыть "Обновить аватар"

// Кнопки ЗАКРЫТЬ
export const buttonCloseProfileEdit =
  popupEdit.querySelector('#popup-close-edit'); // Кнопка закрыть - "Редактировать профиль"
export const buttonCloseNewCard =
  popupNewCard.querySelector('#popup-close-cards'); // Кнопка - закрыть "Новое место"
export const buttonCloseImage = popupImage.querySelector('#popup-close-img'); // Кнопка - закрыть "Картинка"
export const buttonCloseAva = popupAva.querySelector('#popup-close-ava'); // Кнопка - закрыть "Обновить аватар"

// Форма "Редактировать профиль"
export const formProfileElement = popupEdit.querySelector('#profile-edit'); // Форма редактирования профиля
export const nameInput = popupEdit.querySelector('#name-input-profile'); // Поле редактирования Имя
export const jobInput = popupEdit.querySelector('#job-input-profile'); // Поле редактирования Работа
export const profileName = document.querySelector('#profile-name'); // Имя профиля на странице
export const profileHobby = document.querySelector('#profile-hobby'); // Работа профиля на странице

// Форма "Новое место"
export const formCards = popupNewCard.querySelector('#popup-form-cards'); // Форма "Новое место"
export const titleInput = popupNewCard.querySelector('#name-input-cards'); // Поле "Название"
export const linkInput = popupNewCard.querySelector('#link-input-cards'); // Поле "Ссылка на картинку"

// Форма "Удалить катрочку"
export const formDellCard = popupDellCard.querySelector(
  '#popup-form-dellcards'
); // Форма редактирования профиля

// Форма "Обновить аватар"
export const formAva = popupAva.querySelector('#profile-edit-ava'); // Форма "Обновить аватар"
export const linkInputAva = popupAva.querySelector('#name-input-ava'); // Поле "Ссылка на картинку"

// При открытии формы добавления карточки также необходимо деактивировать кнопку сабмита
export function inactiveButton(popup) {
  const button = popup.querySelector('.popup__button');
  button.classList.add('button_inactive');
  button.setAttribute('disabled', 'disabled');
}
