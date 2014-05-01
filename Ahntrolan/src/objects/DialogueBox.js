var DialogueBox = cc.Node.extend({
    ctor: function( layer, name, text ) {
   
        this._super();
            
        this.layer = layer;
        this.nameTree = name;
        this.textTree = text;
        
        //For name
        this.nameDiaBox = cc.Sprite.create( 'images/Object/Topdiabox.png' );
        this.addChild( this.nameDiaBox, 2 );
        this.nameDiaBox.setPosition( new cc.Point( 512, 250 ) );
        //For Text
        this.textDiaBox = cc.Sprite.create( 'images/Object/Bottomdiabox.png' );
        this.textDiaBox.setPosition( new cc.Point( 512, 130 ) );
        this.addChild( this.textDiaBox, 2 );
        
        this.charName = cc.LabelTTF.create(this.nameTree[0], 'Arial', 25 );
        this.charText = cc.LabelTTF.create(this.textTree[0], 'Arial', 25 );
        
        this.addChild( this.charName, 3 );
        this.charName.setPosition( new cc.Point( 512,245 ) );
        this.addChild( this.charText, 3 );
        this.charText.setAnchorPoint( new cc.Point ( 0, 0.5 ) );
        this.charText.setPosition( new cc.Point( 165,185 ) );
       // this.pic = Dialoguebox.pic.Enfys;
        
        this.point = 1;
        
    },
    
    handleKeyDown: function( e ) {
        

        
        if ( DialogueBox.KEYMAP[ e ] == 'action' ){

            this.removeChild(this.charName);
            this.removeChild(this.charText);
            
            if ( this.point < this.nameTree.length ){
                console.log(this.textTree[this.point]);
                this.charName = cc.LabelTTF.create( this.nameTree[this.point], 'Arial', 25 );
                this.addChild( this.charName, 3);
                this.charName.setPosition( new cc.Point( 512,245 ) );
                this.charText = cc.LabelTTF.create( this.textTree[this.point], 'Arial', 25 );
                this.charText.setAnchorPoint( new cc.Point ( 0, 0.5 ) );
                this.addChild( this.charText, 3);
                this.charText.setPosition( new cc.Point( 165,185 ) );
                this.point++;
            }
        
            else {
                this.layer.setWalkState();
                this.layer.removeChild(this);
            }
        }
        },

});

DialogueBox.KEYMAP = {}
DialogueBox.KEYMAP[cc.KEY.enter] = 'action';