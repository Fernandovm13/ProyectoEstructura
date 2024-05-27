const modelo = new ArbolBST();
const vista = new VistaContacto();
const controlador = new ControladorContacto(modelo, vista);

document.getElementById('addContactButton').addEventListener('click', () => controlador.agregarContacto());
document.getElementById('searchContactButton').addEventListener('click', () => controlador.buscarContacto());
document.getElementById('firstContactButton').addEventListener('click', () => controlador.obtenerPrimerContacto());
document.getElementById('lastContactButton').addEventListener('click', () => controlador.obtenerUltimoContacto());
document.getElementById('printContactsButton').addEventListener('click', () => controlador.imprimirContactos());
