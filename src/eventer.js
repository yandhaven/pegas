
const pg = require('pg')
var EventEmitter = require('events');
var util = require('util');
var conStr = 'postgres://pmod:terminal1@192.168.2.23:5432/pegas';
var pool = new pg.Pool({ connectionString: conStr });
var polldata = null;
var queryresult = null;
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '--',
        pass: '--'
    }
});






var pgConString = conStr;

// Connect to the DB
pool.connect(function (err, client) {
    if (err) {
        console.error(err)
    }
    // Handle notifications
    client.on('notification', function (msg) {
        polldata = JSON.parse(msg.payload).data;
        // console.log(polldata)
        // Send payload into a queue etc...
        if (polldata) {

            const id = polldata.todo_id;

            pool.query('SELECT todo_id, worker_name, worker_last_name, todo_comment, create_date FROM workers, todo WHERE todo.worker_id=workers.worker_id and todo_id = $1', [id], (error, results) => {
                if (error) {
                    throw error
                }
                queryresult = results.rows[0];
                console.log(queryresult);
                if (queryresult) {
                    let mailOptions = {
                        from: 'info@pegastransbg.com',
                        to: 'nick@pegastransbg.com',
                        subject: `Hi! ${queryresult.worker_name} you have new work from Vlad!`,
                        text: `Hi ${queryresult.worker_name} ${queryresult.worker_last_name} ,

                        You have new work from Vlad on your platform ! You may login to see what he want !

                        Overview : ${queryresult.todo_comment}.
                        
                        DO NOT REPLY TO THIS MSG , THIS MSG IS GENERATED AUTOMATICALLY!!!`
                    }
                    transporter.sendMail(mailOptions, function (err, data) {
                        if (err) {
                            console.log('Error Occurs');

                        } else {
                            console.log(`Email to ${queryresult.worker_name} has been sent!`)
                        }
                    })

                }
            })

        }
    })
    // Listen for NOTIFY calls
    var query = client.query('LISTEN db_notifications')
})