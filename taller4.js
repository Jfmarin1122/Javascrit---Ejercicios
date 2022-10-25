function Cola() {
    this.elementos = {}
    this.primero = 0
    this.final = 0
    this.encolar = function(info){
        this.elementos[this.final] = info
        this.final++
        }
    this.desencolar = function(){
        if(this.primero === this.final){
            return null;
            }
        const info = this.elementos[this.primero];
        delete this.elementos[this.primero];
        this.primero++;
        return info;
        }
    this.tamano_fila = function(){  
        return this.final - this.primero;
    }
    this.esta_vacia = function(){
        if(this.tamano_fila() === 0){
          return true;
        }else{
          return false;
        }
      }
    this.ver_siguiente = function(){
        if(this.tamano_fila() === 0){
            return null;
    }
    return this.elementos[this.primero];
    }
    this.imprimir = function(){
        if(this.tamano_fila() === 0){
            return null;
        }
        let respuesta = '';
        for(let contador = this.primero; contador < this.final; contador++) {
            respuesta += this.elementos[contador] + " ";
        }
        return respuesta;
      }
}   
const fila1 = new Cola()
fila1.encolar('ALejo')
fila1.encolar('Laura')
fila1.encolar('Valentina')
fila1.encolar('Pipe')
fila1.encolar('Nick')
fila1.encolar('Santiago')
console.log('Los elementos de la fila son:', fila1.imprimir())
console.log('La longitud de la fila es:', fila1.tamano_fila())

console.log('Has desencolado a:', fila1.desencolar())
console.log('Has desencolado a:', fila1.desencolar())
console.log('Has desencolado a:', fila1.desencolar())
console.log('Los elementos de la fila son:', fila1.imprimir())
console.log('El siguiente elemento de la fila es:', fila1.ver_siguiente())



