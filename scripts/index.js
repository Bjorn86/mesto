// IMPORT ELEMENTS
import {
  // IMPORT EDIT PROFILE POPUP VARIABLES
  editProfilePopupSelector,
  editProfileFormElement,
  nameInputElement,
  jobInputElement,
  // IMPORT ADD CARD POPUP VARIABLES
  addCardPopupSelector,
  addCardFormElement,
  // IMPORT IMAGE POPUP VARIABLES
  imagePopupSelector,
  // IMPORT PROFILE VARIABLES
  profileEditButtonElement,
  addCardButtonElement,
  // IMPORT CARDS VARIABLES
  cardTemplateSelector,
  cardsContainerSelector,
  cardsContainerElement
} from './elements.js';

// IMPORT ARRAYS AND OBJECTS
import {
  // IMPORT INITIAL CARDS ARRAY
  initialCards,
  // IMPORT VALIDATION CONFIG
  validationConfig
} from './constants.js';

// CLASS IMPORT
import { Section } from './Section.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

// CREATE USER INFO CLASS INSTANCE
const userInfo = new UserInfo({
  profileNameSelector: '.profile__user-name',
  profileJobSelector: '.profile__user-job'
});

// CREATE POPUP WITH IMAGE CLASS INSTANCE
const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

// HANDLE CLICK CARD IMAGE
const handleCardClick = (cardTitleElement, cardImageElement) => {
  popupWithImage.open(cardTitleElement, cardImageElement);
}

// CREATE POPUP WITH EDIT PROFILE FORM CLASS INSTANCE
const editProfilePopup = new PopupWithForm({
  handleFormSubmit: (userData) => {
    userInfo.setUserInfo(userData);
    editProfilePopup.close();
  }
}, editProfilePopupSelector);
editProfilePopup.setEventListeners();

// CREATE POPUP WITH ADD CARD FORM CLASS INSTANCE
const addCardPopup = new PopupWithForm({
  handleFormSubmit: (placeData) => {
    handleAddedCardRender(placeData);
    addCardPopup.close();
  }
}, addCardPopupSelector);
addCardPopup.setEventListeners();

// CREATING AN CLASS INSTANCE WITH INITIAL CARDS
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card (item, cardTemplateSelector, handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardsContainerSelector);

// INITIAL CARDS RENDER
cardList.renderItems();

// CARD CREATE FUNCTION
const createCard = (item) => {
  const card = new Card (item, cardTemplateSelector, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

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

// EDIT PROFILE DATA SUBSTITUTION FUNCTION
const handleEditProfileDataSubstitution = (userData) => {
  nameInputElement.value = userData.name;
  jobInputElement.value = userData.job;
}

// OPEN POPUP EVENT LISTENERS
profileEditButtonElement.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  handleEditProfileDataSubstitution(userData);
  editProfileFormValidator.resetValidationsErrors();
  editProfileFormValidator.handleButtonCheckValidity();
  editProfilePopup.open();
});
addCardButtonElement.addEventListener('click', () => {
  addCardPopup.open();
});
