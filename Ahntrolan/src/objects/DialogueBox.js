var DialogueBox = cc.Node.extend({
    ctor: function( layer, name, text ) {
   
        this._super();
            
        this.layer = layer;
        this.nameTree = name;
        this.textTree = text;
        
        //For name
        this.nameDiaBox = cc.Sprite.create( 'images/Object/Topdiabox.png' );
        this.addChild( this.nameDiaBox, 2 );
        this.nameDiaBox.setPosition( new cc.Point( 512, 220 ) );
        //For Text
        this.textDiaBox = cc.Sprite.create( 'images/Object/Bottomdiabox.png' );
        this.addChild( this.textDiaBox, 2 );
        this.textDiaBox.setPosition( new cc.Point( 512, 100 ) );
        
        //Initial Text
        this.charName = cc.LabelTTF.create(this.nameTree[0], 'Arial', 25 );
        this.charText = cc.LabelTTF.create(this.textTree[0], 'Arial', 25 );
        
        this.addChild( this.charName, 3 );
        this.charName.setPosition( new cc.Point( 512,215 ) );
        this.addChild( this.charText, 3 );
        this.charText.setAnchorPoint( new cc.Point ( 0, 0.5 ) );
        this.charText.setPosition( new cc.Point( 165,155 ) );
    
     //   var piclocation = 'images/dialogue/' + this.nameTree[0] + '.png';
       
        this.textPic = cc.Sprite.create('images/dialogue/' + this.nameTree[0] + '.png' );
        this.addChild( this.textPic, 1 );
        this.textPic.setPosition( new cc.Point( 512, 200 ) );
        
        this.point = 1;
        
    },
    
    handleKeyDown: function( e ) {
        

        
        if ( DialogueBox.KEYMAP[ e ] == 'action' ){

            this.removeChild(this.charName);
            this.removeChild(this.charText);
            this.removeChild(this.textPic);
            
            if ( this.point < this.nameTree.length ){
                
                //Name
                this.charName = cc.LabelTTF.create( this.nameTree[this.point], 'Arial', 25 );
                this.addChild( this.charName, 3);
                this.charName.setPosition( new cc.Point( 512,215 ) );
                
                //Text
                this.charText = cc.LabelTTF.create( this.textTree[this.point], 'Arial', 25 );
                this.charText.setAnchorPoint( new cc.Point ( 0, 0.5 ) );
                this.addChild( this.charText, 3);
                this.charText.setPosition( new cc.Point( 165,155 ) );
                
                //Pic
                this.textPic = cc.Sprite.create('images/dialogue/' + this.nameTree[this.point] + '.png' );
                this.addChild( this.textPic, 1 );
                this.textPic.setPosition( new cc.Point( 512, 200 ) );
                
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