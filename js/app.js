$(document).ready(function() {
	console.log("ready freddy!");

//	function to listen for user input
	function () {};


//	function to parse input string into integer: parseInt()
	function () {};
	

// 	function to run fizzbuzz
	function runFizzBuzz() {
		for (var i = 1; i <= 100; i++) {

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
		}
	};


});