/* IMPORT ARRAYS */
import { initialCards } from './array.js';

/* COMMON POPUP VARIABLES */
const popupElements = document.querySelectorAll('.popup');
const popupCloseButtonElements = document.querySelectorAll('.popup__btn-close');
const popupEditProfileElement = document.querySelector('.popup_type_edit-profile');
const popupAddCardElement = document.querySelector('.popup_type_add-card');
const popupImageElement = document.querySelector('.popup_type_img');

/* EDIT PROFILE POPUP VARIABLES */
const editProfileFormElement = document.querySelector('.popup__form_type_edit-profile');
const nameInputElement = editProfileFormElement.querySelector('.popup__form-input_substitution_name');
const jobInputElement = editProfileFormElement.querySelector('.popup__form-input_substitution_job');

/* ADD CARD POPUP VARIABLES */
const addCardFormElement = document.querySelector('.popup__form_type_add-card');
const placeNameInputElement = addCardFormElement.querySelector('.popup__form-input_substitution_place-name');
const linkImageInputElement = addCardFormElement.querySelector('.popup__form-input_substitution_link-img');

/* IMAGE POPUP VARIABLES */
const imgContainerPopupElement = document.querySelector('.popup__img-container');
const imgPopupElement = imgContainerPopupElement.querySelector('.popup__img');
const captionImgPopupElement = imgContainerPopupElement.querySelector('.popup__img-caption');

/* PROFILE VARIABLES */
const profileElement = document.querySelector('.profile');
const profileNameElement = profileElement.querySelector('.profile__user-name');
const profileJobElement = profileElement.querySelector('.profile__user-descr');
const profileEditButtonElement = profileElement.querySelector('.profile__btn-edit');
const addCardButtonElement = profileElement.querySelector('.profile__btn-add');

/* CARDS VARIABLES */
const cardsContainerElement = document.querySelector('.cards');

/* TEMPLATES VARIABLES */
const cardTemplateElement = document.querySelector('.card-template').content.querySelector('.card');

/* CARD CREATE FUNCTION */
function initialCardsCreate(item) {
  // CARD ELEMENTS VARIABLES
  const cardElement = cardTemplateElement.cloneNode(true);
  const cardTitleElement = cardElement.querySelector('.card__title');
  const cardImageElement = cardElement.querySelector('.card__img');
  const cardLikeButtonElement = cardElement.querySelector('.card__btn-like');
  const cardDeleteButtonElement = cardElement.querySelector('.card__btn-del');
  // CARD ELEMENTS SUBSTITUTION
  cardTitleElement.textContent = item.name;
  cardImageElement.src = item.link;
  cardImageElement.alt = item.name;
  // IMAGE POPUP EVENT LISTENER
  cardImageElement.addEventListener('click', imagePopupHandler);
  // CARD BUTTONS EVENT LISTENER
  cardLikeButtonElement.addEventListener('click', likeCardHandler);
  cardDeleteButtonElement.addEventListener('click', deleteCardHandler);
  return cardElement;
}

/* IMAGE POPUP FUNCTION */
const imagePopupHandler = (evt) => {
  imgPopupElement.src = evt.target.src;
  imgPopupElement.alt = evt.target.closest('.card').querySelector('.card__title').textContent;
  captionImgPopupElement.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  openPopup(popupImageElement);
}

/* CARD LIKE ADD/REMOVE FUNCTION */
const likeCardHandler = (evt) => {
  evt.target.classList.toggle('card__btn-like_active');
}

/* CARD DELETE FUNCTION */
const deleteCardHandler = (evt) => {
  evt.target.closest('.card').remove();
}

/* CARD RENDER FUNCTION */
const renderCardElement = (item, wrapperElement) => {
  const element = initialCardsCreate(item);
  wrapperElement.append(element);
}

/* ADDED CARD RENDER FUNCTION */
const addedRenderCardElement = (item, wrapperElement) => {
  const element = initialCardsCreate(item);
  wrapperElement.prepend(element);
}

/* INITIAL CARDS CREATE FUNCTION */
initialCards.forEach((item) => {
  renderCardElement(item, cardsContainerElement);
});

/* ADD CARD FORM SUBMIT FUNCTION */
const addCardFormSubmitHandler = (evt) => {
  evt.preventDefault();
  const addedElement = {
    name: placeNameInputElement.value,
    link: linkImageInputElement.value
  };
  addedRenderCardElement(addedElement, cardsContainerElement);
  closePopup();
  evt.target.reset();
}

/* OPEN POPUP FUNCTION */
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

/* CLOSE POPUP FUNCTION */
const closePopup = () => {
  popupElements.forEach(function (element) {
    element.classList.remove('popup_opened');
  })
}

/* EDIT PROFILE DATA SUBSTITUTION FUNCTION */
const editProfileDataSubstitution = () => {
  nameInputElement.value = profileNameElement.textContent;
  jobInputElement.value = profileJobElement.textContent;
}

/* EDIT PROFILE FORM SUBMIT FUNCTION */
const editProfileFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileNameElement.textContent = nameInputElement.value;
  profileJobElement.textContent = jobInputElement.value;
  closePopup();
}

/* OPEN AND CLOSE POPUPS EVENT LISTENER */
profileEditButtonElement.addEventListener('click', () => {
  openPopup(popupEditProfileElement);
  editProfileDataSubstitution();
});
addCardButtonElement.addEventListener('click', () => openPopup(popupAddCardElement));
popupCloseButtonElements.forEach( (element) => element.addEventListener('click', closePopup) );

/* FORMS SUBMIT EVENT LISTENER */
editProfileFormElement.addEventListener('submit', editProfileFormSubmitHandler);
addCardFormElement.addEventListener('submit', addCardFormSubmitHandler);
