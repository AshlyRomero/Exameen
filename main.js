document.addEventListener('DOMContentLoaded', () => {
    const agregarAsignacionBtn = document.getElementById('agregarAsignacion');
    const numAsignacionesSpan = document.querySelector('.num-asignaciones');
    const listaAsignacionesDiv = document.querySelector('.lista-asignaciones');
    let numAsignaciones = document.querySelectorAll('.lista-asignaciones .asignacion').length;

    agregarAsignacionBtn.addEventListener('click', () => {
        numAsignaciones++;

        const nuevaAsignacionBtn = document.createElement('button');
        nuevaAsignacionBtn.className = 'asignacion';
        nuevaAsignacionBtn.textContent = `Asignación ${numAsignaciones}`;
        listaAsignacionesDiv.appendChild(nuevaAsignacionBtn);

        numAsignacionesSpan.textContent = numAsignaciones;
    });

    const agregarUsuarioBtn = document.getElementById('agregarUsuario');
    const registroDiv = document.getElementById('registro');

    agregarUsuarioBtn.addEventListener('click', () => {
        registroDiv.style.display = 'block';
    });

    const formRegistro = document.getElementById('formRegistro');

    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = formRegistro.nombre.value;
        const email = formRegistro.email.value;

        alert(`Usuario ${nombre} con correo ${email} registrado.`);
        
        // Reiniciar el formulario
        formRegistro.reset();
    });
});
