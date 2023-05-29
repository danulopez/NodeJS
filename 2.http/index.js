const http = require('http');

const PORT = 7000;

const requestHandler = (req, res) => {
      
    res.end("Servidor funcionando")
}

const app = http.createServer(requestHandler)

app.listen(PORT, () => console.log("mi servidor está funcionando"))


