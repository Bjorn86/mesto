// CARD CLASS
export class Card {
  constructor(cardData, templateSelector, handleCardClick, handleDeleteClick, handleCardLike, { userId }) {
    this.cardData = cardData;
    this._name = this.cardData.name;
    this._link = this.cardData.link;
    this._cardId = this.cardData._id;
    this._cardOwnerId = this.cardData.owner._id;
    this._likes = this.cardData.likes;
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
      this._handleCardLike(this);
    });
    this._cardDeleteButtonElement.addEventListener('click', () => {
      this._handleDeleteClick(this);
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
  // GET CARD ID METHOD
  getCardId() {
    return this._cardId;
  }
  // CARD LIKE ADD/REMOVE METHOD
  _handleLikeButton() {
    this._cardLikeButtonElement.classList.toggle('card__btn-like_active');
  }
  // CARD LIKE UPDATE METHOD
  handleCardLikeUpdate(cardData) {
    this.cardData = cardData;
    this._cardLikeCounterElement.textContent = cardData.likes.length;
    this._handleLikeButton();
  }
  // CARD DELETE METHOD
  deleteCard() {
    this._element.remove();
    this._element = null;
  }
}
