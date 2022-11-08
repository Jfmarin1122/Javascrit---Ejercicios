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

    remover_por(posicion){
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
}
    

    // Ejercicio 9

    // Ejercicio 10