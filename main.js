function agregarContacto() {
    // Datos del nuevo contacto
    var nuevoNombre = "Sebastian Fontana";
    var nuevoNumero = "+1 786-618-4924";
    var nuevoEmail = "sebastianfontana@yourithero.com";

    // Crear el enlace 'tel:' con el número de teléfono del nuevo contacto
    var enlaceTelefono = "tel:" + nuevoNumero + ";";

    // Abrir la libreta de contactos del teléfono con los datos predefinidos
    window.location.href = enlaceTelefono + "contactName=" + encodeURIComponent(nuevoNombre) +
        "&email=" + encodeURIComponent(nuevoEmail);
}