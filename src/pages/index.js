// IMPORT CSS FILE
import './index.css';

// IMPORT ELEMENTS
import {
  // IMPORT EDIT PROFILE POPUP VARIABLES
  editProfilePopupSelector,
  editProfileFormElement,
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
  cardsContainerSelector
} from '../utils/elements.js';

// IMPORT ARRAYS AND OBJECTS
import {
  // IMPORT INITIAL CARDS ARRAY
  initialCards,
  // IMPORT VALIDATION CONFIG
  validationConfig
} from '../utils/constants.js';

import {
  handleCardClick,
  handleEditProfileDataSubstitution
} from '../utils/utils.js';

// CLASS IMPORT
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

// CREATE USER INFO CLASS INSTANCE
const userInfo = new UserInfo({
  profileNameSelector: '.profile__user-name',
  profileJobSelector: '.profile__user-job'
});

// CREATE POPUP WITH IMAGE CLASS INSTANCE
export const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

// CREATE POPUP WITH EDIT PROFILE FORM CLASS INSTANCE
const popupEditProfile = new PopupWithForm({
  handleFormSubmit: (userData) => {
    userInfo.setUserInfo(userData);
    popupEditProfile.close();
  }
}, editProfilePopupSelector);
popupEditProfile.setEventListeners();

// CREATE POPUP WITH ADD CARD FORM CLASS INSTANCE
const popupAddCard = new PopupWithForm({
  handleFormSubmit: (placeData) => {
    const newCard = createCard(placeData);
    cardList.addItem(newCard);
    popupAddCard.close();
  }
}, addCardPopupSelector);
popupAddCard.setEventListeners();

// CARD CREATE FUNCTION
const createCard = (item) => {
  const card = new Card (item, cardTemplateSelector, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

// CREATING AN CLASS INSTANCE WITH CARDS
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, cardsContainerSelector);

// INITIAL CARDS RENDER
cardList.renderItems();

// CREATE VALIDATION FUNCTION
const createFormValidator = (formElement) => {
  const formValidator = new FormValidator (validationConfig, formElement);
  return formValidator;
}

// INITIATING VALIDATION OF THE PROFILE EDITING FORM
const editProfileFormValidator = createFormValidator(editProfileFormElement); //Проверить прошлую ПР не селектор ли должен передаваться?
editProfileFormValidator.enableValidation(editProfileFormElement);

// INITIATION OF VALIDATION OF THE CARD ADDITION FORM
const addCardFormValidator = createFormValidator(addCardFormElement);
addCardFormValidator.enableValidation(addCardFormElement);

// OPEN POPUP EVENT LISTENERS
profileEditButtonElement.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  handleEditProfileDataSubstitution(userData);
  editProfileFormValidator.resetValidationsErrors();
  popupEditProfile.open();
});
addCardButtonElement.addEventListener('click', () => {
  addCardFormValidator.resetValidationsErrors();
  popupAddCard.open();
});
