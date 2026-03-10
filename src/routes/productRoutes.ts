import {Router} from 'express'
import { listProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController';
import { validateData } from '../middlewares/validationMiddleware';
import { createProductInsertSchema } from '../validations/productValidations';
import { verifyToken, verifySeller } from '../middlewares/authMiddleware'

const router = Router()

router.get('/', listProducts)
router.get('/:id', getProductById)
router.post('/', verifyToken, verifySeller, validateData(createProductInsertSchema), createProduct)
router.put('/:id', verifyToken, verifySeller, updateProduct)
router.delete('/:id', verifyToken, verifySeller, deleteProduct)

export default router;