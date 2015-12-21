var mario_Array = ["bowser", "bowser_jr", "fire-flower", "helicopter-mushroom", "ice-flower", "luigi", "mario", "peach-card"]
var counter = 0;
var firstCard;

var cards = []
for (i=0; i<mario_Array.length; i++)
{
	// console.log(i)
cards.push(mario_Array[i]);
cards.push(mario_Array[i]);
}
// Each time a card is shuffled, we swap it with the last unshuffled card]

//pick a random unshuffled card
for (i = cards.length-1; i>=0; i--){
var random = Math.floor(Math.random() * i);

var temporary = cards[random];//save value of random card
cards[random] = cards[i];
cards[i] = temporary; 
}
console.log('printing shuffled cards');
console.log(cards);

$(document).ready(function(){
	for(i=0; i<cards.length; i++){
		$("#playing-field").append("<span class = '"+cards[i]+" card facedown'></span>");
	};
$(".card").click(function(){
	counter++;
	if(counter <= 2) {
	
		$(this).toggleClass("facedown");
		$(this).toggleClass("faceup");
	}
	if(counter == 1){
		firstCard = $(this).attr("class");
		//alert(firstCard);
	}
		if (counter == 2){
			//alert("compare cards");
			if ($(this).attr("class") == firstCard) {
				//alert('match');
				$('.card.faceup').addClass("match");
				var myAudio = new Audio("coin-sound.wav");
				myAudio.play();
				counter = 0;
			}
			else {
				//alert('no match'+firstCard);
				setTimeout(function(){
					$( ".card" ).each(function( index ) {
						if(!$(this).hasClass("match")) {
							$(this).addClass("facedown");
							$(this).removeClass("faceup");
							var myAudio = new Audio("no-match.wav");
							myAudio.play();
							counter = 0;
						}
					}); 
					
					
				 }, 2000);
			}
			
		}

});



});



