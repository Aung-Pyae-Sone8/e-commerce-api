import {Router} from 'express'
import { listProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController';
import { validateData } from '../middlewares/validationMiddleware';
import { createProductInsertSchema } from '../validations/productValidations';

const router = Router()

router.get('/', listProducts)
router.get('/:id', getProductById)
router.post('/', validateData(createProductInsertSchema), createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;