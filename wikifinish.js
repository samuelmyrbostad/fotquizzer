class WikiFinish extends Phaser.Scene {
	constructor() {
		super({ key: 'WikiFinish' })
	}

  preload() {
      
    }

	create() {    
    
    //TITLE SCREEN + QUIZTYPES SETUP
    this.add.text(600, 100, "Quiz completed", { font: "40px Cardo", fill: "white"});
    //alert('hello' + quizscorestate.totalquestions)  
    this.add.text(600, 200, "You got " + quizscorestate.totalcorrect + ' right out of ' + quizscorestate.totalquestions, { font: "40px Cardo", fill: "white"});   
  }
}
