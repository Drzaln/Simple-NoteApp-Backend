const express = require('express')
const Route = express.Router()
const multer = require('multer')
const path = require('path')

const categoryController = require('../controllers/category')

let imageStore = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/images/')
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    )
  }
})

let upload = multer({ storage: imageStore, limits: { fileSize: 1000000000 } })

Route.get('/', categoryController.getCategory)
  .post(`/`, upload.single('image'), categoryController.insertCategory)
  .patch(`/:id_category`, categoryController.updateCategory)
  .delete(`/:id_category`, categoryController.deleteCategory)

module.exports = Route