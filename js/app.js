$(document).ready(function() {
	console.log("ready freddy!");

//	listen for click on submit button:
	$('#user-input-form').on('click', 'button#submit', function() {
		event.preventDefault();
		console.log('click event listener working');

	//	take input value and convert to integer:
		var number = +$('#user-input').val();
		console.log(number);

	runFizzBuzz(number);


// 	function to run fizzbuzz
	function runFizzBuzz(someNumber) {
		for (var i = 1; i <= number; i++) {

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

})

});