const popup = document.querySelector('#popup'); 
const popupNewCards = document.querySelector('#popup-new-cards'); 
const profileEditButton = document.querySelector('#profile__edit-button');
const profileAddButton = document.querySelector('#profile__add-button');
const popupCloseButton = popup.querySelector('#popup__close');
const popupCloseButtonAdd = popupNewCards.querySelector('#popup__close');

function popupOpen(){
    popup.classList.add('popup_opened');
}
function popupOpenNewCards(){
  popupNewCards.classList.add('popup_opened');
}

function popupClose(){
    popup.classList.remove('popup_opened');
}

function popupCloseNewCards(){
  popupNewCards.classList.remove('popup_opened');
}

profileEditButton.addEventListener("click", popupOpen);
profileAddButton.addEventListener("click", popupOpenNewCards);

popupCloseButton.addEventListener("click", popupClose);
popupCloseButtonAdd.addEventListener("click", popupCloseNewCards);

const formElement = popup.querySelector('#popup-form'); // Находим форму в DOM // Воспользуйтесь методом querySelector()
const nameInput = popup.querySelector('#name-input'); // Находим поля формы в DOM // Воспользуйтесь инструментом .querySelector()
const jobInput =  popup.querySelector('#job-input');// Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
 function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки. // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    const profileName = document.querySelector('#profile__name');
    const profileHobby = document.querySelector('#profile__hobby')
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileHobby.textContent = jobInput.value;
    popupClose();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



//При загрузке на странице должно быть 6 карточек, которые добавит JavaScript.
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];  
const elementList = document.querySelector('#elements__list');
  initialCards.forEach(function (item){
  elementList.insertAdjacentHTML('beforeend', `
    <li class="elements__element">
        <img class="elements__image" id="elements__image" src="${item.link}" alt="Карачаевск">
        <h2 class="elements__title" id="elements__title">${item.name}</h2>
        <button class="elements__like" type="button" aria-label="Нравится"></button>
    </li>
    `);
  })
  
// Функция добавления карточки
  /*function addCard() {
    let cardImg = document.querySelector('#elements__image');
    let cardTitle = document.querySelector('#elements__title');
    elementList.insertAdjacentHTML('beforeend', `
    <li class="elements__element">
        <img class="elements__image" id="elements__image" src="${initialCards[0].link}" alt="Карачаевск">
        <h2 class="elements__title" id="elements__title">${initialCards[0].name}</h2>
        <button class="elements__like" type="button" aria-label="Нравится"></button>
    </li>
    `);    
  }
  */
const formElementAdd = popupNewCards.querySelector('#popup-form'); // Находим форму в DOM // Воспользуйтесь методом querySelector()
const nameInputAdd = popupNewCards.querySelector('#name-input'); // Находим поля формы в DOM // Воспользуйтесь инструментом .querySelector()
const jobInputAdd =  popupNewCards.querySelector('#job-input');// Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
 function formaAddCard (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки. // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    
    // Вставьте новые значения с помощью textContent
     
    elementList.insertAdjacentHTML('beforeend', `
    <li class="elements__element">
        <img class="elements__image" id="elements__image" src="${jobInputAdd.value}" alt="Карачаевск">
        <h2 class="elements__title" id="elements__title">${nameInputAdd.value}</h2>
        <button class="elements__like" type="button" aria-label="Нравится"></button>
    </li>
    `);    
    popupCloseNewCards();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementAdd.addEventListener('submit', formaAddCard);
