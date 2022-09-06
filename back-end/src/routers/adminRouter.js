const { Router } = require('express');

const adminController = require('../controllers/AdminController');
const validateInfosAdmin = require('../middlewares/validateInfosAdmin');
const authenticationAdmin = require('../middlewares/authAdmin');

const router = Router();

// cadastro de um novo user pelo admin
router.post('/manage', authenticationAdmin, validateInfosAdmin, adminController.create);

// todos os usuarios com excecao do proprio admin
router.get('/manage', authenticationAdmin, adminController.getAll);

// excluir um usuario
router.delete('/manage', authenticationAdmin, adminController.excludeUser);

module.exports = router;
