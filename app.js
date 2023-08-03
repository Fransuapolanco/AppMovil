const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase/app');
require('firebase/auth');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));

const firebaseConfig = {
  apiKey: 'AIzaSyAqQ59WQN0Srzk0EAUrdp0qeKiNfHHNCKs',
  authDomain: 'appmoviltickets.firebaseapp.com',
  projectId: 'appmoviltickets',
};

firebase.initializeApp(firebaseConfig);

app.post('/registro', (req, res) => {
  console.log('Se alcanzó la ruta /registro');

  const { nombre, email, password } = req.body;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuario registrado:', user.email);
      res.status(200).json({ message: 'Usuario registrado correctamente' });
    })
    .catch((error) => {
      console.error('Error al registrar el usuario:', error);
      res.status(500).json({ message: 'Ocurrió un error al registrar el usuario' });
    });
});

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'AppMovilProyectoGraduacion.html');
  res.sendFile(filePath);
});

const port = 3000; // Puerto en el que escuchará el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});


