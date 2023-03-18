function create(){

	let xy = document.getElementById('xy');
	let markButton = document.getElementById('send');
	let sizeLabel = document.getElementById('sizeLabel');
	let size = document.getElementById('size');
	let createCPButton = document.getElementById('createCP');
	let xyLabel = document.getElementById('xyLabel');

	sizeLabel.style.position = 'absolute';
	sizeLabel.style.visibility = 'hidden';
	size.style.position = 'absolute';
	size.style.visibility = 'hidden';
	createCPButton.style.position = 'absolute';
	createCPButton.style.visibility = 'hidden';

	xy.style.position = 'relative';
	xy.style.visibility = 'initial';
	markButton.style.position = 'relative';
	markButton.style.visibility = 'initial';
	xyLabel.style.position = 'relative';
	xyLabel.style.visibility = 'initial';

	let width = document.getElementById('size').value.split(',')[0];
	let height = document.getElementById('size').value.split(',')[1];
	let canvas = document.createElement('canvas');
	let container = document.getElementById('container');

	canvas.setAttribute('width', width * 100 + 20);
	canvas.setAttribute('height', height * 100 + 20);
	canvas.setAttribute('id', 'canvas');

	container.appendChild(canvas);

	//Canvas
	let c = document.getElementById('canvas');
	let ctx = c.getContext('2d');

	ctx.fillStyle = '#eee'
	ctx.strokeStyle = 'lime';
	//Cartesian's lines
	ctx.moveTo((width * 100) / 2 + 10, 0 + 10);
	ctx.lineTo((width * 100) / 2 + 10, height * 100 + 10);
	ctx.moveTo(0 + 10, (height * 100) / 2 + 10);
	ctx.lineTo((width * 100) + 10, (height * 100) / 2 + 10);
	ctx.stroke();
	ctx.font = "10px Arial";
	ctx.fillText(-width, 0,  (height * 100) / 2 + 10);
	ctx.fillText(width, width * 100 + 10,  height * 100 / 2 + 10);
	ctx.fillText(height, width * 100 / 2,  10);
	ctx.fillText(height, width * 100 / 2 + 5,  height * 100 + 20);

};

function marcar(){

	let c = document.getElementById('canvas');
	let ctx = c.getContext('2d');
	let width = canvas.getAttribute('width') - 20;
	let height = canvas.getAttribute('height') - 20;
	let xy = document.getElementById('xy').value;
	let x = xy.split(',')[0];
	let y = xy.split(',')[1];

	if(x < 0 && y >= 0){

		//Cartesian's circles
		ctx.beginPath();
		ctx.arc((x * 50) + width / 2 + 10, (-(y * 50) + 10) + height / 2, 2, 0, 2 * Math.PI);
		ctx.fillStyle = '#eee';
		ctx.fill(); 
		ctx.font = "12px Arial";
		ctx.fillStyle = '#eee'
		ctx.fillText(`${x}, ${y}`, (x * 50) + width / 2 + 20, -(y * 50) + height / 2 + 30);
		//Cartesian's dashed lines	
		ctx.setLineDash([5, 5]);
		ctx.moveTo((x * 50) + width / 2 + 10, height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.moveTo(width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.stroke();		

	}else if(x >= 0 && y >= 0){

		//Cartesian's circles
		ctx.beginPath();
		ctx.arc((x * 50) + width / 2 + 10, (-(y * 50) + 10) + height / 2, 2, 0, 2 * Math.PI);
		ctx.fillStyle = '#eee';
		ctx.fill(); 
		ctx.font = "12px Arial";
		ctx.fillStyle = '#eee'
		ctx.fillText(`${x}, ${y}`, (x * 50) + width / 2 + 20, -(y * 50) + height / 2 + 30);
		//Cartesian's dashed lines	
		ctx.setLineDash([5, 5]);
		ctx.moveTo((x * 50) + width / 2 + 10, height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.moveTo(width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.stroke();

	}else if (x >= 0 && y <= 0){

		//Cartesian's circles
		ctx.beginPath();
		ctx.arc((x * 50) + width / 2 + 10, (-(y * 50) + 10) + height / 2, 2, 0, 2 * Math.PI);
		ctx.fillStyle = '#eee';
		ctx.fill(); 
		ctx.font = "12px Arial";
		ctx.fillStyle = '#eee'
		ctx.fillText(`${x}, ${y}`, (x * 50) + width / 2 + 20, -(y * 50) + height / 2 + 30);
		//Cartesian's dashed lines	
		ctx.setLineDash([5, 5]);
		ctx.moveTo((x * 50) + width / 2 + 10, height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.moveTo(width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.stroke();		


	}else if (x <= 0 && y <= 0){

		//Cartesian's circles		
		ctx.beginPath();
		ctx.arc((x * 50) + width / 2 + 10, (-(y * 50) + 10) + height / 2, 2, 0, 2 * Math.PI);
		ctx.fillStyle = '#eee';
		ctx.fill(); 
		ctx.font = "12px Arial";
		ctx.fillStyle = '#eee'
		ctx.fillText(`${x}, ${y}`, (x * 50) + width / 2 + 20, -(y * 50) + height / 2 + 30);
		//Cartesian's dashed lines	
		ctx.setLineDash([5, 5]);
		ctx.moveTo((x * 50) + width / 2 + 10, height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.moveTo(width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.stroke();	

	};

};