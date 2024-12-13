function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
document.getElementById('userForm').addEventListener('submit', function (e) {
    const browserInfo = `${navigator.userAgent}`;
    document.getElementById('browserInfo').value = browserInfo;
  });
  const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));



  app.post('/submit', (req, res) => {
    const { name, email, phone, message, latitude, longitude } = req.body;
    
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
    console.log(`Location: ${latitude}, ${longitude}`);
  
    res.send('Form submitted successfully!');
  });

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
