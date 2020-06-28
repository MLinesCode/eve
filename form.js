const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Introduzca su nombre');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Introduzca su email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email no válido');
	} else {
		setSuccessFor(email);
	}

function setErrorFor(input, message) {
	const inputBlock = input.parentElement;
	const small = inputBlock.querySelector('small');
	inputBlock.className = 'input-block error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const inputBlock = input.parentElement;
	inputBlock.className = 'input-block success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}}