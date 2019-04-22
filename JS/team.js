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

});

function partyFunction(){
   var partyDivs = document.getElementsByClassName("party");
   var noPartyDivs = document.getElementsByClassName("noParty");
   var party = document.getElementById("partyCheckBox").checked;
   for(var i = 0; i < partyDivs.length; i++){
     if(party){
       partyDivs[i].classList.add("flip-card-front");
       partyDivs[i].classList.remove("flip-card-back");
       noPartyDivs[i].classList.add("flip-card-back");
       noPartyDivs[i].classList.remove("flip-card-front");
     } else{
       partyDivs[i].classList.add("flip-card-back");
       partyDivs[i].classList.remove("flip-card-front");
       noPartyDivs[i].classList.add("flip-card-front");
       noPartyDivs[i].classList.remove("flip-card-back");
     }
   }
}
