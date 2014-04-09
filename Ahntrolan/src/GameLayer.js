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
        
        //State of the game
        this.state = GameLayer.State.Walk;
        
        //State of player to decide who interact with who
        this.interactVolfram = false;
        this.interactLiel = false;
        this.interactToybox = false;
        
        this.setKeyboardEnabled( true );
        console.log( 'GameLayer created' );
        return true;
    },
    
    onKeyDown: function( e ) {
    if(this.state == GameLayer.State.Walk)  {  
        this.player.handleKeyDown( e );
        if (this.interactVolfram) {
           this.volframObject.setPlayer( this.player );
           this.volframObject.setGameLayer( this );
           this.volframObject.handleKeyDown( e );
        }
        if (this.interactToybox) {
            this.toyboxObject.setPlayer( this.player );
            this.toyboxObject.handleKeyDown( e );
        }
        if (this.interactLiel) this.lielObject.handleKeyDown( e );
    }
        else {
        
            console.log("In dialogue mode");
//            this.volframObject.setPlayer( this.player );
//            this.volframObject.setGameLayer( this );
//            this.volframObject.handleKeyDown( e );
        
        }
    },

    onKeyUp: function( e ) {
        if(this.state == GameLayer.State.Walk)  {  
        this.player.handleKeyUp( e );
    }
        
    else {
      console.log("In dialogue mode");
        }
    },
    
    getState : function() {
  
    return this.state;
    
    },
    
    update: function() {
        
        //Check wall
        
        this.checkWall();
        
        //Check who to interact with
        
        this.checkInteraction( );
    
    },
    
    checkInteraction: function() {
        var playerPos = this.player.getPosition()
        
        //Check Volfram
        
        if ( playerPos.x >= this.volframLeftX && playerPos.x <= this.volframRightX)  {
         this.talkBox.setPosition( new cc.Point( this.player.getPosition().x+75, 375 ));
         this.interactVolfram = true;
         this.interactLiel = false;
         this.interactToybox = false;
         this.talkBox.setVisible(true);
        }
    
        //Check Liel
        else if ( playerPos.x >= this.lielLeftX && playerPos.x <= this.lielRightX)  {
         this.talkBox.setPosition( new cc.Point( this.player.getPosition().x+75, 375 ));
         this.interactVolfram = false;
         this.interactLiel = true;
         this.interactToybox = false;
         this.talkBox.setVisible(true);
        }
        
        //Check Toybox
        else if ( playerPos.x >= this.toyboxLeftX && playerPos.x <= this.toyboxRightX)  {
         this.talkBox.setPosition( new cc.Point( this.player.getPosition().x+75, 375 ));
         this.interactVolfram = false;
         this.interactLiel = false;
         this.interactToybox = true;
         this.talkBox.setVisible(true);
        }
        
        else {
        this.talkBox.setVisible(false);
        this.interactVolfram = false;
        this.interactLiel = false;
        this.interactToybox = false;
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
    
    setDialogueState: function ( ) {

        this.state = GameLayer.State.Dialogue;

    },
    
    setWalkState: function() {
        
        this.state = GameLayer.State.Walk;
        
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

GameLayer.State = {
    Walk: 1,
    Dialogue: 2
};

