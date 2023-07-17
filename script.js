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
               x = x + moveBy;
            }
            else if (e.keyCode == '37') {
               x = x - moveBy;
            }
            else if (e.keyCode == '38') {
               y = y - moveBy;
            }
            else if (e.keyCode == '40') {
               y = y + moveBy;
            }
        }
        window.requestAnimationFrame(game);
    };
    game();
};