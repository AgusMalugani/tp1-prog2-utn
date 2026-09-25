document.getElementById("registro").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const mensaje1 = document.getElementById("mensajeNombre");
    const apellido = document.getElementById("apellido").value;
    const mensaje2 = document.getElementById("mensajeApellido");
    const telefono = document.getElementById("telefono");
    const valorTelefono = telefono.value;
    const mensaje3 = document.getElementById("mensajeTelefono");
    const fecha = document.getElementById("fecha").value;
    const mensaje4 = document.getElementById("mensajeFecha");
    /*-------------------------------------------------------------------------------------------------*/
    const correo = document.getElementById("correo").value;
    const confCorreo = document.getElementById("confCorreo").value;
    const mensaje5 = document.getElementById("mensajeCorreo");
    const mensaje6 = document.getElementById("msjConfCorreo");
    /*-------------------------------------------------------------------------------------------------*/
    const passWord = document.getElementById("passWord").value;
    const confPass = document.getElementById("confPass").value;
    const mensaje7 = document.getElementById("mensajePassword");
    const mensaje8 = document.getElementById("msjConfPass");
    /*-------------------------------------------------------------------------------------------------*/
    const mensajeGeneral = document.getElementById("mensajeGeneral");
    const btnSubmit = document.getElementById("btnSubmit");

    mensajeGeneral.textContent = "";

    console.log("=== INICIANDO PROCESO DE REGISTRO DE USUARIO ===");
    console.log("Datos capturados:", { nombre, apellido, valorTelefono, fecha, correo });
    /*-------------------------------------------------------------------------------------------------*/
    if (nombre.trim() === "") {
        mensaje1.textContent = "El nombre no puede estar vacio";
        mensaje1.style.color = "red";
    } else {
        mensaje1.textContent = "✓";
        mensaje1.style.color = "green";
    }

    if (apellido.trim() === "") {
        mensaje2.textContent = "El apellido no puede estar vacio";
        mensaje2.style.color = "red";
    } else {
        mensaje2.textContent = "✓";
        mensaje2.style.color = "green";
    }

    if (valorTelefono.trim() === "") {
        mensaje3.textContent = "El telefono no puede estar vacio";
        mensaje3.style.color = "red";
    } else if (valorTelefono.length < 10) {
        mensaje3.textContent = "El telefono no debe ser menor de 10 digitos";
        mensaje3.style.color = "red";
    } else {
        mensaje3.textContent = "✓";
        mensaje3.style.color = "green";
    }

    if (fecha === "") {
        mensaje4.textContent = "Debes seleccionar tu fecha de nacimiento";
        mensaje4.style.color = "red";
    } else {
        const fechaNacimiento = new Date(fecha);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();

        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        if (edad < 18) {
            mensaje4.textContent = "Debes ser mayor de 18 años para registrarte";
            mensaje4.style.color = "red";
        } else {
            mensaje4.textContent = "✓";
            mensaje4.style.color = "green";
        }
    }
    /*-------------------------------------------------------------------------------------------------*/
    if (correo.trim() === "") {
        mensaje5.textContent = "El correo no puede estar vacio";
        mensaje5.style.color = "red";
    } else {
        mensaje5.textContent = "✓";
        mensaje5.style.color = "green";
    }

    if (confCorreo.trim() === "") {
        mensaje6.textContent = "Esta vacio, tienes que confirmar tu correo";
        mensaje6.style.color = "red";
    } else if (confCorreo !== correo) {
        mensaje6.textContent = "Este correo no coincide con el anterior";
        mensaje6.style.color = "red";
    } else {
        mensaje6.textContent = "✓";
        mensaje6.style.color = "green";
    }
    /*-------------------------------------------------------------------------------------------------*/
    if (passWord.trim() === "") {
        mensaje7.textContent = "La contraseña no puede estar vacio";
        mensaje7.style.color = "red";
    } else {
        mensaje7.textContent = "✓";
        mensaje7.style.color = "green";
    }

    if (confPass.trim() === "") {
        mensaje8.textContent = "Esta vacio, tienes que confirmar tu contraseña";
        mensaje8.style.color = "red";
    } else if (confPass !== passWord) {
        mensaje8.textContent = "Esta contraseña no coincide con el anterior";
        mensaje8.style.color = "red";
    } else {
        mensaje8.textContent = "✓";
        mensaje8.style.color = "green";
    }

    /*-------------------------------------------------------------------------------------------------*/
    const mensajes = [mensaje1, mensaje2, mensaje3, mensaje4, mensaje5, mensaje6, mensaje7, mensaje8];
    const hayErrores = mensajes.some(msg => msg.textContent !== "✓");

    if (hayErrores) {
        console.warn("Registro cancelado: Hay campos incompletos o con datos inválidos.");
        mensajeGeneral.textContent = "Por favor, corrige los errores resaltados arriba antes de continuar.";
        mensajeGeneral.style.color = "red";
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Usuarios actualmente en localStorage:", usuarios.length);

    const correoExistente = usuarios.some(u => u.correo === correo);
    const telefonoExistente = usuarios.some(u => u.valorTelefono === valorTelefono);

    if (correoExistente || telefonoExistente) {
        if (correoExistente) {
            console.error("Error de registro: El correo ya está registrado.");
            mensaje5.textContent = "Este correo ya está registrado";
            mensaje5.style.color = "red";
        }
        if (telefonoExistente) {
            console.error("Error de registro: El teléfono ya está registrado.");
            mensaje3.textContent = "Este teléfono ya está registrado";
            mensaje3.style.color = "red";
        }
        mensajeGeneral.textContent = "No se pudo completar el registro porque los datos ya pertenecen a una cuenta existente.";
        mensajeGeneral.style.color = "red";
        return;
    }

    const nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        valorTelefono: valorTelefono,
        fecha: fecha,
        correo: correo,
        passWord: passWord
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("users", JSON.stringify(usuarios));

    console.log("¡Usuario registrado con éxito en localStorage!", nuevoUsuario);

    mensajeGeneral.textContent = "¡Registro realizado con éxito! Redirigiendo al inicio de sesión...";
    mensajeGeneral.style.color = "green";

    btnSubmit.disabled = true;
    btnSubmit.value = "Redirigiendo...";

    console.log("Iniciando temporizador de 3 segundos para redirigir a ./login.html");

    setTimeout(function () {
        console.log("Redirigiendo a ./login.html");
        window.location.href = "./login.html";
    }, 3000);
    /*-------------------------------------------------------------------------------------------------*/
});