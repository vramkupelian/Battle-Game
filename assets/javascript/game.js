var healthBar = [100, 200, 300, 400];

for(var i =0; i < healthBar.length; i++){
    var divForImage = $("<div>");
    var imageFighter = $("<img>");
    var healthBarSpan = $ ("<span>");

    divForImage.addClass("div-for-image");
    imageFighter.addClass("fighter");
    healthBarSpan.addClass("health-bar-span");

    // Each imageFighter will be given a src link to the image
    imageFighter.attr("src", "./assets/images/fighter" + i + ".jpg");
 
    //Each fighter will get a healthbar based off of position 
    healthBarSpan.attr("data-healthBar", healthBar[i]); 

    $(".container-pick").append(imageFighter);
    $(".container-pick").append(healthBarSpan);
}

