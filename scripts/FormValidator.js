// VALIDATION CLASS
export class FormValidator {
  constructor(validationConfig, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
  }
  // VALIDATION EVENT LISTENERS
  _setEventListeners(formSelector) {
    const inputSelector = this._inputSelector;
    const inputList = [...formSelector.querySelectorAll(inputSelector)];
    const buttonElement = formSelector.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', () => {
        this._checkInputValidity(formSelector, inputSelector);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
    formSelector.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(inputList, buttonElement);
      }, 0);
    });
  }
  // TOGGLE BUTTON ACTIVE/DISABLED FUNCTION
  _toggleButtonState(inputList, buttonElement) {
    this._hasInvalidInput(inputList)
      ? buttonElement.disabled = true
      : buttonElement.disabled = false
  }
  // CHECK INPUT VALIDITY FUNCTION
  _checkInputValidity(formSelector, inputSelector) {
    !inputSelector.validity.valid
      ? this._showError(formSelector, inputSelector, inputSelector.validationMessage)
      : this._hideError(formSelector, inputSelector)
  }
  // INVALID INPUT CHECK FUNCTION
  _hasInvalidInput(inputList) {
    return inputList.some((inputSelector) => {
      return !inputSelector.validity.valid;
    });
  }
  // ERRORS SHOW/HIDE FUNCTIONS
  _hideError(formSelector, inputSelector) {
    const inputErrorClass = this._inputErrorClass;
    const errorClass = this._errorClass;
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  }
  _showError(formSelector, inputSelector, errorMessage) {
    const inputErrorClass = this._inputErrorClass;
    const errorClass = this._errorClass;
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }
  // RESET VALIDATION ERRORS FUNCTION
  resetValidationsErrors = (formSelector) => {
    const inputSelector = this._inputSelector;
    const inputList = [...formSelector.querySelectorAll(inputSelector)];
    const inputErrorClass = this._inputErrorClass;
    inputList.forEach((inputSelector) => {
      if (inputSelector.classList.contains(inputErrorClass)) {
        this._hideError(formSelector, inputSelector);
      }
    })
  }
  // CHECK BUTTON VALIDITY FUNCTION
  handleButtonCheckValidity = (formSelector) => {
    const inputSelector = this._inputSelector;
    const inputList = [...formSelector.querySelectorAll(inputSelector)];
    const buttonElement = formSelector.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
  }
  // ENABLE VALIDATION FUNCTION
  enableValidation(formSelector) {
    this._setEventListeners(formSelector);
  }
}
