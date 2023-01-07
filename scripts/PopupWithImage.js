// CLASS IMPORT
import { Popup } from './Popup.js';

// POPUP WITH IMAGE CLASS
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  // OPEN POPUP METHOD
  open(cardTitleElement, cardImageElement) {
    const imgPopupElement = this._popup.querySelector('.popup__img');
    const captionImgPopupElement = this._popup.querySelector('.popup__img-caption');
    imgPopupElement.src = cardImageElement;
    imgPopupElement.alt = cardTitleElement;
    captionImgPopupElement.textContent = cardTitleElement;
    super.open();
  }
}
