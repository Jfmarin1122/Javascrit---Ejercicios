// Ejercicio 2
function inventario(cantidad) {
    let entregas = parseFloat(prompt('Cantidad de entregas del dia'))
    let inventarioTotal = cantidad - entregas
    if (inventarioTotal > 200) {
        console.log (`En el inventario hay: ${inventarioTotal} vacunas`)
        console.log(`Aun hay buen inventario`)
    }
    if (inventarioTotal < 200) {
        console.warn (`En el inventario hay: ${inventarioTotal} vacunas`)
        console.warn(`Se esta agotando el inventario`)
    }
}
inventario(1000)

// Ejercicio 6
function poker(cartas) {
    // var cartas = ['Diamonds', 'hearts', 'spades']
    console.log('Los elementos de la baraja son:')
    for (position in cartas) {
        console.log(`${cartas[position]}`)
        if (cartas[position] == 'AS') {
            console.log('Hay un AS')
        }
        else {
            console.error(false)
        }
        }
}
poker(['Diamonds', 'hearts', 'spades'])