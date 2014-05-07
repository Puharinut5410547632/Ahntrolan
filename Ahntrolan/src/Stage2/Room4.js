var Room4 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room/down.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        this.godown = false;
        
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
        this.talkBox.setVisible(true);
        this.godown = true;
    }
    else  { this.talkBox.setVisible(false); this.godown = false;}
    
    },
    
    
    handleKeyDown: function( e ) {
        
        if(this.godown) {
            
            if ( Room4.KEYMAP[ e ] == 'action' ) {
                
                this.goDown( );
                
            }
        }
    },
    
    goDown: function() {
        
         this.background = new Room3(this.layer, this.player);
    this.layer.changeStage(this.background, 545) ;
        
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

Room4.KEYMAP = {}
Room4.KEYMAP[cc.KEY.enter] = 'action';