// CARD CLASS
export class Card {
  constructor(initialCards, templateSelector, {userId, handleCardClick, handleDeleteClick, handleCardLike}) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._cardId = initialCards._id;
    this._cardOwnerId = initialCards.owner._id;
    this._likes = initialCards.likes;
    this._templateSelector = templateSelector;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleCardLike = handleCardLike;
    this._element = this._getTemplate();
    this._cardImageElement = this._element.querySelector('.card__img');
    this._cardLikeButtonElement = this._element.querySelector('.card__btn-like');
    this._cardLikeCounterElement = this._element.querySelector('.card__like-counter');
    this._cardDeleteButtonElement = this._element.querySelector('.card__btn-del');
    this._cardTitleElement = this._element.querySelector('.card__title');
  }
  // CARD EVENT LISTENERS
  _setEventListeners() {
    this._cardImageElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._cardLikeButtonElement.addEventListener('click', () => {
      this._handleLikeButton();
      this._handleCardLike(this._cardId);
    });
    this._cardDeleteButtonElement.addEventListener('click', () => {
      this._handleDeleteClick(this._cardId);
    });
  }
  // GET TEMPLATE METHOD
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }
  // GENERATE CARD METHOD
  generateCard() {
    this._cardTitleElement.textContent = this._name;
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardLikeCounterElement.textContent = this._likes.length;
    if (this._cardOwnerId !== this._userId) this._cardDeleteButtonElement.classList.toggle('card__btn-del_inactive');
    if (this._likes.find((user) => user._id === this._userId)) this._handleLikeButton();
    this._setEventListeners();
    return this._element;
  }
  // CARD LIKE ADD/REMOVE METHOD
  _handleLikeButton() {
    this._cardLikeButtonElement.classList.toggle('card__btn-like_active');
  }
  // CARD LIKE COUNTER UPDATE METHOD
  handleCardLikeCounterUpdate(cardData) {
    this._cardLikeCounterElement.textContent = cardData.likes.length;
  }
  // CARD DELETE METHOD
  deleteCard() {
    this._element.remove();
    this._element = null;
  }
}
