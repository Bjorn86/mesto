//ERROR SHOW/HIDE FUNCTIONS
const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__form-input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__form-input-error_active');
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__form-input_type_error');
  errorElement.classList.remove('popup__form-input-error_active');
  errorElement.textContent = '';
};

//CHECK INPUT VALIDITY FUNCTION
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

//INVALID INPUT CHECK FUNCTION
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//TOGGLE BUTTON ACTIVE/DISABLED FUNCTION
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__form-btn-submit_disabled');
  } else {
    buttonElement.classList.remove('popup__form-btn-submit_disabled');
  }
};

//SET EVENT LISTENERS FUNCTION
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__form-input'));
  const buttonElement = formElement.querySelector('.popup__form-btn-submit');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    })
  })
};

//ENABLE VALIDATION FUNCTION
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(formElement);
  })
};
enableValidation()


