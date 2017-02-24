$(document).ready(function(){

		//Game counters ## tally these
		//##win: combinedWorth === and !> million
		//##lose: combinedWorth !> million
		var winCounter = 0;
		var lossCounter = 0;

		//Counts 
		var million = 0; 

		//##add click to each crystal
		//Crystals' worth •	Each crystal should have random hidden value (between 1 - 12)

		var blueWorth = 0;
		var whiteWorth = 0;
		var purpleWorth = 0;
		var pinkWorth = 0;

		var blueCount = 0;
		var whiteCount = 0;	
		var pinkCount = 0;
		var purpleCount = 0;

		var combinedWorth = 0;
		var combinedWorth = combinedWorth + blueWorth + purpleWorth + whiteWorth + pinkWorth;
		 
		//var blueWorthClicked = blueWorth
		//Restart
	
//game start
    $("#pressNew").click(function(){
    		
	  	million = Math.floor(Math.random() * 120) + 19; 
        
        $("#millions").text("$" + million +" million");
	 console.log(combinedWorth);
	 	blueWorth = 0;
	    whiteWorth = 0;   
	    pinkWorth = 0;
	    purpleWorth = 0;	
	    combinedWorth = 0;  
	    blueCount = 0;
	    whiteCount = 0;   
	    pinkCount = 0;
	    purpleCount = 0;	
	    combinedWorth = 0;  

	 	blueWorth = Math.floor(Math.random() * 6) + 1;  
		whiteWorth = Math.floor(Math.random() * 6) + 1; 
		purpleWorth = Math.floor(Math.random() * 6) + 1; 
		pinkWorth = Math.floor(Math.random() * 6) + 1; 

	$("#blankHere").html(combinedWorth) ;

    });//END OF START  

		//BLUE start
		//function totalWorth(){
		 	$("#blueBtn").click(function() {

				blueCount++;
					console.log(blueCount);
					console.log(blueWorth);
					console.log(combinedWorth);
				combinedWorth = (blueCount * blueWorth) + (whiteCount * whiteWorth) + (purpleCount * purpleWorth) + (pinkCount * pinkWorth);
				console.log(combinedWorth);
				$("#blankHere").html(combinedWorth) ;

			//	function combineF (bl, wh, pu, pi) {
			//		return combinedWorth
			//  +whiteWorth +pinkWorth +purpleWorth 
	 

 });	//END OF BLUE 
		//WHITE start
 		$("#whiteBtn").click(function() {

				whiteCount++;
					console.log(whiteCount);
					console.log(whiteWorth);
				combinedWorth = (blueCount * blueWorth) + (whiteCount * whiteWorth) + (purpleCount * purpleWorth) + (pinkCount * pinkWorth);
					console.log(combinedWorth);
				$("#blankHere").html(combinedWorth) ;
 	       		
	});//END OF white 


		//PURPLE start
		     $("#purpleBtn").click(function() {
					console.log(purpleWorth);
				purpleCount++;
			combinedWorth = (blueCount * blueWorth) + (whiteCount * whiteWorth) + (purpleCount * purpleWorth) + (pinkCount * pinkWorth);
			$("#blankHere").html(combinedWorth) ;
	
 
	});//END OF purple CLICK


		//PINK start
			$("#pinkBtn").click(function() {
						console.log(pinkWorth);
				pinkCount++;
			combinedWorth = (blueCount * blueWorth) + (whiteCount * whiteWorth) + (purpleCount * purpleWorth) + (pinkCount * pinkWorth);
			console.log(million);
			$("#blankHere").html(combinedWorth)  ;

 			}); //END OF pink CLICK  

      $(".gem").on("click", function(){
	if (combinedWorth == million && combinedWorth > 0 ) { 
      		winCounter++;
      		$("#win").html(winCounter);
			alert("Winner! Pick a jewel below.");
			
		} else if (combinedWorth > million){
			lossCounter++;
			$("#lose").html(lossCounter);
			alert("Game over!");
		}	
	
})

});



//if(blueCount++){ $("#blankHere").html(blueWorth + combinedWorth); }

		//   else if (whiteCount++){ $("#blankHere").html(whiteWorth + combinedWorth); }
		//   else if (purpleCount++){ purpleWorth + combinedWorth; }
		//   else if (pinkCount++){ pinkWorth + combinedWorth; }

		//   --------------------------
		//   ADD FUNCTION AROUND CLICKS OF GEMS?

		//       if(".gem")on.("click", function(){
//---------------------------------

		//	AS A FUNCTION AROUND BLUE CLICKING

 	//$("#blueBtn").click(function() {
	//				blueCount++;
	//				function blueFunction(x,y){
	//					(x * y);    
					
	//	   $("#blankHere").html(blueWorth + combinedWorth) ;}

 
	//});
	//	 	blueFunction(blueCount, blueWorth);
 

	 
	//generate new value to Crystals' worth
		
		 
      	


 

	
//function startGame end
 


//function randomIntFromInterval(min,max)
	//	{
		//    return Math.floor(Math.random()*(max-min+1)+min);
	//	}