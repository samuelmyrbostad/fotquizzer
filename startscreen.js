class StartScreen extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScreen' })
	}

  preload() {
      
    }

	create() {  
    
    //TITLE SCREEN + QUIZTYPES SETUP
    this.add.text(600, 15, "FOTQUIZ", { font: "80px Cardo", fill: "white"});    
    this.wikirectangle = this.add.rectangle(400, 350, 350, 350, 0xD3D3D3).setInteractive();
    this.sporetrectangle = this.add.rectangle(800, 350, 350, 350, 0xD3D3D3).setInteractive();
    this.annetrectangle = this.add.rectangle(1200, 350, 350, 350, 0xD3D3D3).setInteractive();
    
    this.add.text(290, 200, "WIKIQUIZ", { font: "40px Cardo", fill: "white"});
    this.add.text(243, 270, "Guess players from Wiki-profiles that is quite cool i think", { font: "23px Cardo", fill: "white"}).setWordWrapWidth(350);

    this.add.text(715, 200, "SPORET", { font: "40px Cardo", fill: "white"});
    this.add.text(635, 270, "Guess player or club from clues", { font: "25px Cardo", fill: "white"}).setWordWrapWidth(400);

    this.add.text(1120, 200, "ANNET", { font: "40px Cardo", fill: "white"});

    //CLICK EVENT QUIZTYPES
    //CLICK EVENTS BOXES
    this.wikirectangle.on('pointerup', () => {
      this.scene.start('WikiQuiz');         
    })

    this.sporetrectangle.on('pointerup', () => {
         
    })

    this.annetrectangle.on('pointerup', () => {
         
    })
    
    //HOVERING ON BOXES
    this.wikirectangle.on('pointerover', () => {      
      
    })

    
    
    

     
    
}

		
	}
