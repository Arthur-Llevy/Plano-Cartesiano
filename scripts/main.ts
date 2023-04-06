type objectNumbers = {
	[key: string]: string;
};

let pontos: objectNumbers = {};

function create(): void{

	let size = document.getElementById('size') as HTMLInputElement;

		if (size.value !== ''){

			let xy = document.getElementById('xy') as HTMLInputElement;
			let markButton = document.getElementById('send') as HTMLButtonElement;
			let sizeLabel = document.getElementById('sizeLabel') as HTMLLabelElement;
			let createCPButton = document.getElementById('createCP') as HTMLButtonElement;
			let xyLabel = document.getElementById('xyLabel') as HTMLLabelElement;

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

			let inputWidth = document.getElementById('size') as HTMLInputElement;
			let width: string = inputWidth.value.split(',')[0]
			let inputHeight = document.getElementById('size') as HTMLInputElement;
			let height: string = inputHeight.value.split(',')[1]
			let canvas = document.createElement('canvas') as HTMLCanvasElement;
			let container = document.getElementById('container') as HTMLDivElement;

			canvas.setAttribute('width', ((parseInt(width) * 100 + 20)).toString());
			canvas.setAttribute('height', ((parseInt(height)) * 100 + 20).toString());
			canvas.setAttribute('id', 'canvas');

			container.appendChild(canvas);

			//Canvas
			let c = document.getElementById('canvas') as HTMLCanvasElement;
			let ctx: CanvasRenderingContext2D | null  = c.getContext('2d');

			if(ctx){
				ctx.fillStyle = '#eee'; 
				ctx.strokeStyle = 'lime';
				//Cartesian's lines
				ctx.beginPath();
				ctx.moveTo((parseInt(width) * 100) / 2 + 10, 0 + 10);
				ctx.lineTo((parseInt(width) * 100) / 2 + 10, parseInt(height) * 100 + 10);
				ctx.moveTo(0 + 10, (parseInt(height) * 100) / 2 + 10);
				ctx.lineTo((parseInt(width) * 100) + 10, (parseInt(height) * 100) / 2 + 10);
				ctx.stroke();
				ctx.font = "10px Arial";
				ctx.fillText((-1 *  parseInt(width)).toString(), 0,  (parseInt(height) * 100) / 2 + 10);
				ctx.fillText((parseInt(width)).toString(), parseInt(width) * 100 + 10,  parseInt(height) * 100 / 2 + 10);
				ctx.fillText((parseInt(height)).toString(), parseInt(width) * 100 / 2 + 5,  10);
				ctx.fillText((-1 * parseInt(height)).toString(), parseInt(width) * 100 / 2 + 5,  parseInt(height) * 100 + 20);
			};

		
		}else {

			alert('Para prosseguir, é necessário preencher todos os campos.')

		};

};

//Alphabet's indice
let counter: number = -1;	

function marcar(): void{

	let alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('') 

	let xy = document.getElementById('xy') as HTMLInputElement;

	if (xy.value !== ''){

		counter >= 26 ? counter = -1 : counter += 1;

		//C = canvas variable
		let canvas = document.getElementById('canvas') as HTMLCanvasElement ;
		let c = document.getElementById('canvas') as HTMLCanvasElement;
		let ctx: CanvasRenderingContext2D | null = c.getContext('2d');
		let canvasWidth: string = canvas.getAttribute('width') ?? '';
		let width: number = parseInt(canvasWidth) - 20;
		let canvasHeight: string = canvas.getAttribute('height') ?? '';
		let height: number = parseInt(canvasHeight) - 20;
		let y: string = xy.value.split(',')[1];
		let x: string = xy.value.split(',')[0];

		if(ctx){
			ctx.fillStyle = '#eee'
			ctx.strokeStyle = 'lime';
		};

		if (parseInt(x) <= 0 && parseInt(y) <= 0){

			//Cartesian's circles	
			let arcMarginLeft: number = (parseInt(x) * 50) + (width / 2) + 10;
			let arcMarginTop: number = -(parseInt(y) * 50) + 10 + (height / 2);
			console.log(parseInt(canvasWidth))

			if(ctx){
				ctx.beginPath();
				ctx.arc(arcMarginLeft, arcMarginTop, 2, 0, 2 * Math.PI);
				ctx.fillStyle = '#eee';
				ctx.fill(); 

				//Cartesian's points text
				ctx.beginPath();
				ctx.font = "12px Arial";
				ctx.fillStyle = '#eee';
				ctx.fillText(`${alphabet[counter]}`, arcMarginLeft + 10, arcMarginTop - 10);

				//Cartesian's dashed lines	
				ctx.beginPath();
				ctx.setLineDash([5, 5]);
				ctx.moveTo((parseInt(x) * 50) + width / 2 + 10, height / 2 + 10);
				ctx.lineTo((parseInt(x) * 50) + width / 2 + 10, -(parseInt(y) * 50) + height / 2 + 10);
				ctx.moveTo(width / 2 + 10, -(parseInt(y) * 50) + height / 2 + 10);
				ctx.lineTo((parseInt(x) * 50) + width / 2 + 10, -(parseInt(y) * 50) + height / 2 + 10);
				ctx.stroke();	
				console.log(arcMarginLeft)
				console.log(arcMarginTop)
			};

			//Insert points to table
			let pointsTable = document.getElementById('points') as HTMLTableElement;
			let tr = document.createElement('tr') as HTMLTableRowElement;
			let td1 = document.createElement('td') as HTMLTableCellElement;
			let td2 = document.createElement('td') as HTMLTableCellElement;
			let distanciaPonto = document.getElementById('distanciaPonto') as HTMLDivElement;

			pointsTable.style.visibility = 'initial';
			distanciaPonto.style.visibility = 'initial';
			td1.innerHTML = alphabet[counter];
			td1.setAttribute('id', `${x}, ${y}`);
			td2.innerHTML = `(${x},${y})`;
			tr.appendChild(td1);
			tr.appendChild(td2);

			pointsTable.appendChild(tr);

			pontos[alphabet[counter]] = `${x}, ${y}`;

		}else{

			//Cartesian's circles
			let arcMarginLeft: number = (parseInt(x) * 50) + (width / 2) + 10;
			let arcMarginTop: number = -(parseInt(y) * 50) + 10 + (height / 2);

			if(ctx){
				ctx.beginPath();
				ctx.arc(arcMarginLeft, arcMarginTop, 2, 0, 2 * Math.PI);
				ctx.fillStyle = '#eee';
				ctx.fill(); 

				//Cartesian's points text
				ctx.font = "12px Arial";
				ctx.fillStyle = '#eee';	
			};

	 		if(parseInt(x) < 0 && parseInt(y) > 0){

				ctx !== null ? ctx.fillText(`${alphabet[counter]}`, arcMarginLeft + 20, arcMarginTop + 20) : '';

			}else if(parseInt(y) > 0){

				ctx !== null ? ctx.fillText(`${alphabet[counter]}`, arcMarginLeft - 20, arcMarginTop + 20) : ''; 

			}else {

				ctx !== null ? ctx.fillText(`${alphabet[counter]}`, arcMarginLeft - 20, arcMarginTop - 20) : '';

			};		

			//Cartesian's dashed lines	
			if(ctx){
				ctx.beginPath();
				ctx.setLineDash([5, 5]);
				ctx.moveTo((parseInt(x) * 50) + width / 2 + 10, height / 2 + 10);
				ctx.lineTo((parseInt(x) * 50) + width / 2 + 10, -(parseInt(y) * 50) + height / 2 + 10);
				ctx.moveTo(width / 2 + 10, -(parseInt(y) * 50) + height / 2 + 10);
				ctx.lineTo((parseInt(x) * 50) + width / 2 + 10, -(parseInt(y) * 50) + height / 2 + 10);
				ctx.stroke();	
			};

			//Insert points to table
			let pointsTable = document.getElementById('points') as HTMLTableElement;
			let distanciaPonto = document.getElementById('distanciaPonto') as HTMLDivElement;
			let tr = document.createElement('tr') as HTMLTableRowElement;
			let td1 = document.createElement('td') as HTMLTableCellElement;
			let td2 = document.createElement('td') as HTMLTableCellElement;

			distanciaPonto.style.visibility = 'initial';
			pointsTable.style.visibility = 'initial';
			td1.innerHTML = alphabet[counter];
			td1.setAttribute('id', `${x}, ${y}`);
			td1.setAttribute('name', `${x}, ${y}`);
			td2.innerHTML = `(${x},${y})`;
			tr.appendChild(td1);
			tr.appendChild(td2);

			pointsTable.appendChild(tr);	

			pontos[alphabet[counter]] = `${x}, ${y}`;

		};	

		let calcularDistancia = document.getElementById('calcularButton') as HTMLButtonElement;

		calcularDistancia.addEventListener('click', () => {

			let ponto1Input = document.getElementById('dxyA') as HTMLInputElement;
			let ponto1: string = ponto1Input.value.toUpperCase();
			let ponto2Input = document.getElementById('dxyB') as HTMLInputElement;
			let ponto2: string = ponto2Input.value.toUpperCase()

			if(ponto1 !== '' && ponto2 !== ''){

				let resultado: number = Math.sqrt((parseInt(pontos[ponto1].split(',')[0]) - parseInt(pontos[ponto2].split(',')[0])) ** 2 + (parseInt(pontos[ponto1].split(',')[1]) - parseInt(pontos[ponto2].split(',')[1])) ** 2);

				let resultadoDistancia = document.getElementById('resultadoDistancia') as HTMLParagraphElement;
				resultadoDistancia.innerHTML = `A distância entre os pontos ${ponto1} e ${ponto2} é: ${resultado.toFixed(2)}`;

				if(ctx){
					ctx.beginPath();
					ctx.moveTo(parseInt(pontos[ponto1].split(',')[0]) * 50 + width /2 + 10, -(parseInt(pontos[ponto1].split(',')[1]) * 50) + height / 2 + 10);
					ctx.lineTo(parseInt(pontos[ponto2].split(',')[0]) * 50 + width /2 + 10, -(parseInt(pontos[ponto2].split(',')[1]) * 50) + height / 2 + 10);
					ctx.strokeStyle = 'red';
					ctx.fillStyle = 'red';
					ctx.stroke();				
				};

			}else {

				alert('Para prosseguir é necessário preencher todos os campos.');

			};		

		});

	}else {

		alert('Para prosseguir é necessário preencher todos os campos.');

	};

	xy.value = ''; 



};