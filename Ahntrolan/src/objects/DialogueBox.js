var Dialoguebox = cc.Node.extend({
    ctor: function( ) {
        this._super();
        
        //For name
        this.nameDiaBox = cc.Sprite.create( 'images/Topdiabox.png' );
        this.addChild( this.nameDiaBox, 2 );
//      this.nameDiabox.setPosition( new cc.Point( 0, -100 ) );
        
        //For Text
        this.textDiaBox = cc.Sprite.create( 'images/Bottomdiabox.png' );
        this.addChild( this.textDiaBox, 2 );
        
//      this.textDiabox.setPosition( new cc.Point( 0, -100 ) );
        

        this.setAnchorPoint( cc.p( 0, 0 ) );
    },
    
    handleKeyDown: function( e ) {
      if ( VolframObject.KEYMAP[ e ] == 'action' ) {
          console.log("What is it?");
      }
        
        },

});

Dialogue.KEYMAP = {}
Dialogue.KEYMAP[cc.KEY.enter] = 'action';