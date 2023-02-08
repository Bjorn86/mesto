// IMPORT ELEMENTS
import { ESCAPE_BUTTON } from '../utils/elements.js';

// POPUP CLASS
export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButtonElement = this._popup.querySelector('.popup__btn-close');
  }
  // POPUP EVENT LISTENERS
  setEventListeners() {
    this._popupCloseButtonElement.addEventListener('click', () => { this.close() });
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
  // OPEN POPUP METHOD
  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add('popup_opened');
  }
  // CLOSE POPUP METHOD
  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_opened');
  }
  // CLOSE POPUP BY ESC BUTTON METHOD
  _handleEscClose = (evt) => {
    if (evt.key === ESCAPE_BUTTON) {
      this.close();
    }
  }
}
