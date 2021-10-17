const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ], 
  //dimensions: 'A4',
  //pixelsPerInch:300,
  orientation:'landscape'
};

function randrange(a,b){
  return a + (Math.random() * (b-a))
}
function byChance(a=0.5){
  return Math.random() < a
}


const sketch = () => {
  return ({ context, width, height }) => {  
    
    if(byChance()){
      context.fillStyle = 'white';
    }
    else{
      context.fillStyle = 'black';
      context.strokeStyle = "#FFF";
    }
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005

    const boxWidth =  width * 0.1
    const boxHeight = boxWidth
    const spacing =  width * 0.03
    const offsetx =  width * 0.17
    const offsety =  height * 0.17
    const smallBoxOffset =   width * randrange(0.02,0.07)    
    const smallBoxPercentage = randrange(0.1,0.80)
    const SkipBoxPercentage = randrange(0.0,0.20)
    
    let x,y

    for (let column = 0; column < 5; column++) {
      for (let row = 0; row < 5; row++) {

        if (Math.random() < SkipBoxPercentage) continue

        x = offsety + (boxWidth + spacing) * column
        y = offsetx + (boxHeight + spacing) * row
        context.beginPath()
        context.rect(x,y,boxWidth,boxHeight)
        context.stroke()
        
        if (Math.random() < smallBoxPercentage){
          context.beginPath()
          context.rect(x+smallBoxOffset/2,y+smallBoxOffset/2,boxWidth-smallBoxOffset,boxHeight-smallBoxOffset)
          context.stroke()
        }
      }
    }


  };
};

canvasSketch(sketch, settings);
