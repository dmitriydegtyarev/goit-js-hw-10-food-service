import cardsMenu from '../menu.json'
import templates from '../templates/cardsDishes.hbs';
import { refs } from '../js/refs';

// const createMarkup = () => templates(cardsMenu);

// const { menuItem } = refs;

function createMarkup() {
  return templates(cardsMenu);
}

// const renderMarkup = () => refs.menuItem.inserrtAdjacentHTML('beforeend', createMarkup());

function renderMarkup() {
  const markup = createMarkup();
  refs.menuItem.insertAdjacentHTML('beforeend', markup);
}

renderMarkup();