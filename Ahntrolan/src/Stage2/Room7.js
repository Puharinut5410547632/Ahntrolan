var Room7 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room/left.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        this.hitleftwall = false;
        this.touchcolor = false;

        
        this.color = new Color7(this.player) ;
        this.color.setAnchorPoint( cc.p( 0, 0 ) );
        this.addChild( this.color, 1) ;
        this.color.setPosition(new cc.Point( 600, 300) );
        
        this.leftWallX = 0;
        this.rightWallX = 800;
        
        this.talkBox = new TalkBox();
        this.talkBox.setPosition( new cc.Point( 600, 350 ) );
        this.addChild( this.talkBox , 4 );
        this.talkBox.setVisible(false);
        

    },
    
    update: function() {

        if ( this.player.hitLeftWall() ) this.goLeft();
        this.checkTouch();
   },
    
    
    goLeft: function() {
       console.log("Go left 6");   
    this.player.hitleftwall = false;
    this.background = new Room6(this.layer, this.player);
    this.layer.changeStage(this.background, 1050) ;
        
    },
    
    handleKeyDown: function( e ) {
        
        if ( Room7.KEYMAP[ e ] == 'action' )         if(this.touchcolor) this.color.changeColor();
              
    },
        
     checkTouch: function() {
    
    var pos = this.player.getPosition();
    if( (pos.x >= 550) && (pos.x<= 650)  && (this.player.puzzleendconvo == false) ) {
        
        this.touchPuzzle();
        
    }

        
    else  { 

        this.talkBox.setVisible(false);
        this.touch = false;}
    
    },
    
    touchPuzzle: function() {
    
    this.touchcolor = true;
    this.talkBox.setVisible(true);
    
    },
    
    


 });

Room7.KEYMAP = {}
Room7.KEYMAP[cc.KEY.enter] = 'action';