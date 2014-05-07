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
        this.direction = Player.Direction.Right;
        this.moveLeft = false;
        this.moveRight = false;
        this.jump = false;
        this.ground = null;
        this.hitleftwall = false;
        this.hitrightwall = false;
        
        
        //Convopoint
        this.convoPoint = 0;

    },
    
        update: function() {
            
        //Walking left and right
            
        this.updateXMovement();
        

    },
    
    goRight: function() {
    
        var pos = this.getPosition();
        
        this.initWithFile( 'images/enfys/Ewalkright.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
            
        if(this.hitrightwall) this.vx = 0;
        else {
            if(this.vx<this.maxVx) this.vx = this.vx+0.5;
            if(this.vx>this.maxVx) this.vx = this.maxVx;
        }
            this.setPosition( new cc.Point( pos.x + this.vx, pos.y ) );
        
    },
    
    goLeft: function() {
        
        var pos = this.getPosition();
        
        this.initWithFile( 'images/enfys/Ewalkleft.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
    
        if(this.hitleftwall)  this.vx = 0;
        else {
            if(this.vx<this.maxVx) this.vx = this.vx+0.5;
            if(this.vx>this.maxVx) this.vx = this.maxVx;
        }
            
            this.setPosition( new cc.Point( pos.x - this.vx, pos.y ) );
        
    },
    
    standStill: function() {
        
        this.vx = 0;
    
    },
    
    updateXMovement: function() {
        
        //Move right only when right key is held
        
        if(this.moveRight && !this.moveLeft) {
            
            this.goRight();
            
        }

        //Move left only when left key is held
        
        if(this.moveLeft && !this.moveRight) {

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