var ToyboxObject = cc.Sprite.extend({
    ctor: function( layer ) {
        this._super();
        this.initWithFile( 'images/Object/Toybox.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        this.convo4 = false;
        this.layer = layer;
    },
    
    handleKeyDown: function( e ) {
      if ( ToyboxObject.KEYMAP[ e ] == 'action' ) {
          
          var point = this.getConvoPoint( this.player );
          
           if( ( point < 3 ) ) {

                this.convo1A();
            
            }


            else if( ( point >=3 ) && ( this.convo4 ) ) {

                this.convo4B();    
            
            }
          
           else if( ( point >=3 ) && ( this.convo4 == false ) ) {

                this.convo4A();    
            
            }
      }
        
    },
    
    convo1A: function( ){
        
        var names = ["Enfys", "Enfys"];
        var texts = ["A box with a bunch of boring old toys.",
                     "I have probably rummaged through this over ten times today."];
        
        this.layer.createDialogueBox(names, texts);
        
    },
    
    convo4A : function( ){
        
        var names = ["Enfys", "Enfys", "Enfys", "Enfys", "Volfram", "Enfys", "Enfys",
                     "Enfys", "Gwenette", "Gwenette", "Gwenette", "Gwenette", "Gwenette"];
        var texts = ["Urgh, there's really nothing fun in here.",
                     "Poker, chess, plastic dolls?",
                     "How the heck can I play with these alone?",
                     "This is all Volfram's fault for being so bitter.",
                     "Say that again and I will break your horn.",
                     "Please, no touching the horn.",
                     "I wish Gwen comes back soon.",
                     "(You may notice the name by now.)",
                     "(Gwenette Soufflant.)",
                     "(The saetra is probably the most responsible one.)",
                     "(Today, the Church contacted us.)",
                     "(She left early to retrieve our mission.)",
                     "(The whole team is currently waiting for her.)"];
        
        this.layer.createDialogueBox(names, texts);
        this.convo4 = true;
        this.player.increaseConvoPoint();
        
    },
    
    convo4B: function( ){
      
        var names = ["Enfys"];
        var texts = ["Why do I even bother."];
        
        this.layer.createDialogueBox(names, texts);
    },
    
    getConvoPoint: function( player ) {
        
        var point = player.getConvoPoint();
        return point;
        
        //point = 4
        
    },
    
    setPlayer: function ( player ) {
        
        this.player = player;
        
    },
    
    setGameLayer: function ( layer ) {
        
        this.layer = layer;
        
    },


});

ToyboxObject.KEYMAP = {}
ToyboxObject.KEYMAP[cc.KEY.enter] = 'action';