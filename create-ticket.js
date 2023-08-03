/*const firebaseConfig = window.firebaseConfig;
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// createticket.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#create-ticket-form');

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

        // Guarda los datos del ticket en Firebase Realtime Database
        const db = firebase.database();
        const ticketsRef = db.ref('tickets');
        const nuevoTicketRef = ticketsRef.push();
        nuevoTicketRef.set(datos, function(error) {
            if (error) {
                // Si ocurrió un error, muestra un mensaje de error
                alert('Ocurrió un error al enviar la solicitud');
            } else {
                // Si la petición fue exitosa, redirecciona al usuario a la página de estado del ticket
                alert('La solicitud ha sido enviada correctamente. El número de ticket es: ' + nuevoTicketRef.key);
                window.location.href = 'TicketCreado.html?ticket=' + nuevoTicketRef.key;
            }
        });
    });
});
*/
