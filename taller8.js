class Nodo{
    constructor(informacion_ingresada, siguiente_ingresado){
      this.info = informacion_ingresada;
      this.siguiente = siguiente_ingresado;
    }
}

class ListEnlazada{
    constructor(){
        this.cabeza = null;
        this.tamano = 0;
    }
    agregar(informacion) {
        const nuevo_nodo = new Nodo(informacion, null);
        if(this.cabeza === null){
            this.cabeza = nuevo_nodo;
        } else{
            let nodo_actual = this.cabeza;
            while(nodo_actual.siguiente){
                nodo_actual = nodo_actual.siguiente;
            }
            nodo_actual.siguiente = nuevo_nodo;
        }
        this.tamano++;
      }

    agregar_en(informacion, posicion){
        if(posicion < 0 || posicion > this.tamano){
            return null;
        }
        const nuevo_nodo = new Nodo(informacion, null);
        let nodo_actual = this.cabeza;
        let nodo_anterior;
        if(posicion === 0){
            nuevo_nodo.siguiente = nodo_actual;
            this.cabeza = nuevo_nodo;
        }else{
            for(let i = 0; i < posicion; i++){
                nodo_anterior = nodo_actual;
            nodo_actual = nodo_actual.siguiente;
            }
            nuevo_nodo.siguiente = nodo_actual
            nodo_anterior.siguiente = nuevo_nodo
        }
        this.tamano++;
      }
    
    mostrar(){
        if(this.cabeza === null){
            return "No existe la cabeza no hay mucho que mostrar X-X";
        }
        let nodo_actual = this.cabeza;
        let respuesta = "";
        while(nodo_actual.siguiente){
            if(typeof(nodo_actual.info)=="string"){
                respuesta += nodo_actual.info += ' -> ';
            }else{
                respuesta += `tipo: ${typeof(nodo_actual.info)} -> `;
            }
            nodo_actual = nodo_actual.siguiente;
        }
        respuesta += 'null o cola';
        return respuesta;
      }
    
    // Ejercicio 1
    agregarNumDatos(numero) {
        for (let i = 0; i < numero; i++) {
            this.agregar(i)
        }
    }

    // Ejercicio 2
    validarSecuParImpar(){
        let posPar = true
        let posImpar = true
        if(this.cabeza == null){
            return("No hay numeros disponibles para validar")
        }
        else{
            let aux = this.cabeza
            while(aux.siguiente != null){
            for(let i = 1; i <= this.tamano; i++){
                if(i % 2 == 1){
                    if(aux.info % 2 != 0){
                        posPar = false
                }
                }
            if(i % 2 == 0){
                if(aux.info % 2 != 1){
                    posImpar = false
                }
              }
            aux = aux.siguiente
            }
            return posPar && posImpar   
            }    
        }
    }

    // Ejercicio 3
    suma() {
        let total = 0
        let total1 =0
            for (let i = 0;nodo_actual ; ++i) {
                if (typeof nodo_actual === "number"){
                    total += nodo_actual
            if(typeof nodo_actual==="string")
                total += nodo_actual
            total1 += nodo_actual
          }
          nodo = nodo_actual.siguiente
          suma = total+total1
        }
        return suma 
      }

    // Ejercicio 4
    devolverNumPares () {
        let pares = []
        let nodoActual = this.cabeza
        while(nodoActual != null){
            if(nodoActual.info % 2 == 0){
                pares.push(nodoActual.info)
        }
        nodoActual=nodoActual.siguiente 
        }
        return pares
    }

    // Ejercicio 5
    devolverImpar(){
        if(this.cabeza === null){
            return "La cabeza se encuentra vacia";
        }
        let nodo_actual = this.cabeza
        let pilaImpar = []
  
        while(nodo_actual.siguiente) {
            if(typeof(nodo_actual.info)==='number'){
                if (nodo_actual.info%2 !== 0){
                    pilaImpar.push(nodo_actual.info)
                }
            }
            nodo_actual = nodo_actual.siguiente
        }
        return pilaImpar
    }

    // Ejercicio 6
    devolverStrings () {
        let strings = []
        let nodoActual = this.cabeza
        while(nodoActual != null){
            if(typeof nodoActual.info == 'string'){
                strings.push(nodoActual.info)
        }
        nodoActual = nodoActual.siguiente
        }
        return strings
    }

    // Ejercicio 7
    tipoDato(){
        let cantString = 0
        let cantNumber = 0
        let cantArray = 0
        let nodo_actual = this.cabeza
  
        while(nodo_actual.siguiente){
          if(typeof(nodo_actual.info)==='string'){
            cantString ++
          } else if ( typeof(nodo_actual.info)=== 'number'){
            cantNumber ++
          } else if (Array.isArray(nodo_actual.info)){
            cantArray ++
          }
          nodo_actual = nodo_actual.siguiente
        }
        return `Hay ${cantArray} de arrays,
                ${cantNumber} de numeros y,
                ${cantString} de strings`
      }

    // Ejercicio 8
    eliminarDato(dato) {
        let nodoActual = this.cabeza
        if(nodoActual.info == dato){
            this.cabeza = nodoActual.siguiente
            this.tamano --
            return(`Se ha eliminado la cabeza ${dato}`)
        }
        else{
            while(nodoActual.siguiente){
                if(nodoActual.siguiente.info==dato){
                    nodoActual.siguiente=nodoActual.siguiente.siguiente
                    this.tamano--
                return(`Se ha eliminado el dato ${dato}`)
            }
            nodoActual=nodoActual.siguiente
            }
            return ("El dato no fue encontrado")
        }
      }
    
    // Ejercicio 9
    removerPor(posicion){
        if(posicion < 0 || posicion > this.tamano){
            return null;
        }
        let nodo_actual = this.cabeza;
        let nodo_anterior;
    
        if(posicion === 0){
            this.cabeza = nodo_actual.siguiente;
        }else{
            for(let i = 0; i < posicion; i++){
                nodo_anterior = nodo_actual;
                nodo_actual = nodo_actual.siguiente;
            }
            nodo_anterior.siguiente = nodo_actual.siguiente;
        }
        this.tamano--;
        return nodo_actual.info;
    }

    // Ejercicio 10
    removerHasta(position){
        let nodo_actual = this.cabeza
        if(position < 0 || position > this.tamano){
            return null;
        }else if(position === 0){
            this.cabeza = nodo_actual.siguiente
            this.tamano --
        }else {
            for(let i = 1; i<=position; i++){
                this.cabeza = nodo_actual.siguiente
                nodo_actual = nodo_actual.siguiente
                this.tamano --
            }
        }   
    }
}

const enlazada_1 = new ListEnlazada()
enlazada_1.agregar(12)
enlazada_1.agregar(10)
enlazada_1.agregar(11)
console.log(enlazada_1.mostrar())

enlazada_1.agregar_en("ingresare a la posicion 3 :D", 3)
enlazada_1.agregar_en("ingresare a la cabeza posicion 0 :)", 0)
enlazada_1.agregar_en("ingresare a la cola posicion 6 :P", 6)
// se muestra los datos de nuestra lista enlazada
console.log(enlazada_1.mostrar())

// se muestra los datos de nuestra lista enlazada
enlazada_1.mostrar()

enlazada_1.devolverNumPares()
console.log(enlazada_1.mostrar())

enlazada_1.devolverImpar()
console.log(enlazada_1.mostrar())