// function Planta(es_de_sol, tipos_de_farmacos, quimica, tiempo_de_crecimiento_final, tiempo_de_crecimiento_actual, 
//                 plagas, luz, humedad, nutrientes) {
function Planta (es_de_sol, luz, humedad, nutrientes) {
    this.es_de_sol = es_de_sol
    // this.tipos_de_farmacos = []
    // this.quimica = []
    // this.tiempo_de_crecimiento_final = tiempo_de_crecimiento_final
    // this.tiempo_de_crecimiento_actual = tiempo_de_crecimiento_actual
    // this.plagas = []
    this.luz = luz
    this.humedad = humedad
    this.nutrientes = nutrientes
    this.descripcion = () => {
        return `FichaTecnicaPlanta ${this.es_de_sol} ${this.luz} ${this.humedad} ${this.nutrientes}`
        // return `FichaTecnicaDeLaPlanta ${this.es_de_sol} ${this.tipos_de_farmacos} ${this.quimica} ${this.tiempo_de_crecimiento_final}
        // ${this.tiempo_de_crecimiento_actual} ${this.plagas} ${this.luz} ${this.humedad} ${this.nutrientes}` 
    }
    this.agregar_luz = () => {
        luzPermitidaMaxima = 100000
        luzAgregada = parseFloat(prompt('Cantidad de luz a agregar'))
        if (luzAgregada < 0) {
            console.log('La cantidad de luz es negativa')
            console.log(`Luz de la planta ${luzAgregada}`)
        }
        if (luzAgregada > luzPermitidaMaxima) {
            console.log('La cantidad de luz supero el 100%')
            console.log(`Luz de la planta ${luzAgregada}`)
            this.humedad = luzAgregada - luzPermitidaMaxima
        }
    }
    this.agregar_humedad = () => {
        humedadAgregada = parseFloat(prompt('Cantidad de humedad a agregar'))
        if (humedadAgregada < 0) {
            console.log('La cantidad de humedad es negativa')
            console.log (`Humedad de la planta ${humedadAgregada}`)
        }
        humedadTotal = humedadAgregada + this.humedad
        if (humedadTotal > 700) {
            console.log('La cantidad de humedad supero el 100%')
            console.log(`Humedad de la planta ${humedadTotal}`)
        }
    }
}

const planta1 = new Planta(true, 0, 0, 0)
console.log(planta1.descripcion())
console.log(planta1.agregar_luz())
console.log(planta1.agregar_humedad())

// const planta1 = new Planta(true, 'remedio' , 'colorante', 2000, 30, 'acaros', 2000, 1, 10)
// console.log(planta1.descripcion())