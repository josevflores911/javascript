
		
		var valor, x, y, z, numero;
		var myArray = [];

		x=1;
		y=1;
		z=1;

		var fruits = ["Banana", "Orange", "Apple", "Mango"];
		fruits.push("Lemon");

		

		  function factorial(quadro){
			
			numero = parseInt(valor);	
			
			quadro.value = "";
			for (var i = 0; i < numero; i++) {
			
				//x = x * (valor-i);
				x *= (numero - i);
				quadro.value += x + "=>" + (numero-i) + "\n";


				myArray[i] = x;					
				//array
				if (i == (numero-1)){
					x=1;
					numero=1;
			
				}
			
			}
			
			console.log(myArray);			
						
		}

/* -------esta parte esta incompleta(la formula no fue aplicada solo se calculan los elementos de la formula) y los muestra en consola-----*/
		

	function combinatoria (quadro,param = 3){
			
			numero = parseInt(valor);	
			
			for (var i = 0; i < numero; i++) {
				x *= (numero - i);
			}

			for (var i = 0; i < (numero-param); i++) {
				z *= ((numero - param) - i);
			}


			for (var i = 0; i < param; i++) {
				y *= (param - i);
			}

			console.log(x);
			console.log(y);
			console.log(z);
		}

/*------constructor de circulos--------*/
	
	console.log("Circulo");
	//metodo
	
	/* este metodo no estaba haciendo nada
	function imprimir(){
		
		//console.log("c: raio = " + c2.r + " (" + this.x + "," + c1.y + ")");
		//document.write("");

		props = "";
		for (z in c1){
			//props+= x + " = " + c2[x] + "\n";
			//props+= x +"\n";
			console.log(x+"="+c1[z]);
		}

		 //console.log(props);
	}
	*/

	//constructor
	function Circulo(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;

//		this.imprime = imprimir;
	}


	c1 = new Circulo(0, 3, 4 );
	//c1.imprime();


	c2 = new Circulo(1, 0, 6 );

	
	//c2.imprime();


/*-----------constructor de datos de varios clientes con loops -------------*/

function Cliente(nome, email, telefone){
	this.nome = nome;
	this.email = email;
	this.telefone = telefone;
}


function show(objeto) {

props = "";

for (idx in objeto) {
	props+= idx + " = " + objeto[idx] + "\n";
}
return props;
}

cli1 = new Cliente("maria", "mar@", 46546546);
cli2 = new Cliente("pedro", "pedr@", 132321321);
cli3 = new Cliente("juan", "jua@", 798798798);
cli4 = new Cliente("jose", "jose@", 1111111);
cli5 = new Cliente("Marco", "marco@", 22222222);




/*calculo de dos valores ingresados*/
	
	

function soma() {

	//as variaveis a e b deven estar dentro da function
	//para nao ser inicializadas antes de tempo

	var a = document.formulario.first.value;
	var b = document.formulario.second.value;

	document.formulario.result.value = parseFloat(a) + parseFloat(b);	

	//not work because reasign the value c
	//c=document.formulario.result.value;
	//c =parseFloat(a) + parseFloat(b);	
}
	




