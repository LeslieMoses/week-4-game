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


$(document).ready(function(){
    $("#pressNew").click(function(){
    		million = Math.floor(Math.random() * 120) + 19; 
        $("#millions").text("$" + million +" million");
    });
});

//game start
function startGame() {

	//generate new million total •	random number generated shown (between 19 - 120
		$('#pressNew').on('click',function() {

       	million = Math.floor(Math.random() * 120) + 19; 
       	$("#millions").text( million);

       	blueWorth = Math.floor(Math.random() * 6) + 1;  
		whiteWorth = Math.floor(Math.random() * 6) + 1; 
		purpleWorth = Math.floor(Math.random() * 6) + 1; 
		pinkWorth = Math.floor(Math.random() * 6) + 1; 


		
})
	//generate new value to Crystals' worth
		
		 
      	


 

	
} //function startGame end
} )//


//function randomIntFromInterval(min,max)
	//	{
		//    return Math.floor(Math.random()*(max-min+1)+min);
	//	}