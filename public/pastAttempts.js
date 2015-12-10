// requestAnim shim layer by Paul Irish
      // window.requestAnimFrame = (function () {
      // return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function */ callback, /* DOMElement */ element) {
      //   window.setTimeout(callback, 1000 / 60);
      // };
      // })();

      // var canvas = document.getElementById('myCanvas'),
      //   ctx = canvas.getContext("2d"),
      //   x = canvas.width / 5,
      //   y = canvas.height / 1.8,
      //   radius = 200,
      //   startAngle =  Math.PI,
      //   endAngle = 4 * Math.PI,
      //   counterClockwise = false;


      // var points = [],
      //   currentPoint = 1,
      //   nextTime = new Date().getTime()+500,
      //   pace = 200;

      // for (var i = 0; i < 50; i++) {
      //     points.push({
      //         x: i * (canvas.width),
      //         y: 100+Math.sin(i) * 10
      //     });
      // }

      // ctx.beginPath();
      // ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      // ctx.lineWidth = 4;

      // ctx.strokeStyle = 'black';
      // ctx.stroke();

      // ctx.beginPath();
      // ctx.moveTo((x + radius), y);
      // ctx.lineTo(1100, y);
      // ctx.stroke();

      // function draw() {
    
      //       if(new Date().getTime() > nextTime){
      //           nextTime = new Date().getTime() + pace;
                
      //           currentPoint++;
      //           if(currentPoint > points.length){
      //               currentPoint = 0;
      //           }
      //       }
      //       ctx.beginPath();
      //       ctx.moveTo(points[0].x, points[0].y);
      //       ctx.lineWidth = 2;
      //       ctx.strokeStyle = '#2068A8';
      //       ctx.fillStyle = '#2068A8';

      //       for (var p = 1, plen = currentPoint; p < plen; p++) {
      //           ctx.lineTo(points[p].x, points[p].y);
      //       }
      //       ctx.stroke();
            
      //       requestAnimFrame(draw);
      //   }
      //   draw();

-------------------

       window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();
 

  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  var x = canvas.width / 4;
  var y = canvas.height / 2;
  var radius = 300;
  var endPercent = 100;
  var curPerc = 0;
  var counterClockwise = false;
  var circ = Math.PI * 2;
  var quart = Math.PI / 2;
  var myLine = {
        x: canvas.width / 4,
        y: canvas.height / 2,
        width: 10,
        height: 2,
        borderWidth: 2
  };

 context.lineWidth = 2;
 context.strokeStyle = '#ad2323';
 context.shadowOffsetX = 0;
 context.shadowOffsetY = 0;
 context.shadowBlur = 10;
 context.shadowColor = '#656565';




function animate(current) {
   context.beginPath();
   context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
   context.stroke();
   curPerc++;
   if (curPerc < endPercent) {
       requestAnimFrame(function () {
           animate(curPerc / 100)
       });
   }
}

 function drawLine(myLine, context) {
        context.beginPath();
        context.rect(myLine.x, myLine.y, myLine.width, myLine.height);
        context.lineWidth = myLine.borderWidth;
        context.strokeStyle = 'black';
        context.stroke();
      }    

function animate(myline, canvas, context, startTime) {

var time = (new Date()).getTime() - startTime;
var linearSpeed = 300;
var newX = linearSpeed * time / 1000;
  if(newX < canvas.width - myLine.width - myLine.borderWidth / 2) {
    myLine.x = newX;
  }

drawLine(myLine, context);

requestAnimFrame(function() {
  animate(myLine, canvas, context, startTime);
});
}

drawLine(myLine, context);

// wait one second before starting animation
setTimeout(function() {
var startTime = (new Date()).getTime();
animate(myLine, canvas, context, startTime);
}, 1000);

