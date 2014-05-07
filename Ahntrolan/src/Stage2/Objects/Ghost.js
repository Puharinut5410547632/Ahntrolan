var Ghost = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Ghost/1.png' );
        this.movingAction = this.createAnimationAction();
        this.runAction( this.movingAction );
    },
    
      createAnimationAction: function() {
	var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/Ghost/1.png' );
        animation.addSpriteFrameWithFile( 'images/Ghost/2.png' );
        animation.addSpriteFrameWithFile( 'images/Ghost/3.png' );
        animation.addSpriteFrameWithFile( 'images/Ghost/4.png' );
        animation.addSpriteFrameWithFile( 'images/Ghost/5.png' );
        animation.addSpriteFrameWithFile( 'images/Ghost/6.png' );
          
        
	animation.setDelayPerUnit( 0.25 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
    },
    

});