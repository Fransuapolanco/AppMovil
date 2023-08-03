// Importar las dependencias necesarias
const express = require('express');
const app = express();

// Ruta para manejar la solicitud GET en /registro
app.get('/registro-ticket', function(req, res) {
  // Obtener los parámetros de la solicitud GET
  const nombre = req.query.nombre;
  const email = req.query.email;
  const asunto = req.query.asunto;
  const mensaje = req.query.mensaje;

  // Realizar las acciones necesarias con los datos del ticket
  // Guardar los datos en Firebase u otras operaciones

  // Enviar una respuesta al cliente
  res.send('Solicitud de registro recibida');
});

// Iniciar el servidor en el puerto deseado
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
