document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("canvas"); 
    var ctx = canvas.getContext("2d"); 

    
    if (!ctx) {
        console.error("Failed to get the rendering context for the canvas.");
        return; 
    }

    var radius = canvas.height / 2; 
    ctx.translate(radius, radius); 
    radius *= 0.90; 

    setInterval(drawClock, 1000);

    function drawClock() {
        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    }

    function drawFace(ctx, radius) {
        var grad;
    
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    
        grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius * 0.1; 
        ctx.stroke();
    
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
        ctx.fillStyle = '#333'; 
        ctx.fill();
    }

    function drawNumbers(ctx, radius) {
        var ang;
        var num;
        ctx.font = radius * 0.15 + "px Arial";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
    
        for (num = 1; num <= 12; num++) {
            ang = num * Math.PI / 6; 
    
            
            ctx.save();
            
            
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.75); 
            
            
            ctx.fillText(num.toString(), 0, 0);
            
            
            ctx.restore();
        }
    }

    function drawTime(ctx, radius) {
        var now = new Date(); 
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
    
        
        hour %= 12; 
        hour = (hour * Math.PI / 6) + 
               (minute * Math.PI / (6 * 60)) + 
               (second * Math.PI / (360 * 60)); 
    
        
        drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    
       
        minute = (minute * Math.PI / 30) + 
                 (second * Math.PI / (30 * 60)); 
                 
        
        drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    
        
        second = (second * Math.PI / 30); 
    
        
        drawHand(ctx, second, radius * 0.9, radius * 0.02);
    }

    function drawHand(ctx, position, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width; 
        ctx.lineCap = "round"; 
        ctx.moveTo(0, 0); 
        ctx.rotate(position); 
        ctx.lineTo(0, -length);
        ctx.stroke(); 
        ctx.rotate(-position);
        ctx.closePath();
    }
    
    
    
    
});
