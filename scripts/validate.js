// IMPORT VALIDATION CONFIG
import { validationConfig } from './constants.js';

// ERROR SHOW/HIDE FUNCTIONS
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

// CHECK INPUT VALIDITY FUNCTION
const checkInputValidity = (formSelector, inputSelector, validationConfig) => {
  !inputSelector.validity.valid
    ? showError(formSelector, inputSelector, inputSelector.validationMessage, validationConfig)
    : hideError(formSelector, inputSelector, validationConfig)
}

// INVALID INPUT CHECK FUNCTION
const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
}

// TOGGLE BUTTON ACTIVE/DISABLED FUNCTION
const toggleButtonState = (inputList, buttonElement) => {
  hasInvalidInput(inputList)
    ? buttonElement.disabled = true
    : buttonElement.disabled = false
}

// SET EVENT LISTENERS FUNCTION
const setEventListeners = (formSelector, validationConfig) => {
  const { inputSelector, submitButtonSelector, ...restConfig } = validationConfig;
  const inputList = [...formSelector.querySelectorAll(inputSelector)];
  const buttonElement = formSelector.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => {
      checkInputValidity(formSelector, inputSelector, restConfig);
      toggleButtonState(inputList, buttonElement);
    });
  });
  formSelector.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement);
    }, 0);
  });
}

// ENABLE VALIDATION FUNCTION
const enableValidation = (validationConfig) => {
  const { formSelector, ...restConfig } = validationConfig;
  const formList = [...document.querySelectorAll(formSelector)];
  formList.forEach((formSelector) => {
    setEventListeners(formSelector, restConfig);
  })
}
enableValidation(validationConfig);

// RESET VALIDATION ERRORS FUNCTION
export const resetValidationsErrors = (formSelector, validationConfig) => {
  const inputList = [...formSelector.querySelectorAll(validationConfig.inputSelector)];
  inputList.forEach((inputSelector) => {
    if (inputSelector.classList.contains(validationConfig.inputErrorClass)) {
      hideError(formSelector, inputSelector, validationConfig);
    }
  })
}

// CHECK BUTTON VALIDITY FUNCTION
export const handleButtonCheckValidity = (formSelector, validationConfig) => {
  const inputList = [...formSelector.querySelectorAll(validationConfig.inputSelector)];
  const buttonElement = formSelector.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
}
