var GameLayer = cc.Node.extend({
    ctor: function( game ) {
        
        
        this._super();
        
        this.game = game;
        
        this.background = new Background();
        this.background.setPosition ( new cc.Point (  screenWidth/2, screenHeight/2 ) ) ;
        this.addChild( this.background , 1 );
        
        
        //Player
        this.player = new Player();
        this.player.setAnchorPoint( cc.p( 0, 0 ) );
        this.player.setPosition( new cc.Point( 400, 30) );
        this.addChild( this.player , 3 );
        this.player.scheduleUpdate();
        
        //Toybox
        this.toyboxObject = new ToyboxObject( this );
        this.toyboxObject.setPosition( new cc.Point( 725, 0) );
        this.toyboxLeftX = this.toyboxObject.getPosition().x - 100;
        this.toyboxRightX = this.toyboxObject.getPosition().x;
        this.addChild( this.toyboxObject , 4 );
//        
        //Volfram
        this.volframObject = new VolframObject( this );
        this.volframObject.setPosition( new cc.Point( 600, 100) );
        this.volframLeftX = this.volframObject.getPosition().x - 100;
        this.volframRightX = this.volframObject.getPosition().x - 40;
        this.addChild( this.volframObject , 2 );
        
        //Liel
        this.lielObject = new LielObject( this );
        this.lielObject.setPosition( new cc.Point( 165  , 65) );
        this.lielLeftX = this.lielObject.getPosition().x - 100;
        this.lielRightX = this.lielObject.getPosition().x - 20;
        this.addChild( this.lielObject , 2 );
        
        //Talk box
        this.talkBox = new TalkBox();
        this.talkBox.setPosition( new cc.Point( this.player.getPosition().x+75, 325 ) );
        this.addChild( this.talkBox , 4 );
        this.talkBox.setVisible(false);
        
        //State of the game
        this.state = GameLayer.State.Walk;
        
        //State of player to decide who interact with who
        this.interactVolfram = false;
        this.interactLiel = false;
        this.interactToybox = false;
        

        
    },
    
    onKeyDown: function( e ) {
        
    if( this.state == GameLayer.State.Walk )  {  
        this.player.handleKeyDown( e );
        
        if (this.interactVolfram) {
            
           this.volframHandle( e );
            
        }
        if (this.interactToybox) {
            
            this.toyboxHandle( e );
        
        }
        
        if (this.interactLiel) {
            
            this.lielHandle( e );
            
        }
        
    }
        
      else  if ( this.state == GameLayer.State.Dialogue ) {
          
        this.dialogueBox.handleKeyDown( e );
          
        }
        
    },
    
    volframHandle: function ( e ) {
        
        this.volframObject.setPlayer( this.player );
        this.volframObject.setGameLayer( this );
        this.volframObject.handleKeyDown( e );
        
    },
    
    toyboxHandle: function ( e ) {
        
        this.toyboxObject.setPlayer( this.player );
        this.toyboxObject.setGameLayer( this );
        this.toyboxObject.handleKeyDown( e );
        
    },
    
    lielHandle: function ( e ) {
        
        this.lielObject.setPlayer( this.player );
        this.lielObject.setGameLayer( this );
        this.lielObject.handleKeyDown( e );
        
    },
    
    onKeyUp: function( e ) {
        
        if(this.state == GameLayer.State.Walk)  {  
            
            this.player.handleKeyUp( e );
            
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
            
            this.withVolfram();
       
        }
    
        //Check Liel
        else if ( playerPos.x >= this.lielLeftX && playerPos.x <= this.lielRightX)  {
         
            this.withLiel();
            
        }
        
        //Check Toybox
        else if ( playerPos.x >= this.toyboxLeftX && playerPos.x <= this.toyboxRightX)  {
         
            this.withToybox();
        }
        
        else {
            
            this.withNothing();
        
        }
    },
    
    withVolfram: function(){
        
        this.talkBox.setPosition( new cc.Point( this.player.getPosition().x+75, 325 ));
        this.interactVolfram = true;
        this.interactLiel = false;
        this.interactToybox = false;
        this.talkBox.setVisible(true);
        
    },
    
    withLiel: function(){
    
        this.talkBox.setPosition( new cc.Point( this.player.getPosition().x+75, 325 ));
        this.interactVolfram = false;
        this.interactLiel = true;
        this.interactToybox = false;
        this.talkBox.setVisible(true);
        
    },
    
    withToybox: function(){
        
        this.talkBox.setPosition( new cc.Point( this.player.getPosition().x+75, 325 ));
        this.interactVolfram = false;
        this.interactLiel = false;
        this.interactToybox = true;
        this.talkBox.setVisible(true);
        
    },
    
    withNothing: function(){
    
        this.talkBox.setVisible(false);
        this.interactVolfram = false;
        this.interactLiel = false;
        this.interactToybox = false;
        
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
    
    getGame: function() {
      
        return this.game;
        
    },
    
    createDialogueBox: function(name, text) {

        this.dialogueBox = new DialogueBox(this, name, text);
        this.addChild( this.dialogueBox , 5 );
        this.setDialogueState();
        this.player.moveLeft = false;
        this.player.moveRight = false;
    },
    
    getPlayer: function( ){
     
        return this.player;
    },
    
});


GameLayer.State = {
    Walk: 1,
    Dialogue: 2
};

