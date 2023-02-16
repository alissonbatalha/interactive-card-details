//form settings
const completeSession = document.querySelector('.complete-session');
const formSession = document.querySelector('form');

const confirm = document.querySelector('button.confirm');

const cardNumberInput = document.querySelector('#card-number');
const cardFrontNumber = document.querySelector('span.card-front__number'); 
const fraseErro = document.querySelector('.erro');

const cardNameInput = document.querySelector('#name');
const cardFrontName = document.querySelector('span.card-front__name'); 

const cardMonthInput = document.querySelector('#card-month');
const cardYearInput = document.querySelector('#card-year');
const cardFrontExpire = document.querySelector('span.card-front__expire'); 

const cardCvcInput = document.querySelector('#card-cvc');
const cardBackCvc = document.querySelector('span.card-back__code'); 


formSession.addEventListener('submit', (event) => {
  event.preventDefault();
  
  completeSession.classList.remove('hidden');
  formSession.classList.add('hidden');
});

function showCardNumbers () {
  let part1 = cardNumberInput.value.substring(0,4);
  let part2 = cardNumberInput.value.substring(4,8);
  let part3 = cardNumberInput.value.substring(8, 12);
  let part4 = cardNumberInput.value.substring(12, 16);

  cardFrontNumber.innerHTML = `${part1} ${part2} ${part3} ${part4}`;
}
  
function showCardName () {
  cardFrontName.innerHTML = `${cardNameInput.value}`;
}
  
function showCardExpire () {
  cardFrontExpire.innerHTML = `${cardMonthInput.value.padStart(2,0)} / ${cardYearInput.value}`;
}

function showCardCvc () {
  cardBackCvc.innerHTML = `${cardCvcInput.value}`;
}
  


