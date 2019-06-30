// router.post('/', images.multer.single('image'), images.sendUploadToGCS, product.create)
const express = require('express')
const router = express.Router()
const product = require('../controllers/product')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', product.findAll)
router.get('/:id', product.findOne)
router.post('/', product.create)
// router.patch('/:id', authorization, product.patch)
// router.delete('/:id', authorization, product.delete)

module.exports = router