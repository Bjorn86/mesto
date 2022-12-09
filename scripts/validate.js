//ERROR SHOW/HIDE FUNCTIONS
const showError = (formSelector, inputSelector, errorMessage, config) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideError = (formSelector, inputSelector, config) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

//CHECK INPUT VALIDITY FUNCTION
const checkInputValidity = (formSelector, inputSelector, config) => {
  if (!inputSelector.validity.valid) {
    showError(formSelector, inputSelector, inputSelector.validationMessage, config);
  } else {
    hideError(formSelector, inputSelector, config);
  }
};

//INVALID INPUT CHECK FUNCTION
const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
};

//TOGGLE BUTTON ACTIVE/DISABLED FUNCTION
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

//SET EVENT LISTENERS FUNCTION
const setEventListeners = (formSelector, config) => {
  const inputList = Array.from(formSelector.querySelectorAll(config.inputSelector));
  const buttonElement = formSelector.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => {
      checkInputValidity(formSelector, inputSelector, config);
      toggleButtonState(inputList, buttonElement, config);
    })
  })
};

//ENABLE VALIDATION FUNCTION
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(formSelector, config);
  })
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-btn-submit',
  inactiveButtonClass: 'popup__form-btn-submit_inactive',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-input-error_active'
});
