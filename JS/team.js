function partyFunction(){
   var partyDivs = document.getElementsByClassName("party");
   var noPartyDivs = document.getElementsByClassName("noParty");
   var party = document.getElementById("partyCheckBox").checked;
   for(var i = 0; i < partyDivs.length; i++){
     if(party){
       partyDivs[i].style.display = "inline-block";
       noPartyDivs[i].style.display = "none";
     } else{
       partyDivs[i].style.display = "none";
       noPartyDivs[i].style.display = "inline-block";
     }
   }
}
