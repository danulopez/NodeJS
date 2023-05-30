const express = require('express');

const PORT = 7000;
const server = express();

server.use('/', (req, res) => {
    res.send('Hello Upgrade Hub!');
  });

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
