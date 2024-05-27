class VistaContacto {
    constructor() {
        this.resultadosElemento = document.getElementById('contactos');
    }

    mostrarContacto(contacto) {
        this.resultadosElemento.innerHTML = `
            <div>ID: ${contacto.id}</div>
            <div>Nombre: ${contacto.nombre}</div>
            <div>Apellido: ${contacto.apellido}</div>
            <div>Teléfono: ${contacto.telefono}</div>
        `;
    }

    mostrarTodosLosContactos(contactos) {
        let html = '';
        contactos.forEach(contacto => {
            html += `
                <div>ID: ${contacto.id}</div>
                <div>Nombre: ${contacto.nombre}</div>
                <div>Apellido: ${contacto.apellido}</div>
                <div>Teléfono: ${contacto.telefono}</div>
                <br>
            `;
        });
        this.resultadosElemento.innerHTML = html;
    }

    mostrarMensaje(mensaje) {
        alert(mensaje);
    }

    limpiarFormulario() {
        document.getElementById('name').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('phone').value = '';
    }
}
