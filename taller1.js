// Ejercicio 1
// var nombre = prompt('Ingrese el nombre')
// console.log('Ahora estas en la matrix,', nombre)

// Ejercicio 2
// var numeroDecimal = parseFloat(prompt('Ingrese un numero con decimales'))
// var numeroEntero = parseFloat(prompt('Ingrese un numero entero'))
// var resultado = numeroDecimal + numeroEntero
// console.log('El resultado de la suma es:', resultado)

// Ejercicio 3
// var number1 = parseFloat(prompt('Ingrese el primer numero'))
// var number2 = parseFloat(prompt('Ingrese el segundo numero'))
// var resultadoSuma = number1 + number2
// console.log('El resultado de la suma es:', resultadoSuma)  
// var number3 = parseFloat(prompt('Ingrese el tercer numero'))
// var resultadoMultiplicacion = resultadoSuma * number3
// console.info('El resultado de la multiplicacion es:', resultadoMultiplicacion)

// Ejercicio 4
// var kmRecorridos = parseFloat(prompt('Cantidad de kilometros recorridos'))
// console.log('Kilometros recorridos:', kmRecorridos)
// var combustibleGastado = parseFloat(prompt('Litros de combustible gastados'))
// console.log('Litros de combustible gastados:', combustibleGastado)
// var consumoPorKm = kmRecorridos / combustibleGastado
// console.log('El consumo por kilometro es de:', consumoPorKm)

// Ejercicio 5
// var temperatura = parseFloat(prompt('Ingrese una temperatura en Farenheit:'))
// var celsius = (5/9) * (temperatura-32)
// console.warn('La temperatura en grados celsius es:', celsius)

// Ejercicio 6
// var cantidadNumbers = 3
// var number1 = parseFloat(prompt('Ingrese el primer numero'))
// var number2 = parseFloat(prompt('Ingrese el segundo numero'))
// var number3 = parseFloat(prompt('Ingrese el tercer numero'))
// var promedio = (number1 + number2 + number3) / cantidadNumbers
// console.error('El promedio es:', promedio)

// Ejercicio 7
// var descuento = 0.15
// var number = parseFloat(prompt('Ingrese un numero'))
// console.log('El resultado con descuento es:', number - (number * descuento))

// Ejerccio 8
// var palabra1 = prompt('Ingrese una palabra:')
// var palabra2 = prompt('Ingrese otra palabra:')
// var concatenacion = palabra1 + " " + palabra2
// console.log(concatenacion) 

// Ejercicio 9
// var texto = prompt('Ingrese un texto:')
// console.log('Texto:', texto)
// let part = texto.slice(0,1)
// var posicionTexto = console.log('El primer caracter es:', part)
// var indice = prompt(console.log('Ingresa un numero positivo menor a', texto.length))
// console.log(indice)
// console.log('El caracter en esa posicion es:', texto[indice])

// Ejercicio 10
// var shows = parseInt(prompt('Cantidad de shows musicales vistos en el ultimo año:'))
// console.log('Shows vistos en los ultimos años:', shows)
// if (shows > 3) {
//    console.log(true)
// }
// else{
//     console.error(false)
// }

// Ejercicio 11
// var fecha = prompt('Ingrese una fecha en formato DDMMAAA:')
// console.log('Fecha en formato DDMMAAAA:', fecha[0] + fecha[1] + "/" + fecha[2] + fecha[3] + "/" + 
// fecha[4] + fecha[5] + fecha[4] + fecha[5])

// Ejercicio 12
// var numero = parseFloat(prompt('Ingrese un numero entero'))
// if (numero % 2 == 0) {
//      console.log(true)
// }
// else{
//     console.log(false)
// }

// Ejercicio 13
// var edad = parseInt(prompt('Ingrese su edad:'))
// var articulos = parseInt(prompt('Cantidad de articulos comprados:'))
// if (edad > 18 && articulos > 1) {
//     console.log(true)
// }
// else{
//     console.error(false)
// }

// Ejercicio 14
// var texto = prompt('Ingrese un texto:')
// console.log('Texto:', texto)
// console.log('Cantidad caracteres:', texto.length)
// if (texto.length % 2 == 0) {
//     console.info(true)
// }
// else{
//     console.error(false)
// }

// Ejercicio 15
// var palabra1 = prompt('Ingrese una palabra:')
// var palabra2 = prompt('Ingrese otra palabra:')
// console.log('Caracteres primera palabra', palabra1.length)
// console.log('Caracteres segunda palabra', palabra2.length)
// if (palabra1.length < palabra2.length) {
//     console.log(true)
// }
// else {
//     console.warn(false)
// }

// Ejercicio 16
// var nombre1 = prompt('Ingrese su nombre')
// var nombre2 = prompt('Ingrese su nombre')
// var part = nombre1[0]
// var parts = nombre2[0]
// var ultimoCarac1 = (nombre1.length - 1)
// var ultimoCarac2 = (nombre2.length - 1)
// var primerCaracter1 = console.log('El primer caracter del primer nombre es:', part)
// var primerCaracter2 = console.log('El primer caracter del segundo nombre es:', parts)
// var ultimocaracter1 = console.log('El ultimo caracter del primer nombre es:', nombre1[ultimoCarac1])
// var ultimocaracter2 = console.log('El ultimo caracter del segundo nombre es:', nombre2[ultimoCarac2])
// if (part == parts || ultimoCarac1 == ultimoCarac2 ) {
//     console.log(true)
// }
// else{
//    console.log(false)
// }

// Ejercicio 17
// var numeroEntero = parseFloat(prompt('Ingrese un numero entero:'))
// if (numeroEntero > 0) {
//     var valorAbsoluto = numeroEntero
//     console.log('El valor absoluto es:', valorAbsoluto)
// }
// else{
//     var valorAbsolutoN = (numeroEntero) * -1
//     console.log('El valor absoluto es:', valorAbsolutoN)
// }

// Ejercicio 18
// var numero1 = parseFloat(prompt('Ingrese un numero'))
// var numero2 = parseFloat(prompt('Ingrese otro numero'))
// if (numero1 > numero2){
//     console.log('El numero mayor es:', numero1)
// }
// else{
//     console.log('El numero mayor es:', numero2)
// }

// Ejercicio 19
// var letra = prompt('Ingrese una letra')
// if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'  && letra.length == 1) {
//     console.log('Es vocal')
// }
// else {
//     console.log('No se puede procesar el dato')
// }

// Ejercicio 20
var numero1 = parseFloat(prompt('Ingrese un numero'))
var numero2 = parseFloat(prompt('Ingrese otro numero'))
var numero3 = parseFloat(prompt('Ingrese otro numero'))
if (numero1 < numero2 && numero1 < numero3){
    console.log('El numero menor es:', numero1)
}
if (numero2 < numero1 && numero2 < numero3){
    console.log('El numero menor es:', numero2)
}
if (numero3 < numero1 && numero3 < numero2){
    console.log('El numero menor es:', numero3)
}