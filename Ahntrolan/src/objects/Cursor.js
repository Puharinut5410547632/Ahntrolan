var Cursor = cc.Sprite.extend({
    ctor: function() {
        this.vy = Player.STARTING_VELOCITY;
        this.started = false;
        this._super();
        this.initWithFile( 'images/Object/cursor/1.png' );
        this.convoStage = 0;
        this.movingAction = this.createAnimationAction();
        this.runAction( this.movingAction );
    },
    
      createAnimationAction: function() {
	var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/Object/cursor/1.png' );
        animation.addSpriteFrameWithFile( 'images/Object/cursor/2.png' );
        animation.addSpriteFrameWithFile( 'images/Object/cursor/3.png' );
        animation.addSpriteFrameWithFile( 'images/Object/cursor/4.png' );
        animation.addSpriteFrameWithFile( 'images/Object/cursor/3.png' );
        animation.addSpriteFrameWithFile( 'images/Object/cursor/2.png' );
        animation.addSpriteFrameWithFile( 'images/Object/cursor/1.png' );
        
	animation.setDelayPerUnit( 0.25 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
    },
    

});