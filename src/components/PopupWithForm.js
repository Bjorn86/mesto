// CLASS IMPORT
import { Popup } from './Popup.js';

// POPUP WITH FORM CLASS
export class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__form-input');
    this._submitFormButtonElement = this._formElement.querySelector('.popup__btn-form-submit');
    this._submitFormButtonText = this._submitFormButtonElement.textContent;
  }
  // POPUP EVENT LISTENERS
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  // GET INPUT VALUES METHOD
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  // CLOSE POPUP METHOD
  close() {
    this._formElement.reset();
    super.close();
  }
  // SET ONLOAD BUTTON TEXT METHOD
  renderLoading(isLoading, loadingText='Сохранение...') {
    if (isLoading) {
      this._submitFormButtonElement.textContent = loadingText;
    } else {
      this._submitFormButtonElement.textContent = this._submitFormButtonText;
    }
  }
  // SET INPUT VALUES METHOD
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }
}
