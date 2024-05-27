class ControladorContacto {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    agregarContacto() {
        const nombre = document.getElementById('name').value;
        const apellido = document.getElementById('lastName').value;
        const telefono = document.getElementById('phone').value;

        if (nombre && apellido && telefono) {
            const contactoExistente = this.modelo.buscarPorTelefono(telefono);
            if (contactoExistente) {
                this.vista.mostrarMensaje('Este número de teléfono ya está registrado');
            } else {
                const nuevoContacto = new Contacto(null, nombre, apellido, telefono);
                this.modelo.insertar(nuevoContacto);
                this.vista.mostrarMensaje('Contacto agregado correctamente');
                this.vista.limpiarFormulario();
            }
        } else {
            this.vista.mostrarMensaje('Por favor, complete todos los campos');
        }
    }

    buscarContacto() {
        const apellido = document.getElementById('searchName').value;
        if (apellido) {
            const nodo = this.modelo.buscar(apellido);
            if (nodo) {
                this.vista.mostrarContacto(nodo.contacto);
            } else {
                this.vista.mostrarMensaje('Contacto no encontrado');
            }
        } else {
            this.vista.mostrarMensaje('Por favor, ingrese un apellido válido');
        }
    }

    obtenerPrimerContacto() {
        const nodo = this.modelo.obtenerPrimer();
        if (nodo) {
            this.vista.mostrarContacto(nodo.contacto);
        } else {
            this.vista.mostrarMensaje('No hay contactos en la lista');
        }
    }

    obtenerUltimoContacto() {
        const nodo = this.modelo.obtenerUltimo();
        if (nodo) {
            this.vista.mostrarContacto(nodo.contacto);
        } else {
            this.vista.mostrarMensaje('No hay contactos en la lista');
        }
    }

    imprimirContactos() {
        const contactos = this.modelo.recorridoInorden();
        this.vista.mostrarTodosLosContactos(contactos);
    }
}