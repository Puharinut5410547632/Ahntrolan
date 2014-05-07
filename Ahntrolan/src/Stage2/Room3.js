var Room3 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room/lefttopright.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
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

        if ( this.player.hitRightWall() ) this.goRight();
        if ( this.player.hitLeftWall() ) this.goLeft();
        this.checkTrigger();
        this.checkbox();
   },
    
     checkTrigger: function() {
     
         if( this.player.statueentconvo == false ) { var pos = this.player.getPosition()
         if( (pos.x >= 300) && (pos.x <= 400) ) this.triggerConvo();
                                               }
    },
    
    checkbox: function() {
    
        var pos = this.player.getPosition();
        if( (pos.x >= 500) && (pos.x<= 650) ) { this.movebox.setVisible(true); this.goup = true;}
        else  this.noUp();
        
    },
    
    noUp: function() {
     
        this.movebox.setVisible(false);
        this.goup = false;
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
    
    goUp: function() {
        
         this.background = new Room4(this.layer, this.player);
    this.layer.changeStage(this.background, 545) ;
        
    },
    
    handleKeyDown: function( e ) {
        
        if(this.goup) {
        if ( Room3.KEYMAP[ e ] == 'action' ) {
                
            this.goUp( );
            }
    }
    },

      triggerConvo: function( ){
        
      //  console.log ("Initiate Dialogue");
        this.player.statueentconvo = true;
        var names = ["Enfys", "Enfys", "Enfys", "Enfys", "Gwenette"
                     ];
        var texts = ["Hmmm...",
                     "If I remember correctly.",
                     "There should be a strange statue beyond this track.",
                     "It might have something to do with the seal.",
                     "Let's give it a look then."                     
                    ];
        
        this.layer.createDialogueBox(names, texts);
        
        
    },
        


 });

Room3.KEYMAP = {}
Room3.KEYMAP[cc.KEY.enter] = 'action';