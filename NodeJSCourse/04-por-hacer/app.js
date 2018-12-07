/**
 * Aplicación para To Do's
 */

//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear tarea');
        break;

    case 'listar':
        console.log('Listar tarea');
        break;

    case 'actualizar':
        console.log('Actualizar tarea');
        break;

    default:
        console.log('Comando no reconocido (teclee node app --help)');

}