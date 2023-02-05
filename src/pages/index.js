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
  cardsContainerSelector
} from '../utils/elements.js';

// IMPORT ARRAYS AND OBJECTS
import {
  // IMPORT VALIDATION CONFIG
  validationConfig
} from '../utils/constants.js';

import {
  handleEditProfileDataSubstitution
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
  .then((data) => {
    userInfo.setUserInfo(data[0]);
    userInfo.setUserAvatar(data[0]);
    cardList.renderItems(data[1].reverse());
  })
  .catch((err) => {
    console.log(err);
  })

// CREATE USER INFO CLASS INSTANCE
const userInfo = new UserInfo({
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
    popupEditProfile.setOnloadButtonText('Сохранение...');
    api.sendUserInfo(userData)
      .then((newUserData) => {
        userInfo.setUserInfo(newUserData);
      })
      .then(() => {
        popupEditProfile.setOnloadButtonText('Сохранить');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.close();
      })
  }
}, editProfilePopupSelector);
popupEditProfile.setEventListeners();

// CREATE POPUP WITH ADD CARD FORM CLASS INSTANCE
const popupAddCard = new PopupWithForm({
  handleFormSubmit: (cardData) => {
    popupAddCard.setOnloadButtonText('Сохранение...');
    api.sendNewCardInfo(cardData)
      .then((newCardData) => {
        const newCard = createCard(newCardData);
        cardList.addItem(newCard);
      })
      .then(() => {
        popupAddCard.setOnloadButtonText('Создать');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.close();
      })
  }
}, addCardPopupSelector);
popupAddCard.setEventListeners();

// CREATE POPUP WITH AVATAR EDIT FORM CLASS INSTANCE
const popupEditAvatar = new PopupWithForm({
  handleFormSubmit: (avatarData) => {
    popupEditAvatar.setOnloadButtonText('Сохранение...');
    api.setUserAvatar(avatarData)
      .then((newAvatarData) => {
        userInfo.setUserAvatar(newAvatarData);
      })
      .then(() => {
        popupEditAvatar.setOnloadButtonText('Сохранить');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditAvatar.close();
      })
  }
}, editAvatarPopupSelector);
popupEditAvatar.setEventListeners();

// CREATE POPUP WITH DELETE CARD FORM CLASS INSTANCE
const popupDeleteCard = new PopupWithConfirmation(deleteCardPopupSelector);
popupDeleteCard.setEventListeners();

// CARD CREATE FUNCTION
const createCard = (item) => {
  const card = new Card (item, cardTemplateSelector, {
    userId: userInfo.giveUserId(),
    handleCardClick: (cardTitleElement, cardImageElement) => {
      popupWithImage.open(cardTitleElement, cardImageElement);
    },
    handleDeleteClick: (id) => {
      popupDeleteCard.open();
      popupDeleteCard.handleFormSubmit(() => {
        popupDeleteCard.setOnloadButtonText('Удаление...');
        api.deleteCard(id)
        .then(() => {
          card.deleteCard();
        })
        .then(() => {
          popupDeleteCard.setOnloadButtonText('Да');
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupDeleteCard.close();
        })
      })
    },
    handleCardLike: (id) => {
      if (item.likes.find((user) => user._id === userInfo.giveUserId())) {
        api.deleteCardLike(id)
          .then((cardData) => {
            item = cardData;
            card.handleCardLikeCounterUpdate(cardData)
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        api.setCardLike(id)
          .then((cardData) => {
            item = cardData;
            card.handleCardLikeCounterUpdate(cardData)
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
}

// CREATING AN CLASS INSTANCE WITH CARDS
const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, cardsContainerSelector);


// CREATE VALIDATION FUNCTION
const createFormValidator = (formElement) => {
  const formValidator = new FormValidator (validationConfig, formElement);
  return formValidator;
}

// INITIATING VALIDATION OF THE PROFILE EDITING FORM
const editProfileFormValidator = createFormValidator(editProfileFormElement);
editProfileFormValidator.enableValidation();

// INITIATION OF VALIDATION OF THE CARD ADDITION FORM
const addCardFormValidator = createFormValidator(addCardFormElement);
addCardFormValidator.enableValidation();

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
