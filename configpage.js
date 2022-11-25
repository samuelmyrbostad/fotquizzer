const gameState = {
	score: 0
};



let wikiquizsettings = {
			League : 'Player',		
			Difficulty: 'None',				
		   };

		   let quizscorestate = {
			totalcorrect : 0,		
			totalquestions: 0,				
		   };

       
const config = {
	type: Phaser.AUTO,
	parent: 'phaser-example',
	width: window.innerWidth-15,
  height: window.innerHeight-25 ,
  backgroundColor: "#83827F",	
  
dom: {
	createContainer: true
},
	scene: [StartScreen,WikiQuiz,WikiFinish]
};

const game = new Phaser.Game(config);

