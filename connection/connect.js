require('dotenv').config()
const sql = require('mysql')

const connect = sql.createConnection({
  // host: 'localhost',
  // user: 'root',
  // password: '',
  // database: 'noteapp'

  host: "sql12.freemysqlhosting.net",
  user: "sql12303832",
  password: "n1347aF3R4",
  database: "sql12303832",
})

connect.connect(err => {
  if (err) {
    throw err
  }
  console.log('terkonek DB')
})

module.exports = connect
