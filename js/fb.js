$(document).ready(function(){



	$(document).on('click', 'button', function(){
		var first = parseInt($('#firstNumber').val());
		var second = parseInt($('#secondNumber').val());
		var limit = parseInt($('#limit').val());
		$('.fizzbuzz').text(function(){
			for(i= 1; i <= limit; i++){
				if (i % first === 0 && i % second === 0){
					$(this).append('<li>FizzBuzz</li>');
				} else if (i % first === 0){
					$(this).append('<li>Fizz</li>');
				} else if (i % second === 0){
					$(this).append('<li>Buzz</li>');
				} else {
					$(this).append('<li>' + i + '</li>' );
				}
			}
		});
		return false;
	});
});
