const popup = document.querySelector('.popup'); 
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');

function popupOpen(){
    popup.classList.add('popup_opened');
}

function popupClose(){
    popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener("click", popupOpen);
popupCloseButton.addEventListener("click", popupClose);


console.log(popup, profileEditButton);
