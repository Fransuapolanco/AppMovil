app.post('/registro', (req, res) => {
    const { username, email, password } = req.body;
  
    const usuariosRef = firebase.database().ref('usuarios');
    const nuevoUsuarioRef = usuariosRef.push();
  
    nuevoUsuarioRef.set({
      username: username,
      email: email,
      password: password
    }, (error) => {
      if (error) {
        console.error('Error al insertar el usuario en la base de datos: ', error);
        res.status(500).json({ message: 'Ocurrió un error al registrar el usuario' });
      } else {
        console.log('Usuario registrado correctamente');
        res.status(200).json({ message: 'Usuario registrado correctamente' });
      }
    });
  });
  