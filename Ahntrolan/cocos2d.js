(function() {
    var d = document;
    var c = {
        COCOS2D_DEBUG: 2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
        box2d: false,
        chipmunk: false,
        showFPS: true,
        loadExtension: false,
        frameRate: 60,
        renderMode: 1,       //Choose of RenderMode: 0(default), 1(Canvas only), 2(WebGL only)
        tag: 'gameCanvas', //the dom element to run cocos2d on
        engineDir: '../../cocos2d/',
        //SingleEngineFile:'',
        appFiles:[
            'src/Game.js',
            'src/GameLayer.js',
            'src/Stage2/GameLayer2.js', 
            'src/Stage2/Room1.js',
            'src/Stage2/Room2.js',
            'src/Stage2/Room3.js',
            'src/Stage2/Room4.js',
            'src/Stage2/Room5.js',
            'src/Stage2/Room6.js',
            'src/Stage2/Room7.js',
            'src/Stage2/Room8.js',
            'src/Stage2/Room9.js',
            'src/Stage2/Room10.js',
            'src/Stage2/Room11.js',
            'src/Player.js',
            'src/resource.js',
            'src/Background.js',
            'src/rightwalldetection.js',
            'src/leftwalldetection.js',
            'src/objects/LielObject.js',
            'src/objects/TalkBox.js',
            'src/objects/VolframObject.js',
            'src/objects/ToyboxObject.js',
            'src/objects/DialogueBox.js',
            'src/stageleftwalldetection.js',
            'src/stagerightwalldetection.js',
            'src/stagefreezezonedetection.js',
            'src/Stage2/Mode2Player.js',
            'src/stage2/Center.js',
            'src/stage2/End.js',
            'src/Stage2/Objects/EndPoint.js',
            'src/Stage2/Objects/Ghost.js',
            'src/Stage2/Objects/Color7.js',
            'src/Stage2/Objects/Color11.js',
            'src/Stage2/Objects/Color9.js',
            'src/objects/Cursor.js',
        ]
    };

    if ( !d.createElement( 'canvas' ).getContext ) {
        var s = d.createElement( 'div' );
        s.innerHTML = '<h2>Your browser does not support HTML5 canvas!</h2>' +
            '<p>Google Chrome is a browser that combines a minimal design with sophisticated technology to make the web faster, safer, and easier.Click the logo to download.</p>' +
            '<a href="http://www.google.com/chrome" target="_blank"><img src="http://www.google.com/intl/zh-CN/chrome/assets/common/images/chrome_logo_2x.png" border="0"/></a>';
        var p = d.getElementById( c.tag ).parentNode;
        p.style.background = 'none';
        p.style.border = 'none';
        p.insertBefore( s, d.getElementById( c.tag ) );

        d.body.style.background = '#ffffff';
        return;
    }

    window.addEventListener( 'DOMContentLoaded', function() {
        this.removeEventListener( 'DOMContentLoaded', arguments.callee, false );
        //first load engine file if specified
        var s = d.createElement( 'script' );
        /*********Delete this section if you have packed all files into one*******/
	if ( c.SingleEngineFile && !c.engineDir ) {
            s.src = c.SingleEngineFile;
        } else if ( c.engineDir && !c.SingleEngineFile ) {
            s.src = c.engineDir + 'jsloader.js';
        } else {
            alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
        }
        /*********Delete this section if you have packed all files into one*******/

        //s.src = 'myTemplate.js'; //IMPORTANT: Un-comment this line if you have packed all files into one

        d.body.appendChild( s );
        document.ccConfig = c;
        s.id = 'cocos2d-html5';
        //else if single file specified, load singlefile
    });
})();
