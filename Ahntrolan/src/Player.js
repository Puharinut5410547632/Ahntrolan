var Player = cc.Sprite.extend({
    ctor: function( ) {
        
        this._super();
        this.initWithFile( 'images/enfys/l1.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        
        this.maxVx = 7;
        this.g = -1;
        //Moving Velocity
        this.vx = 0;
        this.vy = 0;
        
        //Directions
        this.direction = Player.Direction.Left;
        this.moveLeft = false;
        this.moveRight = false;
        this.jump = false;
        this.ground = null;
        this.hitleftwall = false;
        this.hitrightwall = false;
        this.sprite = Player.Sprite.Standleft;
        this.createAnimationAction();
        this.runAction( this.movingAction );
        
        //Convopoint
        this.convoPoint = 0;

    },
    
    createAnimationAction: function() {
          
       this.movingAction = this.leftStand();
        
    },
    
    
        update: function() {
            
        //Walking left and right
            
        this.updateXMovement();
        this.animate();

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
    

    goRight: function() {
        
        var pos = this.getPosition();
        
 //       this.initWithFile( 'images/enfys/Ewalkright.png' );
   //     this.setAnchorPoint( cc.p( 0, 0 ) );
            
        if(this.hitrightwall) this.vx = 0;
        else this.vx = 5;

            this.setPosition( new cc.Point( pos.x + this.vx, pos.y ) );
        
    },
    
    goLeft: function() {
        
 
        var pos = this.getPosition();
        
  //      this.initWithFile( 'images/enfys/Ewalkleft.png' );
  //     this.setAnchorPoint( cc.p( 0, 0 ) );
    
        if(this.hitleftwall)  this.vx = 0;
        else this.vx = 5;

            
            this.setPosition( new cc.Point( pos.x - this.vx, pos.y ) );
        
    },
    
    standStill: function() {
        
        this.vx = 0;
        this.animate();
    
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
        if ( Player.KEYMAP[ e ] != undefined ) {
            
            this[ Player.KEYMAP[ e ] ] = true;
            
        }

    },

    handleKeyUp: function( e ) {
        if ( Player.KEYMAP[ e ] != undefined ) {
            this[ Player.KEYMAP[ e ] ] = false;
        }
    },
    
    noWall: function( ){
        
        this.hitleftwall = false;
        this.hitrightwall = false;
        
        },
    
    getConvoPoint: function( ){
        
        return this.convoPoint;  
        
        },
    
    increaseConvoPoint: function(){
        
        this.convoPoint++;
        
    }
 
}); 

Player.KEYMAP = {}
Player.KEYMAP[cc.KEY.left] = 'moveLeft';
Player.KEYMAP[cc.KEY.a] = 'moveLeft';
Player.KEYMAP[cc.KEY.right] = 'moveRight';
Player.KEYMAP[cc.KEY.d] = 'moveRight';
Player.KEYMAP[cc.KEY.up] = 'jump';
Player.KEYMAP[cc.KEY.enter] = 'action';
Player.KEYMAP[cc.KEY.shift] = 'check';


Player.Hitwall = {
    Yes: 1,
    No: 2
};

Player.Direction = {
    Right: 1,
    Left: 2
};

Player.Sprite = {
    Standright: 1,
    Standleft: 2,
    Walkleft: 3,
    Walkright: 4
};