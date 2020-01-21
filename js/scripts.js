$(document).ready(function () {
	$("form#questionaire").submit(function(event) {
  	var music = $("input:radio[name=music]:checked").val();
  	var movies = $("input:radio[name=movies]:checked").val();
  	var weather = $("input:radio[name=weather]:checked").val();
  	var dogs = $("input:radio[name=dogs]:checked").val();
  	var activities =$("input:radio[name=activities]:checked").val();

  	if (movies || dogs === adventure && huskies) {
    	$("p.javascript").show();
  	} else if ( music || weather || activities === metal && sunny && atabar) {
			$("p.ruby").show();
		} else {
			$("p.python").show();
		}

		event.preventDefault();

   });
});