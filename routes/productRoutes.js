const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController.js')

const router = require('express').Router()

// use router
router.post('/addProduct', productController.addProduct)
router.get('/allProducts', productController.getAllProducts)
router.get('/published', productController.getPublishedProduct)


// Review url and controller

router.post('/addReview', reviewController.addReview)
router.get('/allReviews', reviewController.getAllReviews)



router.get('/:id', productController.getOneProduct)
router.put('/:id', productController.UpdateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router