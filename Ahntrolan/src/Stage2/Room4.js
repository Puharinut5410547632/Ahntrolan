var Room4 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room/lefttopright.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        this.godown = false;
        
        this.leftWallX = 300;
        this.rightWallX = 900;
        

        this.talkBox = new TalkBox();
        this.talkBox.setPosition( new cc.Point( 600, 325 ) );
        this.addChild( this.talkBox , 4 );
        this.talkBox.setVisible(false);
        
    },
    
    update: function() {

        this.checkbox();
   },
    
     checkTrigger: function() {
     
         if( this.player.statueentconvo == false ) { var pos = this.player.getPosition()
         if( (pos.x >= 400) && (pos.x <= 450) ) this.triggerConvo();
                                               }
    },
    
    checkbox: function() {
    
    var pos = this.player.getPosition();
    if( (pos.x >= 500) && (pos.x<= 700) ) { this.talkbox.setVisible(true); this.goup = true;}
    else  { this.talkbox.setVisible(false); this.goup = false;}
    
    },
    
    
    goRight: function() {
     
        console.log("Go right 5");
    this.player.hitrightwall = false;
    this.background = new Room5(this.layer, this.player);
    this.layer.changeStage(this.background, 100) ;
 
    },
    
    goLeft: function() {
        
        console.log("Go left 2");
    this.player.hitleftwall = false;
    this.background = new Room2(this.layer, this.player);
    this.layer.changeStage(this.background, 1050) ;
        
    },
    
    handleKeyDown: function( e ) {
        
    },

      triggerConvo: function( ){
        
      //  console.log ("Initiate Dialogue");
        this.player.statueentconvo = true;
        var names = ["Enfys", "Enfys", "Enfys", "Gwenette"
                     ];
        var texts = ["Hmmm",
                     "I remember seeing a strange statue beyond this track.",
                     "It might have something to do with the seal.",
                     "Let's give it a look then."
                     
                    ];
        
        this.layer.createDialogueBox(names, texts);
        
        
    },
        


 });
