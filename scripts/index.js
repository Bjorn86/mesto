// IMPORT CONSTANTS
import {
  // IMPORT COMMON VARIABLES
  escapeButton,
  // IMPORT COMMON POPUP VARIABLES
  popupElements,
  popupEditProfileElement,
  popupAddCardElement,
  popupImageElement,
  popupCloseButtonEditProfileElement,
  popupCloseButtonAddCardElement,
  popupCloseButtonImageElement,
  // IMPORT EDIT PROFILE POPUP VARIABLES
  editProfileFormElement,
  nameInputElement,
  jobInputElement,
  // IMPORT ADD CARD POPUP VARIABLES
  addCardFormElement,
  placeNameInputElement,
  linkImageInputElement,
  // IMPORT IMAGE POPUP VARIABLES
  imgPopupElement,
  captionImgPopupElement,
  // IMPORT PROFILE VARIABLES
  profileNameElement,
  profileJobElement,
  profileEditButtonElement,
  addCardButtonElement,
  // IMPORT CARDS VARIABLES
  cardsContainerElement,
  // IMPORT TEMPLATES VARIABLES
  cardTemplateElement,
  // IMPORT INITIAL CARDS ARRAY
  initialCards,
  // IMPORT VALIDATION CONFIG
  validationConfig
} from './constants.js';

// CLASS IMPORT
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// IMAGE POPUP FUNCTION
const handleImagePopup = (cardTitleElement, cardImageElement) => {
  imgPopupElement.src = cardImageElement.src;
  imgPopupElement.alt = cardTitleElement.textContent;
  captionImgPopupElement.textContent = cardTitleElement.textContent;
  openPopup(popupImageElement);
}

// ADDING INITIAL CARDS
initialCards.forEach((item) => {
  const card = new Card (item, cardTemplateElement, handleImagePopup);
  const cardElement = card.generateCard();
  cardsContainerElement.append(cardElement);
});

// ADDED CARD RENDER FUNCTION
const handleAddedCardRender = (item) => {
  const card = new Card (item, cardTemplateElement, handleImagePopup);
  const cardElement = card.generateCard();
  cardsContainerElement.prepend(cardElement);
}

// VALIDATION INITIATION FUNCTION
const startFormValidation = (formSelector) => {
  const form = new FormValidator (validationConfig, formSelector);
  form.enableValidation(formSelector);
}
startFormValidation(editProfileFormElement);
startFormValidation(addCardFormElement);

// ADD CARD FORM SUBMIT FUNCTION
const cardAdditionFormHandler = (evt) => {
  evt.preventDefault();
  const addedElement = {
    name: placeNameInputElement.value,
    link: linkImageInputElement.value
  };
  handleAddedCardRender(addedElement);
  closePopup(popupAddCardElement);
  evt.target.reset();
}

// OPEN POPUP FUNCTION
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByDownEscButton);
}

// CLOSE POPUP FUNCTION
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByDownEscButton);
}

// CLOSE POPUP BY CLICK ON OVERLAY FUNCTION
const closePopupByClickOnOverlay = (evt) => {
  const openModal = document.querySelector('.popup_opened');
  if (evt.target === evt.currentTarget) {
    closePopup(openModal);
  }
}

// CLOSE POPUP BY ESC BUTTON FUNCTION
const closePopupByDownEscButton = (evt) => {
  const openModal = document.querySelector('.popup_opened');
  if (evt.key === escapeButton) {
    closePopup(openModal);
  }
}

// EDIT PROFILE DATA SUBSTITUTION FUNCTION
const handleEditProfileDataSubstitution = () => {
  nameInputElement.value = profileNameElement.textContent;
  jobInputElement.value = profileJobElement.textContent;
}

// EDIT PROFILE FORM SUBMIT FUNCTION
const editProfileFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileNameElement.textContent = nameInputElement.value;
  profileJobElement.textContent = jobInputElement.value;
  closePopup(popupEditProfileElement);
}

// OPEN POPUP EVENT LISTENERS
profileEditButtonElement.addEventListener('click', () => {
  handleEditProfileDataSubstitution();
  const form = new FormValidator (validationConfig, editProfileFormElement);
  form.resetValidationsErrors(editProfileFormElement);
  form.handleButtonCheckValidity(editProfileFormElement);
  openPopup(popupEditProfileElement);
});
addCardButtonElement.addEventListener('click', () => {
  openPopup(popupAddCardElement);
});

// CLOSE POPUP EVENT LISTENERS
popupCloseButtonEditProfileElement.addEventListener('click', () => closePopup(popupEditProfileElement));
popupCloseButtonAddCardElement.addEventListener('click', () => closePopup(popupAddCardElement));
popupCloseButtonImageElement.addEventListener('click', () => closePopup(popupImageElement));
popupElements.forEach((element) => element.addEventListener('click', closePopupByClickOnOverlay));

// FORM SUBMIT EVENT LISTENERS
editProfileFormElement.addEventListener('submit', editProfileFormSubmitHandler);
addCardFormElement.addEventListener('submit', cardAdditionFormHandler);
