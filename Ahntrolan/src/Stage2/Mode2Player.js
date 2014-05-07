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
        this.direction = Player.Direction.Right;
        this.moveLeft = false;
        this.moveRight = false;
        this.hitleftwall = false;
        this.hitrightwall = false;
        
                //discover the seal
        this.startEPconvo = false;
        // end game open
        this.orbconvo = false;
        // color puzzle
        this.puzzlestartconvo = false;
        // Puzzle complete
        this.puzzleendcovo = false;
        //Cave Entrance convo
        this.caveconvo = false;
        //Split path to cave or cliff
        this.pathconvo = false;
        //Hint to puzzle
        this.statueentconvo = false;
        
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
                       this.vx = 7;
        }
            this.setPosition( new cc.Point( pos.x + this.vx, pos.y ) );
        
    },
    
    goLeft: function() {
        
        var pos = this.getPosition();
        
        this.initWithFile( 'images/enfys/Ewalkleft.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
    
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
    }
 
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