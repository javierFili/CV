// routes.js
module.exports = (app) => {
  const todoList = require('../controllers/controler.js');
  app.route('/tareas')
    .get(todoList.listDiagramas)
    .post(todoList.createDiagrama);

  app.route('/tareas/:tareaId')
    .get(todoList.leerDiagrama)
    .put(todoList.actualizarDiagrama)
    .delete(todoList.eliminarDiagrama);
};