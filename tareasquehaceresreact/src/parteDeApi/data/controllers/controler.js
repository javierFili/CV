// controller.js
const mongoose = require('mongoose');
const tarea = mongoose.model('tareas');

exports.listDiagramas = (req, res) => {
  tarea.find({}, (err, tarea) => {
    if (err) {
      res.send(err);
    }
    res.json(tarea);
  });
};

exports.createDiagrama = (req, res) => {
  const new_tarea = new tarea(req.body);
  new_tarea.save((err, tarea) => {
    if (err) {
      res.send(err);
    }
    res.json(tarea);
  });
}

exports.leerDiagrama = (req, res) => {
  tarea.findById(req.params.tareaId, (err, tarea) => {
    if (err)
      res.send(err);
    res.json(tarea);
  });
}

exports.actualizarDiagrama = (req, res) => {
  tarea.findOneAndUpdate({
    _id: req.params.tareaId
  }, req.body, {
    new: true
  }, (err, tarea) => {
    if (err)
      res.send(err);
    res.json(tarea);
  });
}

exports.eliminarDiagrama = (req, res) => {
  tarea.remove({
    _id: req.params.tareaId
  }, (err, tarea) => {
    if (err)
      res.send(err);
    res.json({
      message: 'Diagrama deleted'
    });
  });
}
