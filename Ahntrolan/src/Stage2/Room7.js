var Room7 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room/left.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        this.hitleftwall = false;
        this.hitrightwall = false;
        this.goup = false;
        this.godown = false;
        
        this.leftWallX = 0;
        this.rightWallX = 800;
        

    },
    
    update: function() {

        if ( this.player.hitLeftWall() ) this.goLeft();
        
   },
    
    
    goLeft: function() {
       console.log("Go left 6");   
    this.player.hitleftwall = false;
    this.background = new Room6(this.layer, this.player);
    this.layer.changeStage(this.background, 1050) ;
        
    },
    
    handleKeyDown: function( e ) {
        
    },
        


 });
