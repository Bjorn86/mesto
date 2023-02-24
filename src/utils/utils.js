// CLASS INSTANCE IMPORT
import { api } from '../components/Api.js';
import {
  userInfo,
  popupWithImage,
  popupDeleteCard
} from '../pages/index.js';

// HANDLE CARD IMAGE CLICK
export const handleCardClick = (cardTitleElement, cardImageElement) => {
  popupWithImage.open(cardTitleElement, cardImageElement);
}

// HANDLE CARD DELETE
export const handleDeleteClick = (card) => {
  popupDeleteCard.open();
  popupDeleteCard.handleFormSubmit(() => {
    popupDeleteCard.renderLoading(true);
    api.deleteCard(card.getCardId())
      .then(() => {
        card.deleteCard();
      })
      .then(() => popupDeleteCard.close())
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupDeleteCard.renderLoading(false))
  })
}

// HANDLE CARD LIKE
export const handleCardLike = (card) => {
  if (card.cardData.likes.find((user) => user._id === userInfo.getUserId())) {
    api.deleteCardLike(card.getCardId())
      .then((cardData) => {
        card.handleCardLikeUpdate(cardData)
      })
      .catch((err) => {
        console.log(err);
      })
  } else {
    api.setCardLike(card.getCardId())
      .then((cardData) => {
        card.handleCardLikeUpdate(cardData)
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
