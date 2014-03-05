var GameLayer = cc.LayerColor.extend({
    init: function() {
        
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.player = new Player();
        this.player.setPosition( new cc.Point( 100, 100) );
        this.addChild( this.player );
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
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

