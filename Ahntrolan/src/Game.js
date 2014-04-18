var Game = cc.LayerColor.extend({
    init: function() {
        
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.scheduleUpdate();
        
        this.gameLayer = new GameLayer( this );
        this.gameLayer.setPosition ( new cc.Point (  0, 0 ) ) ;
        this.addChild( this.gameLayer );
        this.gameLayer.scheduleUpdate();
        
        
        this.setKeyboardEnabled( true );
        console.log( 'GameLayer created' );
        return true;
        
    },
    
        changeLayer: function ( ) {
        
        this.removeAllChildren();
            
        this.gameLayer = new GameLayer2( );
        this.gameLayer.setPosition ( new cc.Point (  0, 0 ) ) ;
        this.addChild( this.gameLayer );
        this.gameLayer.scheduleUpdate();
            
    },
    
        onKeyDown: function( e ) {
         
            this.gameLayer.onKeyDown( e );
         
    },
    
        onKeyUp: function( e ) {
        
            this.gameLayer.onKeyUp( e );
            
    },
    
});
        
    
    var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new Game();
        layer.init();
        this.addChild( layer );
    }
});
