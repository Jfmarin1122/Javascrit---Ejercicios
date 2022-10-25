// Ejercicio 1
// function Persona(name, age, identification) {
//     this.name = name
//     this.age = age
//     this.identification = identification
//     this.mostrar = () => {
//         return `Person ${this.name} ${this.age} ${this.identification}`
//     } 
//     this.es_mayor_de_edad = () => {
//         if (this.age >= 18) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
// }
// const persona1 = new Persona('Pipe', 21, 1002542593)
// console.log(persona1.mostrar())
// console.log(persona1.es_mayor_de_edad())

// Ejercicio 2
// function Cuenta(titular, cantidad) {
//     this.titular = titular
//     this.cantidad = cantidad
//     this.mostrar = () => {
//         return `Cuenta ${this.titular} ${this.cantidad}`
//     }
//     this.ingresar = (valor) => {
//         valor = parseFloat(prompt('Ingrese el valor a ingresar'))
//         if (valor < 0) {
//             console.error ('El valor debe ser positivo')
//         }
//         else {
//             this.cantidad =  this.cantidad + valor
//             console.log (`El valor ingresado es: ${valor}`)
//             console.log (`La cuenta con el ingreso quedo con: ${this.cantidad}`)
//         }
//     }
//     this.retirar = (valorRetiro) => {
//         valorRetiro = parseFloat(prompt('Ingrese el valor a retirar'))
//         this.cantidad = this.cantidad - valorRetiro
//         console.log (`El valor del retiro fue de: ${valorRetiro}`)
//         console.log (`La cuenta con el retiro quedo con: ${this.cantidad}`)
//     }
// }

// let cuenta1 = new Cuenta('Pipe', 2000)
// console.log(cuenta1.mostrar())
// console.log(cuenta1.ingresar()) 
// console.log(cuenta1.retirar())   


//Ejercicio 3
// function Formulas(){
// 	this.sumar = function(numeroUno, numeroDos){
// 		suma=numeroUno+numeroDos
// 		console.log(`La suma de los numeros es:`+suma)
// 	}
// 	this.fibonnaci = (cantidad) =>{
//         let limit = cantidad;
//         let fibo = [0,1];

//         for(let i=2; i <= limit; i++){
//             fibo.push(fibo[i-1] + fibo[i-2]);
//             alert(fibo[i])    
//         }
// }
// 	this.modulo = function(numModulo) {
//         numModulo = parseFloat(prompt('Ingrese un numero entero'))
//         console.log(`Son divisibles por ${numModulo}, y dan residuo 0:`)
//         for (var i = 0; i <= numModulo + 1; i++) {
//             if (numModulo % i == 0) {
//                 console.log(i)
//         	}
//         }
            
//     }
//     this.esPrimo = (numero) =>{
//     	for(let i = 2; i<numero; i++){
//     		if(numero%i==0){
//     			return false
//     		}
//     	}
//     	return numero !==1
//     }
//     this.numerosPrimos= function(cantidadNum){
//     	//numero = parseFloat(prompt('Ingrese la cantidad de numeros de los cuales desea saber cuales son los primos:'))
//     	const arrayRespuesta=[]
//    			//console.log(`Son numeros primos del 1 al ${cantidadNum}`)
//    		for (let i = 0; i <= cantidadNum; i++){
//    			if(this.esPrimo(i)){
//    				arrayRespuesta.push(i)
//    			}
//    		}
//    			console.log(arrayRespuesta)
//    	}
// }

// const formula1= new Formulas()
// formula1.sumar(7,7)
// formula1.modulo()
// formula1.fibonnaci(3)
// formula1.numerosPrimos(20)


// Ejercicio 4
// function Persona(name, age, dni, gender, peso, altura) {
//     this.name = name
//     this.age = age
//     this.dni = dni
//     this.gender = gender
//     this.peso = peso
//     this.altura = altura
//     this.mostrar = () => {
//         return `Person ${this.name} ${this.age} ${this.dni} ${this.gender} ${this.peso} ${this.altura}`
//     }   
//     this.calcularMC = () => {
//         const pesoIdeal = (this.peso)/ Math.pow(this.altura, 2)
//         if (pesoIdeal < 20) {
//             console.log(-1)
//         }
//         if (pesoIdeal >= 20 && pesoIdeal <= 25) {
//             console.log(0)
//         }
//         if (pesoIdeal > 25) {
//             console.log(1)
//         }
//     }
//     this.esMayorDeEdad = () => {
//         if (this.age >= 18) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
//     this.comprobarSexo = () => {
//         if (this.gender != 'M' && this.gender != 'F') {
//             return 'H'
//         }
//         else {
//             console.log(`Su genero es ${this.gender}`)
//         }
//     }
// }

// const persona1 = new Persona('Alejo', 19, 1002542593, 'B', 81, 1.91)
// console.log(persona1.mostrar())
// console.log(persona1.calcularMC())
// console.log(persona1.esMayorDeEdad())
// console.log(persona1.comprobarSexo())


// Ejercicio 5
// function Contrasena(password) {
//     this.longitud = ''
//     this.password = password
//     this.esFuerte = () => {
//         return console.log(this.tieneMayusculas(2) && this.tieneMinusculas(1) && this.tieneNumeros(5))
//     }
//     this.tieneMayusculas = (cantidadMayusculas) => {
//         let totalMayusculas = 0
//         for (let i=0; i<this.password.length; i++) {
//             if (['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].includes(this.password.charAt(i))) {
//                 // Contar total de coincidencias
//                 totalMayusculas += 1
//             }
//         }
//         return totalMayusculas >= cantidadMayusculas
//         // this.password
//         // 'abcd'.charAt()
//         // 'abcd'.length
//     }
//     this.tieneMinusculas = (cantidadMinusculas) => {
//         let totalMinusculas = 0
//         for (let i=0; i<this.password.length; i++) {
//             if (["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].includes(this.password.charAt(i))) {
//                 // Contar total de coincidencias
//                 totalMinusculas += 1
//             }
//         }
//         return totalMinusculas >= cantidadMinusculas
//     }
//     this.tieneNumeros = (cantidadNumeros) => {
//         let totalNumeros = 0
//         for (let i=0; i<this.password.length; i++) {
//             if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(this.password.charAt(i))) {
//                 // Contar total de coincidencias
//                 totalNumeros += 1
//             }
//         }
//         return totalNumeros >= cantidadNumeros
//     }
//     this.GenerarPaswword = function(longitud) {
//             var pass = ''
//             var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
//                     'abcdefghijklmnopqrstuvwxyz0123456789@#$'
              
//             for (i = 1; i <= longitud; i++) {
//                 var char = Math.floor(Math.random()
//                             * str.length + 1);
                  
//                 pass += str.charAt(char)
//             }
//             console.log(pass)
//         }

//     this.seguridadPaswword = function(password){
//         let longitudContra = password.length
//         console.log(longitudContra)
//         if (longitudContra >= 1 && longitudContra <= 6) {
//             alert("El password es debil")
//         }
//         if(longitudContra >=7 && longitudContra <=10){
//             alert("El password tiene seguridad media")
//         }
//         else{
//             alert("El password es fuerte")
//         }
//     }
// }
// const contraSeaUno = new Contrasena('ABCDbgddn11223')
// contraSeaUno.esFuerte()
// contraSeaUno.GenerarPaswword(5)
// contraSeaUno.seguridadPaswword(123455)


//Ejercicio 6
// function Contador(valor){
// 	this.valor=valor
// 	this.reset=()=>{
// 		this.valor=0
// 		console.log(`Contador reseteado ${this.valor}`)
// 	}
// 	this.inc=function() {
// 		this.valor+=1
// 		console.log(`Contador incrementado ${this.valor}`)
// 	}
// 	this.dec=function(){
// 		this.valor-=1
// 		console.log(`Contador decrementado ${this.valor}`)
// 	}
// 	this.valorActual=()=>{
// 		console.log(`Valor actual del contador ${this.valor}`)
// 	}
// 	this.valorNuevo=(valorNuevo)=>{
// 		this.valor=valorNuevo
// 		console.log(`Valor nuevo del contador ${this.valor}`)
// 	}
// }

// const contador1=new Contador(10)
// contador1.inc()
// contador1.inc()
// contador1.dec()
// contador1.inc()
// contador1.valorActual()
// contador1.valorNuevo(20)
// contador1.inc()


//Ejercicio 7
// function Contador(valor){
// 	this.valor=valor
// 	this.comando=0
// 	this.reset=()=>{
// 		this.valor=0
// 		this.comando=0
// 		console.log(`Contador reseteado ${this.valor}`)
// 	}
// 	this.inc=function(){
// 		this.valor+=1
// 		this.comando=1
// 		console.log(`Contador incrementado ${this.valor}`)
// 	}
// 	this.dec=function(){
// 		this.valor-=1
// 		this.comando=2
// 		console.log(`Contador decrementado ${this.valor}`)
// 	}
// 	this.valorActual=()=>{
// 		this.comando=3
// 		console.log(`Valor actual del contador ${this.valor}`)
// 	}
// 	this.valorNuevo=(valorNuevo)=>{
// 		this.valor=valorNuevo
// 		this.comando=4
// 		console.log(`Valor nuevo del contador ${this.valor}`)
// 	}
// 	this.ultimoComando=function(){
// 		if(this.comando==0){
// 			console.log('El ultimo comando usado fue Reset')
// 		}
// 		if(this.comando==1){
// 			console.log('El ultimo comando usado fue Incremento')
// 		}
// 		if(this.comando==2){
// 			console.log('El ultimo comando usado fue Decremento')
// 		}
// 		if(this.comando==3){
// 			console.log('El ultimo comando usado fue Consulta Valor')
// 		}
// 		if(this.comando==4){
// 			console.log('El ultimo comando usado fue Actualización')
// 		}
// 	}
// }

// const contador2=new Contador(12)
// contador2.reset()
// contador2.inc()
// contador2.ultimoComando()


// Ejercicio 8
// function Dragon(nombre, energia) {
//     this.nombre = nombre
//     this.energia = energia
//     this.comer = (gramos) => {
//         this.energia = this.energia + (gramos * 4)
//         return `+${(gramos * 4)}`
//     }
//     this.volar = (kilometros) => {
//         this.energia = (this.energia - kilometros) - 10
//         return `-${kilometros+10}` 
//     }
//     this.energiaFinal = () => {
//         return `${this.energia} Joules`
//     }
// }

// let dragon1 = new Dragon('Chimuela', 0)
// console.log(dragon1.comer(100))
// console.log(dragon1.volar(10))
// console.log(dragon1.volar(20))
// console.log(dragon1.energiaFinal())


// Ejercicio 9
// function Dragona(nombre, energia) {
//     this.nombre = nombre
//     this.energia = energia
//     this.comer = (gramos) => {
//         this.energia = this.energia + (gramos * 4)
//         return `+${(gramos * 4)}`
//     }
//     this.volar = (kilometros) => {
//         this.energia = (this.energia - kilometros) - 10
//         return `-${kilometros+10}` 
//     }
//     this.estaDebil = () => {
//         if (this.energia < 50) {
//             return `Si`
//        }else{
//             return `No`
//        }
//     }
//     this.estaFeliz = () => {
//         if (this.energia > 500 && this.energia < 1000) {
//             return `Si`
//         }
//         else{
//             return `No`
//         }
//     }
//     this.cuantoQuiereVolar = () => {
//         if (this.energia > 300 && this.energia < 400) {
//             if (this.energia%20 == 0) {
//                 return (this.energia / 5) + 10 + 15
//             }
//             else{
//                 return (this.energia / 5) + 10                
//             }
//         }
//         else{
//             return this.energia / 5
//         }
//     }
//     this.energiaFinal = () => {
//         return `${this.energia} Joules`
//     }
// }

// let dragona1 = new Dragona("Chimuela", 0)

// console.log(dragona1.comer(200))
// console.log(dragona1.volar(20))
// console.log(dragona1.volar(20))
// console.log(dragona1.estaDebil())
// console.log(dragona1.estaFeliz())
// console.log(dragona1.energiaFinal())
// console.log(dragona1.cuantoQuiereVolar())


// Ejercicio 10
//Numero Multiplo de 20
// function Multiplo20(numero){
// 	if(numero%20==0){
// 		console.log(`El numero ${numero} es multiplo de 20`)
// 	}
// 	else{
// 		console.log(`El numero ${numero} no es multiplo de 20`)
// 	}
// }

// Multiplo20(40)
// Multiplo20(12)

//Calculadora

// function Calculadora(){
// 	this.valor=0
// 	this.cargar=function(numero){
// 		this.valor=numero
// 	}

// 	this.sumar=function(numeroSumar){
// 		this.valor=this.valor+numeroSumar
// 		console.log(`El resultado de la suma es = ${this.valor}`)
// 	}
// 	this.restar=(numeroRestar)=>{
// 		this.valor=this.valor-numeroRestar
// 		console.log(`El resultado de la resta es = ${this.valor}`)
// 	}
// 	this.multiplicar=function(numeroMultiplicar){
// 		this.valor=this.valor*numeroMultiplicar
// 		console.log(`El resultado de la multiplicacion es = ${this.valor}`)
// 	}
// 	this.valorActual=()=>{
// 		console.log(`El valor actual es=${this.valor}`)
// 	}
// }

// const calculadora1=new Calculadora()
// calculadora1.cargar(0)
// calculadora1.sumar(4)
// calculadora1.multiplicar(5)
// calculadora1.restar(8)
// calculadora1.multiplicar(2)
// calculadora1.valorActual()


// Ejercicio 11
// function Libro(titulolibro, autor, numEjemplibro){
// 	this.tituloLibro=titulolibro
// 	this.autor=autor
// 	this.numEjemplibro=numEjemplibro
// 	this.numEjemPrestados=0
// 	this.prestamo=function(numAPrestar){
// 		if(this.numEjemPrestados+numAPrestar>this.numEjemplibro){
// 			return console.log(`false, No hay esa disponiblidad de libros`)
// 		}

// 		else{
// 			this.numEjemPrestados=this.numEjemPrestados+numAPrestar
// 			return console.log(`true, Han sido prestados ${numAPrestar} Libros`)
// 		}
// 	}
// 	this.devolucion=(numADevolver)=>{
// 		if(this.numEjemPrestados==0 || numADevolver>this.numEjemPrestados ){
// 			return console.log('false, No puedes realizar la devolucion de libros que no has prestado')
// 		}

// 		if(this.numEjemPrestados-numADevolver<this.numEjemPrestados){
// 			this.numEjemPrestados=this.numEjemPrestados-numADevolver
// 			return console.log('true, La devolucion ha sido correcta')
// 		}
// 	}
// 	this.mostrarLibro=function(){
// 		return console.log(`Libro ${this.tituloLibro}, Autor ${this.autor}, numero de ejemplares ${this.numEjemplibro}, prestados ${this.numEjemPrestados}`)
// 	}
// }

// const libro1= new Libro('Los ojos del Perro Siberiano', 'Antonio Santa Ana', 5)
// libro1.prestamo(3)
// libro1.prestamo(1)
// libro1.mostrarLibro()
// libro1.prestamo(1)
// libro1.mostrarLibro()


//Ejercicio 12
// function Enterprise(potencia, coraza) {
// 	this.potencia=function() {
// 		if(potencia>=0 && potencia<=100){
// 			this.potencia=potencia
// 			console.log(`La potencia asignada fue ${this.potencia}`)
// 		}
// 		else{
// 			return console.log("La potencia que desea asignar supera los limites")
// 		}
// 	}
// 	this.coraza=()=>{
// 		if(coraza>=0 && coraza<=20){
// 			this.coraza=coraza
// 			console.log(`La coraza asignada fue ${this.coraza}`)
// 		}
// 		else{
// 			return console.log("La coraza que desea asignar supera los limites")
// 		}

// 	}
// 	this.encontrarPilaAtomica=()=>{
// 		if(this.potencia>=75){
// 			this.potencia=100
// 		}
// 		else{
// 			this.potencia=this.potencia+25
// 		}
// 		console.log(`Al encontrarse con la pila Atomica su potencia ha quedado ${this.potencia}`)
// 	}

// 	this.encontrarUnEscudo=function() {
// 		if(this.coraza>=10){
// 			this.coraza=20
// 		}
// 		else{
// 			this.coraza=this.coraza+10
// 		}
// 		console.log(`Al encontrarse con un escudo su coraza ha quedado ${this.coraza}`)
// 	}
// 	this.recibirAtaque=(puntosDeAtaque)=>{
// 		if(puntosDeAtaque<=this.coraza){
// 			this.coraza=this.coraza-puntosDeAtaque
// 			console.log(`Se paro el ataque con la coraza y quedo con ${this.coraza}`)
// 		}
// 		else{
// 			let puntosRestantes=puntosDeAtaque-this.coraza
// 			this.coraza=0
// 			if(puntosRestantes>=this.potencia){
// 				this.potencia=0
// 			}
// 			else{
// 				this.potencia=this.potencia-puntosRestantes
// 			}
// 			console.log(`Se paro el ataque con la coraza y la potencia, quedo con ${this.coraza} de coraza y ${this.potencia} de potencia`)
// 		}
// 	}


//Ejercicio 13 Complemento 12
// 	this.fortalezaDefensiva=()=>{
// 		this.fortalezaDefensiva=this.potencia+this.coraza
// 		console.log(`el maximo nivel de ataque es ${this.fortalezaDefensiva}`)
// 	}
// 	this.necesitaFortalecerse=function(){
// 		if(this.coraza==0 && this.potencia<=20){
// 			console.log('true')
// 		}
// 		else{
// 			console.log('false')
// 		}
// 	}
// 	this.fortalezaOfensiva=()=>{
// 		if(this.potencia<20){
// 			this.fortalezaOfensiva=0
// 			return console.log(this.fortalezaOfensiva)
// 		}
// 		else{
// 			this.fortalezaOfensiva=(this.potencia-20)/2
// 			return console.log(this.fortalezaOfensiva)
// 		}
// 	}

// }

// const enterprise1=new Enterprise(50,5)
// enterprise1.potencia()
// enterprise1.coraza()
// enterprise1.encontrarPilaAtomica()
// enterprise1.recibirAtaque(14)
// enterprise1.encontrarUnEscudo()
// enterprise1.fortalezaDefensiva()
// enterprise1.necesitaFortalecerse()
// enterprise1.fortalezaOfensiva()


// Ejercicio 14
function Prototipo(cambio, rpm) {
    this.cambio = cambio
    this.rpm = rpm
    this.arrancar = () => {
        return `Cambio: ${this._cambios = 1} / Rpm: ${this._rpm = 500}`
    }
    this.subirCambio = () => {
        if (this._cambios < 5) {
            return this._cambios = this._cambios += 1
        }else{
            return `Vehiculo Apagado`
        }
    }
    this. bajarCambio = () => {
        if (this._cambios > 1) {
            return this._cambios = this._cambios -= 1
        }else{
            return `Vehiculo Apagado`
        }
    }
    this.subirRPM = (rmp) => {
        if (rmp >= 5000) {
            this._rpm = 0
            return `Vehiculo Apagado`
        }else{
            return this._rpm = this._rpm + rmp
        }
    }
    this.bajarRPM = (rpm) => {
        if (this._rpm <= 0) {
            this._rpm = 0
            return `Vehiculo Apagado`
        }else{
            return this._rpm = this._rpm - rmp
        }
    }
    this.velocidad = () => {
        let velocidad = (this._rpm / 100) * (0.5 + (this._cambios / 2))
        return `Velocidad: ${velocidad}Km/H`
    }
    this.consumoActualPorKm = () => {
        let multiplo=1
        let velocidad = (this._rpm / 100) * (0.5 + (this._cambios / 2))
        if(this._cambios == 1){
            multiplo = 3
        }else if (this._cambios == 2) {
            multiplo = 2
        }
        if(this._rpm >= 0 && this._rpm <= 3000){
            return `${0.05*velocidad} litros/Km`
        }else if (this._rpm >= 3000 && this._rpm <= 3500) {
            return `${0.05* ((this._rpm - 2500) / 500 )} litros/Km`
        }else if(this._rpm >= 3500 && this._rpm <= 4000){
            return `${0.05*((this._rpm - 2500) / 500 )*multiplo*3} litros/Km`
        }else if(this._rpm >= 4000 && this._rpm <= 4500){
            return `${0.05*((this._rpm - 2500) / 500 )*multiplo*4} litros/Km`
        }else if(this._rpm >= 4500 && this._rpm <= 5000){
            return `${0.05*((this._rpm - 2500) / 500 )*multiplo*5} litros/Km`
        }else if(this._cambios == 1 && this._rpm == 5000){
            return`${0.05 * 5 * 3} litros/Km`
        }
    }
}

let vehiculo = new Prototipo(1, 500)

console.log(vehiculo.arrancar())

console.log(vehiculo.subirCambio())
console.log(vehiculo.bajarCambio())

console.log(vehiculo.subirRPM(500))
// console.log(vehiculo.bajarRPM(500))

console.log(vehiculo.velocidad())
console.log(vehiculo.consumoActualPorKm())

