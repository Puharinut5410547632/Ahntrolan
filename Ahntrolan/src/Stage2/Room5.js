var Room5 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room/lefttopright.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        this.hitleftwall = false;
        this.hitrightwall = false;
        this.goup = false;
        
        this.leftWallX = 0;
        this.rightWallX = 1150;
        
         this.movebox = new TalkBox();
        this.movebox.setAnchorPoint( cc.p( 0, 0 ) );
        this.addChild( this.movebox , 4 );
        this.movebox.setPosition( new cc.Point( 600, 325 ) );

        this.movebox.setVisible(false);
        

    },
    
    update: function() {

        if ( this.player.hitRightWall() ) this.goRight();
        if ( this.player.hitLeftWall() ) this.goLeft();
        this.checkbox();
   },
    
    checkbox: function() {
    
        var pos = this.player.getPosition();
        if( (pos.x >= 500) && (pos.x<= 650) ) { this.movebox.setVisible(true); this.goup = true;}
        else  this.noUp();
        
    },
    
    noUp: function() {
     
        this.movebox.setVisible(false);
        this.goup = false;
    },
    
    goRight: function() {
        
    this.player.hitrightwall = false;
    this.background = new Room6(this.layer, this.player);
    this.layer.changeStage(this.background, 100) ;
 
    },
    
    goLeft: function() {
       console.log("Go left 3");   
    this.player.hitleftwall = false;
    this.background = new Room3(this.layer, this.player);
    this.layer.changeStage(this.background, 1050) ;
        
    },
    
    handleKeyDown: function( e ) {
        
          if ( Room5.KEYMAP[ e ] == 'action' ) {
                
         if(this.goup)   this.goUp( );
                      
                  }
                      
        
    },
    
      goUp: function() {
        
         this.background = new Room8(this.layer, this.player);
    this.layer.changeStage(this.background, 545) ;
        
    },
        


 });

Room5.KEYMAP = {}
Room5.KEYMAP[cc.KEY.enter] = 'action';