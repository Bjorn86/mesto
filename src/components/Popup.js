// IMPORT ELEMENTS
import { escapeButton } from '../utils/elements.js';

// POPUP CLASS
export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  // POPUP EVENT LISTENERS
  setEventListeners() {
    const popupCloseButtonElement = this._popup.querySelector('.popup__btn-close');
    popupCloseButtonElement.addEventListener('click', () => {this.close()});
    this._popup.addEventListener('click', (evt) => {
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
  _handleEscClose(evt) {
    if (evt.key === escapeButton) {
      this.close();
    }
  }
}
