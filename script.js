const popup = document.querySelector('#popup'); 
const profileEditButton = document.querySelector('#profile__edit-button');
const popupCloseButton = popup.querySelector('#popup__close');

function popupOpen(){
    popup.classList.add('popup_opened');
}

function popupClose(){
    popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener("click", popupOpen);
popupCloseButton.addEventListener("click", popupClose);

// Находим форму в DOM
const formElement = popup.querySelector('#popup-form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = popup.querySelector('#name-input'); // Воспользуйтесь инструментом .querySelector()
const jobInput =  popup.querySelector('#job-input');// Воспользуйтесь инструментом .querySelector()
console.log(nameInput.value);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
 function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки. // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    const profileName = document.querySelector('#profile__name');
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    popupClose();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



