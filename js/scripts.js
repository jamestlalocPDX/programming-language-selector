$(document).ready(function () {
	$("form#questionaire").submit(function() {
  	var music = $("input:radio[name=music]:checked").val();
  	var movies = $("input:radio[name=movies]:checked").val();
  	var weather = $("input:radio[name=weather]:checked").val();
  	var dogs = $("input:radio[name=dogs]:checked").val();
  	var activities =$("input:radio[name=activities]:checked").val();

  	if (music || weather || activities = rockandroll || sunny && bar) {
    	.show("p#javascript");
  	} else if ( movies || dogs = adventure && huskies) {
			.show("p#ruby");
		} else {
			.show("python");
		}

   });

  

});