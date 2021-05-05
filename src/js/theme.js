import { refs } from '../js/refs';
import { localStorageThemeKey, Theme } from '../js/const';

refs.themeSwitchButton.addEventListener('change', event => switchTheme(event));

function switchTheme({ target }) {
  
  target.checked
    ? refs.body.classList.replace(Theme.LIGHT, Theme.DARK)
    : refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  
  const theme = target.checked ? Theme.DARK : Theme.LIGHT;

  localStorage.setItem(localStorageThemeKey, theme);
}

function getCurrentTheme() {
  const selectedTheme = localStorage.getItem(localStorageThemeKey);

  if (selectedTheme) {
    refs.themeSwitchButton.checked = selectedTheme === Theme.DARK;
  }  

  return selectedTheme ? selectedTheme : Theme.LIGHT;
}

function initTheme() {
  const theme = getCurrentTheme();
  refs.body.classList.add(theme);
}

initTheme();