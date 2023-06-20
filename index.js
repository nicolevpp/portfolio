const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})

const form = document.querySelector('#form');
const formBtn = document.querySelector('#form-btn');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputMessage = document.querySelector('#input-message');
const inputPhone = document.querySelector('#input-phone');

// Regex
const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const NAME_REGEX = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
const MESSAGE_REGEX = /./;

// Validations

let nameValidation = false;
let emailValidation = false;
let messageValidation = false;

// Functions

const validateInput = (input, regexValidation) => {
    const xIcon = input.parentElement.children.length === 3
    // creo un if para cuando tiene 3 hijos, se selecciona el primero
    ? input.parentElement.children[1]
    // else, cuando no tiene 3 hijos, selecciono el segundo
    : input.parentElement.children[2];

    const checkIcon = input.parentElement.children.length === 3
    // igualmente que arriba
    ? input.parentElement.children[2]
    : input.parentElement.children[3];

    const helpText = input.parentElement.parentElement.children[1];

    // Desactivar el boton de enviar si las validaciones no son correctas
    if (nameValidation && emailValidation && messageValidation) {
        formBtn.disabled = false;
    } else {
        formBtn.disabled = true;
    }

    if (input.value === '') {
        xIcon.classList.remove('show');
        checkIcon.classList.remove('show');
        helpText.classList.remove('show');
    } else if (regexValidation) {
        // Si el input es correcto
        xIcon.classList.remove('show');
        checkIcon.classList.add('show');
        helpText.classList.remove('show');
    } else {
        // Si el input es incorrecto
        xIcon.classList.add('show');
        checkIcon.classList.remove('show');
        helpText.classList.add('show');
    }
};


inputName.addEventListener('input', e => {
    nameValidation = NAME_REGEX.test(inputName.value);
    validateInput(inputName, nameValidation);
});


inputEmail.addEventListener('input', e => {
    emailValidation = EMAIL_REGEX.test(inputEmail.value);
    validateInput(inputEmail, emailValidation);
});


inputMessage.addEventListener('input', e => {
    messageValidation = MESSAGE_REGEX.test(inputMessage.value);
    validateInput(inputMessage, messageValidation);
});
