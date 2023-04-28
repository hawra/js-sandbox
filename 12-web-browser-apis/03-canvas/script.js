const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// Draw circle
ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 2); // The angle is in radians
ctx.fill();

// Draw lines
ctx.beginPath();
ctx.strokeStyle = 'orange'; // The color of the line
ctx.lineWidth = 5;
ctx.moveTo(10, 10); // go to the origin of the line
ctx.lineTo(300, 300); // this designates the end of the line
ctx.stroke(); // This is the code that draws the line

// Draw text
ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillText('Hello World', 300, 100, 300);
ctx.strokeText('Hello World', 300, 500, 300);

// Draw image
const image = document.querySelector('img');
image.style.display = 'none'; // This hides the image

image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100));
