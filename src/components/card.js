import { popupImage, popupDellCard } from './utils.js';
import { openPopup, closeEsc } from './modal.js';
import { likeCard, dellLikeCard } from './api.js';
export let idCardSending;
const cardContainer = document.querySelector('#card-container').content; // template карточки
const elementsList = document.querySelector('#elements-list'); // Место куда необходимо вставлять карточки

// Функция like
function activatesLike(evt) {
  const idCardLike = evt.target.closest('.elements__element').id;
  const elementLikeContent = evt.target.closest('.elements__element');
  const LikeContent = elementLikeContent.querySelector(
    '.elements__number-likes'
  );

  const element = evt.target.classList.value;
  if (element === 'elements__like') {
    likeCard(idCardLike, LikeContent);
  } else {
    dellLikeCard(idCardLike, LikeContent);
  }
  evt.target.classList.toggle('elements__like_active');
}

// Функция создание карточки
function createCard(title, link, likes) {
  // Клонируем содержимое тега template
  const templateCardContainer = cardContainer
    .querySelector('.elements__element')
    .cloneNode(true);
  // Наполняем содержимым
  templateCardContainer.querySelector('.elements__image').src = link;
  templateCardContainer.querySelector('.elements__image').alt = title;
  templateCardContainer.querySelector('.elements__title').textContent = title;
  templateCardContainer.querySelector('.elements__number-likes').textContent =
    likes;

  templateCardContainer
    .querySelector('.button__delete')
    .addEventListener('click', function (evt) {
      idCardSending = evt.target.closest('.elements__element').id;
      openPopup(popupDellCard); // Слушатель кнопку удаления
    });
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
export function renderCard(title, link, likes, id, idCard, ownerLike) {
  elementsList.prepend(createCard(title, link, likes));
  detecktIdProfile(id);
  detecktOwnerLike(ownerLike);
  document.querySelector('.elements__element').id = idCard;
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

//"a08e6a36aa420102251e6f12"  buttonDell.classList.add(button__delete_inactive);

const detecktIdProfile = (id) => {
  if (id === 'a08e6a36aa420102251e6f12') {
    document
      .querySelector('.button__delete')
      .classList.add('button__delete_active');
  }
};

const detecktOwnerLike = (ownerLike) => {
  if (ownerLike) {
    document
      .querySelector('.elements__like')
      .classList.add('elements__like_active');
  } else {
    document
      .querySelector('.elements__like')
      .classList.remove('elements__like_active');
  }
};
