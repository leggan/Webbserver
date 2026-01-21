const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hej från Express!');
});

app.get('/about', (req, res) => {
    res.send('Detta är en about-sida');
  });
  
  app.get('/api/time', (req, res) => {
    res.json({ time: new Date() });
  });
  

app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`);
});
