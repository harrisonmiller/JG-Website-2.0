$(document).ready(function() {

  var width = $(window).width();
  if(!(width>=992)){
    window.location.replace("https://harrisonmiller.github.io/JG-Website-2.0/mobile/HTML/team.html");
  }

  $(window).resize(function() {
    width = $(window).width();
    if(!(width>=992)){
      window.location.replace("https://harrisonmiller.github.io/JG-Website-2.0/mobile/HTML/team.html");
    }
  });

  $('.execCard').height($('.execCard').find('img').height());
  $('.teamCard').height($('.teamCard').find('img').height());
  $(window).resize(function() {
    $('.execCard').height($('.execCard').find('img').height());
    $('.teamCard').height($('.teamCard').find('img').height());
  });

});

function partyFunction(){
   var partyDivs = document.getElementsByClassName("party");
   for(var i = 0; i < partyDivs.length; i++){
       var front = $('#imgFront'+i).attr('src');
       $('#imgFront'+i).attr('src', $('#imgBack'+i).attr('src'));
       $('#imgBack'+i).attr('src', front);

       var captionFront = $('#front'+i).text();
       $('#front'+i).text($('#back'+i).text());
       $('#back'+i).text(captionFront);
   }
}
