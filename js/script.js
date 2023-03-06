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

function showCardFlag () {
	let cardFlag = document.querySelector(".card-front__flag");
	
	let part1 = cardNumberInput.value.substring(0,4);
	
	//visa
	if (part1[0] === '4') {
		cardFlag.style.display = "block";
		cardFlag.src = "./images/Visa-logo.png";
	} 
	
	
	//mastercard
	else if (part1[0] === '5' && part1[1] === '1' || part1[0] === '5' && part1[1] === '2' || part1[0] === '5' && part1[1] === '3' || part1[0] === '5' && part1[1] === '4' || part1[0] === '5' && part1[1] === '5') {
		
		cardFlag.style.display = "block";
		cardFlag.style.width = "30%";
		cardFlag.style.top = "5%";
		cardFlag.style.right = "1%";
		cardFlag.src = "./images/mastercard-logo.png";
	} 
	
	//dinersclub
	else if (part1[0] === '3' && part1[1] === '6' || part1[0] === '3' && part1[1] === '8') {
		
		cardFlag.style.display = "block";
		cardFlag.style.top = "3%";
		cardFlag.src = "./images/diners-club-logo.png";
	} 
	
	//discover
	else if (part1[0] === '6' && part1[1] === '0' && part1[2] === '1' && part1[3] === '1' || part1[0] === '6' && part1[1] === '5') {

		cardFlag.style.display = "block";
		cardFlag.src = "./images/discover-logo.png";
	} 
	
	//JCB
	else if (part1[0] === '3' && part1[1] === '5') {

		cardFlag.style.display = "block";
		cardFlag.style.width = "19%";
		cardFlag.src = "./images/jcb-logo.png";
	} 
	
	//American Express
	else if (part1[0] === '3' && part1[1] === '4' 
	|| part1[0] === '3' && part1[1] === '7') {

		cardFlag.style.display = "block";
		cardFlag.style.width = "28%";
		cardFlag.style.top = "3%";
		cardFlag.style.right = "3%";
		cardFlag.src = "./images/american-express-logo.png";
	} 
	
}

function hideFlag () {
	let cardFlag = document.querySelector(".card-front__flag");
	
	cardFlag.style.display = "none";
}
  


