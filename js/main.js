$(document).ready(function() {
    // Manejo del formulario de inicio de sesión
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        // Obtener valores de usuario y contraseña
        const username = $('#username').val();
        const password = $('#password').val();

        // Aquí puedes cambiar los valores por los que consideres correctos
        const correctUsername = 'admin';
        const correctPassword = '12345';

        // Verificar si las credenciales son correctas
        if (username === correctUsername && password === correctPassword) {
            // Credenciales correctas: mostrar mensaje de éxito con SweetAlert
            Swal.fire({
                icon: 'success',
                title: '¡Bienvenido!',
                text: 'Has iniciado sesión correctamente.',
                timer: 3000,
                showConfirmButton: false
            }).then(() => {
                // Redirigir a la página principal (opcional)
                window.location.href = 'index.html'; // Aquí puedes cambiar la URL a la que quieras redirigir
            });
        } else {
            // Credenciales incorrectas: mostrar mensaje de error con SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Error de inicio de sesión',
                text: 'Usuario o contraseña incorrectos.',
                confirmButtonText: 'Intentar de nuevo'
            });
        }
    });
});
