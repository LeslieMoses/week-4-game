$(document).ready(function(){

		//Game counters ## tally these
		//##win: combinedWorth === and !> million
		//##lose: combinedWorth !> million
		var winCounter = 0;
		var lossCounter = 0;

		//Counts 
		var million = 0; 


		//crystals' worth combined
		var combinedWorth = 0;

		//##add click to each crystal
		//Crystals' worth •	Each crystal should have random hidden value (between 1 - 12)

		var blueWorth = 0;
		var whiteWorth = 0;
		var purpleWorth = 0;
		var pinkWorth = 0;
		 
		//Restart
		var newGame = 0;


 
    
//game start
    $("#pressNew").click(function(){
    		

    		million = Math.floor(Math.random() * 120) + 19; 
        $("#millions").text("$" + million +" million");
	 	$("#blankHere").empty();
	       	  combinedWorth = 0;

		blueWorth = Math.floor(Math.random() * 12) + 1; 
		whiteWorth = Math.floor(Math.random() * 12) + 1; 
		purpleWorth = Math.floor(Math.random() * 12) + 1; 
		pinkWorth = Math.floor(Math.random() * 12) + 1; 
      

    });

    
     	$("#blueBtn").click(function(){
     		
         $("#blankHere").text( blueWorth + combinedWorth ); 

     });

          $("#whiteBtn").click(function(){
         $("#blankHere").text( whiteWorth + combinedWorth); 

          });

         $("#purpleBtn").click(function(){
         $("#blankHere").text( purpleWorth + combinedWorth); 

          });

         $("#pinkBtn").click(function(){
         $("#blankHere").text( pinkWorth + combinedWorth); 

          });

        

});

 

		0

	//generate new value to Crystals' worth
		
		 
      	


 

	
//function startGame end
 


//function randomIntFromInterval(min,max)
	//	{
		//    return Math.floor(Math.random()*(max-min+1)+min);
	//	}