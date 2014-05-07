var DialogueBox = cc.Node.extend({
    ctor: function( layer, name, text ) {
   
        this._super();
            
        this.layer = layer;
        this.nameTree = name;
        this.textTree = text;
        
        //For name
        this.nameDiaBox = cc.Sprite.create( 'images/Object/Topdiabox.png' );
        this.addChild( this.nameDiaBox, 2 );
        this.nameDiaBox.setPosition( new cc.Point( 640, 180 ) );
        //For Text
        this.textDiaBox = cc.Sprite.create( 'images/Object/Bottomdiabox.png' );
        this.addChild( this.textDiaBox, 2 );
        this.textDiaBox.setPosition( new cc.Point( 640, 100 ) );

        //Cursor
        
        this.cursor = new Cursor();
        this.addChild (this.cursor, 3);
        this.cursor.setPosition ( new cc.Point ( 870, 80 ) );
        
        this.shadow = cc.Sprite.create( 'images/Object/cursor/shadow.png' );
        this.addChild(this.shadow, 2);
        this.shadow.setPosition (new cc.Point ( 857, 52 ) );
            
        this.point = 0;
        
        this.displayName();
        this.displayText();
        this.displayPic();
        
        this.point = 1;
        
        
    },
    
    handleKeyDown: function( e ) {
        

        
        if ( DialogueBox.KEYMAP[ e ] == 'action' ){

           
            cc.AudioEngine.getInstance().playEffect( 'sfx/se/dialogue.ogg' );
            
            this.cleanScreen();
            
            if ( this.point < this.nameTree.length ){
                
                //Name
                this.displayName();
                
                //Text
                this.displayText();
                
                //Pic
                this.displayPic();
                
                this.point++;
            }
        
            else {
                this.layer.setWalkState();
                this.layer.removeChild(this);
            }
        }
        },
    
    cleanScreen : function ( ) {
        
        this.removeChild(this.charName);
        this.removeChild(this.charText);
        this.removeChild(this.textPic);
        
    },
    
    displayName : function() {
    
        this.charName = cc.LabelTTF.create( this.nameTree[this.point], 'Arial', 20 );
        this.addChild( this.charName, 3);
        this.charName.setPosition( new cc.Point( 640,175 ) );
        
    },
    
    displayText : function() {
        
        this.charText = cc.LabelTTF.create( this.textTree[this.point], 'Arial', 17.5 );
        this.charText.setAnchorPoint( new cc.Point ( 0, 0.5 ) );
        this.addChild( this.charText, 3);
        this.charText.setPosition( new cc.Point( 403,135 ) );
        
    },
    
    displayPic : function() {
        
        this.textPic = cc.Sprite.create('images/dialogue/' + this.nameTree[this.point] + '.png' );
        this.addChild( this.textPic, 1 );
        this.textPic.setPosition( new cc.Point( 653, 200 ) );
        
    },

});

DialogueBox.KEYMAP = {}
DialogueBox.KEYMAP[cc.KEY.enter] = 'action';