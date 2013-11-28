// var checkHands = function(allCards){
// allCards.sort();
//  console.log("At the beginning",allCards);

// var uniqA=[];
// var uniqB=[];
//  var counterA=1;
//  for(var i=0;i<allCards.length-1;i++){
//  	for(var k=4;i<k;k--)
//  	{
//  		if(allCards[i]===allCards[k]){
//  			 var cardCom=allCards[k];
//  			if(uniqA.length===0 || uniqA[0]=== cardCom)
//  			{
//  			 uniqA.push(allCards[k]);
//  			}else
//  			{
//  				uniqB.push(allCards[k]);
//  			}
//  			var removeCard=allCards.lastIndexOf(allCards[k]);
//  			 allCards.splice(removeCard,1);
//  		}
//  	}
  
//  }

// if((uniqA.length===3 || uniqB.length===3)) {
// 	console.log("Four Of a kind");
// }else if((uniqA.length===1 && uniqB.length===1)) {
// 	console.log("two pairs");
// }
// else if((uniqA.length===1 || uniqA.length===2) && (uniqB.length===1 || uniqB.length===2)){
// 	console.log("full House");
// }else if((uniqA.length===2 || uniqB.length===2)) {
// 	console.log("Three of A kind ");
// }
// else if((uniqA.length===1 || uniqB.length===1)) {
// 	console.log("One pAir");
// }else if((uniqA.length===0 && uniqB.length===0) && checkStraight(allCards)===true) {
// 	console.log("Straight");
// }

// else {
// 	console.log("High Card")
// }

// };     
// checkHands([1,2,3,4,5]);                                              