// EstadoDeTicket.js
const firebaseConfig = window.firebaseConfig;
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const asunto = document.querySelector('#asunto').value;
  const mensaje = document.querySelector('#mensaje').value;

  // Crea un objeto con los datos del formulario
  const datos = {
    nombre: nombre,
    email: email,
    asunto: asunto,
    mensaje: mensaje
  };

  // Envía los datos del formulario al servidor usando una petición AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'guardar_ticket.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Si la petición fue exitosa, redirecciona al usuario a la página de estado del ticket
      window.location.href = 'EstadoDeTicket.html?ticket=' + xhr.responseText;
    } else {
      // Si ocurrió un error, muestra un mensaje de error
      alert('Ocurrió un error al enviar la solicitud');
    }
  };
  xhr.send(JSON.stringify(datos));
});
