const express = require('express');

var app = express();


app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Sean',
    likes: [
      'Beer',
      'Coding'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('About Page')
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable handle request'
  })
});


app.listen(3000, () => {
  console.log("Im Listening on port 3000!");
});
