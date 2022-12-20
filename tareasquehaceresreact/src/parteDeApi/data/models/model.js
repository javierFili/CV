const mongoose = require('mongoose');
const tareaAcrear = new mongoose.Schema({
  _id: {
    type: String,
    required: 'ingresar el nombre de la persona o el id'
  },
  clave: {
    type: String,
    required: 'ingresar el clave o contrasenia'
  },
  correo: {
    type: String,
    required: 'ingresar el correo electronico'
  },
  tareas: [{
    titulo: {
      type: String,
      required: 'ingresar el titulo de la tarea'
    },
    descripcion: {
      type: String,
      required: 'ingresar descripcion de la tarea'
    },
    fechaIni: {
      type: String,
      required: 'ingresar fecha de inicio de tarea'
    },
    fechaFin: {
      type: String,
      required: 'ingresar fecha de finalizacion de tarea'
    }
  }]

});
module.exports = mongoose.model('tareas', tareaAcrear);