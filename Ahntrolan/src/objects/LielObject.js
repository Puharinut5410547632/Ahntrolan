var LielObject = cc.Sprite.extend({
    ctor: function( layer ) {
        this._super();
        this.initWithFile( 'images/Object/Idle Liel.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        this.convo2 = false;
        this.convo6 = false;
        this.layer = layer;
    },
    
 handleKeyDown: function( e ) {
      if ( LielObject.KEYMAP[ e ] == 'action' ) {
          
            var point = this.getConvoPoint( this.player );
        
            if( ( point < 1 ) &&  ( this.convo2 == false ) ) {

                this.convo1A();
            
            }


            else if( ( point >=1 ) && ( point <= 2 ) && ( this.convo2 == false ) ) {

                this.convo2A();    
            
            }
                
            else if( ( point >=1 ) && ( point < 5 ) && ( this.convo2 ) ) {

                this.convo2B();    
            
            }
          
            else if( ( point >=5 ) && ( this.convo6 ) ) {

                this.convo6B();    
            
            }
          
            else if( ( point >=5 ) && ( this.convo6 == false ) ) {

                this.convo6A();    
            
            }
          
      }
        
    },
    
    convo1A: function( ){
      
        var names = ["Liel"];
        var texts = ["Is there something you need, Enfys?"];

        this.layer.createDialogueBox(names, texts);

        
    },
    
    convo2A: function( ){
      
        var names = ["Enfys", "Liel", "Enfys", "Liel", "Enfys", "Liel", "Enfys", "Liel", "Enfys", "Liel", "Liel", "Liel",
                     "Liel", "Liel", "Liel", "Liel", "Liel"];
        var texts = ["Ey, Liel.",
                     "Yes?",
                     "Volfram told me to come and bug you instead.",
                     "I'm sorry, Enfys. I'm kind of busy right now.",
                     "Busy with?",
                     "Let's just say it will solve our finance issue.",
                     "Let me guess, you're coding a job finder or something?",
                     "Exactly!",
                     "Do we really have to work?",
                     "With your spending, yes. You're going to have to work.",
                     "Don't worry though.",
                     "I will make sure we get all the easy jobs with great pay.",
                     "(This Alfium is Liel Artanuel.)",
                     "(The team went through a lot of trouble to recruit her.)",
                     "(She's actually a tech genius.)",
                     "(And also a great friend.)",
                     "(If we don't count THAT certain part of her, that is.)"
                    ];
        
        this.layer.createDialogueBox(names, texts);
        this.convo2 = true;
        this.player.increaseConvoPoint();
        
    },
    
    convo2B: function( ){
        
        var names = ["Enfys"];
        var texts = ["I'll leave you to your work then."];
        
         this.layer.createDialogueBox(names, texts);
        
    },
    
    convo6A: function( ){
     
        var names = ["Enfys", "Liel", "Enfys", "Liel", "Liel", "Liel", "Liel", "Liel", "Enfys", "Enfys",
                     "Volfram", "Enfys", "Enfys", "Volfram", "Enfys", "Gwenette", "Liel", "Enfys", "Enfys",
                     "Gwenette", "Gwenette", "Gwenette", "Gwenette", "Enfys" , "Volfram" ];
        var texts = ["Found anything yet?",
                     "Well...yes.",
                     "What is it?",
                     "Let's just say it didn't end well for them.",
                     "The last group was like us.",
                     "They were also a group of 4, organized by Church of Lumitia.",
                     "They were doing well until the last mission.",
                     "They had to explore a mine and were later found dead.",
                     "Rest in peace.",
                     "Still doesn't explain the lack of toys though.",
                     "Was that seriously all you got?",
                     "Why bother worrying about dying in action?",
                     "Unless the 3rd hand messes up, there's no need to worry!",
                     "What 3rd hand?",
                     "No need to concern yourself with that.",
                     "I'm back!",
                     "Welcome back.",
                     "Took you long enough.",
                     "What's for today?",
                     "The Holy Church of Lumitia's caravan was attacked.",
                     "It's the Gate of Deceit.",
                     "Our order is to retrieve the stolen item.",
                     "Avoid unnecessary bloodshed.",
                     "I guess we will be passing through Greenman Hill then.",
                     "It's too late to catch a caravan so it's best we leave soon."];
        
        this.layer.createDialogueBox(names, texts);
        this.convo6 = true;
        this.player.increaseConvoPoint();
    
    },
    
    convo6B: function() {
        
        var names = ["Liel"];
        var texts = ["Let's go."];
        this.layer.createDialogueBox(names, texts);
        
    },
    
    getConvoPoint: function( player ) {
        
        var point = player.getConvoPoint();
        return point;
        
    },
    
    setPlayer: function ( player ) {
        
        this.player = player;
        
    },
    
    setGameLayer: function ( layer ) {
        
        this.layer = layer;
        
    },


});

LielObject.KEYMAP = {}
LielObject.KEYMAP[cc.KEY.enter] = 'action';