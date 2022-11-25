$(document).on('keypress',function(e) {
  if(e.which == 13) {
      e.preventDefault()
  }
});


class WikiQuiz extends Phaser.Scene {
	constructor() {
		super({ key: 'WikiQuiz' })
	}

  preload() {
    this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);     
    this.questioncount = 0
    this.correctqu = 0
   
    }  

    


	create() {    
      alert(this.questioncount)
    
     //INPUT TEXT FIELD
     var printText = this.add.text(100, 100, '', {
      fontSize: '0px',
  }).setOrigin(0.5).setFixedSize(100, 100);  
  var inputText = this.add.rexInputText(575, 270, 250,30, {
      type: 'textarea',
      text: '',
      fontSize: '20px',
      backgroundcolor:'red',
      border: 30,
      borderColor: 'green',
      
  })    
      //.resize(100, 100)
      
      .setOrigin(0.5)
      .on('textchange', function (inputText) {
          printText.text = inputText.text;
          var len = inputText.text.length;
          if (len > 0) {
            let a = 2
          }
          if (len > 21) {
            inputText.text = 'hello'
          }
          
      })      
      .on('focus', function (inputText) {
          console.log('On focus');
      })
      .on('blur', function (inputText) {
          console.log('On blur');
      })
      .on('click', function (inputText) {
          console.log('On click');
      })
      .on('dblclick', function (inputText) {
          console.log('On dblclick');
      })

  this.input.on('pointerdown', function () {
      inputText.setBlur();
      console.log('pointerdown outside');
  })
      
    //TITLE SCREEN + QUIZTYPES SETUP
    this.add.text(600, 15, "FOTQUIZ", { font: "80px Cardo", fill: "white"});        
    //this.add.text(675, 140, "WIKIQUIZ", { font: "40px Cardo", fill: "white"});    
    
    this.add.text(475, 200, 'Who is this player?', {fill: 'white', font: "25px Cardo"}).setWordWrapWidth(700)			

    

    //ELITESERIENPLAYERS
    let wikiquizsettings = {
      Player: ['Abel_Stensrud', 'Adam_Andersson', 'Adrian_Pereira', 'Akor_Adams', 'Alexander_Ammitzbøll', 'Alexander_Juel_Andersen', 'Alexander_Ruud_Tveter', 'Alexander_Søderlund', 'Alfons_Sampsted', 'Alioune_Ndour_(footballer,_born_1997)', 'Aliou_Coly', 'Amahl_Pellegrino', 'Amer_Ordagic', 'Amidou_Diop', 'Amin_Askar', 'Amin_Nouri', 'Amor_Layouni', 'Anders_Bærtelsen', 'Anders_Jenssen', 'Anders_Konradsen', 'Anders_Kristiansen_(footballer)', 'Andreas_Hopmark', 'André_Hansen', 'André_Sødlund', 'Anton_Salétros', 'Anton_Skipper', 'Ari_Leifsson', 'Aron_Dønnum'],		
      Career: [['2020–2021', '2022–'], ['2012', '2015–2020', '2021–', '2022–'], ['2017–2020', '2020–2021', '2021–'], ['2018–2021', '2022–'], ['2017–2022', '2020', '2022–'], ['2007–2011', '2011', '2011–2013', '2013–2018', '2018–2020', '2019', '2020–2022', '2022', '2022–'], ['2007–2010', '2011–2013', '2013–2015', '2016–2017', '2018–2020', '2018', '2021–'], ['2005–2006', '2006–2008', '2008', '2008–2010', '2008', '2009', '2009', '2010', '2010', '2011–2013', '2013–2015', '2016–2018', '2018–2020', '2020', '2021', '2021–'], ['2015–2016', '2015', '2017–2020', '2017', '2018', '2019', '2019', '2020–'], ['2016', '2017–2019', '2019–2020', '2021–2022', '2022–'], ['2009–2013', '2013–2014', '2014', '2015–'], ['2009–2011', '2012–2014', '2014–2015', '2015–2017', '2018–2019', '2019–2021', '2021', '2021–'], ['2012–2013', '2013–2015', '2015–2018', '2017–2021', '2021–'], ['2010–2014', '2014–2017', '2015', '2016', '2017–2019', '2020', '2020–'], ['2003–2009', '2009–2012', '2012–2016', '2015', '2016–2017[2]', '2017–2019', '2020–'], ['2008–2011', '2008', '2011–2014', '2015–2017', '2018–2021', '2019', '2020', '2021', '2022–'], ['2011–2012', '2013–2015', '2016', '2017', '2017–2019', '2019–2021', '2021–'], ['2018–2020', '2020–2021', '2021–'], ['2012–2013', '2014', '2015–2018', '2019–'], ['2007–2011', '2011–2013', '2013–2015', '2013–2014', '2015–2021', '2022'], ['–2008', '2008–2015', '2016–2018', '2018–2021', '2021–'], ['2012–'], ['2004–2008', '2007', '2009–2010', '2009', '2011–2014', '2015–'], ['2014–2018', '2015', '2018–2019', '2020', '2021–2023'], ['2013–2018', '2017', '2018–2020', '2019', '2020', '2020–'], ['2019–2022', '2021', '2022–'], ['2015–2019', '2020–'], ['2017–2021', '2018', '2021–', '2022']],
      Team: [['Skeid', 'Odd'], ['Västra Frölunda', 'BK Häcken', 'Rosenborg', '→ Randers (loan)'], ['Viking', 'PAOK', 'Rosenborg'], ['Sogndal', 'Lillestrøm'], ['AGF', '→ Haugesund (loan)', 'Aalesund'], ['Viborg', '→ Randers (loan)', 'Horsens', 'AGF', 'Vendsyssel', '→ OB (loan)', 'OB', '→ Aalesund (loan)', 'Aalesund'], ['Follo', 'Fredrikstad', 'Follo', 'Halmstad', 'Sarpsborg 08', '→ Strømmen (loan)', 'Sandefjord'], ['Haugesund', 'Vard Haugesund', 'Virtus Lanciano', 'Treviso', '→ UR Namur (loan)', '→ Botev Plovdiv (loan)', '→ FH (loan)', 'Lecco', 'Vard Haugesund', 'Haugesund', 'Rosenborg', 'Saint-Étienne', 'Rosenborg', 'Häcken', 'Çaykur Rizespor', 'Haugesund'], ['Breiðablik', '→ Þór Akureyri (loan)', 'IFK Norrköping', '→ IF Sylvia (loan)', '→ Landskrona BoIS (loan)', '→ IF Sylvia (loan)', '→ Breiðablik (loan)', 'Bodø/Glimt'], ['Al Khaleej', 'Florø', 'Sogndal', 'Haugesund', 'Zulte Waregem'], ['Casa Sports', 'Molde', '→ Kristiansund (loan)', 'Kristiansund'], ['Drammen', 'Bærum', 'Lillestrøm', 'Mjøndalen', 'Strømsgodset', 'Kristiansund', 'Damac', 'Bodø/Glimt'], ['Gradina', 'Zvijezda Gradačac', 'Sloboda Tuzla', 'Brann', 'Sandefjord'], ['Diambars', 'Molde', '→ Mjøndalen (loan)', '→ Kristiansund (loan)', 'Kristiansund', 'Adanaspor', 'Kristiansund'], ['Moss', 'Fredrikstad', 'Brann', '→ Sarpsborg 08 (loan)', 'Şanlıurfaspor', 'Sarpsborg 08', 'Kristiansund'], ['Vålerenga', '→ Nybergsund (loan)', 'Start', 'Brann', 'Vålerenga', '→ Oostende (loan)', '→ HamKam (loan)', 'Sogndal', 'HamKam'], ['Falu', 'Brage', 'Degerfors', 'Elverum', 'Bodø/Glimt', 'Pyramids', 'Vålerenga'], ['AaB', 'Vendsyssel', 'Haugesund'], ['Harstad', 'Finnsnes', 'Tromsdalen', 'Tromsø'], ['Harstad', 'Finnsnes', 'Tromsdalen', 'Tromsø', 'Konradsen playing for Norway U21 in 2011', 'Personal information'], ['Viking', 'Bryne', 'Sarpsborg 08', 'Union SG', 'Sarpsborg 08'], ['Kristiansund'], ['Skeid', '→ Kjelsås (loan)', 'Lillestrøm', '→ KR Reykjavík (loan)', 'Odd', 'Rosenborg'], ['Sandefjord', '→ Nest-Sotra (on loan)', 'Odd', 'Sandnes Ulf', 'Sandefjord'], ['AIK', '→ Újpest (loan)', 'Rostov', '→ AIK (loan)', '→ Sarpsborg 08 (loan)', 'Sarpsborg 08'], ['Brøndby', '→ Hobro (loan)', 'Sarpsborg 08'], ['Fylkir', 'Strømsgodset'], ['Vålerenga', '→ HamKam (loan)', 'Standard Liège', '→ Vålerenga (loan)']],
      Apps: [['24', '9'], ['9', '106', '33', '1'], ['33', '10', '23'], ['50', '15'], ['31', '27', '9'], ['60', '0', '58', '100', '36', '11', '40', '14', '6'], ['nan', '44', '85', '53', '16', '14', '49'], ['0', '11', '0', '0', '3', '0', '18', '7', '12', '70', '63', '43', '55', '23', '12', '40'], ['17', '9', '2', '3', '12', '16', '8', '88'], ['nan', '36', '37', '44', '0'], ['26 [1]', '8', '27', '150'], ['nan', '68', '20', '70', '39', '39', '12', '42'], ['14', '48', '69', '34', '17'], ['11', '20', '10', '14', '59', '11', '21'], ['110', '80', '80', '27', '32', '48', '28'], ['47', '1', '84', '87', '35', '12', '15', '11', '7'], ['30', '59', '25', '14', '60', '16', '48'], ['3', '26', '18'], ['40', '26', '95', '94'], ['68', '57', '49', '5', '122', '7'], ['0', '164', '47', '22', '49'], ['202'], ['21', '7', '3', '8', '111', '205'], ['77', '12', '11', '24', '14'], ['77', '5', '6', '26', '10', '62'], ['16', '9', '9'], ['55', '32'], ['75', '15', '42', '11']],
      Goals: [['(22)', '(1)'], ['(0)', '(5)', '(0)', '(1)'], ['(4)', '(0)', '(2)'], ['(14)', '(6)'], ['(4)', '(4)', '(0)'], ['(0)', '(0)', '(5)', '(7)', '(0)', '(0)', '(2)', '(0)', '(0)'], ['nan', '(4)', '(35)', '(14)', '(1)', '(2)', '(14)'], ['(0)', '(4)', '(0)', '(0)', '(0)', '(0)', '(3)', '(0)', '(4)', '(24)', '(38)', '(3)', '(16)', '(8)', '(1)', '(8)'], ['(0)', '(0)', '(0)', '(0)', '(1)', '(1)', '(1)', '(1)'], ['nan', '(3)', '(14)', '(16)', '(0)'], ['(7)', '(0)', '(1)', '(6)'], ['nan', '(33)', '(0)', '(28)', '(4)', '(33)', '(2)', '(31)'], ['(0)', '(3)', '(4)', '(1)', '(0)'], ['(0)', '(0)', '(0)', '(6)', '(2)', '(0)', '(0)'], ['(22)', '(8)', '(21)', '(2)', '(1)', '(4)', '(2)'], ['(0)', '(0)', '(1)', '(1)', '(2)', '(0)', '(1)', '(0)', '(0)'], ['(20)', '(13)', '(4)', '(3)', '(15)', '(2)', '(11)'], ['(0)', '(1)', '(0)'], ['(1)', '(0)', '(9)', '(2)'], ['(11)', '(5)', '(3)', '(0)', '(20)', '(0)'], ['(0)', '(0)', '(0)', '(0)', '(0)'], ['(7)'], ['(0)', '(0)', '(0)', '(0)', '(0)', '(0)'], ['(9)', '(1)', '(0)', '(1)', '(0)'], ['(4)', '(0)', '(0)', '(2)', '(0)', '(9)'], ['(0)', '(0)', '(0)'], ['(0)', '(1)'], ['(20)', '(1)', '(2)', '(2)']]				
     };

   
    
    
     let counter = Math.floor(Math.random() * 10);  
     
     alert(wikiquizsettings.Player[counter])
    //SET RANDOM NUMBER CHOOSING THE PLAYER   
    this.careertext = this.add.text(900, 150, 'CAREER', {fill: 'white', font: "25px Cardo"}).setWordWrapWidth(700)

    this.yearstext = this.add.text(800, 200, 'YEARS', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)
    this.appstext = this.add.text(900, 200, 'APPS', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)
    this.glstext = this.add.text(960, 200, 'GLS', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)
    this.teamtext = this.add.text(1025, 200, 'TEAM', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)

    this.careernumbers = this.add.text(800, 230, wikiquizsettings.Career[counter], {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)	
    this.appsnumbers = this.add.text(910, 230, wikiquizsettings.Apps[counter], {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)
    this.goalsnumbers = this.add.text(960, 230, wikiquizsettings.Goals[counter], {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)
    this.teamnumbers = this.add.text(1015, 230, wikiquizsettings.Team[counter], {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)	

    //USERINPUT
    //SUBMIT CLICKES, DETTE NYE SKJER:
    this.inputbtn = this.add.text(525, 300, 'SUBMIT', {fill: 'white', font: "25px Cardo"}).setInteractive();
    this.totquestions = this.add.text(500, 150, 'Question nr 1', {fill: 'white', font: "25px Cardo"})  
    this.correctq = this.add.text(525, 400, 'Correct: 0/1', {fill: 'white', font: "25px Cardo"})    
   

    this.inputbtn.on('pointerup', () => {
      
      
      if (inputText.text == wikiquizsettings.Player[counter]) {
        alert('riktig') 
        
        this.questioncount = this.questioncount + 1
        alert(this.questioncount)
        let juju = this.questioncount+1

        //STOP HERE IF QUESTIONS REACHED
        


        this.totquestions.setText('Question nr ' + juju)

                
        counter = Math.floor(Math.random() * 20);
        alert(wikiquizsettings.Player[counter])              
        this.careernumbers.setText(wikiquizsettings.Career[counter])
        this.appsnumbers.setText(wikiquizsettings.Apps[counter])
        this.goalsnumbers.setText(wikiquizsettings.Goals[counter])
        this.teamnumbers.setText(wikiquizsettings.Team[counter]) 
        inputText.setText('')   
        
        this.correctqu = this.correctqu + 1
        alert(this.correctqu)
        let abab = this.correctqu
        this.correctq.setText('Score: ' + abab)
        if (juju > 0) {
          this.scene.start('WikiFinish');   
          quizscorestate.totalquestions = juju-1
          quizscorestate.totalcorrect = abab
        }
      }      

      if (counter==1) {
        if (inputText.text == 'Messi') {
          alert('riktig')
      }}
    });

    

     //SCOREBOARD
     let playerscore = {
      Player:'playername' ,
      currentquestion:this.questioncount,
      currentcorrect:1,
      totalquestions:wikiquizsettings.Player.length,
    };
    //ENTER BUTTON PRESSING
    

  

     

      
  

      

    
      
    


    

		}

    update() {}
    
    

   

    






	
}



