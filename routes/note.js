const express = require('express')
const Route = express.Router()

const noteController = require('../controllers/note')

Route.get('/', noteController.getNote)
  .get('/:id_note', noteController.getNoteId)
  .post(`/`, noteController.insertNote)
  .patch(`/:id_note`, noteController.updateNote)
  .delete(`/:id_note`, noteController.deleteNote)

module.exports = Route