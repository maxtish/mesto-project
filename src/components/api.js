import { getResponse } from './utils.js';

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-10',
  headers: {
    authorization: '8fc49208-79fe-42e6-b010-c3dc348d50d1',
    'Content-Type': 'application/json',
  },
};

///////// Загрузка информации о пользователе с сервера //////////////
export function loadUserinfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(getResponse);
}

///////// Загрузка карточек с сервера //////////////////////////////
export const loadCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(getResponse);
};

///////// Редактирование профиля  с сервера ////////////////////////
export const sendEditProfile = (nameProf, aboutProf) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameProf,
      about: aboutProf,
    }),
  }).then(getResponse);
};

///////// Добавление новой карточки ////////////////////////////////
export const sendNewCard = (nameCard, linkCard) => {
  return fetch(`${config.baseUrl}/cards `, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: nameCard,
      link: linkCard,
    }),
  }).then(getResponse);
};

///////// Удаление новой карточки //////////////////////////////////
export const dellNewCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id} `, {
    method: 'DELETE',
    headers: config.headers,
  }).then(getResponse);
};

///////// Лайк карточки ///////////////////////////////////////////
export const likeCard = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id} `, {
    method: 'PUT',
    headers: config.headers,
  }).then(getResponse);
};

export const dellLikeCard = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id} `, {
    method: 'DELETE',
    headers: config.headers,
  }).then(getResponse);
};

///////// Обновление аватара пользователя ////////////////////////
export const editAvatarProfile = (linkAvatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: linkAvatar,
    }),
  }).then(getResponse);
};
