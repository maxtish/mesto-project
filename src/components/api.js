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
    });
};
