$(document).ready(function() {

    var width = $(window).width();
    if(!(width<992)){
      window.location.replace("/HTML/forwardMotion.html");
    }

    $(window).resize(function() {
      width = $(window).width();
      if(!(width<992)){
        window.location.replace("/HTML/forwardMotion.html");
      }
    });

});
