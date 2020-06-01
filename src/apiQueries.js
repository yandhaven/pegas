const Pool = require('pg').Pool
const pool = new Pool({
  user: 'pmod',
  host: '192.168.2.23',
  database: 'pegas',
  password: 'terminal1',
  port: 5432,
})

//Todo attach___________________
var idToUpload = null;         //
var noteToUpload = null;       //
var nameToUpload = null;       //
var fileFormatToUpload = null; //
var urlToUpload = ''           //
//_____________________________//

var multer = require('multer')
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {

    console.log(file)
    if(!file.originalname){
      urlToUpload=''
    }else{
      urlToUpload='/uploads'
    }

    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {

    nameToUpload = Date.now() + '-' + file.originalname
    fileFormatToUpload = file.mimetype;
  
    cb(null, nameToUpload)

  }
})



var upload = multer({ //multer settings
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
  },
  limits: {
    fileSize: 1024 * 1024
  }
}).any();


const uploadTodoAttach = (req, res) => {

  upload(req, res, function (err) {
    
    idToUpload = req.body.id
    noteToUpload = req.body.note
    

    console.log(`id to todo is : ${idToUpload}`)
    console.log(`Name is : ${nameToUpload}`)
    console.log(`format is : ${fileFormatToUpload}`)
    console.log(`Note is : ${noteToUpload}`)
    var upld = () => {

      pool.query('INSERT INTO todo_attachments (attach_filename, attach_url, todo_id, notes, format) VALUES ($1, $2, $3, $4, $5)', [nameToUpload, urlToUpload, idToUpload, noteToUpload, fileFormatToUpload], (error, results) => {
        if (error) {
          throw error
        }
        console.log(`Attach added added with IDWOrk:${idToUpload}`)
         idToUpload = ''        //
        noteToUpload = ''       //
        nameToUpload = ''       //
        fileFormatToUpload = '' //
        urlToUpload = ''        //
      })

    }


    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    if (!err) {
      console.log(err)
      upld();

    }

    return res.status(200).send(req.file)




  })











}


const getTodo = (request, response) => {

  pool.query('SELECT todo_id, workers.worker_id, worker_name, todo_comment, todo_status, todo_last_update, create_date, till_date, subject FROM todo, workers where todo.worker_id=workers.worker_id ORDER BY todo_id DESC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getTodoByWorker = (request, response) => {

  const id = parseInt(request.params.workerid)

  pool.query('SELECT todo_id, workers.worker_id, worker_name, todo_comment, todo_status, todo_last_update, create_date, till_date, subject FROM todo, workers where workers.worker_id = $1 and todo.worker_id=workers.worker_id ORDER BY todo_id DESC', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getTodoById = (request, response) => {

  const id = parseInt(request.params.todoid)

  pool.query('SELECT todo_id, workers.worker_id, worker_name, todo_comment, todo_status, todo_last_update, create_date, till_date, subject FROM todo, workers where todo.todo_id = $1 and todo.worker_id=workers.worker_id ORDER BY todo_id DESC', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getTodoAttachById = (request, response) => {

  const id = parseInt(request.params.todoid)

  pool.query('SELECT attach_id, attach_filename, attach_url, todo_attachments.todo_id, notes, format, todo_attachments.create_date from todo_attachments, todo where todo_attachments.todo_id=todo.todo_id and todo.todo_id=$1  ORDER BY attach_id DESC', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getWorkers = (request, response) => {

  pool.query('SELECT * from workers ORDER BY worker_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createTodo = (request, response) => {
  const { workerID, subject, comment, date } = request.body

  pool.query('INSERT INTO todo (worker_id, todo_comment, subject, till_date) VALUES ($1, $2, $3, $4)', [workerID, comment, subject, date], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID:`)
  })
}

module.exports = {
  getTodo,
  getWorkers,
  createTodo,
  getTodoByWorker,
  getTodoById,
  uploadTodoAttach,
  getTodoAttachById
}