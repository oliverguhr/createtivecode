const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');


const settings = {
	dimensions: [ 1080, 1080 ]
};

//const colors = ["#147E87","#D44A99","#35C6D3","#D4BB15","#87791B"] // türkis triade

//const colors = ["#0455BF","#0468BF","#0477BF","#41D2F2"] // four shades of blue

const colors = ["#F2F2F2","#A6A6A6","#595959","#262626","#0D0D0D"] // five shades of gray


const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = 'white'
		context.fillRect(0, 0, width, height)

		context.fillStyle = 'black'

		const cx = width  * 0.5
		const cy = height * 0.5

		const w = width  * 0.01
		const h = height * 0.2
		let x, y

		const num = 1000
		const radius = width * 0.4

		for (let i = 0; i < num; i++) {
			const slice = math.degToRad(360 / num);
			const angle = slice * i;

			x = cx + radius * Math.sin(angle);
			y = cy + radius * Math.cos(angle);

			context.save();
			context.translate(x, y);
			context.rotate(-angle);
			context.scale(random.range(0.1, 1), random.range(0.2, 0.5));

			if(random.chance(1)){
				
			 	context.fillStyle = random.pick(colors)
			}
			context.beginPath();
			context.rect(-w * 0.5, random.range(0, -h * 4), w, h);
			context.fill();
			context.restore();

			context.save();
			context.translate(cx, cy);
			context.rotate(-angle);
			
			context.lineWidth = random.range(5, 20);
			
			// if(random.chance(0.2)){
				
			// 	context.strokeStyle = random.pick(colors)
			// }
			// context.beginPath();
			// context.arc(0, 0, radius * random.range(0.1, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
			// context.stroke();

			context.restore();
		}
	};
};

canvasSketch(sketch, settings);