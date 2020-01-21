$(document).ready(function () {
	$("form#questionaire").submit(function(event) {
  	var music = parseInt($("input:radio[name=music]:checked").val());
  	var movies = parseInt($("input:radio[name=movies]:checked").val());
  	var weather = parseInt($("input:radio[name=weather]:checked").val());
  	var dogs = parseInt($("input:radio[name=dogs]:checked").val());
		var activities = parseInt($("input:radio[name=activities]:checked").val());
		var result = (music + movies + weather + dogs + activities)

		if (result) {
			if (result <= 63) {
				$("p#javascript").show();
			} else if (result > 63 && result < 68) {
				$("p#ruby").show();
			} else {
				$("p#python").show();
			}
		} else {
			alert("Oops! You missed one.");
		}

		event.preventDefault();
   });
});