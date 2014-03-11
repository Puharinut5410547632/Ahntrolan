var Player = cc.Sprite.extend({
    ctor: function( ) {
        
        this._super();
        this.initWithFile( 'images/enfys/Ewalkright.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        
        this.maxVx = 7;
        this.g = -1;
        //Moving Velocity
        this.vx = 0;
        this.vy = 0;
        
        //Directions        
        this.moveLeft = false;
        this.moveRight = false;
        this.jump = false;
        this.ground = null;
        this.hitleftwall = false;
        this.hitrightwall = false;
        //Intermission or Explore
        this.state = Player.State.Intermission;
        this.direction = Player.Direction.Right;

    },
    
        update: function() {
            
        //Walking left and right
            
        this.updateXMovement();
        

    },
    
    updateXMovement: function() {
        
        var pos = this.getPosition();
        
        //Move right only when right key is held
        
        if(this.moveRight && !this.moveLeft) {
            
            this.initWithFile( 'images/enfys/Ewalkright.png' );
            this.setAnchorPoint( cc.p( 0, 0 ) );
            
        if(this.hitrightwall) this.vx = 0;
            else {
            if(this.vx<this.maxVx) this.vx = this.vx+0.5;
            if(this.vx>this.maxVx) this.vx = this.maxVx;
            }
            this.setPosition( new cc.Point( pos.x + this.vx, pos.y ) );
        }

        //Move left only when left key is held
        
        if(this.moveLeft && !this.moveRight) {

            this.initWithFile( 'images/enfys/Ewalkleft.png' );
            this.setAnchorPoint( cc.p( 0, 0 ) );
        if(this.hitleftwall)  this.vx = 0;
            else {
            if(this.vx<this.maxVx) this.vx = this.vx+0.5;
            if(this.vx>this.maxVx) this.vx = this.maxVx;
            }
            
            this.setPosition( new cc.Point( pos.x - this.vx, pos.y ) );
        }
        
        else if((this.moveleft && this.moveRight) || (!this.moveleft && !this.moveRight)) {
            while(this.vx > 0){
                this.vx = this.vx-0.5;
        }
            if(this.vx< 0) this.vx == 0;
        }
    },
    
    
        handleKeyDown: function( e ) {
            
        if ( Player.KEYMAP[ e ] != undefined ) {
            this[ Player.KEYMAP[ e ] ] = true;
  //          console.log(this.vx);
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
        }
        
 
}); 

Player.KEYMAP = {}
Player.KEYMAP[cc.KEY.left] = 'moveLeft';
Player.KEYMAP[cc.KEY.a] = 'moveLeft';
Player.KEYMAP[cc.KEY.right] = 'moveRight';
Player.KEYMAP[cc.KEY.d] = 'moveRight';
Player.KEYMAP[cc.KEY.up] = 'jump';
Player.KEYMAP[cc.KEY.enter] = 'action';

Player.State = {
    Intermission: 1,
    Explore: 2
};

Player.Hitwall = {
    Yes: 1,
    No: 2
};

Player.Direction = {
    Right: 1,
    Left: 2
};