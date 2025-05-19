const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.send('Bienvenue');
  } else {
    res.status(401).send('Identifiants invalides');
  }
});

app.listen(3000);