import {Router} from 'express'
import { listProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { validateData } from '../middlewares/validationMiddleware.js';
import { createProductInsertSchema } from '../validations/productValidations.js';
import { verifyToken, verifySeller } from '../middlewares/authMiddleware.js'

const router = Router()

router.get('/', listProducts)
router.get('/:id', getProductById)
router.post('/', verifyToken, verifySeller, validateData(createProductInsertSchema), createProduct)
router.put('/:id', verifyToken, verifySeller, updateProduct)
router.delete('/:id', verifyToken, verifySeller, deleteProduct)

export default router;