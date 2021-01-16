// Metodos de array

// Son metodos que reciben como parametro una funcion
// Y esa funcion se le va a aplicar a todos los miembros del array
// Casi todos reciben como parametros en esa funcion cada uno de los elementos,
// el indice, y el array



// MAP

// Retorna un array nuevo, cuyos elementos son lo que retorna la funcion-parametro

// const edades = [23, 24, 6, 8, 42, 23]

// const nuevoArray = edades.map((edad) => {
//   console.log(edad)
//   return edad + 10
// })

// console.log(nuevoArray)


// FIND

// Retorna el primer elemento que cumpla una condicion
// La condicion debe ser *retornada* en la funcion parametro
// Si no hay ninguno que cumpla la condicion, retorna undefined
// similar a map, recibe una fx como parametro, busca un elemento q cumpla una condicion

// recorre un array, solo devuelve el priemr elemento que cumpla con la condicion, a diferencia de map que retorna todos los elementos
// valores falsy (q JS identifdica como False) son null, "", 0, NaN, undefined, false


// const edades = [23, 24, 6, 8, 42, 23]
// const nombres = ["maca", "sol", "caro", "rosy", "flor"]

// edades.find((edad) => {})

// const mayorA18 = edades.find((edad) => {
//   return edad > 18  // si o si poner return, tiene q ser algo q JS pueda tratar como booleano
// })

// const empiezaConF = nombres.find((nombre) => {
//   return nombre[0] === "f"  // deja de recorrer el array nombres apenas encuentra el 1er elemento q cumple con la condicion
// })
// console.log(mayorA18)
// console.log(empiezaConF)

// FILTER
// Retorna todos los elementos que cumplan una condicion (en forma de array)
// La condicion debe ser *retornada* en la funcion parametro
// Si no hay ninguno que cumpla la condicion, retorna un array vacio
// retorna todos los elementos que cumplan la condicion. a diferencia de find que solo retorna el 1ero

const edades = [23, 24, 6, 8, 42, 23]
const nombres = ["maca", "sol", "caro", "rosy", "flor"]

const mayorA18 = edades.filter((edad) => {
  return edad < 18
})

console.log(mayorA18)


// EVERY

// Recibe una funcion como parametro
// Lo que retorne esa funcion es una condicion que se le aplicara a todos los miembrs del array
// Si la respuesta para todos es true, devuelve true. Si la respuesta al menos para uno es false, devuelve false.
// pasa la condicion a todos los elementos del array, retorna true solo si todos los elementos cumplen con la condicion


const nombres = ["maca", "sol", "caro", "rosy", "flor"]

const tienenMenosDeSeisLetras = nombres.every((nombre) => {
  return nombre.length < 6
})

console.log(tienenMenosDeSeisLetras)


// SOME
// Recibe una funcion como parametro
// Lo que retorne esa funcion es una condicion que se le aplicara a todos los miembrs del array
// Si la respuesta para al menos 1 es true, devuelve true.
// Si la respuesta para todos es false, devuelve false.

const nombres = ["maca", "sol", "caro", "rosy", "flor"]

const hayAlgunoDeTresLetras = nombres.some((nombre) => {
  return nombre.length === 4
})

console.log(hayAlgunoDeTresLetras)


// ARRAYS DE OBJETOS

const alumnas = [
  {
    nombre: 'maca',
    edad: 22,
  },
  {
    nombre: 'marian',
    edad: 27,
  },
  {
    nombre: 'rosy',
    edad: 25,
  },
  {
    nombre: 'caro',
    edad: 28,
  },
  { nombre: 'angie', edad: 38 },
  {nombre: 'dani', edad: 24}
];

// el array
console.log(alumnas)
// el primer elemento dentro de ese array (un objeto)
console.log(alumnas[0])
// la propiedad nombre dentro del primer elemento del array
console.log(alumnas[0].nombre)

const alumnasSinEdad = alumnas.map((alumna) => {
    delete alumna.edad  // para borrar propiedad
    return alumna
})

console.log(alumnasSinEdad)


// Crear un array nuevo con todas las alumnas que tengan menos de 25 años
// Guardar en una variable a la primera alumna cuyo nombre tenga mas de 4 letras
// Crear un booleano que diga si todas las alumnas tienen mas de 18 años
// Crear un booleano que diga si al menos una alumna tiene mas de 30 años

/////////////////////


// Concatenamiento de metodos

const alumnas = ["Maca", "Sol", "Flor", "Angie", "Marian"]

const masDeCincoLetras = alumnas.map((alumna) => {
  return alumna.toUpperCase()
})
.filter((alumna) => {
  return alumna.length >= 4
})
.some((alumna) => {
  return alumna.length >=5
})







//EJERCICIOS

//1 de FILTER
// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
// Mostrar el array original y el filtrado


const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];

const losMasCaros = costos.filter((numero) => {
    return numero >= 50
})


console.log(costos);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]



// 2 de FILTER
// Tenemos un array en una variable numeros con números al azar.
// También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
// Utilizando filter crear un nuevo array con todos los números pares y guardalo en la variable numerosPares
// Utilizando filter crear un nuevo array con todos los números impares y guardalo en la variable numerosImpares
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];


const numerosPares = masNumeros.filter((numero) => {
    return numero % 2 === 0 // JS identifica 0 como false
});


const numerosImpares = masNumeros.filter((numero) => {
    return numero % 2 !== 0
});

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]


// MAP

// 7
// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA (este ultimo sobre el costo + la ganancia)
const costos2 = [ 12.5, 56, 98, 45.75 ];

const agregarIVA = (costo) => {
  return costo * 1.21;
}

const sumarGanancia = (costo) => {
  return costo * 1.5;
}

// codear acá la solución del ejercicio


const preciosFinales = costos2.map((elemento) => {
    return agregarIVA(sumarGanancia(elemento))
})

console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]