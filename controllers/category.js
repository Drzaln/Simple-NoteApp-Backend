const categoryModel = require('../models/category')
const help = require('../helpers/response')
const multer = require('multer')
const path = require('path')
const cloudinary = require('cloudinary')

module.exports = {
    getCategory: (req, res) => {
        categoryModel.getCategory()
            .then((resultCategory) => {
                const result = resultCategory
                help.response(res, resultCategory, 200)
            })
            .catch((error) => {
                console.log(error)
            })

    },
    insertCategory: (req, res) => {
        const data = {
            category: req.body.category,
            category_color: req.body.category_color,
            category_image: req.body.category_image
        }

        categoryModel.insertCategory(data)
            .then((resultCategory) => {
                const result = resultCategory
                help.response(res, result, 200, data)
            })
            .catch((error) => {
                console.log(error);
            })
    },

    updateCategory: (req, res) => {
        const id_category = req.params.id_category
        const data = {
            category: req.body.category,
            category_color: req.body.category_color,
            category_image: req.body.category_image
        }
        categoryModel.updateCategory(id_category, data)
            .then((resultCategory) => {
                const result = resultCategory[0]
                help.response(res, result, 200, [id_category, data])
            })
            .catch((error) => {
                console.log(error);
            })
    },
    deleteCategory: (req, res) => {
        const id_category = req.params.id_category

        categoryModel.deleteCategory(id_category)
            .then((resultCategory) => {
                const result = resultCategory[0]
                help.response(res, resultCategory, 200, id_category)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}