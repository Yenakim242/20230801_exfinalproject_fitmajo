// selecciona inputs
const submitBtn = document.querySelector('.submit-btn');
const nombre = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#telephone');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');
const loader = document.querySelector('.loader');

submitBtn.addEventListener('click', () => {
    // if (nombre.value.length < 3) {
    //     showAlert('El nombre debe tener mínimo 3 letras.');
    // } else if (!email.value.length) {
    //     showAlert('Introduce tu correo electrónico.');
    // } else if (password.value.length < 8) {
    //     showAlert('La contraseña debe tener mínimo 8 letras.');
    // } else if (!number.value.length) {
    //     showAlert('Introduce tu número de teléfono.');
    // } else if (!Number(number.value) || number.value.length < 9) {
    //     showAlert('El número de teléfono es inválido, ingrese uno válido, por favor.');
    // } else if (!tac.checked) {
    //     showAlert('Debe aceptar nuestros términos y condiciones.');
    // } else {
        // ENVIAR EL FORMULARIO
        loader.style.display = 'block';
        sendData('/signup', {
            nombre: nombre.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller: false
        })
    // }
})

// FUNCIÓN DE ENVIAR DATOS
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response =>{
        processData(response);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if (data.alert) {
        showAlert(data.alert);
    }
}

// FUNCIÓN DE ALERT
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMSG = document.querySelector('.alert-msg');
    alertMSG.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}
