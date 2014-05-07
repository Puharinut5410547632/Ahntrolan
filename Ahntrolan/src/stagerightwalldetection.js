var checkStageLeftWallCollision = function( playerX ) {
    if(playerX <= 360) {
        return true;
    }
    else return false;
};