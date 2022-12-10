//COMMON VARIABLES
export const escapeButton = 'Escape';

//COMMON POPUP VARIABLES
export const popupElements = document.querySelectorAll('.popup');
export const popupEditProfileElement = document.querySelector('.popup_type_edit-profile');
export const popupAddCardElement = document.querySelector('.popup_type_add-card');
export const popupImageElement = document.querySelector('.popup_type_img');
export const popupCloseButtonEditProfileElement = popupEditProfileElement.querySelector('.popup__btn-close_place_edit-profile');
export const popupCloseButtonAddCardElement = popupAddCardElement.querySelector('.popup__btn-close_place_add-card');
export const popupCloseButtonImageElement = popupImageElement.querySelector('.popup__btn-close_place_img');

//EDIT PROFILE POPUP VARIABLES
export const editProfileFormElement = document.querySelector('.popup__form_type_edit-profile');
export const nameInputElement = editProfileFormElement.querySelector('.popup__form-input_substitution_name');
export const jobInputElement = editProfileFormElement.querySelector('.popup__form-input_substitution_job');

//ADD CARD POPUP VARIABLES
export const addCardFormElement = document.querySelector('.popup__form_type_add-card');
export const placeNameInputElement = addCardFormElement.querySelector('.popup__form-input_substitution_place-name');
export const linkImageInputElement = addCardFormElement.querySelector('.popup__form-input_substitution_link-img');

//IMAGE POPUP VARIABLES
export const imgContainerPopupElement = document.querySelector('.popup__img-container');
export const imgPopupElement = imgContainerPopupElement.querySelector('.popup__img');
export const captionImgPopupElement = imgContainerPopupElement.querySelector('.popup__img-caption');

//PROFILE VARIABLES
export const profileElement = document.querySelector('.profile');
export const profileNameElement = profileElement.querySelector('.profile__user-name');
export const profileJobElement = profileElement.querySelector('.profile__user-descr');
export const profileEditButtonElement = profileElement.querySelector('.profile__btn-edit');
export const addCardButtonElement = profileElement.querySelector('.profile__btn-add');

//CARDS VARIABLES
export const cardsContainerElement = document.querySelector('.cards__wrapper');

//TEMPLATES VARIABLES
export const cardTemplateElement = document.querySelector('.card-template').content.querySelector('.card');

//INITIAL CARDS ARRAY
export const initialCards = [
  {
    name: 'Озеро Байкал',
    link: './images/baikal.jpg'
  },
  {
    name: 'Карелия',
    link: './images/kareliya.jpg'
  },
  {
    name: 'Казань',
    link: './images/kazan.jpg'
  },
  {
    name: 'Красная поляна',
    link: './images/krasnaya-polyana.jpg'
  },
  {
    name: 'Красноярские столбы',
    link: './images/krasnoyarsk-stolbi.jpg'
  },
  {
    name: 'Шерегеш',
    link: './images/sheregesh.jpg'
  }
];

//VALIDATION CONFIG OBJECT
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-btn-submit',
  inactiveButtonClass: 'popup__form-btn-submit_inactive',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-input-error_active'
};
