const tarifas = {
    "Fútbol": 120,
    "Básquetbol": 70,
    "Voleibol": 60
};
const formulario = document.getElementById('reservaForm');
const btnReiniciar = document.getElementById('btnReiniciar');
const resumenSeccion = document.getElementById('resumenSeccion');
const resumenContenido = document.getElementById('resumenContenido');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nombre = document.getElementById('nombre').value;
    const contacto = document.getElementById('contacto').value;
    const tipoCancha = document.getElementById('tipoCancha').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const duracion = parseInt(document.getElementById('duracion').value);

    const precioPorHora = tarifas[tipoCancha];
    const costoTotal = precioPorHora * duracion;
    resumenContenido.innerHTML = `
        <div class="resumen-item"><strong>Cliente:</strong> ${nombre}</div>
        <div class="resumen-item"><strong>Contacto:</strong> ${contacto}</div>
        <div class="resumen-item"><strong>Deporte:</strong> ${tipoCancha}</div>
        <div class="resumen-item"><strong>Fecha:</strong> ${fecha}</div>
        <div class="resumen-item"><strong>Horario:</strong> ${hora} (${duracion} hs)</div>
        <div class="costo-total">Costo Total: Bs ${costoTotal}</div>
    `;
    resumenSeccion.classList.remove('hidden');
});
btnReiniciar.addEventListener('click', function() {
    formulario.reset();
    resumenSeccion.classList.add('hidden');
    resumenContenido.innerHTML = '';
});