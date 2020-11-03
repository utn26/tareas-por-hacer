let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea'
}
let completado = {
    demand: true,
    alias: 'c',
    default: true

}
const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Borra una tarea de la base de datos', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
};