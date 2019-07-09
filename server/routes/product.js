const express = require('express')
const router = express.Router()
const product = require('../controllers/product')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorizationProduct')
const images = require('../middlewares/images')

router.get('/', product.findAll)
router.get('/:id', product.findOne)
router.use(authentication)
router.post('/', images.multer.single('image'), images.sendUploadToGCS, product.create)
router.patch('/:id', authorization, images.multer.single('image'), images.sendUploadToGCS, product.patch)
router.delete('/:id', authorization, product.delete)

module.exports = router