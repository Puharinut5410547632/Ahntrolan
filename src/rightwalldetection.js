var checkPlayerRightWallCollision = function( playerX, rightWallX ) {
    if(playerX >= rightWallX) {
        return true;
    }
    else return false;
};