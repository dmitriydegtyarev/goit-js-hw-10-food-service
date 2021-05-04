import cardsMenu from '../menu.json'
import templates from '../templates/cardsDishes.hbs';
import { refs } from '../js/refs';

const createMarkup = () =>
  templates(cardsMenu);

const renderMarkup = () =>
  refs.menuItem.insertAdjacentHTML('beforeend', createMarkup());

renderMarkup();