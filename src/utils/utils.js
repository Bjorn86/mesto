// IMPORT ELEMENTS
import {
  cardsContainerElement,
  nameInputElement,
  jobInputElement
} from './elements.js';

// IMPORT CLASS INSTANCE
import {
  popupWithImage,
} from '../pages/index.js';

// HANDLE CLICK CARD IMAGE
export const handleCardClick = (cardTitleElement, cardImageElement) => {
  popupWithImage.open(cardTitleElement, cardImageElement);
}

// HANDLE EDIT PROFILE DATA SUBSTITUTION
export const handleEditProfileDataSubstitution = (userData) => {
  nameInputElement.value = userData.name;
  jobInputElement.value = userData.job;
}
