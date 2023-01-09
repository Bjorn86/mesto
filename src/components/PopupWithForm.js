// CLASS IMPORT
import { Popup } from './Popup.js';

// POPUP WITH FORM CLASS
export class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
  }
  // POPUP EVENT LISTENERS
  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
  // GET INPUT VALUES METHOD
  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll('.popup__form-input');
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
}
