'use strict';

const choosedLanguage = document.querySelector('.choosed-language');
const languages = document.querySelectorAll('.dropdown-item--language');

function turnLanguage(event) {
  const dataValue = event.target.dataset.value;
  choosedLanguage.innerHTML = dataValue;
}

languages.forEach(function(language) {
  language.addEventListener('click', turnLanguage);
});
