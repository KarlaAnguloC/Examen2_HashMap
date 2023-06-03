// Subir este código a un Repositorio de su propia Autoria.
// Grabar un video educativo donde 
//   Se explica linea por linea.
//   Se usa el Debugger como herramienta principal.
// Compartir el video por un link (Youtube, Drive, etc).

//Explicar cual es esta estructura de datos y como se comporta.
let mapa = new Map();                                       

mapa.set("clave", "valor");

console.log(mapa.get("clave")); // imprime: "valor"

// // Explicar, como se puede recorrer un Hash Map, paso a paso.
mapa.set("clave1", "valor1");
mapa.set("clave2", "valor2"); 

mapa.forEach((valor, clave) => {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
});

//Verifica si el Hash Map tiene una clave en especifico
let mapa1= new Map();
mapa1.set('clave1', 'valor1');
mapa1.set('clave2', 'valor2');

console.log(mapa1.has('clave1')); // Devuelve true
console.log(mapa1.has('clave3')); // Devuelve false

// //Los Hash Maps permiten una amplia gama de tipos de datos tanto para las claves como para los valores
let mapa2 = new Map();

mapa2.set(10, true);
mapa2.set(4.2, 2); 
mapa2.set("Ejem", 6.6);
mapa2.set(true,"ejem");

mapa2.forEach((valor, clave) => {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
});

// Explicar el siguiente ejemplo:
let arr = [1, 2, 3, 1, 3, 4, 5, 6, 4, 5, 6, 7, 1]; 
let duplicados = contarDuplicados(arr);

// Imprimir los números duplicados y su cantidad
for (let [num, count] of duplicados) {
    console.log(`Número: ${num}, Cantidad: ${count}`);
}

// Explicar paso a paso.
function contarDuplicados(arr) {        
    let mapa = new Map();   
    // Recorrer el array
    for (let i = 0; i < arr.length; i++) {   
        // Si el número ya está en el Map, incrementar su contador
        if (mapa.has(arr[i])) {
            mapa.set(arr[i], mapa.get(arr[i]) + 1);               
        }
        // Si el número no está en el Map, agregarlo con un contador de 1
        else {
            mapa.set(arr[i], 1); 
        }
    }

    // Crear un nuevo Map para guardar sólo los números duplicados
    let duplicados = new Map();

    // Recorrer el Map original                 
    for (let [num, count] of mapa) {
        // Si el contador es mayor a 1, el número está duplicado
        if (count > 1) {
            duplicados.set(num, count);
        }
    } 

    return duplicados;
}
