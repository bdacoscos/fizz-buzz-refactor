'use strict'

$(document).ready(function() {
	console.log("ready freddy!");

//	listen for click on submit button:
	$('#user-input-form').on('click', 'button#submit', function() {
		event.preventDefault();
		console.log('click event listener working');
	});


	var userInput = $('#user-input').val();
	console.log(userInput);


//	listen for click on reset button:
	$('#user-input-form').on('click', 'button#reset', function() {
		console.log('reset button was clicked');
	});


//	convert user input value from string to number
	function changeStringToInt(parameter1) {
		var userInt = '+' + userInt;
	};

	changeStringToInt(userInput);
	console.log(userInput);


//	validate user input with: parseInt()
//	function checkUserInput()
//		var userNumber = parseInt()



// 	function to run fizzbuzz
//	function runFizzBuzz(userNumber) {
//		for (var i = 1; i <= 100; i++) {


	//	fizzbuzz:
			// if number divided by both 3 and 5
			if ((i % 3 === 0) && (i % 5 === 0)) {
				$('.container').append('fizz buzz');
				$('.container').append('</br>');
			}

			// if number divided by 3
			else if (i % 3 === 0) {
				$('.container').append('fizz');
				$('.container').append('</br>');
			}

			// if number divided by 5
			else if (i % 5 === 0) {
				$('.container').append('buzz');
				$('.container').append('</br>');
			}

			// otherwise...
			else {
				$('.container').append(i);
				$('.container').append('</br>');
			}
//		}
//	};


});