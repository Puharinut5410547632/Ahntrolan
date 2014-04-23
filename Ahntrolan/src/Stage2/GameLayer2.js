var GameLayer2 = cc.Node.extend({
    ctor: function() {
        
        this._super();
        
        this.background = new Background2();
        this.background.setPosition ( new cc.Point (  screenWidth/2, screenHeight/2 ) ) ;
        this.addChild( this.background , 1 );
        
        //Player
        this.player = new Player();
        this.player.setPosition( new cc.Point( 400, 75) );
        this.addChild( this.player , 3 );
        this.player.scheduleUpdate();
        console.Log(this.player.getPosition);
        
        //Talk box
        this.talkBox = new TalkBox();
        this.talkBox.setPosition( new cc.Point( this.player.getPosition().x+75, 375 ) );
        this.addChild( this.talkBox , 4 );
        this.talkBox.setVisible(false);
        
        //State of the game
        this.state = GameLayer.State.Walk;
        
    },
    
      onKeyDown: function( e ) {
          
    if(this.state == GameLayer.State.Walk)  {  
        
        this.player.handleKeyDown( e );
      
    }
    },

    onKeyUp: function( e ) {
        
        if(this.state == GameLayer.State.Walk)  { 
            
        this.player.handleKeyUp( e );
            
    }
    },
    
     checkWall: function() {
          var playerPos = this.player.getPosition()
        if(checkPlayerRightWallCollision(playerPos.x, this.background.rightWallX ))
        this.player.hitrightwall = true;
        else if (checkPlayerLeftWallCollision (playerPos.x, this.background.leftWallX ))
        this.player.hitleftwall = true;
        
        else  this.player.noWall();
    },
    
    
    
    });
