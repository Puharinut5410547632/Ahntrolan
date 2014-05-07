var Color7 = cc.Sprite.extend({
    ctor: function( player ) {
        this._super(  );
        this.player = player;
        
        this.initWithFile( 'images/color/r1.png' );
        this.createAnimationAction();
        this.runAction( this.movingAction );
    },
    
      createAnimationAction: function() {
          
          if(this.player.room7 == 1){

            this.movingAction = this.goRed();
              
          }
          
          else if(this.player.room7 == 2){

            this.movingAction = this.goBlue();
              
          }
          
            else if(this.player.room7 == 3){
              
           this.movingAction =  this.goGreen();
              
          }
          
           else if(this.player.room7 == 4){
              
           this.movingAction = this.goYellow();
              
          }
        
    },
    
    goRed: function( ){
        
        var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/color/r1.png' );
        animation.addSpriteFrameWithFile( 'images/color/r2.png' );
        animation.addSpriteFrameWithFile( 'images/color/r3.png' );
        animation.addSpriteFrameWithFile( 'images/color/r4.png' );
        animation.setDelayPerUnit( 0.25 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
    },
    
     goBlue: function( ){
        
        var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/color/b1.png' );
        animation.addSpriteFrameWithFile( 'images/color/b2.png' );
        animation.addSpriteFrameWithFile( 'images/color/b3.png' );
        animation.addSpriteFrameWithFile( 'images/color/b4.png' );
        animation.setDelayPerUnit( 0.25 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    },
    
     goGreen: function( ){
        
        var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/color/g1.png' );
        animation.addSpriteFrameWithFile( 'images/color/g2.png' );
        animation.addSpriteFrameWithFile( 'images/color/g3.png' );
        animation.addSpriteFrameWithFile( 'images/color/g4.png' );
        animation.setDelayPerUnit( 0.25 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    },
    
     goYellow: function( ){
        
        var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/color/y1.png' );
        animation.addSpriteFrameWithFile( 'images/color/y2.png' );
        animation.addSpriteFrameWithFile( 'images/color/y3.png' );
        animation.addSpriteFrameWithFile( 'images/color/y4.png' );
        animation.setDelayPerUnit( 0.25 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    },
    
    changeColor: function( ){
        
            cc.AudioEngine.getInstance().playEffect( 'sfx/se/color.ogg' );
        
        this.stopAction(this.movingAction);
        
        if( this.player.room7 == 1 ){
            
         //   console.log(this.player.room7);
            this.player.room7 = 2;
            this.movingAction =  this.goBlue();
            
        }
        
        else if( this.player.room7 == 2 ){
            
            this.player.room7 = 3;
            this.movingAction =  this.goGreen();
            
        }
        
        else if( this.player.room7 == 3 ){
            
            this.player.room7 = 4;
            this.movingAction =   this.goYellow();
            
        }
        
        else if( this.player.room7 == 4 ){
            
            this.player.room7 = 1;
            this.movingAction =   this.goRed();
            
        }
        
        this.runAction( this.movingAction );
            
    },

});