import '../pages/index.css'; // Импорт главного файла стилей

import {
  profileAva,
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
  profileId,
  showLoading,
  showError,
  renderLoadingButton,
  buttonSubmitPopupEdit,
  buttonSubmitPopupAva,
  buttonSubmitPopupCard,
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
  editAvatarProfile,
} from './api.js';

import {
  renderCard,
  idCardSending,
  buttonCardSending,
  deleteCard,
} from './card.js';

/////////////////////////////////////////////////////////////////////

showLoading(true); /// Loading..... / Done

///////// Загрузка информации о пользователе с сервера //////////////
Promise.all([loadUserinfo(), loadCards()])

  .then(([userObject, cardsObject]) => {
    // Загрузка данных пользователя
    profileName.textContent = userObject.name;
    profileHobby.textContent = userObject.about;
    profileAva.src = userObject.avatar;
    profileId.data = userObject._id;

    // Render карточек
    cardsObject.reverse().forEach((card) => {
      renderCard(
        card.name,
        card.link,
        card.likes.length,
        card.owner._id,
        card._id,
        card.likes
      );
    });
  })
  .catch((err) => {
    showError(err);
  })
  .finally(() => {
    showLoading(false);
  });

/////////////////////////////////////////////////////////////////////
enableValidation(popupEdit, config);
enableValidation(popupNewCard, config);
enableValidation(popupAva, config);
/////////////////////////////////////////////////////////////////////

// слушатель кнопка открыть - "Редактировать профиль"
buttonOpenProfileEdit.addEventListener('click', function (evt) {
  loadInfoPopupEdit();
  openPopup(popupEdit);
});

// слушатель кнопка открыть - "Новое место"
buttonOpenNewCard.addEventListener('click', function (evt) {
  openPopup(popupNewCard);
});

// слушатель кнопка открыть - "Обновить аватар"
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

////////////////////////////////////ОБРАБОТЧИК ОТПРАВКИ "Редактировать профиль"///

function sendingFormProfile(evt) {
  evt.preventDefault();
  renderLoadingButton(true, buttonSubmitPopupEdit);

  sendEditProfile(nameInput.value, jobInput.value)
    .then((res) => {
      profileName.textContent = nameInput.value;
      profileHobby.textContent = jobInput.value;
      closePopup(popupEdit);
    })
    .catch((err) => {
      showError(err);
    })
    .finally(() => {
      renderLoadingButton(false, buttonSubmitPopupEdit);
    });
}

formProfileElement.addEventListener('submit', sendingFormProfile);

/////////////////////////////////// ОБРАБОТЧИК ОТПРАВКИ "Новое место"////////////////////////////////
function sendingFormCard(evt) {
  evt.preventDefault();
  renderLoadingButton(true, buttonSubmitPopupCard);

  sendNewCard(titleInput.value, linkInput.value)
    .then((card) => {
      renderCard(
        card.name,
        card.link,
        card.likes.length,
        card.owner._id,
        card._id,
        card.likes
      );
      formCards.reset();
      inactiveButton(popupNewCard);
      closePopup(popupNewCard);
    })
    .catch((err) => {
      showError(err);
    })
    .finally(() => {
      renderLoadingButton(false, buttonSubmitPopupCard);
    });
}

formCards.addEventListener('submit', sendingFormCard);

////////////////////////////////////ОБРАБОТЧИК ОТПРАВКИ "Удалить карточку"/////////////////////////
function sendingDellCard(evt) {
  evt.preventDefault();
  showLoading(true);

  dellNewCard(idCardSending)
    .then(() => {
      deleteCard(buttonCardSending);
      closePopup(popupDellCard);
    })
    .catch((err) => {
      showError(err);
    })
    .finally(() => {
      showLoading(false); /// Loading..... / Done
    });
}

formDellCard.addEventListener('submit', sendingDellCard);

////////////////////////////////////ОБРАБОТЧИК ОТПРАВКИ "Обновление аватара пользователя"/////////////////////////
function sendingMeAvatar(evt) {
  evt.preventDefault();
  renderLoadingButton(true, buttonSubmitPopupAva);

  editAvatarProfile(linkInputAva.value)
    .then((userObject) => {
      profileAva.src = userObject.avatar;
      closePopup(popupAva);
    })
    .catch((err) => {
      showError(err);
    })
    .finally(() => {
      renderLoadingButton(false, buttonSubmitPopupAva);
    });
}
formAva.addEventListener('submit', sendingMeAvatar);

///////// Загрузка карточек с сервера //////////////
loadCards();
