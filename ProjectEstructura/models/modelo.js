class Contacto {
    constructor(id, nombre, apellido, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
}

class NodoBST {
    constructor(contacto) {
        this.contacto = contacto;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class ArbolBST {
    constructor() {
        this.raiz = null;
        this.idActual = 1; // Contador para el ID automático
    }

    generarId() {
        return this.idActual++;
    }

    insertar(contacto) {
        const nuevoId = this.generarId();
        contacto.id = nuevoId;
        const nuevoNodo = new NodoBST(contacto);
        if (!this.raiz) {
            this.raiz = nuevoNodo;
        } else {
            this._insertarNodo(this.raiz, nuevoNodo);
        }
    }

    _insertarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.contacto.nombre < nodo.contacto.nombre) {
            if (!nodo.izquierdo) {
                nodo.izquierdo = nuevoNodo;
            } else {
                this._insertarNodo(nodo.izquierdo, nuevoNodo);
            }
        } else {
            if (!nodo.derecho) {
                nodo.derecho = nuevoNodo;
            } else {
                this._insertarNodo(nodo.derecho, nuevoNodo);
            }
        }
    }

    buscar(nombre) {
        return this._buscarNodo(this.raiz, nombre);
    }

    _buscarNodo(nodo, nombre) {
        if (!nodo) return null;
        if (nombre === nodo.contacto.nombre) return nodo;
        if (nombre < nodo.contacto.nombre) return this._buscarNodo(nodo.izquierdo, nombre);
        return this._buscarNodo(nodo.derecho, nombre);
    }

    buscarPorTelefono(telefono) {
        return this._buscarPorTelefono(this.raiz, telefono);
    }

    _buscarPorTelefono(nodo, telefono) {
        if (!nodo) return null;
        if (telefono === nodo.contacto.telefono) return nodo;
        const izquierda = this._buscarPorTelefono(nodo.izquierdo, telefono);
        const derecha = this._buscarPorTelefono(nodo.derecho, telefono);
        return izquierda || derecha;
    }

    obtenerPrimer() {
        let nodo = this.raiz;
        while (nodo && nodo.izquierdo) nodo = nodo.izquierdo;
        return nodo;
    }

    obtenerUltimo() {
        let nodo = this.raiz;
        while (nodo && nodo.derecho) nodo = nodo.derecho;
        return nodo;
    }

    recorridoInorden() {
        const resultado = [];
        this._inorden(this.raiz, resultado);
        return resultado;
    }

    _inorden(nodo, resultado) {
        if (nodo) {
            this._inorden(nodo.izquierdo, resultado);
            resultado.push(nodo.contacto);
            this._inorden(nodo.derecho, resultado);
        }
    }
}