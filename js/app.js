var getNum = function() {
	return Math.floor((Math.random() * 100) + 1);
};

var newGame = function(){
	var num = getNum();
	alert(num);
	var guessCount = 0;
	$("#guessButton").on("click", function(e){
		e.preventDefault();
		var x = $("#userGuess").val();
		$("#userGuess").val('');
		if (x >= num + 10 || x <= num - 10 ) {
			alert("Cold!");
		} else {
			alert("Hot!");
		}
		guessCount++;
		$("#count").val(guessCount);
	});
	console.log(num);
};

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	newGame();

});

	// $("#userGuess").on("keypress", "input", function() {
	// 	var guess = $(this).val('');
	// 	alert(guess);
	// });