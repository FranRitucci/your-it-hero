function agregarContacto() {
    // Datos del nuevo contacto
    var nuevoNombre = "Nuevo Contacto";
    var nuevoNumero = "9876543210";
    var nuevoEmail = "nuevo@example.com";

    // Crear el enlace 'tel:' con el número de teléfono del nuevo contacto
    var enlaceTelefono = "tel:" + nuevoNumero + ";";

    // Abrir la libreta de contactos del teléfono con los datos predefinidos
    window.location.href = enlaceTelefono + "contactName=" + encodeURIComponent(nuevoNombre) +
        "&email=" + encodeURIComponent(nuevoEmail);
}