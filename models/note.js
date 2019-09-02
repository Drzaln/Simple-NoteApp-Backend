const conn = require('../connection/connect')

module.exports = {

getNote: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT  * FROM  note LEFT JOIN category  ON note.id_category = category.id_category ORDER BY id_note desc ',
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  getNoteId: id_note => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM note WHERE id_note=?',
        id_note,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  insertNote: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO note SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateNote: (id_note, data) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'UPDATE note SET ? WHERE id_note=?',
        [data, id_note],
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  deleteNote: id_note => {
    return new Promise((resolve, reject) => {
      conn.query(
        'DELETE FROM note WHERE id_note=?',
        id_note,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  }
}