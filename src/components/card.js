import { popupImage } from './utils.js';
import { openPopup, closeEsc } from './modal.js';

const cardContainer = document.querySelector('#card-container').content; // template карточки
const elementsList = document.querySelector('#elements-list'); // Место куда необходимо вставлять карточки

// Функция like
function activatesLike(evt) {
  evt.target.classList.toggle('elements__like_active');
}
// Функция удаления карточки
function deleteCard() {
  const listItem = elementsList
    .querySelector('.button__delete')
    .closest('.elements__element');
  listItem.remove();
}

// Функция создание карточки
function createCard(title, link) {
  // Клонируем содержимое тега template
  const templateCardContainer = cardContainer
    .querySelector('.elements__element')
    .cloneNode(true);
  // Наполняем содержимым
  templateCardContainer.querySelector('.elements__image').src = link;
  templateCardContainer.querySelector('.elements__image').alt = title;
  templateCardContainer.querySelector('.elements__title').textContent = title;

  templateCardContainer
    .querySelector('.button__delete')
    .addEventListener('click', deleteCard); // Слушатель кнопку удаления

  templateCardContainer
    .querySelector('.elements__like')
    .addEventListener('click', activatesLike); //Слушатель Like

  templateCardContainer
    .querySelector('.elements__image')
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
}
