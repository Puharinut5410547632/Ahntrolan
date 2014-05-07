var Room8 = cc.Sprite.extend({
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
        
        this.talkghost = false;
        
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
        this.checkbox();
        this.checktalk();
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
    
    
    goLeft: function() {

    this.player.hitleftwall = false;
    this.background = new Room10(this.layer, this.player);
    this.layer.changeStage(this.background, 1050) ;
        
    },
    
      goRight: function() {
        
    this.player.hitrightwall = false;
    this.background = new Room9(this.layer, this.player);
    this.layer.changeStage(this.background, 100) ;
 
    },
    
    handleKeyDown: function( e ) {
        
        if ( Room8.KEYMAP[ e ] == 'action' ) {
                
         if(this.goup)   this.goUp( );
         if(this.talkghost) this.convo();
            
                  }
                      
    },
    
      goUp: function() {
        
         this.background = new Room5(this.layer, this.player);
    this.layer.changeStage(this.background, 545) ;
        
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
    
    convo : function ( ){
    
            cc.AudioEngine.getInstance().playEffect( 'sfx/se/ghost.ogg' );
        
            var names = ["Ghost", "Ghost", "Ghost", "Ghost"
                        ];
            
            var texts = ["From coals to diamonds.",
                         "The gem hold their edge.",
                         "Brilliantly, with clarity",
                         "And sapphire divinity."

                        ];
        
        this.layer.createDialogueBox(names, texts);
        
    },
    


 });
    
Room8.KEYMAP = {}
Room8.KEYMAP[cc.KEY.enter] = 'action';
