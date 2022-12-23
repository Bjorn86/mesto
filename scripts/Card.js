// CARD CLASS
export class Card {
  constructor(initialCards, templateSelector, handleOpenImagePopup) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._templateSelector = templateSelector;
    this._handleOpenImagePopup = handleOpenImagePopup;
  }
  // CARD EVENT LISTENERS
  _setEventListeners(cardImageElement, cardLikeButtonElement, cardDeleteButtonElement) {
    cardImageElement.addEventListener('click', () => {
      this._handleOpenImagePopup(this._name, this._link);
    });
    cardLikeButtonElement.addEventListener('click', () => {
      this._handleLikeButton(cardLikeButtonElement);
    });
    cardDeleteButtonElement.addEventListener('click', () => {
      this._handleCardDelete();
    });
  }
  // GET TEMPLATE FUNCTION
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }
  // GENERATE CARD FUNCTION
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
  // CARD LIKE ADD/REMOVE FUNCTION
  _handleLikeButton(cardLikeButtonElement) {
    cardLikeButtonElement.classList.toggle('card__btn-like_active');
  }
  // CARD DELETE FUNCTION
  _handleCardDelete() {
    this._element.remove();
  }
}
