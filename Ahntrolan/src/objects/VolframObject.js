var VolframObject = cc.Sprite.extend({
    ctor: function( layer ) {
        this._super();
        this.initWithFile( 'images/Object/Idle Volfram.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        this.convo1 = false;
        this.convo2 = false;
        this.convo3 = false;
        this.layer = layer;
    },
    
    handleKeyDown: function( e ) {
      if ( VolframObject.KEYMAP[ e ] == 'action' ) {
          
         //Get point to decide stage of convo 
          var point = this.getconvoPoint( this.player );
          
            if( ( point == 0 ) &&  ( this.convo1) ) {
                console.log("Volfram : A no is a no. Go bother Liel instead.");
                this.player.convoPoint++;
            }
          
            else if( ( point == 0 ) && ( this.convo1 == false ) ) {
               this.convo1A();
            }
          
            else if ( point == 1 ) {
              
                console.log("Volfram : Woof..woof.");
//        this.layer.getGame().changeLayer();
              
        
            }
          
        }
        
    },
    
    convo1A: function( ){
               
        var names = ["Enfys", "Volfram", "Enfys", "Enfys", "Volfram"];
        var texts = ["Hey, Volfy!", "What is it this time?",
                     "I'm getting bored of waiting for Gwen.",
                     "Let's play or something.",
                     "Go bother Liel or something."];

        this.layer.createDialogueBox(names, texts);
        this.convo1 = true;
        
    },
    
    getconvoPoint: function( player ) {
        
        var point = player.getconvoPoint();
        return point;
        
    },
    
    setPlayer: function ( player ) {
        
        this.player = player;
        
    },
    
    setGameLayer: function ( layer ) {
        
        this.layer = layer;
        
    },

});

VolframObject.KEYMAP = {}
VolframObject.KEYMAP[cc.KEY.enter] = 'action';