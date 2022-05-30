import { popupImage } from './index.js';
import { openPopup, closeEsc } from './modal.js';

const cardContainer = document.querySelector('#card-container').content; // template карточки
const elementsList = document.querySelector('#elements-list'); // Место куда необходимо вставлять карточки
//Массив с карточками. При загрузке на странице должно быть 6 карточек, которые добавит JavaScript.
export const initialCards = [
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
export function renderCard(title, link) {
  elementsList.prepend(createCard(title, link));
}

// Картинка открытие
function openImg(title, link) {
  const imgTitle = popupImage.querySelector('#popup-img-title');
  const imgLink = popupImage.querySelector('#popup-image-link');
  imgTitle.textContent = title;
  imgLink.src = link;
  imgLink.alt = title;
  openPopup(popupImage);
  closeEsc(popupImage);
}
