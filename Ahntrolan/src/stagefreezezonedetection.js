var checkfreezeZone = function( playerX ) {
    
    if(playerX <= 400) {
        return true;
    }
    
    else if( playerX >= 1200) {
        return true;
    }
    
    else return false;
    
};