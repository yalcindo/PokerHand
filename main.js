

// Write some code that will evaluate a poker hand and determine its 
// rank. 
// Example: 
// Hand: Ah As 10c 7d 6s (Pair of Aces) 
// Hand: Kh Kc 3s 3h 2d (2 Pair) 
// Hand: Kh Qh 6h 2h 9h (Flush)

// var cards={
// 	hearts:[0,1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
// 	spades:[0,1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
// 	diamonds:[0,1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
// 	clubs:[0,1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
// };
// console.log(cards.hearts[11]);

var pokerHand = function(hand){
   
  var handArr=hand.split("");
  var hearts=[]; 
  var clubs=[];
  var spades=[];
  var diamonds=[];
  console.log(handArr);
  for(var i=0;i<handArr.length;i++){
  	if(handArr[i]==="J"){
  		handArr[i]="11";
  	}
  		if(handArr[i]==="Q"){
  		handArr[i]="12";
  	}
  		if(handArr[i]==="K"){
  		handArr[i]="13";
  	}
  		if(handArr[i]==="A"){
  		handArr[i]="1";
  	}

  }
 
   
  for(var i=0;i<handArr.length;i++){
  	if(handArr[i]==="h")
  	{
  		hearts.push(+handArr[i-1]);
  	}else if(handArr[i]==="s")
  	{
  		spades.push(+handArr[i-1]);
  	}else if(handArr[i]==="c")
  	{
  		clubs.push(+handArr[i-1]);
  	}else if(handArr[i]==="d")
  	{
  		diamonds.push(+handArr[i-1]);
  	}
  	
  }
  var cardsBySuit=[];
  cardsBySuit.push(hearts,spades,clubs,diamonds);
  for(var i=0;i<4;i++){
  	if (cardsBySuit[i].length === 5)	
  	{
  		cardsBySuit[i].sort();
       
  	}
  }
 var allCards=[]
 allCards=hearts.concat(spades,clubs,diamonds);

 allCards.sort();
 console.log(allCards);
 var unique={};
 var counter=0;
 for(var i=0;i<allCards.length-1;i++){
 	for(var k=i+1;k<5;k++)
 	{
 		if(allCards[i]===allCards[k]){
         counter++;
         console.log(counter);
 		}
 	}


 }


};     
pokerHand("8h 8h 8h 7h 9h");                                              