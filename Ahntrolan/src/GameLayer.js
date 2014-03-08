var GameLayer = cc.LayerColor.extend({
    init: function() {
        
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.scheduleUpdate();
        
        this.background = new Background();
        this.background.setPosition ( new cc.Point (  screenWidth/2, screenHeight/2 ) ) ;
        this.addChild( this.background , 1 );
        
        this.player = new Player();
        this.player.setPosition( new cc.Point( 100, 75) );
        this.addChild( this.player , 2 );
        this.player.scheduleUpdate();
        
        this.setKeyboardEnabled( true );
        console.log( 'GameLayer created' );
        return true;
    },
    
    onKeyDown: function( e ) {
        this.player.handleKeyDown( e );
    },

    onKeyUp: function( e ) {
        this.player.handleKeyUp( e );
//        var playerPos = this.player.getPosition()
//        console.log(checkPlayerLeftWallCollision (playerPos.x, this.background.leftWallX ) );
    },
    
    update: function() {
    var playerPos = this.player.getPosition()
        if(checkPlayerRightWallCollision(playerPos.x, this.background.rightWallX ))
        return this.player.hitrightwall = true;
           else if (checkPlayerLeftWallCollision (playerPos.x, this.background.leftWallX ))
            return this.player.hitleftwall = true;
        
        else  this.player.noWall();
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

