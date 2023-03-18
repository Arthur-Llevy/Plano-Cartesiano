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
	ctx.fillText(height, width * 100 / 2 + 5,  10);
	ctx.fillText(-height, width * 100 / 2 + 5,  height * 100 + 20);

};

//Alphabet's indice
let counter = -1;	

function marcar(){

	let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');	
	counter >= 26 ? counter = -1 : counter += 1;	

	//C = canvas variable
	let c = document.getElementById('canvas');
	let ctx = c.getContext('2d');
	let width = canvas.getAttribute('width') - 20;
	let height = canvas.getAttribute('height') - 20;
	let xy = document.getElementById('xy').value;
	let x = xy.split(',')[0];
	let y = xy.split(',')[1];

	if (x <= 0 && y <= 0){

		//Cartesian's circles	
		let arcMarginLeft = (x * 50) + (width / 2) + 10;
		let arcMarginTop = -(y * 50) + 10 + (height / 2);

		ctx.beginPath();
		ctx.arc(arcMarginLeft, arcMarginTop, 2, 0, 2 * Math.PI);
		ctx.fillStyle = '#eee';
		ctx.fill(); 

		//Cartesian's points text
		ctx.font = "12px Arial";
		ctx.fillStyle = '#eee';
		ctx.fillText(`${alphabet[counter]}`, arcMarginLeft + 10, arcMarginTop - 10);

		//Cartesian's dashed lines	
		ctx.setLineDash([5, 5]);
		ctx.moveTo((x * 50) + width / 2 + 10, height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.moveTo(width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.stroke();	

		//Insert points to table
		let pointsTable = document.getElementById('points');
		let tr = document.createElement('tr');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');

		pointsTable.style.visibility = 'initial';
		td1.innerHTML = alphabet[counter];
		td2.innerHTML = `(${x},${y})`;
		tr.appendChild(td1);
		tr.appendChild(td2);

		pointsTable.appendChild(tr);

	}else{

		//Cartesian's circles
		let arcMarginLeft = (x * 50) + (width / 2) + 10;
		let arcMarginTop = -(y * 50) + 10 + (height / 2);

		ctx.beginPath();
		ctx.arc(arcMarginLeft, arcMarginTop, 2, 0, 2 * Math.PI);
		ctx.fillStyle = '#eee';
		ctx.fill(); 

		//Cartesian's points text
		ctx.font = "12px Arial";
		ctx.fillStyle = '#eee';

		y > 0 ? ctx.fillText(`${alphabet[counter]}`, arcMarginLeft - 20, arcMarginTop + 20) :
			ctx.fillText(`${alphabet[counter]}`, arcMarginLeft - 20, arcMarginTop - 20);


		x < 0 ? ctx.fillText(`${alphabet[counter]}`, arcMarginLeft + 20, arcMarginTop + 20) :
			ctx.fillText(`${alphabet[counter]}`, arcMarginLeft - 20, arcMarginTop + 20)

		//Cartesian's dashed lines	
		ctx.setLineDash([5, 5]);
		ctx.moveTo((x * 50) + width / 2 + 10, height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.moveTo(width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.lineTo((x * 50) + width / 2 + 10, -(y * 50) + height / 2 + 10);
		ctx.stroke();	

		//Insert points to table
		let pointsTable = document.getElementById('points');
		let tr = document.createElement('tr');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');

		pointsTable.style.visibility = 'initial';
		td1.innerHTML = alphabet[counter];
		td2.innerHTML = `(${x},${y})`;
		tr.appendChild(td1);
		tr.appendChild(td2);

		pointsTable.appendChild(tr);	

	};	

};
