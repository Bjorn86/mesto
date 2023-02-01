// IMPORT IMAGES
import baikalImage from '../images/baikal.jpg';
import kareliyaImage from '../images/kareliya.jpg';
import kazanImage from '../images/kazan.jpg';
import krasnayaPolyanaImage from '../images/krasnaya-polyana.jpg';
import krasnoyarskStolbiImage from '../images/krasnoyarsk-stolbi.jpg';
import sheregeshImage from '../images/sheregesh.jpg';

//INITIAL CARDS ARRAY
export const initialCards = [
  {
    name: 'Озеро Байкал',
    link: baikalImage
  },
  {
    name: 'Карелия',
    link: kareliyaImage
  },
  {
    name: 'Казань',
    link: kazanImage
  },
  {
    name: 'Красная поляна',
    link: krasnayaPolyanaImage
  },
  {
    name: 'Красноярские столбы',
    link: krasnoyarskStolbiImage
  },
  {
    name: 'Шерегеш',
    link: sheregeshImage
  }
];

//VALIDATION CONFIG OBJECT
export const validationConfig = {
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__btn-form-submit',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-input-error_active'
};
