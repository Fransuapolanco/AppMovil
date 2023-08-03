// Acceder al formulario de inicio de sesión
const form = document.querySelector('form');

// Agregar un evento de envío al formulario
form.addEventListener('submit', function(event) {
  // Detener el comportamiento predeterminado de envío del formulario
  event.preventDefault();

  // Obtener los valores de correo electrónico y contraseña del formulario
  const email = form.email.value;
  const password = form.password.value;

  // Enviar una solicitud de inicio de sesión al servidor
  // Aquí puedes agregar tu código de autenticación y validación

  // Redirigir al usuario a la página de inicio después de iniciar sesión
  window.location.href = 'navbar.html';
});
