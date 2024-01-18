'use strict';

const slideCount = document.querySelector('.slider__count--start');
const next = document.querySelector('.carousel-control-next');
const previous = document.querySelector('.carousel-control-prev');

function turnOffSet() {
  const dataImage = document.querySelector('.carousel-item.active');
  const dataValue = dataImage.dataset.value;
  slideCount.innerHTML = dataValue;
};

next.addEventListener('click', turnOffSet);
previous.addEventListener('click', turnOffSet);