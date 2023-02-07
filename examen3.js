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
            if (this.elementos[i].preferencial)
                preferenciales.push(this.elementos[i])
            else
                noPreferenciales.push(this.elementos[i])
        }

        noPreferenciales.sort((a, b) => b.edad - a.edad)
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

    class FilaCine{
        constructor(tamanoCola){
        this.tamCola = tamanoCola;
        this.countPrecio = 0;
        }
        addPersona(nombre, edad){
        const nuevaList = new ListEnlazada
        let precio = 0
        if(edad >= 5 && edad <= 10){
            precio = 10000
        } else if (edad >= 11 && edad <= 17) {
            precio = 15000
        } else if (edad >= 18) {
            precio = 30000
        } 
        this.countPrecio += parseInt(precio)
        console.log(`La persona: ${nombre} con ${edad} años, debe de pagar: ${precio} Pesos`)
        nuevaList.agregar([nombre, edad, precio])
        }
        llenarCola(){
        for(let i =1; i <=this.tamCola; i++){
            let name = prompt("Ingrese su nombre: ")
            let age = prompt("Ingrese su edad")
            this.addPersona(name, age)
        }
        console.log(`En total se recaudaron ${this.countPrecio} Pesos`)
        }
    }
  
const cola = new ColaFila();

cola.encolar({ nombre: 'Laura', edad: 26, preferencial: false })
cola.encolar({ nombre: 'Daniela', edad: 19, preferencial: false })
cola.encolar({ nombre: 'Armando', edad: 45, preferencial: true })
cola.encolar({ nombre: 'Pipe', edad: 70, preferencial: false })
cola.encolar({ nombre: 'Luis Miguel', edad: 54, preferencial: false })
cola.encolar({ nombre: 'Viviana', edad: 36, preferencial: false })
cola.encolar({ nombre: 'Jaime', edad: 14, preferencial: true })
cola.encolar({ nombre: 'Lila', edad: 76, preferencial: true })
cola.encolar({ nombre: 'Jackson', edad: 90, preferencial: false })
cola.encolar({ nombre: 'Felipe', edad: 110, preferencial: true })



cola.reindexar()
console.log(cola)