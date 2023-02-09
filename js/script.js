const completeSession = document.querySelector('.complete-session');
const formSession = document.querySelector('form');

const confirm = document.querySelector('button.confirm');

confirm.addEventListener('click', (event) => {
  event.preventDefault();

  completeSession.classList.remove('hidden');
  formSession.classList.add('hidden');
});

