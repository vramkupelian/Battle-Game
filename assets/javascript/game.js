var healthBar = [100, 200, 300, 400];
var attackPower = [100,150,175,200];
var counterAttack = [100,75,50,25];
var fighterName = ["Bruce Lee", "Muhammad Ali", "Fedor", "Chuck Norris"];
var myHealthRemaining;

//creating elements
for(var i =0; i < healthBar.length; i++){
    
    //For each iteration, create an imageFighter
    var imageFighter = $("<img>");
    var healthBarSpan = $ ("<span>");
    var nameSpan = $("<span>");
    
    //give each imageFighter the class "fighter", css
    imageFighter.addClass("fighter");
    healthBarSpan.addClass("health-bar-span");
    nameSpan.addClass("name-span");

    // Each imageFighter will be given a src link to the image
    imageFighter.attr("src", "./assets/images/fighter" + i + ".jpg");
 
    //Each fighter will get a data attribute "data-healthBar", set = healthBar array. etc.
    imageFighter.attr("data-healthBar", healthBar[i]);
    healthBarSpan.text(healthBar[i]);
    imageFighter.attr("data-attackPower", attackPower[i]);
    imageFighter.attr("data-counterAttack", counterAttack[i]);
    imageFighter.attr("data-fighterName", fighterName[i]);

    //add to page
    $(".container-pick").append(imageFighter);
    $(".fighter").append(healthBarSpan);
}

// when you pick your fighter and move the others

$(document).on("click", ".fighter", function() {
 
    var myPick = $(this);
    myPick.addClass("my-pick");

    $("img").each(function() {
        if ($(this).hasClass("my-pick")) {
            $(".container-pick").append($(this));
        } else {
            $(".container-rest").append($(this));
           //change class from fighter to enemy
            $(this).attr("class","enemy");
        }
    })

});

//picking an opponent to move to red corner
$(document).on("click",".enemy", function(){
    //make sure there is someone in blue corner  (helps at end of game also)
    if ($(".my-pick").parent().is(".container-pick")) {

        var myPick = $(this);
        myPick.addClass("my-opponent");

        $(".enemy").each(function() {
            if ($(this).hasClass("my-opponent")) {
                $(".container-ring").append($(this));
            } 
            else {
                $(".container-rest").append($(this)); 
            }
        })
    }
});

//this is for the fight.. needs work
// //when you click on a attack class
   var damageCounter = 0;
    var totalDamageTaken = 0;

$(".attack-button").on("click", function() {
  
    //if there are fighters in both red and blue corners
    if ($(".my-opponent").parent().is(".container-ring") 
    &&  $(".my-pick").parent().is(".container-pick")) {
        
        console.log("========begin attack==========");


        //damage and health values for both fighters
        var damageValue = ($(".my-pick").attr("data-attackPower"));
        var counterValue = ($(".my-opponent").attr("data-counterAttack"));
        myHealthRemaining = ($(".my-pick").attr("data-healthBar"));
        var oppHealthRemaining = ($(".my-opponent").attr("data-healthBar"));
                
        //parses string (html attribute) into integer
        damageCounter = parseInt(damageCounter);
        damageValue = parseInt(damageValue);
        counterValue = parseInt(counterValue);
        myHealthRemaining = parseInt(myHealthRemaining);
        oppHealthRemaining = parseInt(oppHealthRemaining);

        //your fighter gains power throughout the tournament
        damageCounter = damageCounter + damageValue;
        totalDamageTaken = totalDamageTaken + counterValue;
        myHealthRemaining = myHealthRemaining - totalDamageTaken;
        oppHealthRemaining = oppHealthRemaining - damageCounter;
    
        //if opponent health is 0, they lose
        if(oppHealthRemaining <= 0){
            console.log("attack for " + damageCounter);
            console.log("opp lost");
            
            //if opponent loses, i don't count their last hit. works
            myHealthRemaining = myHealthRemaining + counterValue;
            totalDamageTaken = totalDamageTaken - counterValue;
            
            //change class to 'defeated' to make them disappear.
            $(".my-opponent").attr("class", "defeated");
            console.log("my health after the fight is " + myHealthRemaining);
            console.log("total damage taken is " + totalDamageTaken);
            console.log("next fight================");
            
        }

        //if they don't lose , do you lose?
        else if(myHealthRemaining <= 0){
            console.log("you lose");
            $(".my-pick").attr("class","defeated");

            //reload page 
            alert("You Lose. Try Again.")
             location.reload();
           
        }

        //if no one loses, fight still going on
        else{
            console.log("attack for " + damageCounter);
            console.log("enemy counters for " + counterValue);
            console.log("my health is " + myHealthRemaining);
            console.log("opponent health is " + oppHealthRemaining);
            console.log("total damage taken " + totalDamageTaken);
            console.log("my health after the attack is " + myHealthRemaining);
        }
    }     
    
    if (!$(".my-opponent").parent().is(".container-ring") 
    &&  !$(".enemy").parent().is(".container-rest")){
        alert("You win! Glory is yours!");
        location.reload();
    }

    
})
