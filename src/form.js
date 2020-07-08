const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	maxTransition: 60
});

$(document).ready(function(){

	//material contact form
	$('.contact-form').find('.form-control').each(function() {
	  var targetItem = $(this).parent();
	  if ($(this).val()) {
		$(targetItem).find('label').css({
		  'top': '10px',
		  'fontSize': '14px'
		});
	  }
	})
	$('.contact-form').find('.form-control').focus(function() {
	  $(this).parent('.input-block').addClass('focus');
	  $(this).parent().find('label').animate({
		'top': '10px',
		'fontSize': '14px'
	  }, 300);
	})
	$('.contact-form').find('.form-control').blur(function() {
	  if ($(this).val().length == 0) {
		$(this).parent('.input-block').removeClass('focus');
		$(this).parent().find('label').animate({
		  'top': '25px',
		  'fontSize': '18px'
		}, 300);
	  }
	})
	
});

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
		setErrorFor(username, 'Inserte su nombre');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Inserte su email');
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