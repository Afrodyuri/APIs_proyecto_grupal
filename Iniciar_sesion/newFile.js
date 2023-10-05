<script>
  document.getElementById('login-form').addEventListener('submit', function (event) {event.preventDefault()};

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === 'usuario@example.com' && password === 'contraseña123') {alert('Inicio de sesión exitoso. Redirigiendo...')};

  alert('Error de inicio de sesión. Verifica tus credenciales.');
    }
  });
</script>;
