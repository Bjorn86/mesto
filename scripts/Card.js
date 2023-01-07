// CARD CLASS
export class Card {
  constructor(initialCards, templateSelector, handleCardClick) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  // CARD EVENT LISTENERS
  _setEventListeners(cardImageElement, cardLikeButtonElement, cardDeleteButtonElement) {
    cardImageElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    cardLikeButtonElement.addEventListener('click', () => {
      this._handleLikeButton(cardLikeButtonElement);
    });
    cardDeleteButtonElement.addEventListener('click', () => {
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
    this._element = this._getTemplate();
    const cardImageElement = this._element.querySelector('.card__img');
    const cardLikeButtonElement = this._element.querySelector('.card__btn-like');
    const cardDeleteButtonElement = this._element.querySelector('.card__btn-del');
    const cardTitleElement = this._element.querySelector('.card__title');
    cardTitleElement.textContent = this._name;
    cardImageElement.src = this._link;
    cardImageElement.alt = this._name;
    this._setEventListeners(cardImageElement, cardLikeButtonElement, cardDeleteButtonElement);
    return this._element;
  }
  // CARD LIKE ADD/REMOVE METHOD
  _handleLikeButton(cardLikeButtonElement) {
    cardLikeButtonElement.classList.toggle('card__btn-like_active');
  }
  // CARD DELETE METHOD
  _handleCardDelete() {
    this._element.remove();
  }
}
