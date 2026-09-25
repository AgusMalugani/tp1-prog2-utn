document.getElementById("logeo").addEventListener("submit", function (event) {
    event.preventDefault();
    const correo = document.getElementById("correo").value;
    const mensaje1 = document.getElementById("mensajeCorreo");
    const passWord = document.getElementById("passWord").value;
    const mensaje2 = document.getElementById("mensajePassword");
    const mensajeGeneral = document.getElementById("mensajeGeneral");
    const btnSubmit = document.getElementById("btnSubmit");
    mensajeGeneral.textContent = "";
    /*-------------------------------------------------------------------------------------------------*/
    console.log("=== INICIANDO PROCESO DE AUTENTICACIÓN ===");
    console.log("Datos ingresados -> Correo:", correo, "| Password:", passWord ? "******" : "Vacío");

    let formularioValido = true;

    if (correo.trim() === "") {
        mensaje1.textContent = "El correo no puede estar vacio";
        mensaje1.style.color = "red";
        formularioValido = false;
    } else {
        mensaje1.textContent = "✓";
        mensaje1.style.color = "green";
    }

    if (passWord.trim() === "") {
        mensaje2.textContent = "La contraseña no puede estar vacio";
        mensaje2.style.color = "red";
        formularioValido = false;
    } else {
        mensaje2.textContent = "✓";
        mensaje2.style.color = "green";
    }

    if (!formularioValido) {
        console.warn("Autenticación cancelada: Faltan campos por completar.");
        return;
    }
    /*-------------------------------------------------------------------------------------------------*/
    const usuarios = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Usuarios recuperados de localStorage:", usuarios);

    if (usuarios.length === 0) {
        console.error("Error: No hay ningún usuario registrado en la base de datos local.");
        mensajeGeneral.textContent = "No existe ninguna cuenta registrada en el sistema.";
        mensajeGeneral.style.color = "red";
        return;
    }

    const usuarioEncontrado = usuarios.find(u => u.correo === correo);

    if (!usuarioEncontrado) {
        console.error("Error de autenticación: El correo ingresado no está registrado.");
        mensaje1.textContent = "Este correo no está registrado";
        mensaje1.style.color = "red";
        mensajeGeneral.textContent = "El correo electrónico o la contraseña son incorrectos.";
        mensajeGeneral.style.color = "red";
        return;
    }

    console.log("Usuario encontrado en la base de datos:", usuarioEncontrado.nombre, usuarioEncontrado.apellido);

    if (usuarioEncontrado.passWord !== passWord) {
        console.error("Error de autenticación: La contraseña ingresada no coincide.");
        mensaje2.textContent = "Contraseña incorrecta";
        mensaje2.style.color = "red";
        mensajeGeneral.textContent = "El correo electrónico o la contraseña son incorrectos.";
        mensajeGeneral.style.color = "red";
        return;
    }

    console.log("¡Autenticación exitosa! Las credenciales coinciden.");

    localStorage.setItem("session", JSON.stringify({
        nombre: usuarioEncontrado.nombre,
        correo: usuarioEncontrado.correo,
        loginAt: new Date().toISOString()
    }));

    mensajeGeneral.textContent = "¡Inicio de sesión exitoso! Redirigiendo al inicio...";
    mensajeGeneral.style.color = "green";

    btnSubmit.disabled = true;
    btnSubmit.value = "Ingresando...";

    console.log("Iniciando temporizador de 2 segundos para la redirección...");

    setTimeout(function () {
        console.log("Redirigiendo a ../index.html");
        window.location.href = "../index.html";
    }, 2000);
    /*-------------------------------------------------------------------------------------------------*/
});