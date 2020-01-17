var JavaScript = 





$(document).ready(function () {

  $('input[name="music"]').on('change', (function(e){
    var music = $("input:radio[name=music]:checked").val();

    if (music === "rockandroll") {
      return $(".movies").toggle();
    } else if (music === "jazz") {
      return $(".movies").toggle();
    } else if (music === "rapandhiphop") {
      return $(".movies").toggle();
    } else if (music === "Metal") {
      return $(".movies").toggle();
    } else {
      return $(".movies").toggle();
    }

  }));

  $('input[name="movies"]').on('change', (function(e){
    var movies = $("input:radio[name=movies]:checked").val();

    if (movies === "adventure") {
      return $(".weather").toggle();
    } else if (movies === "horror") {
      return $(".weather").toggle();
    } else if (movies === "comedies") {
      return $(".weather").toggle();
    } else if (movies === "documentaries") {
      return $(".weather").toggle();
    } else {
      return $(".weather").toggle();
    }

   
  }));

  $('input[name="weather"]').on('change', (function(e){
    var weather = $("input:radio[name=weather]:checked").val();

    if (weather === "sunny") {
      return $(".dogs").toggle();
    } else if (weather === "rainy") {
      return $(".dogs").toggle();
    } else if (weather === "stormy") {
      return $(".dogs").toggle();
    } else if (weather === "snowy") {
      return $(".dogs").toggle();
    } else {
      return $(".dogs").toggle();
    }

    event.preventDefault();
  }));

  $('input[name="dogs"]').on('change', (function(e){
    var dogs = $("input:radio[name=dogs]:checked").val();

    if (dogs === "goldenretrievers") {
      return $(".activities").toggle();
    } else if (dogs === "corgis") {
      return $(".activities").toggle();
    } else if (dogs === "pitbulls") {
      return $(".activities").toggle();
    } else if (dogs === "huskies") {
      return $(".activities").toggle();
    } else {
      return $(".activities").toggle();
    }

    
  }));

  $('input[name="activities"]').on('change', (function(e){
    var activities = $("input:radio[name=activities]:checked").val();

    if (activities === "inbed") {
      $(".btn").toggle();
    } else if (activities === "onahike") {
      $(".btn").toggle();
    } else if (activities === "bar") {
      $(".btn").toggle();
    } else if (activities === "hometown") {
      $(".btn").toggle();
    } else {
      $(".btn").toggle();
    }

    
  }));

  //$(".btn").onClick(function() {
   // var JavaScript = 
    //var result = JavaScript
    //$("#output").text(result)
 // }))


});