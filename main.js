let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.strokeStyle = 'red';
//Cartesian's lines
ctx.moveTo(250, 0);
ctx.lineTo(250, 500);
ctx.moveTo(0, 250);
ctx.lineTo(500, 250)
ctx.stroke();
ctx.font = "10px Arial";
ctx.fillText(`-5`, 0,  250);
ctx.fillText(`5`, 490,  250);
ctx.fillText(`5`, 250,  10);
ctx.fillText(`-5`, 250,  500);

function marcar(){
	
	let xy = document.getElementById('xy').value;
	let x = xy.split(',')[0];
	let y = xy.split(',')[1];

	if(x < 0 && y >= 0){

		//Cartesian's circles
		ctx.beginPath();
		ctx.arc((x * 50) + 250, -(y * 50) + 250, 2, 0, 2 * Math.PI);
		ctx.fillStyle = 'black';
		ctx.fill(); 
		ctx.font = "12px Arial";
		ctx.fillText(`${x}, ${y}`, (x * 50) + 230, -(y * 50) + 230);
		//Cartesian's dashed lines	
		ctx.setLineDash([5, 5]);
		ctx.moveTo((x * 50) + 250, 250);
		ctx.lineTo((x * 50) + 250, -(y * 50) + 250);
		ctx.moveTo(250, -(y * 50) + 250);
		ctx.lineTo((x * 50) + 250, -(y * 50) + 250);
		ctx.stroke();		

	}else if(x >= 0 && y >= 0){

		//Cartesian's circles
		ctx.beginPath();
		ctx.arc((x * 50) + 250, -(y * 50) + 250, 2, 0, 2 * Math.PI);
		ctx.fillStyle = 'black';
		ctx.fill(); 
		ctx.font = "12px Arial";
		ctx.fillText(`${x}, ${y}`, (x * 50) + 230, -(y * 50) + 230);
		//Cartesian's dashed lines	
		ctx.setLineDash([5, 5]);
		ctx.moveTo((x * 50) + 250, 250);
		ctx.lineTo((x * 50) + 250, -(y * 50) + 250);
		ctx.moveTo(250, -(y * 50) + 250);
		ctx.lineTo((x * 50) + 250, -(y * 50) + 250);
		ctx.stroke();

	}else if (x >= 0 && y <= 0){

		//Cartesian's circles
		ctx.beginPath();
		ctx.arc((x * 50) + 250, -(y * 50) + 250, 2, 0, 2 * Math.PI);
		ctx.fillStyle = 'black';
		ctx.fill(); 
		ctx.font = "12px Arial";
		ctx.fillText(`${x}, ${y}`, (x * 50) + 230, -(y * 50) + 230);
		//Cartesian's dashed lines	
		ctx.setLineDash([5, 5]);
		ctx.moveTo((x * 50) + 250, 250);
		ctx.lineTo((x * 50) + 250, -(y * 50) + 250);
		ctx.moveTo(250, -(y * 50) + 250);
		ctx.lineTo((x * 50) + 250, -(y * 50) + 250);
		ctx.stroke();		


	}else if (x <= 0 && y <= 0){

		//Cartesian's circles		
		ctx.beginPath();
		ctx.arc((x * 50) + 250, -(y * 50) + 250, 2, 0, 2 * Math.PI);
		ctx.fillStyle = 'black';
		ctx.fill(); 
		ctx.font = "12px Arial";
		ctx.fillText(`${x}, ${y}`, (x * 50) + 230, -(y * 50) + 230);
		//Cartesian's dashed lines	
		ctx.moveTo((x * 50) + 250, 250);
		ctx.lineTo((x * 50) + 250, -(y * 50) + 250);
		ctx.moveTo(250, -(y * 50) + 250);
		ctx.lineTo((x * 50) + 250, -(y * 50) + 250);
		ctx.stroke();	

	};

};