const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-10',
  headers: {
    authorization: '8fc49208-79fe-42e6-b010-c3dc348d50d1',
    'Content-Type': 'application/json',
  },
};
///////// Загрузка информации о пользователе с сервера //////////////

export const loadUserName = () => {
  let userNameElement = document.querySelector('#profile-name');
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      userNameElement.textContent = result.name;
    });
};

export const loadUserAbout = () => {
  let userAboutElement = document.querySelector('#profile-hobby');
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      userAboutElement.textContent = result.about;
    });
};

export const loadUserAva = () => {
  let userAvaElement = document.querySelector('.profile__avatar');
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      userAvaElement.src = result.avatar;
    });
};

///////// Загрузка карточек с сервера //////////////
import { renderCard } from './card.js';
export const loadCards = () => {
  fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      const cardsJSON = JSON.stringify(result);
      const cardsObject = JSON.parse(cardsJSON);

      cardsObject.forEach(function (item) {
        const idCard = item._id;
        const title = item.name;
        const link = item.link;
        const likes = item.likes.length;
        const id = item.owner._id;
        renderCard(title, link, likes, id, idCard);
      });
    });
};

///////// Редактирование профиля  с сервера //////////////
export const sendEditProfile = (nameProf, aboutProf) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: nameProf,
      about: aboutProf,
    }),
  });
};

///////// Добавление новой карточки //////////////

export const sendNewCard = (nameCard, linkCard) => {
  return fetch(`${config.baseUrl}/cards `, {
    method: 'POST',
    headers: {
      authorization: config.headers.authorization,
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: nameCard,
      link: linkCard,
    }),
  })
    .then((response) => response.json())

    .then((post) => {
      console.log(post);
    });
};

///////// Удаление новой карточки //////////////

export const dellNewCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id} `, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())

    .then((post) => {
      console.log(post);
    });
};

///////// Лайк карточки //////////////

export const likeCard = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id} `, {
    method: 'PUT',
    headers: {
      authorization: config.headers.authorization,
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())

    .then((post) => {
      console.log(post);
    });
};

export const dellLikeCard = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id} `, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())

    .then((post) => {
      console.log(post);
    });
};
