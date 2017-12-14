var healthBar = [100, 200, 300, 400];
var attackPower = [200,175,150,125];
var indexNumber = [0,1,2,3];
var counterAttack = [25,50,75,80];
var fighterName = ["Bruce Lee", "Muhammad Ali", "Fedor", "Chuck Norris"];

// var damageCounter = 0;

for(var i =0; i < healthBar.length; i++){
    var hasBeenClicked = false;
    // var divForImage = $("<div>");
    
    //For each iteration, create an imageFighter
    var imageFighter = $("<img>");
    var healthBarSpan = $ ("<span>");
    var nameSpan = $("<span>");
    // divForImage.addClass("div-for-image");
    
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
    imageFighter.attr("data-indexNumber", indexNumber[i]);
    imageFighter.attr("data-fighterName", fighterName[i]);

    //add to page
    $(".container-pick").append(imageFighter);
    // $(".fighter").append(healthBarSpan);
}
//----------------------------------close for loop-----

//------start on click events-----
// when you pick your fighter and move the others
$(document).on("click", ".fighter", function() {
    var hasBeenClicked = true;
    
    var id = ($(this).attr("data-indexNumber"));
    id = parseInt(id);
    
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
});

// if p is in a div


// if ($(".container-ring").has(".my-opponent")){
// console.log("ready for fight");
// }





//this is for the fight.. needs work
// //when you click on a attack class
$(".attack-button").on("click", function() {
    var damageCounter = 0;
    //is there an opponent inthe red corner
    if ($(".my-opponent").parent().is(".container-ring")) {
        
        //damage and health values for both fighters
        var damageValue = ($(".my-pick").attr("data-attackPower"));
        var counterValue = ($(".my-opponent").attr("data-counterAttack"));
        var myHealthRemaining = ($(".my-pick").attr("data-healthBar"));
        var oppHealthRemaining = ($(".my-opponent").attr("data-healthBar"));
    
        //parses string (html attribute) into integer
        damageCounter = parseInt(damageCounter);
        damageValue = parseInt(damageValue);
        counterValue = parseInt(counterValue);
        myHealthRemaining = parseInt(myHealthRemaining);
        oppHealthRemaining = parseInt(oppHealthRemaining);

        //your fighter gains power throughout the tournament
        damageCounter = damageCounter + damageValue;
        
        myHealthRemaining = myHealthRemaining - counterValue;
        oppHealthRemaining = oppHealthRemaining - damageCounter;

        // every click adds to global counter. will need to be changed
        
        var hasBeenClicked = true; 

        console.log("attack for " + damageCounter);
        console.log("enemy counters for " + counterValue);
        console.log("my health is " + myHealthRemaining);
        console.log("opponent health is " + oppHealthRemaining);

        if(oppHealthRemaining <= 0){
            console.log("opp lost");
            //change class defeated to make them disappear.
            $(".my-opponent").attr("class", "defeated");
        }
    }     
    
    
})
