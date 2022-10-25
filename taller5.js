function ColaFila() {
    this.elementos = []
    this.primero = 0
    this.final = 0
    this.encolar = function(info){
        this.elementos[this.final] = info
        this.final++
        }
    this.desencolar = function(){
        if(this.primero === this.final){
            return null
            }
        const info = this.elementos[this.primero]
        delete this.elementos[this.primero]
        this.primero++
        return info
        }
    this.tamano_fila = function(){  
        return this.final - this.primero
    }
    this.esta_vacia = function(){
        if(this.tamano_fila() === 0){
          return true
        }else{
          return false
        }
      }
    this.ver_siguiente = function(){
        if(this.tamano_fila() === 0){
            return null
    }
    return this.elementos[this.primero]
    }
    this.imprimir = function(){
        if(this.tamano_fila() === 0){
            return null;
        }
        let respuesta = ''
        for(let contador = this.primero; contador < this.final; contador++) {
            respuesta += this.elementos[contador] + " "
        }
        return respuesta
      }

//Ejercicio 1
    this.encolarNumElementos = function(){
        let numElementos = parseFloat(prompt('Ingrese la cantidad de elementos:'))
        for(let i = 1; i <= numElementos; i++){
            this.elementos[this.final] = i
            this.final ++
        }       
    }

//Ejercicio 2
    this.secuParImpar = () => {
        let positionPar = true
        let positionImPar = true
        for(let i = 0; i<this.elementos.length; i++){
            if(i % 2 == 0){
                if(this.elementos[i] % 2 != 0){
                    positionPar = false
                }
            }
            if(i%2 == 1){
                if(this.elementos[i] % 2 != 1){
                    positionImPar = false
                }
            }
        }
        return positionPar && positionImPar
    }

// Ejercicio 3
    this.sumar = () => {
        this.suma = 0
        for (let i = 0; i <= this.final-1; i++) {
            this.suma = this.suma + this.elementos[i]
        }
        console.log('La suma es:', this.suma)
    }

//Ejercicio 4
    this.devolverNumPares= function(){
        pares=[]
        for(let contador = this.primero; contador < this.final; contador++){
            const info = this.elementos[this.primero]
            this.primero++
            if(info % 2 == 0) {
                pares.push(info)
            }
        }
        return pares
    }

// Ejercicio 5
    this.impares = function(){
        let longitud =this.final-this.primero
        let arreglo_impares=[]
        for (var i = 0 ; i < longitud; i++) {
        if (this.elementos[i] % 2 != 0) {
            arreglo_impares.push(this.elementos[i])
        }
        }
        console.log("los numeros impares son: ", arreglo_impares)
    }

//Ejercicio 6
    this.devolverStrings = () => {
        strings = []
        for(let contador = this.primero; contador < this.final; contador++){
            const info = this.elementos[this.primero];
            delete this.elementos[this.primero]
            this.primero++
            if (typeof info == 'string'){
                strings.push(strings)
            }
        }
        return strings
    }

// Ejercicio 7
    this.tipoDato = () => {
        let cantString = 0
        let cantInt = 0
        let cantArray = 0
        let i = 0
        while (i <= this.final - this.primero) {
            if (typeof this.elementos[i] == 'string') {
                cantString ++    
            }
            if (typeof this.elementos[i] == 'number') {
                cantInt ++
            }
            if (Array.isArray(this.elementos[i])) {
                cantArray ++
            }
            i++
            }   
        }
        let respuesta = 'Lista: \n' + 'Cantidad de strings:' + cantString + '\n'
                                    + 'Cantidad de enteros:' + cantInt + '\n'
                                    + 'Cantidad de Array:' + cantArray + '\n'
        console.log(respuesta)
        //return this.elementos

// Ejercicio 8 
    this.eliminarDato=(dato)=>{
        let elementosNuevo = []
        let finalNuevo = 0
        for(let i=this.primero; i<=this.final; i++){
        if(this.elementos[i] != dato && this.elementos[i] != undefined){
            elementosNuevo[finalNuevo] = this.elementos[i];
            finalNuevo++;
        }
        }
        this.elementos = elementosNuevo
        this.primero = 0
        this.final = finalNuevo
        return this.elementos
    }

// Ejercicio 9


//Ejercicio 10 
    this.eliminarDatosHastaPosicion=function(posicion){
        let elementosNuevo = []
        let primeroNuevo = 0
        for(let i=this.primero; i<=this.final; i++){
            if(i > posicion && this.elementos[i] != undefined){
                elementosNuevo[primeroNuevo] = this.elementos[i];
            primeroNuevo++
            }
        }
        this.elementos = elementosNuevo
        this.primero = primeroNuevo
        return this.elementos    
    }   
}

const fila1 = new ColaFila()
fila1.encolarNumElementos()
console.log("La longitud de la fila es:", fila1.tamano_fila())
console.log("Los elementos son: ", fila1.imprimir())
console.log("La secuencia Par Impar esta: ", fila1.secuParImpar())
console.log("Los numeros pares del arreglo son:", fila1.devolverNumPares())
fila1.sumar()
console.log("Los numeros impares del arreglo son:", fila1.Impares())


