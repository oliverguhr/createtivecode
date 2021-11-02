const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = 3;

	const padding = 400 
	const size = width - padding // to scale down the plot later
	const step = 50
	let lines = []

	

	// setup our data
	// transform to lambda
	for(let i = step; i <= size; i += step){
		let line = []
		for(let j = 0; j <= size; j += step/3){
			//const distanceToCenter = Math.abs(j - size / 2)
			//const variance = Math.max(size / 3 - distanceToCenter,0)
			//const random =  Math.random() * variance / 3 * -1
			const centerModifyer =1- (Math.abs(j - size / 2) / (size / 2))
			let random =  (Math.random()-0.5) * 5 // basic noise floor
			if(j > size / 4 && j < size - (size/4)){
				random += Math.random() *75* centerModifyer  * -1 // should be gaussian noise

			}
		
			line.push({x:j, y:i + random})
		}
		lines.push(line)
	}

	// plot the data
	context.translate(padding/2, padding/2);
	for(let column in lines){
		context.beginPath()
		context.moveTo(lines[column][0].x, lines[column][0].y)

		for(var row = 0; row < lines[column].length ; row++)
		{
			context.lineTo(lines[column][row].x,lines[column][row].y)
			//const xc = (lines[column][row].x + lines[column][row + 1].x) / 2
			//const yc = (lines[column][row].y + lines[column][row + 1].y) / 2
			//context.quadraticCurveTo(lines[column][row].x, lines[column][row].y, xc, yc)
			
		}
		context.save();
		context.globalCompositeOperation = 'destination-out';
		context.fill();
		context.restore();
		context.stroke()
	}
    
  };
};

canvasSketch(sketch, settings);
