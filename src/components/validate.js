// Валидация формы - Любой по клику определяем evt.target.id обрезаем -button и получаем id формы которая появилась
// Используем стандартные браузерные тексты ошибок.

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorActiveClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorActiveClass);
  errorElement.textContent = '';
};

// inputElement.classList.add(config.inputErrorClass)
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.buttonInactive);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(config.buttonInactive);
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );

  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

export const enableValidation = (popupElement, config) => {
  /*const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      console.log(config);
      setEventListeners(formElement);
  */
  popupElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

  setEventListeners(popupElement, config);
  /*
      const fieldsetList = Array.from(
        formElement.querySelectorAll('.popup__set')
      );
      fieldsetList.forEach((fieldsetElement) => {
        setEventListeners(fieldsetElement);
      });
  */
};
/*
export function enableValidationEvt(evt, config) {
  const popupElementText = evt.target.id.slice(0, -7);
  const popupElement = document.querySelector(`#${popupElementText}`);

  enableValidation(popupElement, config);
}

///// деактивация кнопки /////
const inactiveButtonState = (buttonElement) => {
  buttonElement.classList.add('button_inactive');
};
*/
