document.addEventListener("DOMContentLoaded", () => {
    var width = 130;
    var height = 180;
    var canvas = d3.select('#container').append('canvas').attr('width', width).attr('height', height).attr('color', "red");
    var context = canvas.node().getContext('2d');

})

//     < script id = 'table' >
//         var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.ellipse(300, 220, 130, 180, Math.PI / 2, 0, 2 * Math.PI);
// ctx.fillStyle = "green";
// ctx.lineWidth = 20;
// ctx.strokeStyle = "black";
// ctx.stroke();
// ctx.fill();
// ctx.closePath();
//     </script >