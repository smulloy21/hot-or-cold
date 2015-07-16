var getNum = function() {
	return Math.floor((Math.random() * 100) + 1);
};

var addGuess = function(g){
	$("#count").text(g);
};

var newGame = function(){
	var guessCount = 0;
	var y = '';
	var num = getNum();
	$("#guessButton").on("click", function(e){
		e.preventDefault();
		var x = $("#userGuess").val();

		if (x % 1 === 0 && x !== '' && x <= 100) {
			if (x == num) {
				guessCount++;
				addGuess(guessCount);
				$("#feedback").text("Awesome! That's the number!");
				$("#userGuess").val('');
				y = x;
			} else if (x <= num + 2 && x >= num - 2 ) {
				$("#feedback").text("Burning Hot!");
				$("#userGuess").val('');
				y = x;
			} else if (y == '' || Math.abs(num-x) == Math.abs(num-y)) {
				guessCount++;
				addGuess(guessCount);
				if (x >= num + 10 || x <= num - 10 ) {
					$("#feedback").text("Cold!");
				} else {
					$("#feedback").text("Hot!");
				}
				$("#userGuess").val('');
				y = x;
			} else if (Math.abs(num-x) < Math.abs(num-y)) {
				guessCount++;
				addGuess(guessCount);
				$("#feedback").text("Warmer!");
				$("#userGuess").val('');
				y = x;
			} else if (Math.abs(num-y) < Math.abs(num-x)) {
				guessCount++;
				addGuess(guessCount);
				$("#feedback").text("Colder!");
				$("#userGuess").val('');
				y = x;
			}
		} else {
			$("#userGuess").val('');
		}
			
	});
};

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(400);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(400);
	});

	newGame();

	$("nav .new").on("click", function(){
		location.reload();
	});

});
