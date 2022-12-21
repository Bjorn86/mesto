// CARD CLASS
export class Card {
  constructor(initialCards, templateSelector, handleImagePopup) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._templateSelector = templateSelector;
    this._handleImagePopup = handleImagePopup;
  }
  // CARD EVENT LISTENERS
  _setEventListeners(cardImageElement, cardLikeButtonElement, cardDeleteButtonElement, cardTitleElement) {
    cardImageElement.addEventListener('click', () => {
      this._handleImagePopup(cardTitleElement, cardImageElement);
    });
    cardLikeButtonElement.addEventListener('click', () => {
      this._handleLikeButton(cardLikeButtonElement);
    });
    cardDeleteButtonElement.addEventListener('click', () => {
      this._handleCardDelete(cardDeleteButtonElement);
    });
  }
  // GET TEMPLATE FUNCTION
  _getTemplate() {
    const cardTemplateElement = document.querySelector('.card-template').content.querySelector('.card');
    const cardElement = cardTemplateElement.cloneNode(true);
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
    this._setEventListeners(cardImageElement, cardLikeButtonElement, cardDeleteButtonElement, cardTitleElement);
    return this._element;
  }
  // CARD LIKE ADD/REMOVE FUNCTION
  _handleLikeButton(cardLikeButtonElement) {
    cardLikeButtonElement.classList.toggle('card__btn-like_active');
  }
  // CARD DELETE FUNCTION
  _handleCardDelete(cardDeleteButtonElement) {
    cardDeleteButtonElement.closest('.card').remove();
  }
}
