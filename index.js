const express  = require('express')
const handle = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', express())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'nodesql'
    
})

conn.connect(function(err) {
    if (err) {
        console.error(err)
    }

    console.log('Conectou ao Mysql !')

    app.listen(3000)
})