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
		var combinedWorth = combinedWorth + blueWorth + purpleWorth;


		//##add click to each crystal
		//Crystals' worth •	Each crystal should have random hidden value (between 1 - 12)

		var blueWorth = 0;
		var whiteWorth = 0;
		var purpleWorth = 0;
		var pinkWorth = 0;
		 
		//var blueWorthClicked = blueWorth

		//Restart
		var newGame = 0;


//game start
    $("#pressNew").click(function(){
    		

    		million = Math.floor(Math.random() * 120) + 19; 
        $("#millions").text("$" + million +" million");
	 	$("#blankHere").empty();
	       	  

		blueWorth = Math.floor(Math.random() * 12) + 1; 
		whiteWorth = Math.floor(Math.random() * 12) + 1; 
		purpleWorth = Math.floor(Math.random() * 12) + 1; 
		pinkWorth = Math.floor(Math.random() * 12) + 1; 


var gemCount =0;
		
	$(".gem").click(function() {
			this.value++;
					$("#blankHere").html(gemCount * blueWorth);
    
    });



var blueCount =0;
		
	$("#blueBtn").click(function() {
			blueCount++;
					$("#blankHere").html(blueCount * blueWorth);
    
    });
    

//var whiteCount =0;

//		$("#whiteBtn").click(function() {
//			whiteCount++;
//			$("#blankHere").html(whiteCount * whiteWorth);


          

  //  });


		
        

});


});

 

	 
	//generate new value to Crystals' worth
		
		 
      	


 

	
//function startGame end
 


//function randomIntFromInterval(min,max)
	//	{
		//    return Math.floor(Math.random()*(max-min+1)+min);
	//	}