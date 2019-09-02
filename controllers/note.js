const noteModel = require('../models/note')
const resp = require('../helpers/response')
const multer = require('multer')
const path = require('path')
const cloudinary = require('cloudinary')

module.exports = {
  getNote: (req, res) => {
    noteModel
      .getNote()
      .then(resultNote => {
        const result = resultNote[0]
        resp.response(res, resultNote, 200)
      })
      .catch(error => {
        console.log(error)
      })
  },

  getNoteId: (req, res) => {
    const id_note = req.params.id_note
    noteModel
      .getNoteId(id_note)
      .then(resultNote => {
          const result = resultNote
        resp.response(res, resultNote, 200, id_note)
      })
      .catch(error => {
        console.log(error)
      })
  },

  insertNote: async (req, res) => {

    const data = {
      id_category: req.body.id_category,
      note_title: req.body.note_title,
      note: req.body.note,
      date_make: new Date(),
      date_update: new Date()
    }

    noteModel
      .insertNote(data)
      .then(resultNote => {
        const result = resultNote[0]
        resp.response(res, resultNote, 200, data)
      })
      .catch(error => {
        console.log(error)
      })
  },

  updateNote: (req, res) => {
    const id_note = req.params.id_note
    const data = {
      id_category: req.body.id_category,
      note_title: req.body.note_title,
      note: req.body.note,
      date_make: new Date(),
      date_update: new Date()
    }
    noteModel
      .updateNote(id_note, data)
      .then(resultNote => {
        const result = resultNote[0]
        resp.response(res, resultNote, 200, [id_note, data])
      })
      .catch(error => {
        console.log(error)
      })
  },
  deleteNote: (req, res) => {
    const id_note = req.params.id_note
    noteModel
      .deleteNote(id_note)
      .then(resultNote => {
        const result = resultNote[0]
        resp.response(res, resultNote, 200, id_note)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
