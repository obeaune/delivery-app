const { Router } = require('express');

const CustomerController = require('../controllers/CustomerController');
const authenticationMiddleware = require('../middlewares/authMiddleware');

const router = Router();

router.get('/products', CustomerController.getAll);
router.get('/sellers', CustomerController.getAllSellers);
router.get('/order', authenticationMiddleware, CustomerController.getAllOrdersByClient);

router.post('/checkout', authenticationMiddleware, CustomerController.checkout);

module.exports = router;
