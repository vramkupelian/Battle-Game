var healthBar = [50, 100, 150, 200];
var attackPower = [10,15,18,20];
var counterAttack = [10,8,5,3];
var fighterName = ["Bruce Lee", "Muhammad Ali", "Fedor", "Chuck Norris"];

//creating elements
for(var i =0; i < healthBar.length; i++){
    
    //For each iteration, create an imageFighter
    var aFighter = {
        name: fighterName[i],
        health: healthBar[i],
        attack: attackPower[i],
        counter: counterAttack[i],
    }

    var imageFighter = $("<img>");
    var healthBarSpan = $ ("<span>");
    var nameSpan = $("<span>"+aFighter.name+"</span>");
    
    //give each imageFighter the class "fighter", css
    imageFighter.addClass("fighter");
    // healthBarSpan.addClass("health-bar-span");
    nameSpan.addClass("name-span");

    // Each imageFighter will be given a src link to the image
    imageFighter.attr("src", "./assets/images/fighter" + i + ".jpg");
 
    //Each fighter will get a data attribute "data-healthBar", set = healthBar array. etc.
    imageFighter.attr("data-healthBar", healthBar[i]);
    // healthBarSpan.html(healthBar[i]);
    // nameSpan.html(nameSpan[i]);
    imageFighter.attr("data-attackPower", attackPower[i]);
    imageFighter.attr("data-counterAttack", counterAttack[i]);
    imageFighter.attr("data-fighterName", fighterName[i]);

    //add to page
    $(".container-pick").append(imageFighter);
    // $(imageFighter).append(healthBarSpan);
    // $(nameSpan).append(nameSpan);
    // $(".fighter").html("<span>" + healthBar[i] + "</span>");
}


// when you pick your fighter and move the others

$(document).on("click", ".fighter", function() {
 
    var myPick = $(this);
    myPick.addClass("my-pick");

    $("img").each(function() {
        if ($(this).hasClass("my-pick")) {
            $(".container-pick").append($(this));
            $(".container-pick").toggleClass("center");
            $(".container-pick").addClass("side-center");
            $(".my-pick").addClass("noClick");
        } else {
            $(".container-rest").append($(this));
            $(".container-rest").toggleClass("hidden");
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
                $(".container-ring").toggleClass("hidden");
                $(".container-rest").toggleClass("hidden");
                $(".my-opponent").toggleClass("noClick");
                $(".attack-button").toggleClass("hidden");                
                
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
    var totalDamageTaken = 0 ;
  
$(".attack-button").on("click", function() {
    
    $(".battle-log").removeClass("hidden");

    var myHealthRemaining;
    var oppHealthRemaining; 
    //only work if there are fighters in both red and blue corners
    if ($(".my-opponent").parent().is(".container-ring") 
    &&  $(".my-pick").parent().is(".container-pick")) {
        
        //show the attack information
        $(".empty-log").attr("class","battle-log");

        console.log("========begin attack==========");

        //damage and health values for both fighters
        var damageValue = ($(".my-pick").attr("data-attackPower"));
        var counterValue = ($(".my-opponent").attr("data-counterAttack"));
        myHealthRemaining = ($(".my-pick").attr("data-healthBar"));
        oppHealthRemaining = ($(".my-opponent").attr("data-healthBar"));
                
        //parses string (html attribute) into integer
        damageCounter = parseInt(damageCounter);
        damageValue = parseInt(damageValue);
        counterValue = parseInt(counterValue);
        myHealthRemaining = parseInt(myHealthRemaining);
        oppHealthRemaining = parseInt(oppHealthRemaining);


        //your fighter gains power throughout the tournament ... 
        damageCounter =  damageCounter + damageValue ;
        totalDamageTaken = totalDamageTaken + counterValue;
        myHealthRemaining = myHealthRemaining - totalDamageTaken;
        oppHealthRemaining = oppHealthRemaining - damageCounter;
        $(".my-opponent").attr("data-healthBar", oppHealthRemaining);
        //if opponent health is 0, they lose
        if(oppHealthRemaining <= 0){

            $(".battle-log").html("You attack for " + damageCounter + "<br>" + "Opponent lost!");
            $(".container-rest").toggleClass("hidden");
            $(".container-ring").toggleClass("hidden");
            $(".attack-button").toggleClass("hidden");
        
            
            //if opponent loses, i don't count their last hit. works
            myHealthRemaining = myHealthRemaining + counterValue;
            totalDamageTaken = totalDamageTaken - counterValue;
            
            //change class to 'defeated' to make them disappear.
            $(".my-opponent").attr("class", "defeated");
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
            var informAttack = $(".battle-log").html(
                "You attack for " + damageCounter + "<br>" +
                "Opponent's health is now " + oppHealthRemaining + "<br>" +
                "Enemy attacks for " + counterValue + "<br>" +
                "Your health is now " + myHealthRemaining

            );   
        }
    }     
    
    if (!$(".my-opponent").parent().is(".container-ring") 
    &&  !$(".enemy").parent().is(".container-rest")
    &&  $(".my-pick").parent().is(".container-pick")){
        alert("You win! Glory is yours!");
        location.reload();
    }

    
})
