import {
  nameInput,
  popupEdit,
  popupNewCard,
  jobInput,
  profileName,
  profileHobby,
  formElement,
  titleInput,
  linkInput,
  formCards,
} from './index.js';
import { closePopup } from './modal.js';
import { renderCard } from './card.js';

////////////////////////////////////ОБРАБОТЧИК ОТПРАВКИ "Редактировать профиль"/////////////////////////
function sendingFormProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки. // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  closePopup(popupEdit);
}
// Прикрепляем обработчик к форме:// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', sendingFormProfile);

/////////////////////////////////// ОБРАБОТЧИК ОТПРАВКИ "Новое место"////////////////////////////////
function sendingFormCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки.
  renderCard(titleInput.value, linkInput.value);
  closePopup(popupNewCard);
}
// Прикрепляем обработчик к форме: // он будет следить за событием “submit” - «отправка»
formCards.addEventListener('submit', sendingFormCard);
