var Room10 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room/leftright.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        this.hitleftwall = false;
        this.hitrightwall = false;
        this.goup = false;
        this.godown = false;
        
        this.leftWallX = 0;
        this.rightWallX = 1150;
        
        this.talkghost = false;
        
        this.ghost = new Ghost() ;
        this.ghost.setAnchorPoint( cc.p( 0, 0 ) );
        this.addChild( this.ghost, 1) ;
        this.ghost.setPosition(new cc.Point( 400, 150) );
        
        this.talkBox = new TalkBox();
        this.talkBox.setPosition( new cc.Point( 600, 325 ) );
        this.addChild( this.talkBox , 4 );
        this.talkBox.setVisible(false);

    },
    
    update: function() {

        if ( this.player.hitRightWall() ) this.goRight();
        if ( this.player.hitLeftWall() ) this.goLeft();
        this.checktalk();
   },
    
    goRight: function() {
        
    this.player.hitrightwall = false;
    this.background = new Room8(this.layer, this.player);
    this.layer.changeStage(this.background, 100) ;
 
    },
    
    goLeft: function() {

    this.player.hitleftwall = false;
    this.background = new Room11(this.layer, this.player);
    this.layer.changeStage(this.background, 1050) ;
        
    },
    
    handleKeyDown: function( e ) {
        
        if ( Room10.KEYMAP[ e ] == 'action' )    if(this.talkghost) this.convo();
                     
    },
    
     checktalk: function() {
    
    var pos = this.player.getPosition();
             
    if( (pos.x >= 300) && (pos.x<= 470) ) {
        
       this.allowTalk();
        
    }
         
    else  { 

        this.talkBox.setVisible(false);
        this.talkghost = false;}
    
    },
    
      allowTalk: function() {
        
        this.talkBox.setPosition( new cc.Point( 400, 300 ) );
        this.talkBox.setVisible(true);
        this.talkghost = true;
        
    },
        
        convo : function ( ){
            
      cc.AudioEngine.getInstance().playEffect( 'sfx/se/ghost.ogg' );
            var names = ["Ghost", "Ghost", "Ghost", "Ghost"
                        ];
            
            var texts = ["Augustine bears my Spear.",
                         "Strike down all my foes.",
                         "Their own death creeping near,",
                         "Call upon them the scarlet rain."
                        ];
        
        this.layer.createDialogueBox(names, texts);
        
    },


 });

Room10.KEYMAP = {}
Room10.KEYMAP[cc.KEY.enter] = 'action';
