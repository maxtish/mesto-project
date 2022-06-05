import { popupImage, popupDellCard, profileId } from './utils.js';
import { openPopup, closeEsc } from './modal.js';
import { likeCard, dellLikeCard } from './api.js';
export let idCardSending = '';
export let idCardSendingLike = '';
const cardContainer = document.querySelector('#card-container').content; // template карточки
export let buttonCardSending = ''; // evt.target кнопки удаление
export let buttonLikeSending = ''; // evt.target кнопки like
const elementsList = document.querySelector('#elements-list'); // Место куда необходимо вставлять карточки

// Функция like
function activatesLike(evt) {
  const idCardLike = idCardSendingLike;
  const elementLikeContent = evt.target.closest('.elements__element');
  const likeContent = elementLikeContent.querySelector(
    '.elements__number-likes'
  );
  const element = evt.target.classList.value;

  if (element === 'elements__like') {
    likeCard(idCardLike, likeContent)
      .then((res) => {
        evt.target.classList.add('elements__like_active');
        likeContent.textContent = res.likes.length;
      })
      .catch((err) => {
        showError(err);
      });
  } else {
    dellLikeCard(idCardLike, likeContent)
      .then((res) => {
        evt.target.classList.remove('elements__like_active');
        likeContent.textContent = res.likes.length;
      })
      .catch((err) => {
        showError(err);
      });
  }
}
// Функция создание карточки
function createCard(title, link, likes, id, idCard) {
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
  if (id === profileId.data) {
    templateCardContainer
      .querySelector('.button__delete')
      .classList.add('button__delete_active');
  }

  templateCardContainer
    .querySelector('.button__delete')
    .addEventListener('click', function (evt) {
      idCardSending = idCard;
      buttonCardSending = evt.target;
      openPopup(popupDellCard); // Слушатель кнопку удаления
    });
  templateCardContainer
    .querySelector('.elements__like')
    .addEventListener('click', function (evt) {
      idCardSendingLike = idCard;
      buttonLikeSending = evt.target;
      activatesLike(evt);
      //Слушатель Like
    });
  templateCardContainer
    .querySelector('.elements__image')
    .addEventListener('click', () => {
      openImg(title, link);
    }); //Слушатель для открытия Картинка

  return templateCardContainer;
}

// Функция отрисовки карточки
export function renderCard(title, link, likes, id, idCard, arrLikes) {
  elementsList.prepend(createCard(title, link, likes, id, idCard));
  detecktOwnerLike(arrLikes);
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

const detecktOwnerLike = (arrLikes) => {
  arrLikes.forEach(function (element) {
    if (element._id === profileId.data) {
      document
        .querySelector('.elements__like')
        .classList.add('elements__like_active');
    } else {
      document
        .querySelector('.elements__like')
        .classList.remove('elements__like_active');
    }
  });
};

// Функция удаления карточки
export function deleteCard(buttonCardSending) {
  buttonCardSending.closest('.elements__element').remove();
}
