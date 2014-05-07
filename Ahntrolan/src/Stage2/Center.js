var Center = cc.Sprite.extend({
    
    
     ctor: function() {
         
        this._super();
        this.initWithFile( 'images/background/Camera.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
         
        this.vx = 0;
         
        this.moveLeft = false;
        this.moveRight = false;
        this.hitleftwall = false;
        this.hitrightwall = false;
         
    },
    
       update: function() {
            
        //Walking left and right
            
       this.updateXMovement();
        

    },
    
      goRight: function() {
    
        var pos = this.getPosition();
            
        if(this.hitrightwall) this.vx = 0;
        else {
                       this.vx = 7;
        }
            this.setPosition( new cc.Point( pos.x + this.vx, pos.y ) );
        
    },
    
    goLeft: function() {
        
        var pos = this.getPosition();
        
    
        if(this.hitleftwall)  this.vx = 0;
        else {
            
            this.vx = 7;
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
        
        var pos = this.getPosition();
        
        console.log("red dot " + pos.x);
        
        if ( Center.KEYMAP[ e ] != undefined ) {
            
            this[ Center.KEYMAP[ e ] ] = true;
            
        }
        
     
    },

    handleKeyUp: function( e ) {
        if ( Center.KEYMAP[ e ] != undefined ) {
            
            this[ Center.KEYMAP[ e ] ] = false;
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

Center.KEYMAP = {}
Center.KEYMAP[cc.KEY.left] = 'moveLeft';
Center.KEYMAP[cc.KEY.a] = 'moveLeft';
Center.KEYMAP[cc.KEY.right] = 'moveRight';
Center.KEYMAP[cc.KEY.d] = 'moveRight';
Center.KEYMAP[cc.KEY.up] = 'jump';
Center.KEYMAP[cc.KEY.enter] = 'action';
Center.KEYMAP[cc.KEY.shift] = 'check';


Center.Hitwall = {
    Yes: 1,
    No: 2
};

Center.Direction = {
    Right: 1,
    Left: 2
};
