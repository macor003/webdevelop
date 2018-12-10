/**
 * Archivo de configuración para YARGS
 * 
 */

const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de una tarea'
    }
}

const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', optsCrear)
    .command('actualizar', 'Actualiza el estado de una tarea', optsActualizar)
    .argv;


module.exports = {
    argv
}