// CARD CLASS
export class Card {
  constructor(initialCards, templateSelector, handleCardClick) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._cardImageElement = this._element.querySelector('.card__img');
    this._cardLikeButtonElement = this._element.querySelector('.card__btn-like');
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
    });
    this._cardDeleteButtonElement.addEventListener('click', () => {
      this._handleCardDelete();
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
    this._setEventListeners();
    return this._element;
  }
  // CARD LIKE ADD/REMOVE METHOD
  _handleLikeButton() {
    this._cardLikeButtonElement.classList.toggle('card__btn-like_active');
  }
  // CARD DELETE METHOD
  _handleCardDelete() {
    this._element.remove();
  }
}
