function PilaStack(){
    this.elementos = []
    this.insertar= function(elemento){
        this.elementos.push(elemento)
    }
    this.extraer=()=>{
        const ultimo = this.elementos[this.elementos.length - 1]
        this.elementos.pop()
        return ultimo
    }
    this.verElementos=()=>{
        return this.elementos
    }

// Ejercicio 1
    this.encolarNumeros = function(numero){
        for (let i = 1; i < numero+1 ; i++) {
        this.elementos.push(i);
        }
    }    

//Ejercicio2
    this.secuParImpar=()=>{
        let positionPar=true
        let positionImpar=true
        for(let i=0; i<this.elementos.length; i++){
            if(i%2 == 0){
                if(this.elementos[i]%2 != 0){
                    positionPar=false
                }
            }
            if(i%2 == 1){
                if(this.elementos[i]%2 != 1){
                    positionImPar=false
                }
            }
        }
        return positionPar && positionImpar
    }

// Ejercicio 3
    this.sumarArreglo = function () {
        let suma_total = 0
        for (var i = 0 ; i < this.elementos.length; i++) {
            let numero =parseInt(this.elementos[i])
            if (isNaN(numero)) {
            alert("El elemento:", this.elementos[i], "No es un numero")
            }else{

            suma_total=suma_total+this.elementos[i]
            }
        }
        console.log("la suma de los valores es :",suma_total)
    }

//Ejercicio 4
    this.numPares=function(){
        pares=[]
        longitud=this.elementos.length
        for(let i=0; i<=longitud; i++){
            const ultimo=this.elementos[this.elementos.length - 1]
            this.elementos.pop()
            if(ultimo%2===0){
                pares.push(ultimo)
            }
        }
        return pares
    }

// Ejercicio 5
    this.impares = function(){
        let arreglo_impares = []
        for (var i = 0 ; i < this.elementos.length; i++) {
        if (this.elementos[i] % 2 != 0) {
            arreglo_impares.push(this.elementos[i])
        }
        }
        console.log("los numeros impares son: ", arreglo_impares)
    }

//Ejercicio 6
    this.devolverStrings = () => {
        strings = []
        longitud = this.elementos.length
        for(let i=0; i<=longitud; i++){
            const ultimo=this.elementos[this.elementos.length - 1]
            this.elementos.pop()
            if(typeof ultimo == 'string'){
                strings.push(ultimo)
            }
        }
        return strings
    }

// Ejercicio 7
    this.sumarTipoDato = () => {
        let strings = 0
        let number = 0
        let array = 0
        for (i = this.primero; i <= this.final; i++) {
        if (typeof this.elementos[i] === 'string') { 
            let = strings + 1
        } else if (typeof this.elementos[i] === 'number') {
            let = number + 1
        } else if (Array.isArray(this.elementos[i])) {
            let = array + 1
        }
        }
        return (`hay ${strings} Strings, ${number} numeros, y ${array} arrays`)
    }
    
//Ejercicio 8
    this.eliminarDato = function(dato){
        const nuevoArray = [];
        for(let i=0; i<=(this.elementos.length-1); i++){
            if(this.elementos[i] != dato){
              nuevoArray.push(this.elementos[i])
            }
        }
        this.elementos=nuevoArray
        return nuevoArray
    }

// Ejercicio 9
    this.eliminarPorPosicion = (position) =>{
        const elementos = []
        longitud = this.elementos.length
        for(let i=0; i < longitud; i++){
            if(i != position){
                elementos.push(this.elementos[i])
            }
        }
        this.elementos = elementos
        return elementos
    }

//Ejercicio 10
    this.eliminarDatosHastaPosicion=function(posicion){
        longitud = this.elementos.length
        for(let i=0; i<=longitud; i++){
            if(i>posicion){
                this.elementos.pop()
            }
        }
        return this.elementos
     }
}

const pila1= new PilaStack()
pila1.insertar(2)
pila1.insertar(7)
pila1.insertar(4)
pila1.insertar(9)
pila1.insertar(16)
pila1.insertar(17)
pila1.insertar(17)
console.log("Los elementos de la pila son:", pila1.verElementos())
console.log("La secuencia par Impar esta :", pila1.secuParImpar())
console.log("Los numeros pares en el orden de salida son:", pila1.numPares())
pila1.insertar('Laura')
pila1.insertar(7)
pila1.insertar('Luis')
pila1.insertar(9)
pila1.insertar('Pipe')
console.log("Los elementos de la pila son:", pila1.verElementos())
console.log("Los string de la pila son: ", pila1.devolverStrings())
pila1.insertar('Camilo')
pila1.insertar(7)
pila1.insertar('Gloria')
pila1.insertar(9)
pila1.insertar('Luisa')
console.log("Los elementos de la pila son:", pila1.verElementos())
console.log("Al eliminar el dato especifico Gloria:", pila1.eliminarDato('Gloria'))
pila1.insertar(3)
pila1.insertar('Camilo')
console.log("Los elementos de la pila son:", pila1.verElementos())
console.log("eliminando los datos hasta la posicion 2: ", pila1.eliminarDatosHastaPosicion(2))
console.log('Eliminando la posicion 2:', pila1.eliminarPorPosicion(2))
console.log("Los elementos de la pila son:", pila1.verElementos())
