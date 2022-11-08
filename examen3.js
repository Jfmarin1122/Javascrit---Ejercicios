class ColaFila{
    constructor(){
      this.elementos = {};
      this.primero = 0;
      this.final = 0;
    }
  
    encolar(info){
        this.elementos[this.final] = info;
        this.final++;
    }
    desencolar(){
        if(this.primero === this.final){
            return null;
        }
        const info = this.elementos[this.primero];
        delete this.elementos[this.primero];
        this.primero++;
        return info;
    }
    tamano_fila(){
        return this.final - this.primero;
    }
    esta_vacia(){
        if(this.tamano_fila() === 0){
            return true;
        }else{
            return false;
        }
    }
    ver_siguiente(){
        if(this.tamano_fila() === 0){
            return null;
        }
        return this.elementos[this.primero];
    }
    imprimir(){
        if(this.tamano_fila() === 0){
            return null;
        }
        let respuesta = '';
        for(let contador = this.primero; contador < this.final; contador++) {
            respuesta += this.elementos[contador] + " ";
        }
        return respuesta;
    }
    reindexar() {
        const preferenciales = []
        const noPreferenciales = []
        for (let i = this.primero; i < this.final; i++) {
            if (this.elementos[i].preferencial === true)
                preferenciales.push(this.elementos[i])
            else
                noPreferenciales.push(this.elementos[i])
        }
        
        const nuevaCola = new ColaFila()
        for (let i = 0; i < preferenciales.length; i++) {
            nuevaCola.encolar(preferenciales[i])
        }
        
        for (let i = 0; i < noPreferenciales.length; i++) {
            nuevaCola.encolar(noPreferenciales[i])
        }

        this.elementos = nuevaCola.elementos
        this.primero = nuevaCola.primero
        this.final = nuevaCola.final
    }
}
const cola = new ColaFila();

cola.encolar({ nombre: 'Laura', edad: 26, preferencial: false })
cola.encolar({ nombre: 'Daniela', edad: 19, preferencial: false })
cola.encolar({ nombre: 'Armando', edad: 45, preferencial: true })
cola.encolar({ nombre: 'Luis Miguel', edad: 54, preferencial: false })
cola.encolar({ nombre: 'Viviana', edad: 36, preferencial: false })
cola.encolar({ nombre: 'Jaime', edad: 14, preferencial: true })
cola.encolar({ nombre: 'Lila', edad: 76, preferencial: true })

cola.reindexar()
console.log(cola)

