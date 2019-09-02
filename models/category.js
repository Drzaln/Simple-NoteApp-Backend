const conn = require('../connection/connect')

module.exports = {
    getCategory: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM category', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertCategory: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO category SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateCategory: (id_category, data) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE category SET ? WHERE id_category=?', [data, id_category], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteCategory: (id_category) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM category WHERE id_category=?', id_category, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}