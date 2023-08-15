// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');
const exp = require('constants');

// declare static path
let staticPath = path.join(__dirname, "public");

// initializing express.js
const app = express();

// middlewares
app.use(express.static(staticPath));
app.use(express.json());

// routes
// home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

// signup route
app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

app.post('/signup', (req, res) => {
    let { nombre, email, password, number, tac, notification } = req.body;

    // Validaciones de formulario
    if (nombre.length < 3) {
        return res.json({'alert' : 'El nombre debe tener mínimo 3 letras.'});
    } else if (!email.length) {
        return res.json({'alert' : 'Introduce tu correo electrónico.'}); 
    } else if (password.length < 8) {
        return res.json({'alert' : 'La contraseña debe tener mínimo 8 letras.'}); 
    } else if (!number.length) {
        return res.json({'alert' : 'Introduce tu número de teléfono.'});
    } else if (!Number(number) || number.length < 9) {
        return res.json({'alert' : 'El número de teléfono es inválido, ingrese uno válido, por favor.'}); 
    } else if (!tac.checked) {
        return res.json({'alert' : 'Debe aceptar nuestros términos y condiciones.'});
    } else {
        // Guardar usuarios en DB
    }

    res.json('data received');
})

// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})