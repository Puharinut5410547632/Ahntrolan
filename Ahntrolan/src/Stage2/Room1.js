var Room1 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room/right.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        
        this.hitleftwall = false;
        this.hitrightwall = false;
        
        this.leftWallX = 300;
        this.rightWallX = 1150;
        

    },
    
    update: function() {

        if ( this.player.hitRightWall() ) this.goRight();
        
   },
    
    goRight: function() {
    console.log("Go right 2");
    this.player.hitrightwall = false;
    this.background = new Room2(this.layer, this.player);
    this.layer.changeStage(this.background, 100) ;
 
    },

    handleKeyDown: function( e ) {
        
    },

 });
