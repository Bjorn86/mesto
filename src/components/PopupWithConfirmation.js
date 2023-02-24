// CLASS IMPORT
import { Popup } from './Popup.js';

// POPUP WITH FORM CLASS
export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
    this._submitFormButtonElement = this._formElement.querySelector('.popup__btn-form-submit');
    this._submitFormButtonText = this._submitFormButtonElement.textContent;
  }
  // POPUP EVENT LISTENERS
  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
  // HANDLE FORM SUBMIT METHOD
  handleFormSubmit(func) {
    this._handleFormSubmit = func;
  }
  // SET ONLOAD BUTTON TEXT METHOD
  renderLoading(isLoading, loadingText='Удаление...') {
    if (isLoading) {
      this._submitFormButtonElement.textContent = loadingText;
    } else {
      this._submitFormButtonElement.textContent = this._submitFormButtonText;
    }
  }
}
