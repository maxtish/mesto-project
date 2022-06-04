import { renderCard } from './card.js';
import {
  renderLoadingAva,
  popupAva,
  renderLoadingNewCard,
  popupNewCard,
  deleteCard,
  popupDellCard,
  renderUserinfo,
  profileId,
} from './utils.js';
import { closePopup } from './modal.js';
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-10',
  headers: {
    authorization: '8fc49208-79fe-42e6-b010-c3dc348d50d1',
    'Content-Type': 'application/json',
  },
};
///////// Загрузка информации о пользователе с сервера //////////////

export const loadUserinfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((result) => {
      renderUserinfo(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

///////// Загрузка карточек с сервера ////////////// owner "a08e6a36aa420102251e6f12"

export const loadCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((result) => {
      const cardsJSON = JSON.stringify(result);
      const cardsObject = JSON.parse(cardsJSON);
      cardsObject.reverse();
      let ownerLike = false;
      const ownerId = profileId.data;
      cardsObject.forEach(function (item) {
        ownerLike = false;
        item.likes.forEach(function (element) {
          if (element._id === ownerId) {
            ownerLike = true;
          }
        });

        const idCard = item._id;
        const title = item.name;
        const link = item.link;
        const likes = item.likes.length;
        const id = item.owner._id;
        renderCard(title, link, likes, id, idCard, ownerLike);
      });
    })
    .catch((err) => {
      console.log(err);
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
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .then((post) => {
      loadUserName();
      loadUserAbout();
    })
    .catch((err) => {
      console.log(err);
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
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .then((result) => {
      const cardsJSON = JSON.stringify(result);
      const cardObject = JSON.parse(cardsJSON);
      let ownerLike = false;
      const ownerId = 'a08e6a36aa420102251e6f12';
      ownerLike = false;
      cardObject.likes.forEach(function (element) {
        if (element._id === ownerId) {
          ownerLike = true;
        }
      });
      const idCard = cardObject._id;
      const title = cardObject.name;
      const link = cardObject.link;
      const likes = cardObject.likes.length;
      const id = cardObject.owner._id;
      renderCard(title, link, likes, id, idCard, ownerLike);
    })
    .then(() => {
      renderLoadingNewCard(false);

      closePopup(popupNewCard);
    })
    .catch((err) => {
      console.log(err);
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
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .then((post) => {
      console.log(post);
      deleteCard(id);
      closePopup(popupDellCard);
    })
    .catch((err) => {
      console.log(err);
    });
};

///////// Лайк карточки //////////////

export const likeCard = (id, LikeContent) => {
  return fetch(`${config.baseUrl}/cards/likes/${id} `, {
    method: 'PUT',
    headers: {
      authorization: config.headers.authorization,
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((post) => {
      LikeContent.textContent = post.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const dellLikeCard = (id, LikeContent) => {
  return fetch(`${config.baseUrl}/cards/likes/${id} `, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .then((post) => {
      LikeContent.textContent = post.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
};

///////// Обновление аватара пользователя //////////////

export const meAvatar = (linkAvatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      avatar: linkAvatar,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .then((post) => {
      console.log(post);
      loadUserAva();
      renderLoadingAva(false);
      closePopup(popupAva);
    })
    .catch((err) => {
      console.log(err);
    });
};
