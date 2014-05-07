var Room2 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room2/b.png' );
        this.setPosition(new cc.Point ( 600, 600) );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        this.foreground = cc.Sprite.create( 'images/Stages/Room2/f.png' );
        this.foreground.setAnchorPoint( cc.p( 0, 0 ) );
        this.addChild(this.foreground, 2);
     

        
        this.endpoint = new EndPoint() ;
        this.endpoint.setAnchorPoint( cc.p( 0, 0 ) );
        this.addChild( this.endpoint, 1) ;
        this.endpoint.setPosition(new cc.Point( 460, 80) );
        this.endpoint.setVisible(false);
        if( this.player.puzzleendconvo == false ) this.endpoint.setVisible(true);
        
        this.hitleftwall = false;
        this.hitrightwall = false;
        this.goup = false;
        this.leftWallX = 0;
        this.rightWallX = 1150;
        
         this.movebox = new TalkBox();
        this.movebox.setAnchorPoint( cc.p( 0, 0 ) );
        this.addChild( this.movebox , 4 );
        this.movebox.setPosition( new cc.Point( 600, 325 ) );

        this.movebox.setVisible(false);

    },
    
    update: function() {
        

        if( this.player.hitLeftWall() ) this.goLeft();
        if ( this.player.hitRightWall() ) this.goRight();
        this.checkTrigger();
        this.checkbox();
        
   },
    
     checkbox: function() {
    
        var pos = this.player.getPosition();
        if( (pos.x >= 500) && (pos.x<= 650) && ( this.player.puzzleendconvo ) ) { this.movebox.setVisible(true); this.goup = true;}
        else  this.noUp();
        
    },
    
    goUp: function() {
        
         this.layer.finishGame();
        
    },
    
    noUp: function() {
     
        this.movebox.setVisible(false);
        this.goup = false;
    },
    
    
    checkTrigger: function() {
     
        var pos = this.player.getPosition()
         if( (pos.x >= 300) && (pos.x <= 400) && (this.player.startEPconvo == false) ) this.triggerConvoA();
         if( (pos.x >= 600) && (this.player.endEPconvo == false) &&  (this.player.puzzleendconvo) ) this.triggerConvoB();
        
    },
    
      
    goRight: function() {
     console.log("Go right 3");   
    this.player.hitrightwall = false;
    this.background = new Room3(this.layer, this.player);
    this.layer.changeStage(this.background, 100) ;
 
    },
    
    
    goLeft: function() { 
        console.log("Go left 1");
        this.player.hitleftwall = false;
    this.background = new Room1(this.layer, this.player);
    this.layer.changeStage(this.background, 1050) ;
 
    },
    

    
    handleKeyDown: function( e ) {
        
            if ( Room2.KEYMAP[ e ] == 'action' ) {
                
         if(this.goup)   this.goUp( );
           
        }
        
    },
    
    triggerConvoA: function( ){
        
        this.player.startEpConvoFinish();
        var names = ["Volfram", "Volfram","Enfys","Volfram","Enfys","Volfram",
                     "Liel", "Volfram", "Liel", "Liel", "Liel", "Liel", "Liel", "Gwenette",
                      "Gwenette", "Gwenette", "Volfram", "Volfram", "Volfram", "Enfys", "Enfys",
                      "Liel", "Liel", "Liel", "Volfram", "Enfys", "Gwenette", "Gwenette",
                      "Gwenette", "Enfys", "Enfys", "Enfys", "Enfys", "Volfram", "Volfram"
                     ];
        var texts = ["Ooookaaayyy....",
                     "What the shit is that?",
                     "It's the ending point of this demo!",
                     "What do you mean by that?",
                     "I don't know either.",
                     "Next time, shut up.",
                     "This must be the seal I once read about.",
                     "Care to explain?",
                     "We left Greenman's hill and entered Celentine forest.",
                     "The forest used to house a great magical item.",
                     "A powerful relic or some sort.",
                     "The relic was hidden and sealed to prevent misuse.",
                     "Something or someone must have triggered the seal.",
                     "Celentine forest was where the caravan was attacked.",
                     "It must be the Gate of Deceit's doing.",
                     "Either that or the item the caravan was carrying.",
                     "What now then?",
                     "This path leads to Richtofen castle.",
                     "We have to get through here somehow.",
                     "That's a pretty huge gap there.",
                     "Can't we side step the seal?",
                     "I wouldn't do that, Enfys.",
                     "Although the visual is small, it covers a huge range.",
                     "You either die, or get stuck in another dimension.",
                     "Please take the first step, Enfys.",
                     "Nah, the honor is yours, Volfram.",
                     "Standing here won't get us anywhere.",
                     "Let's try exploring the forest.",
                     "We might able to undo the seal somehow.",
                     "I once explored this forest.",
                     "I might be able to remember the path around here.",
                     "Just make sure to grab a pen and paper just in case.",
                     "A map will help a lot.",
                     "I don't want to trust you, Enfys.",
                     "But I guess this is our only choice."
                    ];
        
        this.layer.createDialogueBox(names, texts);
        
        
    },
    
     triggerConvoB: function( ){
        
        this.player.endEPconvo = true;
        var names = ["Enfys",
                     "Volfram",
                     "Volfram",
                     "Enfys"
                     ];
        var texts = ["The seal is gone!",
                     "Let's get a move on.",
                     "We have already wasted too much time here.",
                     "Yes sir!"
                    ];
        
        this.layer.createDialogueBox(names, texts);
        
        
    },
        
  

 });
                     
Room2.KEYMAP = {}
Room2.KEYMAP[cc.KEY.enter] = 'action';
