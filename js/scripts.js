$(document).ready(function () {

  $('input[name="music"]').on('change', (function(e){
    var music = $("input:radio[name=music]:checked").val();

    if (music === "rockandroll") {
       $(".movies").toggle();
    } else if (music === "jazz") {
       $(".movies").toggle();
    } else if (music === "rapandhiphop") {
       $(".movies").toggle();
    } else if (music === "metal") {
       $(".movies").toggle();
    } else {
       $(".movies").toggle();
    }

    $(".music").toggle();

    event.preventDefault();
  }));

  $('input[name="movies"]').on('change', (function(e){
    var movies = $("input:radio[name=movies]:checked").val();

    if (movies === "adventure") {
       $(".weather").toggle();
    } else if (movies === "horror") {
       $(".weather").toggle();
    } else if (movies === "comedies") {
       $(".weather").toggle();
    } else if (movies === "documentaries") {
       $(".weather").toggle();
    } else {
       $(".weather").toggle();
    }

    $(".movies").toggle();

    event.preventDefault();
  }));

  $('input[name="weather"]').on('change', (function(e){
    var weather = $("input:radio[name=weather]:checked").val();

    if (weather === "sunny") {
       $(".dogs").toggle();
    } else if (weather === "rainy") {
       $(".dogs").toggle();
    } else if (weather === "stormy") {
       $(".dogs").toggle();
    } else if (weather === "snowy") {
       $(".dogs").toggle();
    } else {
       $(".dogs").toggle();
    }

    $(".weather").toggle();

    event.preventDefault();
  }));

  $('input[name="dogs"]').on('change', (function(e){
    var dogs = $("input:radio[name=dogs]:checked").val();

    if (dogs === "goldenretrievers") {
       $(".activities").toggle();
    } else if (dogs === "corgis") {
       $(".activities").toggle();
    } else if (dogs === "pitbulls") {
       $(".activities").toggle();
    } else if (dogs === "huskies") {
       $(".activities").toggle();
    } else {
       $(".activities").toggle();
    }

    $(".dogs").toggle();

    event.preventDefault();
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

    event.preventDefault();
  }));

  //$(".btn").click(function() {
    //var result = ("javascript");
    
    //$("#output").text(result)
  //}));


});