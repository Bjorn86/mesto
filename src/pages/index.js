// IMPORT CSS FILE
import './index.css';

// IMPORT ELEMENTS
import {
  // IMPORT EDIT PROFILE POPUP VARIABLES
  editProfilePopupSelector,
  // IMPORT ADD CARD POPUP VARIABLES
  addCardPopupSelector,
  // IMPORT EDIT AVATAR POPUP VARIABLES
  editAvatarPopupSelector,
  // IMPORT CARD DELETE POPUP VARIABLES
  deleteCardPopupSelector,
  // IMPORT IMAGE POPUP VARIABLES
  imagePopupSelector,
  // IMPORT PROFILE VARIABLES
  profileEditButtonElement,
  addCardButtonElement,
  avatarEditButtonElement,
  // IMPORT CARDS VARIABLES
  cardTemplateSelector,
  cardsContainerSelector
} from '../utils/elements.js';

// IMPORT VALIDATION CONFIG
import {
  validationConfig
} from '../utils/constants.js';

// IMPORT HANDLERS
import {
  handleCardClick,
  handleDeleteClick,
  handleCardLike
} from '../utils/utils.js';

// CLASS AND CLASS INSTANCE IMPORT
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';

// GETTING PRIMARY DATA FROM THE SERVER
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cardList.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(err);
  })

// CREATE USER INFO CLASS INSTANCE
export const userInfo = new UserInfo({
  profileNameSelector: '.profile__user-name',
  profileAboutSelector: '.profile__user-about',
  profileAvatarSelector: '.profile__avatar'
});

// CREATE POPUP WITH IMAGE CLASS INSTANCE
export const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

// CREATE POPUP WITH EDIT PROFILE FORM CLASS INSTANCE
const popupEditProfile = new PopupWithForm({
  handleFormSubmit: (userData) => {
    return api.sendUserInfo(userData)
      .then((newUserData) => {
        userInfo.setUserInfo(newUserData);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}, editProfilePopupSelector);
popupEditProfile.setEventListeners();

// CREATE POPUP WITH ADD CARD FORM CLASS INSTANCE
const popupAddCard = new PopupWithForm({
  handleFormSubmit: (cardData) => {
    return api.sendNewCardInfo(cardData)
      .then((newCardData) => {
        cardList.addItem(newCardData);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}, addCardPopupSelector);
popupAddCard.setEventListeners();

// CREATE POPUP WITH AVATAR EDIT FORM CLASS INSTANCE
const popupEditAvatar = new PopupWithForm({
  handleFormSubmit: (avatarData) => {
    return api.setUserAvatar(avatarData)
      .then((newAvatarData) => {
        userInfo.setUserInfo(newAvatarData);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}, editAvatarPopupSelector);
popupEditAvatar.setEventListeners();

// CREATE POPUP WITH DELETE CARD FORM CLASS INSTANCE
export const popupDeleteCard = new PopupWithConfirmation(deleteCardPopupSelector);
popupDeleteCard.setEventListeners();

// CREATING AN CLASS INSTANCE WITH CARDS
const cardList = new Section({
  renderer: (item) => {
    const newCard = new Card (item, cardTemplateSelector, handleCardClick, handleDeleteClick, handleCardLike, {
      userId: userInfo.getUserId()
    });
    const cardElement = newCard.generateCard();
    return cardElement;
  }
}, cardsContainerSelector);

// OBJECT WITH VALIDATION CLASS INSTANCE
const formValidators = {};

// ENABLE VALIDATION FUNCTION
const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(validationConfig);

// OPEN POPUP EVENT LISTENERS
profileEditButtonElement.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  popupEditProfile.setInputValues(userData);
  formValidators['edit-profile'].resetValidationsErrors()
  popupEditProfile.open();
});
addCardButtonElement.addEventListener('click', () => {
  formValidators['add-card'].resetValidationsErrors()
  popupAddCard.open();
});
avatarEditButtonElement.addEventListener('click', () => {
  formValidators['avatar-edit'].resetValidationsErrors()
  popupEditAvatar.open();
});
