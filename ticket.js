const express = require('express');
const firebase = require('firebase/app');

const router = express.Router();

// Ruta para registro de tickets
router.post('/registro', (req, res) => {
  console.log('Se alcanzó la ruta /registro-ticket');

  const { contenido } = req.body;

  // Crear una referencia a la base de datos de Firebase
  const db = firebase.database();
  const ticketsRef = db.ref('tickets');

  // Generar un nuevo ID para el ticket
  const ticketId = ticketsRef.push().key;

  // Crear un objeto con los datos del ticket
  const ticketData = {
    contenido,
    status: 'abierto', // Puedes establecer el estado inicial del ticket aquí
  };

  // Guardar los datos del ticket en la base de datos de Firebase
  ticketsRef.child(ticketId).set(ticketData)
    .then(() => {
      console.log('Ticket guardado en Firebase:', ticketData);
      res.status(200).json({ message: 'Ticket registrado correctamente' });
    })
    .catch((error) => {
      console.error('Error al guardar el ticket en Firebase:', error);
      res.status(500).json({ message: 'Ocurrió un error al registrar el ticket' });
    });
});

module.exports = router;
