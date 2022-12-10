//IMPORT COMMON VARIABLES
import { escapeButton } from './variables.js';

//IMPORT COMMON POPUP VARIABLES
import { popupElements } from './variables.js';
import { popupEditProfileElement } from './variables.js';
import { popupAddCardElement } from './variables.js';
import { popupImageElement } from './variables.js';
import { popupCloseButtonEditProfileElement } from './variables.js';
import { popupCloseButtonAddCardElement } from './variables.js';
import { popupCloseButtonImageElement } from './variables.js';

//IMPORT EDIT PROFILE POPUP VARIABLES
import { editProfileFormElement } from './variables.js';
import { nameInputElement } from './variables.js';
import { jobInputElement } from './variables.js';

//IMPORT ADD CARD POPUP VARIABLES
import { addCardFormElement } from './variables.js';
import { placeNameInputElement } from './variables.js';
import { linkImageInputElement } from './variables.js';

//IMPORT IMAGE POPUP VARIABLES
import { imgPopupElement } from './variables.js';
import { captionImgPopupElement } from './variables.js';

//IMPORT PROFILE VARIABLES
import { profileNameElement } from './variables.js';
import { profileJobElement } from './variables.js';
import { profileEditButtonElement } from './variables.js';
import { addCardButtonElement } from './variables.js';

//IMPORT CARDS VARIABLES
import { cardsContainerElement } from './variables.js';

//IMPORT TEMPLATES VARIABLES
import { cardTemplateElement } from './variables.js';

//IMPORT INITIAL CARDS ARRAY
import { initialCards } from './variables.js';

//IMPORT VALIDATION FUNCTIONS
import { enableValidation } from './validate.js';
import { resetValidationsErrors } from './validate.js';

//IMPORT VALIDATION CONFIG
import { validationConfig } from './variables.js';

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
  cardImageElement.addEventListener('click', handleImagePopup);
  // CARD BUTTONS EVENT LISTENER
  cardLikeButtonElement.addEventListener('click', handleLikeButton);
  cardDeleteButtonElement.addEventListener('click', deleteCardHandler);
  return cardElement;
}

//IMAGE POPUP FUNCTION
const handleImagePopup = (evt) => {
  imgPopupElement.src = evt.target.src;
  imgPopupElement.alt = evt.target.closest('.card').querySelector('.card__title').textContent;
  captionImgPopupElement.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  openPopup(popupImageElement);
}

//CARD LIKE ADD/REMOVE FUNCTION
const handleLikeButton = (evt) => {
  evt.target.classList.toggle('card__btn-like_active');
}

//CARD DELETE FUNCTION
const deleteCardHandler = (evt) => {
  evt.target.closest('.card').remove();
}

//CARD RENDER FUNCTION
const renderCardHandler = (item, wrapperElement) => {
  const element = createCard(item);
  wrapperElement.append(element);
}

//ADDED CARD RENDER FUNCTION
const renderAddedCardHandler = (item, wrapperElement) => {
  const element = createCard(item);
  wrapperElement.prepend(element);
}

//INITIAL CARDS CREATE FUNCTION
initialCards.forEach((item) => {
  renderCardHandler(item, cardsContainerElement);
})

//ADD CARD FORM SUBMIT FUNCTION
const addCardFormSubmitHandler = (evt) => {
  evt.preventDefault();
  const addedElement = {
    name: placeNameInputElement.value,
    link: linkImageInputElement.value
  };
  renderAddedCardHandler(addedElement, cardsContainerElement);
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
const editProfileDataSubstitution = () => {
  nameInputElement.value = profileNameElement.textContent;
  jobInputElement.value = profileJobElement.textContent;
}
editProfileDataSubstitution();

//EDIT PROFILE FORM SUBMIT FUNCTION
const editProfileFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileNameElement.textContent = nameInputElement.value;
  profileJobElement.textContent = jobInputElement.value;
  closePopup(popupEditProfileElement);
}

//OPEN POPUP EVENT LISTENERS
profileEditButtonElement.addEventListener('click', () => {
  editProfileDataSubstitution();
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
addCardFormElement.addEventListener('submit', addCardFormSubmitHandler);
