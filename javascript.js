(function() {
    var hearts = document.querySelectorAll(".heart_turn"); 
    //variabele hearts zoekt naar de css selectors .heart_turn
        for ( var i  = 0 ; i < hearts.length; i++ ) {
        //for loop. set variable i voordat de loop start. ?????? i++ telt er telkens 1 bij op en pakt dus steeds de volgende css selector.
        var card = hearts[i]; 
        //de variabele card bevat hearts met de array van hierboven.
        het_klikken ( card ); 
        //voer functie het_klikken (card) uit die hieronder gemaakt wordt.
        }     

        function het_klikken(card) { 
        //maar functie het_klikken (card)
          card.addEventListener( "click", function() { 
          //maakt de functie card clickable.
              var A = this.classList; 
              //zorgt ervoor dat je een method (contains) kan toevoegen aan A.
              A.contains("turn") === true ? A.remove("turn") : A.add("turn");
              //if A contains turn, then remove A. Else Add a.
          });
        }
})();



//=== = gelijk aan.
//? = if 
//: = else