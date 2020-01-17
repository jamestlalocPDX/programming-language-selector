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

    event.preventDefault();

  }));


});