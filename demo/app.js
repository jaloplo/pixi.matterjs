const express = require('express')
const app = express()
const port = 3003

app.use(express.static('./assets'));
app.use(express.static('./js'));
app.use(express.static('../src'));
app.use(express.static('./'));

app.listen(port, () => console.log('Listening on port ' + port));