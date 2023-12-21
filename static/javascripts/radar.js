document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("radarCanvas");
    const ctx = canvas.getContext("2d");
  
    let angle = 30;
    let direction = 1;
  
    function drawRadar() {
      const centerX = canvas.width/4;
      const centerY = canvas.height;
  
      const maxRadius = 0.9 * Math.min(canvas.width, canvas.height) - 220;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.strokeStyle = "green";
      ctx.lineWidth = 2;
  
      // Draw the outermost arc
      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius, 0, Math.PI, false);
      ctx.stroke();
  
      // Draw additional interior arcs
      for (let i = 1; i <= 5; i++) {
        const radius = (maxRadius * i) / 5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI, false);
        ctx.stroke();
      }
  
      // Draw lines at specific angles
      drawAngleLine(centerX, centerY, maxRadius + 10, 120);
      drawAngleLine(centerX, centerY, maxRadius + 10, 150);
      drawAngleLine(centerX, centerY, maxRadius + 10, 90);
      drawAngleLine(centerX, centerY, maxRadius + 10, 60);
      drawAngleLine(centerX, centerY, maxRadius + 10, 30);
  
      // Draw the scanning line
      const endX = centerX + maxRadius * Math.cos((Math.PI / 180) * angle);
      const endY = centerY - maxRadius * Math.sin((Math.PI / 180) * angle);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
  
    function drawAngleLine(centerX, centerY, radius, angle) {
      const x = centerX + radius * Math.cos((Math.PI / 180) * angle);
      const y = centerY - radius * Math.sin((Math.PI / 180) * angle);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  
    function animate() {
      angle += 5 * direction;
  
      if (angle >= 150 || angle <= 30) {
        direction *= -1;
      }
  
      drawRadar();
      requestAnimationFrame(animate);
    }
  
    animate();
  });
  