/* POPUP VARIABLES */
const formElement = document.querySelector('.popup');
const nameInput = formElement.querySelector('#name-input');
const jobInput = formElement.querySelector('#job-input');
const popupCloseButtonElement = formElement.querySelector('.popup__btn-close');

/* PROFILE VARIABLES */
const profileElement = document.querySelector('.profile__wrapper');
const profileName = profileElement.querySelector('.profile__user-name');
const profileJob = profileElement.querySelector('.profile__user-descr');
const profileEditButtonElement = profileElement.querySelector('.profile__btn-edit');

/* OPEN POPUP AND DATA SUBSTITUTION FUNCTION */
function openPopup() {
  formElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

/* CLOSE POPUP FUNCTION */
function closePopup() {
  formElement.classList.remove('popup_opened');
}

/* FORM SUBMIT FUNCTION */
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

/* OPEN AND CLOSE POPUP EVENT LISTENER */
profileEditButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

/* FORM SUBMIT EVENT LISTENER */
formElement.addEventListener('submit', formSubmitHandler);
