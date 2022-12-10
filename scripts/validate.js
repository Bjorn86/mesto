//ERROR SHOW/HIDE FUNCTIONS
const showError = (formSelector, inputSelector, errorMessage, validationConfig) => {
  const { inputErrorClass, errorClass } = validationConfig;
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

const hideError = (formSelector, inputSelector, validationConfig) => {
  const { inputErrorClass, errorClass } = validationConfig;
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

//CHECK INPUT VALIDITY FUNCTION
const checkInputValidity = (formSelector, inputSelector, validationConfig) => {
  if (!inputSelector.validity.valid) {
    showError(formSelector, inputSelector, inputSelector.validationMessage, validationConfig);
  } else {
    hideError(formSelector, inputSelector, validationConfig);
  }
}

//INVALID INPUT CHECK FUNCTION
const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
}

//TOGGLE BUTTON ACTIVE/DISABLED FUNCTION
const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  const { inactiveButtonClass } = validationConfig;
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

//SET EVENT LISTENERS FUNCTION
const setEventListeners = (formSelector, validationConfig) => {
  const { inputSelector, submitButtonSelector, ...restConfig } = validationConfig;
  const inputList = [...formSelector.querySelectorAll(inputSelector)];
  const buttonElement = formSelector.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, restConfig);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => {
      checkInputValidity(formSelector, inputSelector, restConfig);
      toggleButtonState(inputList, buttonElement, restConfig);
    })
  })
}

//ENABLE VALIDATION FUNCTION
export const enableValidation = (validationConfig) => {
  const { formSelector, ...restConfig } = validationConfig;
  const formList = [...document.querySelectorAll(formSelector)];
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(formSelector, restConfig);
  })
}

//RESET VALIDATION ERRORS FUNCTION
export const resetValidationsErrors = (formSelector, validationConfig) => {
  const inputList = Array.from(formSelector.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((inputSelector) => {
    if (inputSelector.classList.contains(validationConfig.inputErrorClass)) {
      hideError(formSelector, inputSelector, validationConfig);
    }
  })
}
