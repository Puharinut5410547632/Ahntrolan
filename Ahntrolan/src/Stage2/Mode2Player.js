var Mode2Player = cc.Sprite.extend({
    ctor: function( layer ) {
        
        this._super();
        this.initWithFile( 'images/enfys/Ewalkright.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        
        this.g = -1;
        //Moving Velocity
        this.vx = 0;
        this.vy = 0;
        
        this.layer = layer;
        //Directions
        this.direction = Mode2Player.Direction.Left;
        this.moveLeft = false;
        this.moveRight = false;
        this.hitleftwall = false;
        this.hitrightwall = false;
        
        //discover the seal
        this.startEPconvo = false;
        
        //Seal broken
        this.endEPconvo = false;
        
        // end game open
        this.orbconvo = false;

        // Puzzle complete
        this.puzzleendconvo = false;

        this.sprite = Mode2Player.Sprite.Standleft;
        this.createAnimationAction();
        this.runAction( this.movingAction );
        
        //Hint to puzzle
        this.statueentconvo = false;
        
        //Talk to statue
        this.talkstatue = false;
        
        this.room7 = Mode2Player.Puzzle.Red;
        this.room9 = Mode2Player.Puzzle.Yellow;
        this.room11 = Mode2Player.Puzzle.Green;
    },
    
        update: function() {
            
        //Walking left and right
            
       this.updateXMovement();
        this.animate();
       if( this.puzzleendconvo == false ) this.checkTrigger();

    },
    
        createAnimationAction: function() {
          
       this.movingAction = this.leftStand();
            
        
    },
    
       checkTrigger: function() {
     

         if( (this.room7 == 4 ) && (this.room9 == 2) && (this.room11 == 1) ) this.triggerConvo();
                                               
    },
    
      triggerConvo: function( ){
            cc.AudioEngine.getInstance().playEffect( 'sfx/se/sealbreak.ogg' );
        this.puzzleendconvo = true;
        var names = ["Volfram","Enfys", "Gwenette"
                     ];
        var texts = ["Did you hear that?",
                     "I guess we did something right.",
                     "Let's give it a look."
                    ];
        
        this.layer.createDialogueBox(names, texts);
        
        
    },
    
    
    goRight: function() {
    
        var pos = this.getPosition();
        
    //    this.initWithFile( 'images/enfys/Ewalkright.png' );
    //    this.setAnchorPoint( cc.p( 0, 0 ) );
            
        if(this.hitrightwall) this.vx = 0;
        else {
                       this.vx = 5;
        }
            this.setPosition( new cc.Point( pos.x + this.vx, pos.y ) );
        
    },
    
    goLeft: function() {
        
        var pos = this.getPosition();
        
   //    this.initWithFile( 'images/enfys/Ewalkleft.png' );
   //     this.setAnchorPoint( cc.p( 0, 0 ) );
    
        if(this.hitleftwall)  this.vx = 0;
        else {
            
            this.vx = 5;
        }
            
            this.setPosition( new cc.Point( pos.x - this.vx, pos.y ) );
        
    },
    
    standStill: function() {
        
        this.vx = 0;
    
    },
    
    updateXMovement: function() {
        
        //Move right only when right key is held
        
        if(this.moveRight && !this.moveLeft) {
            
            this.direction = 1;
            this.goRight();
            
        }

        //Move left only when left key is held
        
        if(this.moveLeft && !this.moveRight) {

            this.direction = 2;
            this.goLeft();

        }
        
        else if((this.moveleft && this.moveRight) || (!this.moveleft && !this.moveRight)) {
         
            this.standStill();
            
        }
    },
    
    
    handleKeyDown: function( e ) {
        
      //  console.log("Yup");
        
        if ( Mode2Player.KEYMAP[ e ] != undefined ) {
            
            this[ Mode2Player.KEYMAP[ e ] ] = true;
            
        }
        
     
    },

    handleKeyUp: function( e ) {
        if ( Mode2Player.KEYMAP[ e ] != undefined ) {
            
            this[ Mode2Player.KEYMAP[ e ] ] = false;
        }
        
        
    },
    
    noWall: function( ){
        
        this.hitleftwall = false;
        this.hitrightwall = false;
        
        },
    
    hitRightWall: function( ){
     
        return this.hitrightwall;
    },
    
    hitLeftWall: function( ){
     
        return this.hitleftwall;
    },
    
    startEpConvoFinish: function() {
     
        this.startEPconvo = true;
    },
    
     animate: function(){
    
        //stand right
        
        if( (this.vx == 0) && (this.direction == 1) && (this.sprite != 1) ) this.animateStandRight();
        
        //stand left
        
       else if( (this.vx == 0) && (this.direction == 2) && (this.sprite != 2) )this.animateStandLeft(); 
        
        //run left
        
        else if( (this.vx != 0) && (this.direction == 2) && (this.sprite != 3) )this.animateLeftWalk(); 
        
        //run right
        
        else if( (this.vx != 0) && (this.direction == 1) && (this.sprite != 4) )this.animateRightWalk(); 
        
    },
    
    animateStandRight: function( ){
        
        this.stopAction(this.movingAction);
        this.movingAction = this.rightStand(); 
        this.runAction( this.movingAction );
        
    },
    
    animateStandLeft: function( ){
        
        this.stopAction(this.movingAction);
        this.movingAction = this.leftStand(); 
        this.runAction( this.movingAction );
        
    },
    
     animateLeftWalk: function( ){
        
        this.stopAction(this.movingAction);
        this.movingAction = this.leftWalk(); 
        this.runAction( this.movingAction );
        
    },
    
         animateRightWalk: function( ){
        
        this.stopAction(this.movingAction);
        this.movingAction = this.rightWalk(); 
        this.runAction( this.movingAction );
        
    },

      rightStand: function( ){
          
        this.sprite = 1;
          
        var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/enfys/r1.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/r2.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/r3.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/r4.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/r5.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/r6.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/r7.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/r8.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/r9.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/r10.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/r11.png' );
          

        animation.setDelayPerUnit( 0.15 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
    },
    
    leftStand: function( ){
        
        this.sprite = 2;
        
        var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/enfys/l1.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/l2.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/l3.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/l4.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/l5.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/l6.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/l7.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/l8.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/l9.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/l10.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/l11.png' );
          

        animation.setDelayPerUnit( 0.15 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
    },
    
        leftWalk: function( ){
        
        this.sprite = 3;
        
        var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/enfys/wl1.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/wl2.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/wl3.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/wl4.png' );
          

        animation.setDelayPerUnit( 0.25 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
    },
    
      rightWalk: function( ){
        
        this.sprite = 4;
        
        var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/enfys/wr1.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/wr2.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/wr3.png' );
        animation.addSpriteFrameWithFile( 'images/enfys/wr4.png' );
          

        animation.setDelayPerUnit( 0.25 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
    },
 
}); 

Mode2Player.KEYMAP = {}
Mode2Player.KEYMAP[cc.KEY.left] = 'moveLeft';
Mode2Player.KEYMAP[cc.KEY.a] = 'moveLeft';
Mode2Player.KEYMAP[cc.KEY.right] = 'moveRight';
Mode2Player.KEYMAP[cc.KEY.d] = 'moveRight';
Mode2Player.KEYMAP[cc.KEY.up] = 'jump';
Mode2Player.KEYMAP[cc.KEY.enter] = 'action';
Mode2Player.KEYMAP[cc.KEY.shift] = 'check';


Mode2Player.Hitwall = {
    Yes: 1,
    No: 2
};

Mode2Player.Direction = {
    Right: 1,
    Left: 2
};

Mode2Player.Puzzle = {
    Red : 1,
    Blue: 2,
    Green: 3,
    Yellow: 4
};

Mode2Player.Sprite = {
    Standright: 1,
    Standleft: 2,
    Walkleft: 3,
    Walkright: 4
};