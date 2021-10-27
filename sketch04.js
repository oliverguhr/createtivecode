const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const color = (index,hueStart) => {
  const hue = (index + hueStart) % 1;
  const sat = 0.75;
  const light = 0.5;
  const hsl = [
    Math.floor(hue * 360),
    `${Math.floor(100 * sat)}%`,
    `${Math.floor(100 * light)}%`
  ].join(', ');
  return stroke = `hsl(${hsl})`;
}

const sketch = () => {
  return ({ context, width, height }) => {
    /** @type {HTMLCanvasElement} */
    context = context
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = "black"
    
    
    // context.globalCompositeOperation = 'darker';
    // context.globalAlpha = random.range(0.5, 1); // set to some random alpha: random(0.25, 0.5)
    context.globalAlpha = 0.8
    for (let i = 0; i < 80000; i++) {      
      const x = random.range(0,width)
      const y = random.range(0,height)
      const test = random.noise2D(x*0.001, y*0.001, frequency = 1, amplitude = 2)
      //context.fillStyle = color(1,Math.abs(test))  
      //context.globalAlpha = Math.abs(test)
      //console.log((1+test)%1)
      //const size = random.range(0.1,4)
      const size = Math.max(random.gaussian(mean = 2, std = 2),0.1)                
      context.beginPath()
      context.arc(x,y,size,0, 2 * Math.PI* Math.abs(test));    
      context.fill()       
    }
             

    // context.fillStyle = "white"
    // context.font = "bold "+height+"px Arial ";
    // context.fillText("B", 350,1700);
  };
};

canvasSketch(sketch, settings);

/*


      */
