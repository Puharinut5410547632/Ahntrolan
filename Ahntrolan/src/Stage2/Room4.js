var Room4 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room/down.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        this.godown = false;
        this.talkstatue = false;
        this.talkA = false;
        this.leftWallX = 300;
        this.rightWallX = 800;
        

        this.talkBox = new TalkBox();
        this.talkBox.setPosition( new cc.Point( 600, 325 ) );
        this.addChild( this.talkBox , 4 );
        this.talkBox.setVisible(false);
        
    },
    
    update: function() {

        this.checkbox();
        
   },
    
    
    checkbox: function() {
    
    var pos = this.player.getPosition();
    if( (pos.x >= 500) && (pos.x<= 650) ) {
        
        this.allowGoDown();
        
    }
        
        else if (pos.x >= 750)
        {
            
        this.allowTalk();
            
        }
        
    else  { 

        this.talkBox.setVisible(false);
        this.godown = false;
        this.talkstatue = false;}
    
    },
    
    allowGoDown: function() {
        
        this.talkBox.setPosition( new cc.Point( 600, 325 ) );
        this.talkBox.setVisible(true);
        this.godown = true;
        
    },
    
      allowTalk: function() {
        
        this.talkBox.setPosition( new cc.Point( 1000, 450 ) );
        this.talkBox.setVisible(true);
        this.talkstatue = true;
        
    },
    
    handleKeyDown: function( e ) {

            if ( Room4.KEYMAP[ e ] == 'action' ) {
            console.log(this.talkstatue);
             if(this.godown)   this.goDown( );
             if(this.talkstatue) this.convo();
                
            }

    },
    
    convo : function ( ){
    
        console.log("Convo is working");
        if(this.talkA) this.convoB();
        else this.convoA();
        
    },
    
    convoA : function ( ){
        
        this.talkA = true;
        var names = ["Enfys", "Enfys", "Statue", "Volfram", "Statue", "Statue",
                     "Enfys", "Enfys", "Liel", "Gwenette"
                     ];
        var texts = ["There's the out-of-place statue.",
                     "What's an angel statue doing in this place anyway?",
                     "Heed my call, those who seek power.",
                     "Great, it can speak.",
                     "If you wish to break the seal, then prove thy worth",
                     "Solve the puzzle and the way shall be opened.",
                     "Damn, puzzle!",
                     "I give up.",
                     "We just need to find these puzzles and answer them.",
                     "Let's get a move on and get this over quickly."
                    ];
        
        this.layer.createDialogueBox(names, texts);
        
    },
    
    convoB : function ( ){
        
        var names = ["Gwenette"
                     ];
        var texts = ["Let's get a move on."
                    ];
        
        this.layer.createDialogueBox(names, texts);
        
    },
    
    goDown: function() {
        
         this.background = new Room3(this.layer, this.player);
    this.layer.changeStage(this.background, 545) ;
        
    },


 });

Room4.KEYMAP = {}
Room4.KEYMAP[cc.KEY.enter] = 'action';