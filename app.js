const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/books', (req, res) => {
  res.send('Hello Books!');
});

app.listen(port, () => {
  console.log(`Server Started. Listening on PORT: ${port}`);
});
