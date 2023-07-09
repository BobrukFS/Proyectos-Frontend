 const sgMail = require('@sendgrid/mail');
const express = require('express');
const app = express();
const cors = require('cors');

// ...

app.use(cors());
// Configura la clave de la API de SendGrid
sgMail.setApiKey('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');

app.use(express.json());

app.post('/datos', (req, res) => {
  const datos = req.body;

  // Aquí puedes utilizar los datos recibidos para personalizar el correo electrónico
  const total = datos.total;
  const totalPlan = datos.totalPlan;
  const inputName = datos.inputName;
  const inputMail = datos.inputMail;
  const inputPhone = datos.inputPhone;
  const time = datos.time;

  // Configura el mensaje de correo electrónico
  const msg = {
    to: inputMail, // Dirección de correo electrónico del destinatario
    from: 'bobrukfs@gmail.com', // Dirección de correo electrónico del remitente
    subject: 'Registro de pago', // Asunto del correo electrónico
    text: `Muchas gracias ${inputName} por realizar el pago. A continuacion dejamos el resumen:
    Total a pagar: $${total + totalPlan}.
    Nombre: ${inputName}
    Mail : ${inputMail}
    Tel : ${inputPhone}`, // Cuerpo del correo electrónico en texto sin formato
    html: `
    <div style="background-color = #fefefe: ;"> <h1>Muchas gracias ${inputName} por realizar el pago. A continuacion le dejamos el resumen:</h1>
    <p style="color: #1C293A;font-weight = 500: ;">Total a pagar: $${total + totalPlan}/${time}.</p>
    <p style="color: #1C293A;font-weight = 500: ;">Nombre: ${inputName} </p>
    <p style="color: #1C293A;font-weight = 500: ;">Mail : ${inputMail} </p>
    <p style="color: #1C293A;font-weight = 500: ;"> Tel : ${inputPhone}</p> </div>` , // Cuerpo del correo electrónico en formato HTML
  };

  // Envía el correo electrónico utilizando la API de SendGrid
  sgMail
    .send(msg)
    .then(() => {
      console.log('Correo enviado correctamente');
      res.json({ mensaje: 'Correo enviado correctamente' });
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ mensaje: 'Error al enviar el correo' });
    });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});


// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

