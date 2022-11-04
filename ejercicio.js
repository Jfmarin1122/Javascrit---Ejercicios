class ColaFila{
    // 1. Constructor
    // se crea el constructor con los atributos basicos que necesita la clase
    constructor(){
        this.elementos = {};
        this.primero = 0;
        this.final = 0;
    }

    // 2. Encolar-Insertar-enqueue
    encolar(info){
        // se toma la posicion final en la que vamos y 
        // nos ubicamos en la fila en esa posicion para 
        // ingresar el nuevo elemento persona string numero o dato
            this.elementos[this.final] = info;
        // aumentamos la posicion final un turno
            this.final++;
    }
    // 3. Desencolar-Atender-Siguiente en fila-dequeue
    desencolar(){
        // se revisa primero si la cola esta vacia 
        // es decir no hay nada o nadie en la cola
        if(this.primero === this.final){
            return null;
      }
        // se toma la posicion primera de la cola y se trae ese 
        // elemento persona string numero o dato
        const info = this.elementos[this.primero];
        // se elimina el elemento persona dato string
        delete this.elementos[this.primero];
        // aumentamos la posicion primera un turno
        this.primero++;
        // se devuelve info
        return info;
    }
    // 4. Tamaño fila - get_size
    tamano_fila(){
        // simplemente se resta la posicion final con la inicial y 
        // ese es el tamaño actual de la cola
        return this.final - this.primero;
    }
    // 5. Esta vacia - is_empty
    esta_vacia(){
        // se revisa si tamaño actual de la fila es 0
        if(this.tamano_fila() === 0){
            return true;
        }else{
            return false;
        }
    }
    // 6. Mirar siguiente elemento sin desencolarlo- ver siguiente - peek
    ver_siguiente(){
        // se revisa si tamaño actual de la fila es 0
        if(this.tamano_fila() === 0){
        // se devuelve null o nada
            return null;
        }
        // si no es 0 se devuelve el elemento que va primero en la fila
        return this.elementos[this.primero];
    }
    // 7. imprimir toda la fila - print
    imprimir(){
        // se revisa si tamaño actual de la fila es 0
        if(this.tamano_fila() === 0){
        // se devuelve null o nada
            return null;
        }
        // se inicializa una variable en vacio
        let respuesta = '';
        // se genera un ciclo para devolver una cadena con cada dato persona numero
        for(let contador = this.primero; contador < this.final; contador++) {
        // se contatena elemento por elemento de la cola
            respuesta += this.elementos[contador] + " ";
        }
        return respuesta;
    }
}
// creacion de clase y llamado de metodos internos
const cola = new ColaFila();
// se ingresan personas a la cola
cola.encolar("Lila");
cola.encolar("Milo");
cola.encolar("Rita");
cola.encolar("Goku");