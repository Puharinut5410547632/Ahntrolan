var checkPlayerLeftWallCollision = function( playerX, leftWallX ) {
    if(playerX <= leftWallX) {
        return true;
    }
    else return false;
};