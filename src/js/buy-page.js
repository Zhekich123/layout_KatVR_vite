'use strict';

const choosedQuanity = document.querySelector('.btn-list-quanity');
const quanities = document.querySelectorAll('.dropdown-item--quanity');
const arrow = document.querySelector('.arrow-list--quanity');
const arrowImg = arrow.outerHTML; 
const dataPrice = document.querySelector('.price-data');

function addQuanity(event) {
  const dataValue = event.target.dataset.value;
  choosedQuanity.innerHTML = dataValue + arrowImg;
  const currentPrice = parseFloat(dataPrice.innerHTML);

  let newPrice;

  if (dataValue === '2') {
    newPrice = '2400';
    dataPrice.innerHTML = newPrice;
  } else if (dataValue === '3') {
    newPrice = '3600';
    dataPrice.innerHTML = newPrice;
  } else {
    dataPrice.innerHTML = '1200';
  }
}

quanities.forEach(function(quanity) {
  quanity.addEventListener('click', addQuanity);
});



// country List
const counryChoose = document.querySelector('.county-choose');
const country = document.querySelectorAll('.dropdown-item--country');

function addCountry(event) {
  const dataValue = event.target.dataset.value;
  counryChoose.innerHTML = dataValue + arrowImg;
};

country.forEach(function(countries) {
  countries.addEventListener('click', addCountry);
});


// city List
const cityChoose = document.querySelector('.city-choose');
const city = document.querySelectorAll('.dropdown-item--city');

function addCity(event) {
  const dataValue = event.target.dataset.value;
  cityChoose.innerHTML = dataValue + arrowImg;
};

city.forEach(function(cities) {
  cities.addEventListener('click', addCity);
});






