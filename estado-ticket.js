// estado-ticket.js
import { database } from "./firebase-config.js";

const db = database;
const ticketsRef = db.ref('tickets');

// Función para mostrar los tickets en la tabla
function renderTickets(tickets) {
    const ticketsList = document.getElementById("tickets-list");
    ticketsList.innerHTML = "";

    for (const ticketKey in tickets) {
        const ticket = tickets[ticketKey];

        const ticketRow = document.createElement("tr");
        ticketRow.innerHTML = `
            <td>${ticket.nombre}</td>
            <td>${ticket.email}</td>
            <td>${ticket.asunto}</td>
            <td>${ticket.mensaje}</td>
        `;

        ticketsList.appendChild(ticketRow);
    }
}

// Mostrar los tickets existentes en la base de datos al cargar la página
ticketsRef.on("value", function (snapshot) {
    const tickets = snapshot.val();
    renderTickets(tickets);
});
