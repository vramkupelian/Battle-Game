var healthBar = [100, 200, 300, 400];
var attackPower = [200,175,150,125];
var indexNumber = [0,1,2,3];
var counterAttack = [25,50,75,80];

var damageCounter =0;

for(var i =0; i < healthBar.length; i++){
    var hasBeenClicked = false;
    // var divForImage = $("<div>");
    
    //For each iteration, create an imageFighter
    var imageFighter = $("<img>");
    
    // var healthBarSpan = $ ("<span>");
    // divForImage.addClass("div-for-image");
    
    //give each imageFighter the class "fighter", css
    imageFighter.addClass("fighter");
    
    // healthBarSpan.addClass("health-bar-span");

    // Each imageFighter will be given a src link to the image
    imageFighter.attr("src", "./assets/images/fighter" + i + ".jpg");
 
    //Each fighter will get a data attribute "data-healthBar", set = healthBar array. etc.
    imageFighter.attr("data-healthBar", healthBar[i]);
    imageFighter.attr("data-attackPower", attackPower[i]);
    imageFighter.attr("data-counterAttack", counterAttack[i]);
    imageFighter.attr("data-indexNumber", indexNumber[i]);

    //add to page
    $(".container-pick").append(imageFighter);
    // $(".fighter").append(healthBarSpan);
}
//----------------------------------close for loop------


// $(function sortIfPickedBlue(){
//     //check if something has been clicked.
//     if (hasBeenClicked) {        
//         if(!hasBeenClicked){
//             $(".container-rest").append(imageFighter);
//         }
//     }   
// })




//------start on click events-----
//when you click on a fight class
$(".fighter").on("click", function() {
    var hasBeenClicked = true;
    console.log(hasBeenClicked);
    
      var id = ($(this).attr("data-indexNumber"));
    id = parseInt(id);
    
    var myPick = $(this);
    myPick.addClass("my-pick");

//try to sort by id number
    var id = myPick.attr("id");
    var choices = $(".my-pick");
    
    for(var i = 0; i < choices.length; i++ ){
        var currentChoice = choices [i];
        console.log(currentChoice);
        console.log(indexNumber);
            if($(currentChoice).attr("id") !== id){
                $(".container-rest").append(currentChoice);
               
            }
   }
    
        
    console.log("should've changed class to my-pick");
    console.log(myPick);

function takeAway(){
    
    //if an image doesn't have my-pick class
if($("img").hasClass("my-pick")){
        $(".container-rest").append(imageFighter);
        console.log("takeaway");

    }
}   
takeAway();
    // function checkIfBlue (){
        //    //if you have not been clicked
        //     if(myPick){
        //         $(".fighter").addClass("enemy");
        //         $(".container-rest").append(imageFighter);
        //         console.log("add enemy class and move to container-rest");
        //     }
        // }    

// checkIfBlue();
})


//this is for the fight.. needs work
// //when you click on a attack class
$(".attack-button").on("click", function() {

    //this for this clicked fighter
    var damageValue = ($(this).attr("data-attackPower"));
   
    //parses string (html attribute) into integer
    damageValue = parseInt(damageValue);

    // every click adds to global counter. will need to be changed
    damageCounter += damageValue;

    
    var hasBeenClicked = true;


    // run a function  that sorts after someone is picked.
    
    console.log("you clicked a fighter. Counter =" + damageCounter);
    
})



//this moves from one element to another. 
// // $(target_element).append(to_be_inserted_element)

