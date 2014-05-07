var VolframObject = cc.Sprite.extend({
    ctor: function( layer ) {
        
        this._super();
        this.initWithFile( 'images/Object/Idle Volfram.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        this.convo1 = false;
        this.convo3 = false;
        this.convo5 = false;
        this.layer = layer;
        
    },
    
    handleKeyDown: function( e ) {
      if ( VolframObject.KEYMAP[ e ] == 'action' ) {
          
         //Get point to decide stage of convo 
          var point = this.getConvoPoint( this.player );

          //1b
            if( ( point < 2 ) &&  ( this.convo1 ) ) {

                this.convo1B();
            
            }
          
          //1a
            else if( ( point < 2 ) && ( this.convo1 == false ) ) {
                
                cc.AudioEngine.getInstance().playEffect( 'sfx/dialogue/Volfram.ogg' );
                this.convo1A();
                

            }
          
            else if( ( point >= 2 ) && (point <= 3) && (this.convo3) ) {
                
                this.convo3B();
               
            }
          
            else if( ( point >= 2 ) && (point <= 3) && (this.convo3 == false) ) {
                
 
                this.convo3A();
            }
          
              
            else if( ( point >= 4 ) && (point <= 5) && (this.convo5 == false) ) {
                
                this.convo5A();
              
            }
          
            else if( ( point >= 4 ) && (point <= 5) && (this.convo5) ) {
                
                this.convo5B();
              
            }
          
          else if( ( point >= 6 ) ) {
                
              cc.AudioEngine.getInstance().playEffect( 'sfx/se/door.ogg' );
              this.layer.getGame().changeLayer();
            
              
            }
                 
              
        
            }
        
    },
    
    convo1A: function( ){
               
        var names = [//"Enfys", 
                     "Volfram", "Enfys", "Enfys","Volfram","Volfram","Volfram","Volfram","Volfram", "Volfram",
                     "Enfys", "Enfys", "Enfys", "Enfys"];
        var texts = [//"Hey, Volfy!",
                     "What is it this time?",
                     "I'm getting bored of waiting for Gwen.",
                     "Let's play or something.",
                     "Go bother Liel or something.",
                     "(The annoyed Daeni right here is Volfram Silverfang)",
                     "(I don't know why he often acts bitter toward me.)",
                     "(But he isn't really like that.)",
                     "(We just form a pair or something)",
                     "(You know, the sweet and the bitter.)",
                     "(Me? I'm the leader of this team)",
                     "(Sadly, the members don't seem to treat me like one.)",
                     "(Especially Volfram here.)",
                     "(I like it more this way though.)"];

        this.layer.createDialogueBox(names, texts);
        this.convo1 = true;
        this.player.increaseConvoPoint();
        
    },
    
    convo1B: function( ){
        
        var names = ["Volfram"];
        var texts = ["Okay, Enfys. Go bother Liel instead."];
        
        this.layer.createDialogueBox(names, texts);
        
    },
    
    convo3A: function( ){
        
        var names = ["Enfys", "Volfram", "Enfys", "Volfram", "Volfram", "Enfys", "Enfys", "Enfys",
                     "Enfys", "Volfram", "Volfram", "Liel", "Liel", "Liel", "Enfys", "Volfram", "Volfram"];
        var texts = ["Liel's busy.",
                     "So you decide to come back and bother me?",
                     "Exactly!",
                     "...",
                     "How about you go play with the old toys instead?",
                     "But there's nothing of interest in there.",
                     "The former owner didn't buy anything nice.",
                     "Oh, that reminds me.",
                     "Whatever happened to the former owner anyway?",
                     "How am I supposed to know?",
                     "If you want information, go ask Liel instead.",
                     "I hear you want to know about the former owner.",
                     "I guess I can try and find something.",
                     "Give me sometime though.",
                     "Guess I will go back to rummaging the toybox again then.",
                     "Just make sure to keep the floor clean this time",
                     "Wouldn't want Gwen to start bitching again."];
        
        this.layer.createDialogueBox(names, texts);
        
        this.convo3 = true;
        this.player.increaseConvoPoint();
    
    },
    
    convo3B: function( ){
        
        var names = ["Volfram", "Enfys"];
        var texts = ["Erm, yeah. Go and bother the box of toy instead.",
                     "Fine..."];
        
        this.layer.createDialogueBox(names, texts);
    
    },
    
    convo5A: function( ){

        var names = ["Enfys", "Enfys", "Volfram", "Volfram", "Volfram", "Volfram", "Enfys"];
        var texts = ["Reporting in!",
                     "I'm done rummaging the toybox and got absolutely nothing.",
                     "...",
                     "Was that really necessary?",
                     "W-wait, never mind. Don't answer that.",
                     "Maybe Liel found something. Go bother her.",
                     "Kay."];
        
        this.layer.createDialogueBox(names, texts);
        this.convo5 = true;
        this.player.increaseConvoPoint();
    },
    
    convo5B: function( ){
        
        var names = ["Volfram"];
        var texts = ["What? Are you here to report that you haven't talked to Liel?"];
        
        this.layer.createDialogueBox(names, texts);
        
    },
    
    convo6A: function( ){
        
        var names = ["Volfram"];
        var texts = ["Get a move on. The door's right there."];
        
        this.layer.createDialogueBox(names, texts);
        
    },
    
    getConvoPoint: function( player ) {
        
        var point = player.getConvoPoint();
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