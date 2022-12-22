// VALIDATION CLASS
export class FormValidator {
  constructor(validationConfig, form) {
    this._form = form;
    this._inputSelector = validationConfig.inputSelector;
    this._inputList = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButtonElement = this._form.querySelector(validationConfig.submitButtonSelector);
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
  }
  // VALIDATION EVENT LISTENERS
  _setEventListeners(form) {
    this._toggleButtonState(this._inputList);
    this._inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', () => {
        this._checkInputValidity(form, inputSelector);
        this._toggleButtonState(this._inputList);
      });
    });
    form.addEventListener('reset', () => {this._submitButtonElement.disabled = true});
  }
  // TOGGLE BUTTON ACTIVE/DISABLED FUNCTION
  _toggleButtonState(inputList) {
    this._hasInvalidInput(inputList)
      ? this._submitButtonElement.disabled = true
      : this._submitButtonElement.disabled = false
  }
  // CHECK INPUT VALIDITY FUNCTION
  _checkInputValidity(form, inputSelector) {
    !inputSelector.validity.valid
      ? this._showError(form, inputSelector, inputSelector.validationMessage)
      : this._hideError(form, inputSelector)
  }
  // INVALID INPUT CHECK FUNCTION
  _hasInvalidInput(inputList) {
    return inputList.some((inputSelector) => {
      return !inputSelector.validity.valid;
    });
  }
  // ERRORS SHOW/HIDE FUNCTIONS
  _hideError(form, inputSelector) {
    const errorElement = form.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }
  _showError(form, inputSelector, errorMessage) {
    const errorElement = form.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }
  // RESET VALIDATION ERRORS FUNCTION
  resetValidationsErrors = () => {
    this._inputList.forEach((inputSelector) => {
      if (inputSelector.classList.contains(this._inputErrorClass)) {
        this._hideError(this._form, inputSelector);
      }
    })
  }
  // CHECK BUTTON VALIDITY FUNCTION
  handleButtonCheckValidity = () => {
    this._toggleButtonState(this._inputList);
  }
  // ENABLE VALIDATION FUNCTION
  enableValidation(form) {
    this._setEventListeners(form);
  }
}
