import { Router } from 'express';
import { registerCustomer } from './register-customer'
import { readCustomer } from './get-customer';
import { deleteCustomer } from './delete-customer';
import { updateCustomer } from './update-customer';

export const router = Router()

router.post('/customer/new', registerCustomer)
router.get('/customer/:customerId', readCustomer)
router.delete('/customer/delete', deleteCustomer)
router.put('/customer/update', updateCustomer)



