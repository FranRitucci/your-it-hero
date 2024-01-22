function descargarVCard() {
    // Datos del nuevo contacto
    var nuevoNombre = "Sebastian Fontana";
    var nuevoNumero = "+1 786-618-4924";
    var nuevoEmail = "sebastianfontana@yourithero.com";

    // Crear el contenido del archivo vCard
    var vCardData = "BEGIN:VCARD\n" +
                    "VERSION:3.0\n" +
                    "FN:" + nuevoNombre + "\n" +
                    "TEL:" + nuevoNumero + "\n" +
                    "EMAIL:" + nuevoEmail + "\n" +
                    "END:VCARD";

    // Crear un Blob con el contenido del vCard
    var blob = new Blob([vCardData], { type: 'text/vcard' });

    // Crear un enlace de descarga para el usuario
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'contacto.vcf';

    // Hacer clic en el enlace para iniciar la descarga
    link.click();
}