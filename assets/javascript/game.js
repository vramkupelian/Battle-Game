var healthBar = [100, 200, 300, 400];

for(var i =0; i < healthBar.length; i++){

var imageFighter = $("<img>");
var healthBarSpan = $ ("<span>");

imageFighter.addClass("fighter");

 // Each imageCrystal will be given a src link to the crystal image
 imageFighter.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
 

imageFighter.attr("data-healthBar", healthBar[i]); 

$(".container-pick").append(imageFighter);
$(".health-bar-span").append()
}

