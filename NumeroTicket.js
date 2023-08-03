const urlParams = new URLSearchParams(window.location.search);
const ticket = urlParams.get('ticket');
document.querySelector('#numero-ticket').textContent = ticket;
