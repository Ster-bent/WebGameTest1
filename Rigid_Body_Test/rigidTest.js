window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var moveBy = 15;

    var playerx = 10;
    var playery = 10;

    var wallx = 200;
    var wally = 200;

    var wallW = 150;
    var wallH = 150;

    var playerW = 100;
    var playerH = 100;

    let PlayerPerimeter = playerH*2 + playerW*2;
    let WallPerimeter = wallH*2 + wallW*2;
    
    function game() {
        context.clearRect(0,0,600,400);

        //* Playable Character Intialization
        context.beginPath();
        context.rect(playerx, playery, playerW, playerH);
        context.fillStyle="red";
        context.fill();

        //* Collision Wall Intialization
        context.beginPath();
        context.rect(wallx, wally, wallW, wallH);
        context.fillStyle= 'pink';
        context.fill()

        

        document.onkeydown = arrowKey;
        function arrowKey(e) {
            e = e || window.event;
            if (e.keyCode == '39') {
               if (playerx+100 < 600) { playerx = playerx + moveBy;}
            }
            else if (e.keyCode == '37') {
               if (playerx > 0) {playerx = playerx - moveBy;}
            }
            else if (e.keyCode == '38') {
               if (playery > 0) {playery = playery - moveBy;}
            }
            else if (e.keyCode == '40') {
               if (playery +100 < 400) {playery = playery + moveBy;}
            }
        }
        window.requestAnimationFrame(game);
    };
    game();
};