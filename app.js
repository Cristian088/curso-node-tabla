//Grabar archivos en un txt en node.
//normal 
// fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log(`tabla-${base}.txt creado correctamente`);
//   });


const { crearArchivo } = require('./helpers/multiplicar.js');
const argv  = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));






