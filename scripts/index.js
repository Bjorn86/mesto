//IMPORT COMMON VARIABLES
import { escapeButton } from './constants.js';

//IMPORT COMMON POPUP VARIABLES
import { popupElements } from './constants.js';
import { popupEditProfileElement } from './constants.js';
import { popupAddCardElement } from './constants.js';
import { popupImageElement } from './constants.js';
import { popupCloseButtonEditProfileElement } from './constants.js';
import { popupCloseButtonAddCardElement } from './constants.js';
import { popupCloseButtonImageElement } from './constants.js';

//IMPORT EDIT PROFILE POPUP VARIABLES
import { editProfileFormElement } from './constants.js';
import { nameInputElement } from './constants.js';
import { jobInputElement } from './constants.js';

//IMPORT ADD CARD POPUP VARIABLES
import { addCardFormElement } from './constants.js';
import { placeNameInputElement } from './constants.js';
import { linkImageInputElement } from './constants.js';

//IMPORT IMAGE POPUP VARIABLES
import { imgPopupElement } from './constants.js';
import { captionImgPopupElement } from './constants.js';

//IMPORT PROFILE VARIABLES
import { profileNameElement } from './constants.js';
import { profileJobElement } from './constants.js';
import { profileEditButtonElement } from './constants.js';
import { addCardButtonElement } from './constants.js';

//IMPORT CARDS VARIABLES
import { cardsContainerElement } from './constants.js';

//IMPORT TEMPLATES VARIABLES
import { cardTemplateElement } from './constants.js';

//IMPORT INITIAL CARDS ARRAY
import { initialCards } from './constants.js';

//IMPORT VALIDATION FUNCTIONS
import { enableValidation } from './validate.js';
import { resetValidationsErrors } from './validate.js';

//IMPORT VALIDATION CONFIG
import { validationConfig } from './constants.js';

//CARD CREATE FUNCTION
const createCard = (item) => {
  // CARD ELEMENTS VARIABLES
  const cardElement = cardTemplateElement.cloneNode(true);
  const cardTitleElement = cardElement.querySelector('.card__title');
  const cardImageElement = cardElement.querySelector('.card__img');
  const cardLikeButtonElement = cardElement.querySelector('.card__btn-like');
  const cardDeleteButtonElement = cardElement.querySelector('.card__btn-del');
  // CARD ELEMENTS SUBSTITUTION
  cardTitleElement.textContent = item.name;
  cardImageElement.src = item.link;
  cardImageElement.alt = item.name;
  // IMAGE POPUP EVENT LISTENER
  cardImageElement.addEventListener('click', () => {
    handleImagePopup(cardTitleElement, cardImageElement)
  });
  // CARD BUTTONS EVENT LISTENER
  cardLikeButtonElement.addEventListener('click', handleLikeButton);
  cardDeleteButtonElement.addEventListener('click', handleCardDelete );
  return cardElement;
}

//IMAGE POPUP FUNCTION
const handleImagePopup = (cardTitleElement, cardImageElement) => {
  imgPopupElement.src = cardImageElement.src;
  imgPopupElement.alt = cardTitleElement.textContent;
  captionImgPopupElement.textContent = cardTitleElement.textContent;
  openPopup(popupImageElement);
}

//CARD LIKE ADD/REMOVE FUNCTION
const handleLikeButton = (evt) => {
  evt.target.classList.toggle('card__btn-like_active');
}

//CARD DELETE FUNCTION
const handleCardDelete  = (evt) => {
  evt.target.closest('.card').remove();
}

//CARD RENDER FUNCTION
const handleCardRender = (item, wrapperElement) => {
  const element = createCard(item);
  wrapperElement.append(element);
}

//ADDED CARD RENDER FUNCTION
const handleAddedCardRender = (item, wrapperElement) => {
  const element = createCard(item);
  wrapperElement.prepend(element);
}

//INITIAL CARDS CREATE FUNCTION
initialCards.forEach((item) => {
  handleCardRender(item, cardsContainerElement);
})

//ADD CARD FORM SUBMIT FUNCTION
const cardAdditionFormHandler = (evt) => {
  evt.preventDefault();
  const addedElement = {
    name: placeNameInputElement.value,
    link: linkImageInputElement.value
  };
  handleAddedCardRender(addedElement, cardsContainerElement);
  closePopup(popupAddCardElement);
  evt.target.reset();
}

//OPEN POPUP FUNCTION
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByDownEscButton);
}

//CLOSE POPUP FUNCTION
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByDownEscButton);
}

//CLOSE POPUP BY CLICK ON OVERLAY FUNCTION
const closePopupByClickOnOverlay = (evt) => {
  const openModal = document.querySelector('.popup_opened');
  if (evt.target === evt.currentTarget) {
    closePopup(openModal);
  }
}

//CLOSE POPUP BY ESC BUTTON FUNCTION
const closePopupByDownEscButton = (evt) => {
  const openModal = document.querySelector('.popup_opened');
  if (evt.key === escapeButton) {
    closePopup(openModal);
  }
}

//EDIT PROFILE DATA SUBSTITUTION FUNCTION
const handleEditProfileDataSubstitution = () => {
  nameInputElement.value = profileNameElement.textContent;
  jobInputElement.value = profileJobElement.textContent;
}

//EDIT PROFILE FORM SUBMIT FUNCTION
const editProfileFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileNameElement.textContent = nameInputElement.value;
  profileJobElement.textContent = jobInputElement.value;
  closePopup(popupEditProfileElement);
}

//OPEN POPUP EVENT LISTENERS
profileEditButtonElement.addEventListener('click', () => {
  handleEditProfileDataSubstitution();
  resetValidationsErrors(editProfileFormElement, validationConfig);
  enableValidation(validationConfig);
  openPopup(popupEditProfileElement);
});
addCardButtonElement.addEventListener('click', () => {
  enableValidation(validationConfig);
  openPopup(popupAddCardElement);
});

//CLOSE POPUP EVENT LISTENERS
popupCloseButtonEditProfileElement.addEventListener('click', () => closePopup(popupEditProfileElement));
popupCloseButtonAddCardElement.addEventListener('click', () => closePopup(popupAddCardElement));
popupCloseButtonImageElement.addEventListener('click', () => closePopup(popupImageElement));
popupElements.forEach((element) => element.addEventListener('click', closePopupByClickOnOverlay));

//FORM SUBMIT EVENT LISTENERS
editProfileFormElement.addEventListener('submit', editProfileFormSubmitHandler);
addCardFormElement.addEventListener('submit', cardAdditionFormHandler);
