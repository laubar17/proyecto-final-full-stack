const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({'Nuestra tienda funciona correctamente'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})