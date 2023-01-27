// VALIDATION CLASS
export class FormValidator {
  constructor(validationConfig, formElement) {
    this._formElement = formElement;
    this._inputSelector = validationConfig.inputSelector;
    this._inputList = [...this._formElement.querySelectorAll(this._inputSelector)];
    this._submitButtonElement = this._formElement.querySelector(validationConfig.submitButtonSelector);
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
  }
  // VALIDATION EVENT LISTENERS
  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
    this._formElement.addEventListener('reset', () => {this._submitButtonElement.disabled = true});
  }
  // TOGGLE BUTTON ACTIVE/DISABLED FUNCTION
  _toggleButtonState() {
    this._hasInvalidInput(this._inputList)
      ? this._submitButtonElement.disabled = true
      : this._submitButtonElement.disabled = false
  }
  // CHECK INPUT VALIDITY FUNCTION
  _checkInputValidity(input) {
    !input.validity.valid
      ? this._showError(input)
      : this._hideError(input)
  }
  // INVALID INPUT CHECK FUNCTION
  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }
  // ERRORS SHOW/HIDE FUNCTIONS
  _hideError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }
  _showError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._errorClass);
  }
  // RESET VALIDATION ERRORS FUNCTION
  resetValidationsErrors = () => {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      if (input.classList.contains(this._inputErrorClass)) {
        this._hideError(input);
      }
    })
  }
  // ENABLE VALIDATION FUNCTION
  enableValidation() {
    this._setEventListeners();
  }
}
