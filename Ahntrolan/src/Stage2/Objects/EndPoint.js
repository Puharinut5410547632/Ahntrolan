var EndPoint = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Stages/endpoint/1.png' );
        this.movingAction = this.createAnimationAction();
        this.runAction( this.movingAction );
    },
    
      createAnimationAction: function() {
	var animation = new cc.Animation.create();
        
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/1.png' );
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/2.png' );
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/3.png' );
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/4.png' );
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/5.png' );
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/6.png' );
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/7.png' );
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/8.png' );
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/9.png' );
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/10.png' );
        animation.addSpriteFrameWithFile( 'images/Stages/endpoint/11.png' );
        
	animation.setDelayPerUnit( 0.1 );
        
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
    },
    

});