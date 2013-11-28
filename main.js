

// Write some code that will evaluate a poker hand and determine its 
// rank. 
// Example: 
// Hand: Ah As 10c 7d 6s (Pair of Aces) 
// Hand: Kh Kc 3s 3h 2d (2 Pair) 
// Hand: Kh Qh 6h 2h 9h (Flush)


var pokerHand = function(hand){
   
  var handArr=hand.split("");
  var hearts=[]; 
  var clubs=[];
  var spades=[];
  var diamonds=[];

 var checkStraight= function(arr){
  var sum=0;
  for(var i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  if(arr[2]===sum/5){
    return true;
  }
  return false;
 };

  for(var i=0;i<handArr.length;i++){

    if(handArr[i]==="0")
    {
      handArr[i]="10";
    }
    
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
  var allCards=[];
  allCards=hearts.concat(spades,clubs,diamonds);

  for(var i=0;i<4;i++){
   
    if ((cardsBySuit[i].length === 5) && (checkStraight(cardsBySuit[i])===true))  
    {

    console.log("Straight Flush")
       return;
    }else if(cardsBySuit[i].length === 5)
    {
      console.log("Flush")
        return;
    }

  }
  allCards.sort();
 

var uniqA=[];
var uniqB=[];
 var counterA=1;
 for(var i=0;i<allCards.length-1;i++){
  for(var k=4;i<k;k--)
  {
    if(allCards[i]===allCards[k]){
       var cardCom=allCards[k];
      if(uniqA.length===0 || uniqA[0]=== cardCom)
      {
       uniqA.push(allCards[k]);
      }else
      {
        uniqB.push(allCards[k]);
      }
      var removeCard=allCards.lastIndexOf(allCards[k]);
       allCards.splice(removeCard,1);
    }
  }
  
 }

if((uniqA.length===3 || uniqB.length===3)) {
  console.log("Four Of a kind");

}else if((uniqA.length===1 && uniqB.length===1)) {
  console.log("two pairs");
}
else if((uniqA.length===1 || uniqA.length===2) && (uniqB.length===1 || uniqB.length===2)){
  console.log("full House");
}else if((uniqA.length===2 || uniqB.length===2)) {
  console.log("Three of A kind ");
}
else if((uniqA.length===1 || uniqB.length===1)) {
  console.log("One pAir");
}else if((uniqA.length===0 && uniqB.length===0) && checkStraight(allCards)===true) {
  console.log("Straight");
}

else {
  console.log("High Card")
}
 
};     
pokerHand("8h 6h 10h 7h 9h"); 
pokerHand("Ah As 10c 7d 6s"); 
pokerHand("Kh Kc 3s 3h 2d");
pokerHand("Kh Qh 6h 2h 9h");                                   
pokerHand("Ah As Ad 7h 7c"); 
pokerHand("6h 5s 4d 3h 2c"); 
pokerHand("Ah Kh Qh Jh 10h"); 
pokerHand("Qh Ks Qd 6h Qc"); 
pokerHand("Ah 8s 8d 8h 8c"); 
pokerHand("Jh Ks Ad 5h 4c"); 
pokerHand("Ah Ks 2d Kh 2c"); 

