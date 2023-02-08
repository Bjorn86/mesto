// CLASS IMPORT
import { Popup } from './Popup.js';

// POPUP WITH IMAGE CLASS
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imgPopupElement = this._popup.querySelector('.popup__img');
    this._captionImgPopupElement = this._popup.querySelector('.popup__img-caption');
  }
  // OPEN POPUP METHOD
  open(cardTitleElement, cardImageElement) {
    this._imgPopupElement.src = cardImageElement;
    this._imgPopupElement.alt = cardTitleElement;
    this._captionImgPopupElement.textContent = cardTitleElement;
    super.open();
  }
}
