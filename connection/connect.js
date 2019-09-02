require('dotenv').config()
const sql = require('mysql')

const connect = sql.createConnection({
  // host: 'localhost',
  // user: 'root',
  // password: '',
  // database: 'noteapp'

  host: "remotemysql.com",
  user: "VwT8jk6TuJ",
  password: "ErQUlHR8Jl",
  database: "VwT8jk6TuJ",
})

// Username: VwT8jk6TuJ

// Database name: VwT8jk6TuJ

// Password: ErQUlHR8Jl

// Server: remotemysql.com

// Port: 3306

connect.connect(err => {
  if (err) {
    throw err
  }
  console.log('terkonek DB')
})

module.exports = connect
