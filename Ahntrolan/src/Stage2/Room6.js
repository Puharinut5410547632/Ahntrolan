var Room6 = cc.Sprite.extend({
    ctor: function(layer, player ) {
        
        this.player = player;
        this.layer = layer;
        this._super();
        this.initWithFile( 'images/Stages/Room/leftright.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        this.hitleftwall = false;
        this.hitrightwall = false;
        
        this.talkghost = false;
        
        this.leftWallX = 0;
        this.rightWallX = 1150;
        
        this.ghost = new Ghost() ;
        this.ghost.setAnchorPoint( cc.p( 0, 0 ) );
        this.addChild( this.ghost, 1) ;
        this.ghost.setPosition(new cc.Point( 800, 150) );
        
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
    this.background = new Room7(this.layer, this.player);
    this.layer.changeStage(this.background, 100) ;
 
    },
    
    goLeft: function() {

    this.player.hitleftwall = false;
    this.background = new Room5(this.layer, this.player);
    this.layer.changeStage(this.background, 1050) ;
        
    },
    
     checktalk: function() {
    
    var pos = this.player.getPosition();
    if( (pos.x >= 700) && (pos.x<= 870) ) {
        
       this.allowTalk();
        
    }
         
    else  { 

        this.talkBox.setVisible(false);
        this.talkghost = false;}
    
    },
    
     allowTalk: function() {
        
        this.talkBox.setPosition( new cc.Point( 820, 300 ) );
        this.talkBox.setVisible(true);
        this.talkghost = true;
        
    },
    
    handleKeyDown: function( e ) {
        
        if ( Room6.KEYMAP[ e ] == 'action' ) {
            
             if(this.talkghost) this.convo();
                
            }
    },
            
    convo : function ( ){
        
            cc.AudioEngine.getInstance().playEffect( 'sfx/se/ghost.ogg' );
    
            var names = ["Ghost", "Ghost", "Ghost", "Ghost", "Ghost", "Ghost",
                         "Ghost", "Ghost"
                        ];
            var texts = ["Roses are red.",
                         "Violets are blue.",
                         "My Violet.",
                         "Dear Violet.",
                         "Purple elegance.",
                         "Fairness unmatched.",
                         "I give you this divine light.",
                         "To complement your beauty tonight."
                        ];
        
        this.layer.createDialogueBox(names, texts);
        
    },


 });

Room6.KEYMAP = {}
Room6.KEYMAP[cc.KEY.enter] = 'action';
