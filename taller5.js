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
// fillQueue = (size) => {
//     for (let i = 0; i < size; i++) {
//     const data = prompt('Ingresa el dato número ' + (i + 1))
//     this.encolar(data)
//     }   
// }
    this.encolarNumElementos = function(){
        let numElementos = parseFloat(prompt('Ingrese la cantidad de elementos:'))
        for(let i = 0; i <= numElementos; i++){
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
        for(let contador = this.primero; contador <= this.final; contador++){
            const info = this.elementos[contador]
            if(info % 2 == 0) {
                pares.push(info)
            }
        }
        return pares
    }

// Ejercicio 5
    this.devolverNumImpares = function(){
        impares = []
        for(let contador = this.primero; contador < this.final; contador++){
            const info = this.elementos[contador]
            if(info % 2 != 0) {
                impares.push(info)
            }
        }
        return impares
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
    countTypes = () => {
        let countString = 0
        let countNumber = 0
        let countArray = 0
        for (let i = this.primero; i < this.final; i++) {
            const info = this.elementos[i]

            if (typeof info === 'string') countString++
            else if (typeof info === 'number') countNumber++
            else if(Array.isArray(info)) countArray++
        }
        return ({
            string: countString,
            number: countNumber,
            array: countArray
        })
    }

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
    this.eliminarPorPosicion = (position) =>{
        if(this.esta_vacia()){
        return ('La fila esta vacia')
        }
        if (position === this.primero) {
        this.desencolar()
        return ("Se ha elimiado el primer elemento", this.imprimir())
        } else {
        for (i = this.primero; i <= this.final; i++) {
            if (position === i) {
            delete this.elementos[i]
            let j = position
            while (j<this.final) {   
                j++
                this.elementos[j-1] = this.elementos[j]
                this.final--
            }
            return this.imprimir()
            }
        }
        return (`No se ha encontrado ningun elemento en la fila con la siguiente posicion: ${position}`)
        }
    }

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

    // this.tipoDatos=function(){
    //     let longitud=this.final-this.primero
    //     for (var i = 0; i < longitud; i++) {
    //         tipoDatos.push(typeof this.elementos[i])
    //     }
    //     this.eliminarDuplicados()
    // }

    // this.eliminarDuplicados=function(){
    //     const result = [];
    //     tipoDatos.forEach((item)=>{
    //         if(!result.includes(item)){
    //             result.push(item);
    //         }
    //     })
    //     this.conteDatos(result)

    // }

    // this.conteDatos=function(){
    //     tipoDatos.forEach((i) => {
    //     var tipoDatos=(i)
    //     var count=0
    //     let longitud=this.final-this.primero
    //     for (var i = 0; i < longitud; i++) {
    //         if(typeof this.elementos[i] == tipoDatos){
    //             count++;
    //         }
    //     }
    //     console.log("cantidad de datos de tipo:"+tipoDatos+"="+count)
    //     })

    // }

const fila1 = new ColaFila()
fila1.encolarNumElementos()
console.log("La longitud de la fila es:", fila1.tamano_fila())
console.log("Los elementos son: ", fila1.imprimir())
console.log("La secuencia Par Impar esta: ", fila1.secuParImpar())
console.log("Los numeros pares del arreglo son:", fila1.devolverNumPares())
fila1.sumar()
console.log("Los numeros impares del arreglo son:", fila1.devolverNumImpares())


