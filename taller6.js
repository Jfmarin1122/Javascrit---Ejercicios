class PilaStack {
    constructor(){
      this.elementos = []
    }
    insertar(elemento){
        this.elementos.push(elemento)
    }
    extraer(){
        const ultimo = this.elementos[this.elementos.length - 1]
        this.elementos.pop()
        return ultimo
    }
    longitud(){
        return this.elementos.length
    }
    ver_proximo(){
        return this.elementos[this.elementos.length - 1]
    }
    ver_elementos(){
       return this.elementos
    }
}
const pila = new PilaStack()

// INSERTAR ELEMENTOS
pila.insertar('Felipe')
pila.insertar('Laura')
pila.insertar('Alejo')
pila.insertar('Santiago')
pila.insertar('Nick')

// MOSTRAR ELEMENTOS
//  console.log(pila.ver_elementos())

// DESENCOLAR ELEMENTOS
pila.extraer()
pila.extraer()
pila.extraer()
pila.extraer()
pila.extraer()

// INSERTAR ELEMENTOS
pila.insertar('Nancy')
pila.insertar('Arnulfo')
pila.insertar('Miguel')
pila.insertar('William')
pila.insertar('Pipe')
console.log(pila.ver_elementos())

console.log(pila.ver_proximo())


