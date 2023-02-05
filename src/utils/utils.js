// IMPORT ELEMENTS
import {
  nameInputElement,
  aboutInputElement
} from './elements.js';

// HANDLE EDIT PROFILE DATA SUBSTITUTION
export const handleEditProfileDataSubstitution = (userData) => {
  nameInputElement.value = userData.name;
  aboutInputElement.value = userData.about;
}
