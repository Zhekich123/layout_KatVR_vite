'use strict';

const arrows = document.querySelectorAll('.arrow-item');
const questionDescriptions = document.querySelectorAll('.question-description');
const questionUpdates = document.querySelectorAll('.question-update');

function openQuestion(event) {
  const index = Array.from(arrows).indexOf(event.currentTarget);

  arrows[index].classList.toggle('active');
  questionDescriptions[index].classList.toggle('active');
  questionUpdates[index].classList.toggle('active');
}

arrows.forEach(function(arrow) {
  arrow.addEventListener('click', openQuestion);
});
