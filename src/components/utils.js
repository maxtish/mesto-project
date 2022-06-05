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
export const buttonSubmitPopupEdit = popupEdit.querySelector('.popup__button'); // Кнопка сабмит

// Форма "Новое место"
export const formCards = popupNewCard.querySelector('#popup-form-cards'); // Форма "Новое место"
export const titleInput = popupNewCard.querySelector('#name-input-cards'); // Поле "Название"
export const linkInput = popupNewCard.querySelector('#link-input-cards'); // Поле "Ссылка на картинку"
export const buttonSubmitPopupCard =
  popupNewCard.querySelector('.popup__button'); //  Кнопка сабмит
const elementsList = document.querySelector('#elements-list'); /// место вставки карточек
// Форма "Удалить катрочку"
export const formDellCard = popupDellCard.querySelector(
  '#popup-form-dellcards'
); // Форма редактирования профиля

// Форма "Обновить аватар"
export const formAva = popupAva.querySelector('#profile-edit-ava'); // Форма "Обновить аватар"
export const linkInputAva = popupAva.querySelector('#name-input-ava'); // Поле "Ссылка на картинку"
export const profileAva = document.querySelector('.profile__avatar');
export const buttonSubmitPopupAva = popupAva.querySelector('.popup__button'); // Кнопка сабмит

// При открытии формы добавления карточки также необходимо деактивировать кнопку сабмита
export function inactiveButton(popup) {
  const button = popup.querySelector('.popup__button');
  button.classList.add('button_inactive');
  button.setAttribute('disabled', 'disabled');
}
export let profileId = { data: '' };

///////// Проверка ответа с сервера на ошибки /////////
export function getResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Что-то пошло не так: ${res.status}`);
}

//////////// Loading ////////////////////
export function showLoading(isLoading) {
  if (isLoading) {
    console.log('Loading....');
  } else {
    console.log('Done');
  }
}

//Функция для вывода ошибки на экран
export function showError(err) {
  console.log(err);
}

// Меняем текст на кнопке 'Сохранить'
export function renderLoadingButton(isLoading, currentButton) {
  if (isLoading) {
    currentButton.value = 'Сохранение...';
  } else {
    currentButton.value = 'Сохранить';
  }
}
