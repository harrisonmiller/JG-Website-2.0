$(document).ready(function() {

    $(window).resize(function() {
      width = $(window).width();
      if(!(width<992)){
        window.location.replace("/HTML/forwardMotion.html");
      }
    });

});
