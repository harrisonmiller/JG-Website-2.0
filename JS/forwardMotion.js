$(document).ready(function() {

    $(window).resize(function() {
      width = $(window).width();
      if(!(width>=992)){
        window.location.replace("/mobile/HTML/forwardMotion.html");
      }
    });

});
