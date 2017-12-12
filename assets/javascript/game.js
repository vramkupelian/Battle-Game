var healthBar = [100, 200, 300, 400];
var attackPower = [200,175,150,125];
var labelNumber = [0,1,2,3];

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
    
    // imageFighter.val(i);  ??
    
    // healthBarSpan.addClass("health-bar-span");

    // Each imageFighter will be given a src link to the image
    imageFighter.attr("src", "./assets/images/fighter" + i + ".jpg");
 
    //Each fighter will get a data attribute "data-healthBar", set = healthBar array. etc.
    imageFighter.attr("data-healthBar", healthBar[i]);
    imageFighter.attr("data-labelNumber", labelNumber[i]);
    imageFighter.attr("data-attackPower", attackPower[i]);
    //  Each gets data boolean 
    imageFighter.attr("data-hasBeenClicked", hasBeenClicked);

    labelNumber = parseInt(labelNumber);

    //add to page
    $(".container-pick").append(imageFighter);
    // $(".fighter").append(healthBarSpan);
}
//----------------------------------close for loop------


$(function sortIfPickedBlue(){


    //check if something has been clicked.


    if (hasBeenClicked) {


        
        if(!hasBeenClicked){
            $(".container-rest").append(imageFighter);
        }
    } 
    
})


//------start on click events-----

// //when you click on image
$(".fighter").on("click", function() {

    //this for this clicked fighter
    var damageValue = ($(this).attr("data-attackPower"));
   
    //parses string (html attribute) into integer
    damageValue = parseInt(damageValue);

    // every click adds to global counter. will need to be changed
    damageCounter += damageValue;

    
    var hasBeenClicked = true;


    // run a function  that sorts after someone is picked.
    $(this).addClass("my-pick");
    console.log("you clicked a fighter. Counter =" + damageCounter);
    
})



//this moves from one element to another. 
// // $(target_element).append(to_be_inserted_element)

