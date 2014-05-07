var GameLayer2 = cc.Node.extend({
    ctor: function() {
        
        this._super();
        

        //Player
        this.player = new Mode2Player( this );
        
        this.background = new Room1( this, this.player );
       
        this.background.setPosition ( new cc.Point (  0, 0 ) ) ;
        this.addChild( this.background , 1 );
        this.background.scheduleUpdate();
        
        this.player.setPosition( new cc.Point( 400, 30) );
        this.addChild( this.player , 3 );
        this.player.scheduleUpdate();
        
        cc.AudioEngine.getInstance().playMusic( 'sfx/bgm/stage2.ogg', true );
        
        //State of the game
        this.state = GameLayer2.State.Walk;
        
    },
    
    onKeyDown: function( e ) {
        
        if(this.state == GameLayer2.State.Walk) { this.player.handleKeyDown( e );
                                                  this.background.handleKeyDown( e );}
        
        else  if ( this.state == GameLayer2.State.Dialogue ) {
        this.dialogueBox.handleKeyDown( e );
          
        }
      
    },

    onKeyUp: function( e ) {
        
        this.player.handleKeyUp( e );
            
    },
    
    checkPlayerWall: function() {
        
        var playerPos = this.player.getPosition()
          
        if( checkPlayerRightWallCollision( playerPos.x, this.background.rightWallX ) )
        { this.player.hitrightwall = true;}
        
        else if ( checkPlayerLeftWallCollision( playerPos.x, this.background.leftWallX ) )
        {this.player.hitleftwall = true;}
        
        else  {this.player.noWall();}
    },
    
    changeStage: function (stage, posx ) {
        
        this.position = posx;
        this.removeChild(this.background);
        this.background = stage;
        this.addChild (this.background, 1);
        this.background.setPosition ( new cc.Point (  0, 0 ) ) ;
        this.background.scheduleUpdate();
        this.player.setPosition(new cc.Point ( this.position , 30) );
        
        
    },
    
    update: function() {
        
        //Check wall
        
        this.checkPlayerWall();
    
    },
    
    createDialogueBox: function(name, text) {

        this.dialogueBox = new DialogueBox(this, name, text);
        this.addChild( this.dialogueBox , 5 );
        this.setDialogueState();
        this.player.moveLeft = false;
        this.player.moveRight = false;
    },
    
     setDialogueState: function ( ) {

        this.state = GameLayer2.State.Dialogue;

    },
    
    setWalkState: function() {
        
        this.state = GameLayer2.State.Walk;
        
    },
    
    finishGame: function( background ){
        
        this.end = new End();
        this.addChild(this.end, 6);
        this.end.setPosition ( new cc.Point (  0, 0 ) ) ;
        this.background.scheduleUpdate();
        this.player.setPosition(new cc.Point ( this.position , 30) );
    }
    
    });


GameLayer2.State = {
    Walk: 1,
    Dialogue: 2
};

