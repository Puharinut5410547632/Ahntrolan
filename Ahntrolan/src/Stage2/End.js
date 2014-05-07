var End = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/stages/end.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
     cc.AudioEngine.getInstance().playMusic( 'sfx/bgm/int1.ogg', true );
        
        this.line1 = cc.LabelTTF.create( "And so, The team made it out of the forest.", 'Arial', 30 );
        this.addChild( this.line1);
        this.line1.setPosition( new cc.Point( 640,500 ) );
        
        this.line2 = cc.LabelTTF.create( "Making their way toward Richtofen's Castle.", 'Arial', 30 );
        this.addChild( this.line2);
        this.line2.setPosition( new cc.Point( 640,440 ) );
        
        this.line3 = cc.LabelTTF.create( "A battle yet to be told.", 'Arial', 30 );
        this.addChild( this.line3);
        this.line3.setPosition( new cc.Point( 640,380 ) );
        
        this.line4 = cc.LabelTTF.create( "This marks the end of this Demo.", 'Arial', 30 );
        this.addChild( this.line4);
        this.line4.setPosition( new cc.Point( 640,320 ) );
        
        this.line5 = cc.LabelTTF.create( "Thank you for playing.", 'Arial', 30 );
        this.addChild( this.line5);
        this.line5.setPosition( new cc.Point( 640,260 ) );
        
        this.line6 = cc.LabelTTF.create( "Enjoy the music.", 'Arial', 30 );
        this.addChild( this.line6);
        this.line6.setPosition( new cc.Point( 640,200 ) );
        
        this.line7 = cc.LabelTTF.create( "Gine - Chapter 0 : Complete", 'Arial', 30 );
        this.addChild( this.line7);
        this.line7.setPosition( new cc.Point( 640,140 ) );
    },
    
});