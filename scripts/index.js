// IMPORT ELEMENTS
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
  cardTemplateSelector,
} from './elements.js';

// IMPORT ARRAYS AND OBJECTS
import {
  // IMPORT INITIAL CARDS ARRAY
  initialCards,
  // IMPORT VALIDATION CONFIG
  validationConfig
} from './constants.js';

// CLASS IMPORT
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// IMAGE POPUP FUNCTION
const handleOpenImagePopup = (cardTitleElement, cardImageElement) => {
  imgPopupElement.src = cardImageElement;
  imgPopupElement.alt = cardTitleElement;
  captionImgPopupElement.textContent = cardTitleElement;
  openPopup(popupImageElement);
}

// CARD CREATE FUNCTION
const createCard = (item) => {
  const card = new Card (item, cardTemplateSelector, handleOpenImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

// ADDING INITIAL CARDS
initialCards.forEach((item) => {
  cardsContainerElement.append(createCard(item));
});

// ADDED CARD RENDER FUNCTION
const handleAddedCardRender = (item) => {
  cardsContainerElement.prepend(createCard(item));
}

// CREATE VALIDATION FUNCTION
const createFormValidator = (formSelector) => {
  const formValidator = new FormValidator (validationConfig, formSelector);
  return formValidator;
}

// INITIATING VALIDATION OF THE PROFILE EDITING FORM
const editProfileFormValidator = createFormValidator(editProfileFormElement);
editProfileFormValidator.enableValidation(editProfileFormElement);

// INITIATION OF VALIDATION OF THE CARD ADDITION FORM
const addCardFormValidator = createFormValidator(addCardFormElement);
addCardFormValidator.enableValidation(addCardFormElement);

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
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

// CLOSE POPUP BY ESC BUTTON FUNCTION
const closePopupByDownEscButton = (evt) => {
  if (evt.key === escapeButton) {
    const openModal = document.querySelector('.popup_opened');
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
  editProfileFormValidator.resetValidationsErrors();
  editProfileFormValidator.handleButtonCheckValidity();
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
