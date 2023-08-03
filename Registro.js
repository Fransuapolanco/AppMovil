app.post('/registro', (req, res) => {
    const { nombre, email, password } = req.body;
  
    // Crear un nuevo usuario con el email y la contraseña proporcionados
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario registrado:', user.email);
  
        // Guardar información adicional del usuario en Firestore
        const userRef = firebase.firestore().collection('usuarios').doc(user.uid);
        userRef.set({
          nombre: nombre,
          email: email
        }).then(() => {
          console.log('Información del usuario guardada en Firestore');
          res.status(200).json({ message: 'Usuario registrado correctamente' });
        }).catch((error) => {
          console.error('Error al guardar la información del usuario en Firestore:', error);
          res.status(500).json({ message: 'Ocurrió un error al registrar el usuario' });
        });
      })
      .catch((error) => {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ message: 'Ocurrió un error al registrar el usuario' });
      });
  });
  