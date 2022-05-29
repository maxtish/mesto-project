// Валидация формы - Любой по клику определяем evt.target.id обрезаем -button и получаем id формы которая появилась
// Используем стандартные браузерные тексты ошибок.
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__item_type_error');
  errorElement.classList.add('popup__item-error_active');
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__item_type_error');
  errorElement.classList.remove('popup__item-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
  } else {
    buttonElement.classList.remove('button_inactive');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__item'));

  const buttonElement = formElement.querySelector('.popup__submit');

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (popupElement) => {
  /*const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      
      setEventListeners(formElement);
  */
  popupElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

  setEventListeners(popupElement);
  /*
      const fieldsetList = Array.from(
        formElement.querySelectorAll('.popup__set')
      );
      fieldsetList.forEach((fieldsetElement) => {
        setEventListeners(fieldsetElement);
      });
  */
};

export function enableValidationEvt(evt) {
  const popupElementText = evt.target.id.slice(0, -7);
  const popupElement = document.querySelector(`#${popupElementText}`);

  enableValidation(popupElement);
}
