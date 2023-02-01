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
  // IMPORT EDIT AVATAR POPUP VARIABLES
  editAvatarPopupSelector,
  editAvatarPopupElement,
  // IMPORT CARD DELETE POPUP VARIABLES
  deleteCardPopupSelector,
  // IMPORT IMAGE POPUP VARIABLES
  imagePopupSelector,
  // IMPORT PROFILE VARIABLES
  profileEditButtonElement,
  addCardButtonElement,
  editProfileButtonElement,
  // IMPORT CARDS VARIABLES
  cardTemplateSelector,
  cardsContainerSelector,
  cardDeleteElement
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
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';
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

// CREATE POPUP WITH AVATAR EDIT FORM CLASS INSTANCE
const popupEditAvatar = new PopupWithForm({
  handleFormSubmit: () => {
    popupEditAvatar.close()
  }
}, editAvatarPopupSelector);
popupEditAvatar.setEventListeners();

// CREATE POPUP WITH DELETE CARD FORM CLASS INSTANCE
const popupDeleteCard = new PopupWithConfirmation({
  handleFormSubmit: () => {
    popupDeleteCard.close()
  }
}, deleteCardPopupSelector);
popupDeleteCard.setEventListeners();

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
const editProfileFormValidator = createFormValidator(editProfileFormElement);
editProfileFormValidator.enableValidation(editProfileFormElement);

// INITIATION OF VALIDATION OF THE CARD ADDITION FORM
const addCardFormValidator = createFormValidator(addCardFormElement);
addCardFormValidator.enableValidation(addCardFormElement);

// INITIATING VALIDATION OF THE PROFILE EDITING FORM
const editAvatarFormValidator = createFormValidator(editAvatarPopupElement);
editAvatarFormValidator.enableValidation()

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
editProfileButtonElement.addEventListener('click', () => {
  editAvatarFormValidator.resetValidationsErrors();
  popupEditAvatar.open();
});
/* cardDeleteElement.addEventListener('click', () => {
  popupDeleteCard.open();
}) */
