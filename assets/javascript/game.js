$(document).ready(function(){

		//Game counters ## tally these
		//##win: combinedWorth === and !> million
		//##lose: combinedWorth !> million
		var winCounter = 0;
		var lossCounter = 0;

		//Counts 
		var million = 0; 


		//crystals' worth combined
		//HERE HERE HERE H


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
    		
	var newGame = 0;

		
    	million = Math.floor(Math.random() * 120) + 19; 
        
        $("#millions").text("$" + million +" million");
	 	$("#blankHere").empty();
	       	  

	 	blueWorth = Math.floor(Math.random() * 6) + 1;  
		whiteWorth = Math.floor(Math.random() * 6) + 1; 
		purpleWorth = Math.floor(Math.random() * 6) + 1; 
		pinkWorth = Math.floor(Math.random() * 6) + 1; 

	$("#blankHere").html(combinedWorth= 0) ;

    });//END OF START newGame



		 	$("#blueBtn").click(function() {
					blueCount++;
				combinedWorth = (blueCount * blueWorth)   ;
				console.log(combinedWorth);
				$("#blankHere").html(blueWorth) ;

 	});//END OF BLUE CLICK



 			$("#whiteBtn").click(function() {
					whiteCount++;
				$("#blankHere").html(whiteCount * whiteWorth);
 	});	       		

		

		     $("#purpleBtn").click(function() {
							purpleCount++;
				$("#blankHere").html(purpleCount * purpleWorth)+ combinedWorth ;
	});



			$("#pinkBtn").click(function() {
							pinkCount++;
				$("#blankHere").html(pinkCount * pinkWorth)+ combinedWorth ;

 	});   


});




 

	 
	//generate new value to Crystals' worth
		
		 
      	


 

	
//function startGame end
 


//function randomIntFromInterval(min,max)
	//	{
		//    return Math.floor(Math.random()*(max-min+1)+min);
	//	}