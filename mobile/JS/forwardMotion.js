$(document).ready(function() {

    var width = $(window).width();
    if(!(width<992)){
      window.location.replace("https://harrisonmiller.github.io/JG-Website-2.0/HTML/forwardMotion.html");
    }

    $(window).resize(function() {
      width = $(window).width();
      if(!(width<992)){
        window.location.replace("https://harrisonmiller.github.io/JG-Website-2.0/HTML/forwardMotion.html");
      }
    });

});
