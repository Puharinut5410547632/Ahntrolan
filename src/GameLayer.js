var GameLayer = cc.LayerColor.extend({
    init: function() {
        
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.scheduleUpdate();
        
        this.background = new Background();
        this.background.setPosition ( new cc.Point (  screenWidth/2, screenHeight/2 ) ) ;
        this.addChild( this.background , 1 );
        
        //Player
        this.player = new Player();
        this.player.setPosition( new cc.Point( 400, 75) );
        this.addChild( this.player , 3 );
        this.player.scheduleUpdate();
        
        //Toybox
        this.toyboxObject = new ToyboxObject();
        this.toyboxObject.setPosition( new cc.Point( 60, 30) );
        this.toyboxLeftX = this.toyboxObject.getPosition().x - 40;
        this.toyboxRightX = this.toyboxObject.getPosition().x + 40;
        this.addChild( this.toyboxObject , 4 );
        
        //Volfram
        this.volframObject = new VolframObject();
        this.volframObject.setPosition( new cc.Point( 270, 175) );
        this.volframLeftX = this.volframObject.getPosition().x - 40;
        this.volframRightX = this.volframObject.getPosition().x + 40;
        this.addChild( this.volframObject , 2 );
        
        //Liel
        this.lielObject = new LielObject();
        this.lielObject.setPosition( new cc.Point( 720, 175) );
        this.lielLeftX = this.lielObject.getPosition().x - 100;
        this.lielRightX = this.lielObject.getPosition().x - 20;
        this.addChild( this.lielObject , 2 );
        
        //Talk box
        this.talkBox = new TalkBox();
        this.talkBox.setPosition( new cc.Point( this.player.getPosition().x+75, 375 ) );
        this.addChild( this.talkBox , 4 );
        this.talkBox.setVisible(false);
        
        this.setKeyboardEnabled( true );
        console.log( 'GameLayer created' );
        return true;
    },
    
    onKeyDown: function( e ) {
        this.player.handleKeyDown( e );
    },

    onKeyUp: function( e ) {
        this.player.handleKeyUp( e );
        var playerPos = this.player.getPosition()
//        console.log(playerPos.x );
//        console.log(playerPos.x >= this.volframLeftX );
//        console.log(playerPos.x <= this.volframRightX);
    },
    
    update: function() {
    var playerPos = this.player.getPosition()
        if(checkPlayerRightWallCollision(playerPos.x, this.background.rightWallX ))
        this.player.hitrightwall = true;
           else if (checkPlayerLeftWallCollision (playerPos.x, this.background.leftWallX ))
        this.player.hitleftwall = true;
        
        else  this.player.noWall();
        
        if( 
            ( playerPos.x >= this.volframLeftX && playerPos.x <= this.volframRightX) 
        || (playerPos.x >= this.lielLeftX && playerPos.x <= this.lielRightX)
        || (playerPos.x >= this.toyboxLeftX && playerPos.x <= this.toyboxRightX) ) {
         this.talkBox.setPosition( new cc.Point( this.player.getPosition().x+75, 375 ) );
         this.talkBox.setVisible(true);
        }
        else this.talkBox.setVisible(false);
    },
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

