// DatosFormulario.js
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const asunto = document.querySelector('#asunto').value;
  const mensaje = document.querySelector('#mensaje').value;

  // Crea un objeto con los datos del formulario
  const ticketData = {
    nombre: nombre,
    email: email,
    asunto: asunto,
    mensaje: mensaje
  };

  // Guarda los datos del ticket en Firebase Realtime Database
  firebase.database().ref('tickets').push(ticketData)
    .then(() => {
      // Después de guardar los datos, puedes mostrar un mensaje de éxito o redireccionar
      // al usuario a otra página
      alert('La solicitud ha sido enviada con éxito');
      window.location.href = 'TicketCreados.html';
    })
    .catch((error) => {
      console.error('Error al enviar la solicitud:', error);
      alert('Ocurrió un error al enviar la solicitud');
    });
});



