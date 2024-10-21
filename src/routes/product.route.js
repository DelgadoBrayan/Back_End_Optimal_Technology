import express from 'express';

import { updateProduct, createProduct, getProducts, getProductById, deleteProduct} from '../controllers/product.controller.js';

const router = express.Router();

// Route Create New Product
router.post('/products', createProduct);

// Get All Product
router.get('/products', getProducts);

// Route Get ById Product
router.get('/products/:id', getProductById);

// Route Update product
router.put('/products/:id', updateProduct);

// Route Delete Product
router.delete('/products/:id', deleteProduct);

export default router;