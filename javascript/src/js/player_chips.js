const playerChips = () => {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var x = canvas.width / 2;
        var y = canvas.height - 30;
        var x1 = canvas.width / 2;
        var y1 = canvas.height - 30;
        // debugger
        var dx = 2;
        var dy = -10;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "tomato";
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();


    // function draw() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     ctx.beginPath();
    //     ctx.arc(x, y, 10, 0, Math.PI * 2);
    //     ctx.fillStyle = "#0095DD";
    //     ctx.fill();
    //     ctx.closePath();
    //     x += dx;
    //     y += dy;
    // }

        // document.getElementById("betbutton").onclick = function moveChips() {
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     ctx.beginPath();
        //     ctx.arc(x1, y1, 10, 0, Math.PI * 2);
        //     ctx.fillStyle = "tomato";
        //     ctx.fill();
        //     ctx.closePath();
        //     ctx.strokeStyle = "black";
        //     ctx.stroke();
        //     x1 += dx;
        //     y1 += dy;
        //     debugger
        // }


    }
export default playerChips;