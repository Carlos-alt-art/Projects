document.querySelector('form').addEventListener('submit', function (event) {

    const nombre = document.getElementById('nombre').value.trim();

    const correo = document.getElementById('correo').value.trim();

    const contra = document.getElementById('contra').value.trim();

    const textoError = document.getElementById('textoError');


    let errores = [];


    const regexNombre = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ'´\-\s]{3,20}$/;
    if (!regexNombre.test(nombre)) {
        errores.push("El nombre debe tener entre 3 y 20 caracteres y solo puede contener letras y espacios.");
    }
    



    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (correo && !emailRegex.test(correo)) {
        errores.push("El formato del correo electrónico no es válido.");
    }


    const contraRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (contra.length < 8 || contra.length > 20) {
        errores.push("La contraseña debe tener entre 8 y 20 caracteres.");
    }
    if (!/[a-z]/.test(contra)) {
        errores.push("La contraseña debe tener al menos una letra minúscula.");
    }
    if (!/[A-Z]/.test(contra)) {
        errores.push("La contraseña debe tener al menos una letra mayúscula.");
    }
    if (!/\d/.test(contra)) {
        errores.push("La contraseña debe tener al menos un número.");
    }


    if (errores.length > 0) {
        event.preventDefault();
        textoError.innerHTML = errores.join("<br>");
    } else {
        textoError.innerHTML = "";
    }


    if (errores.length === 0) {
        textoError.innerHTML = "";
        window.alert("Formulario enviado correctamente.");
    }



});
