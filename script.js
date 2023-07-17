window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var moveBy = 15;
    var x = 10;
    var y = 10;

    function game() {
        context.clearRect(0,0,600,400);

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle="red";
        context.fill();

        document.onkeydown = arrowKey;
        function arrowKey(e) {
            e = e || window.event;
            if (e.keyCode == '39') {
               if (x+100 < 600) { x = x + moveBy;}
            }
            else if (e.keyCode == '37') {
               if (x > 0) {x = x - moveBy;}
            }
            else if (e.keyCode == '38') {
               if (y > 0) {y = y - moveBy;}
            }
            else if (e.keyCode == '40') {
               if (y +100 < 400) {y = y + moveBy;}
            }
        }
        window.requestAnimationFrame(game);
    };
    game();
};