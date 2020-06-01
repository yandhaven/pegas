const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var multer = require('multer')
var cors = require('cors');
const https = require('https')
const fs = require('fs')
const port = 3033
const db = require('./apiQueries')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.get('/todos', db.getTodo)
  app.get('/todos/:workerid', db.getTodoByWorker)
  app.get('/todo/:todoid', db.getTodoById)
  app.get('/attach/:todoid', db.getTodoAttachById)
  app.post('/todos/new', db.createTodo)
  app.get('/workers', db.getWorkers)
  app.post('/upload', db.uploadTodoAttach)
  

  https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: '116699'
}, app)
.listen(3033);


