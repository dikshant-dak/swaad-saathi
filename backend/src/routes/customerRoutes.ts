import express from 'express';
import { myDataSource } from '../../app-data-source';
import { Customer } from '../entity/customer.entity';

const router = express.Router();

router.get('/customers', async (req, res) => {
    try {
        const customers = await myDataSource.getRepository(Customer).find();
        res.json(customers);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/customers/:id', async (req, res) => {

    try {
        const customer = await myDataSource.getRepository(Customer).findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(customer);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        console.error('Error fetching customer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/customers', async (req, res) => {
    const { firstName, lastName, email, age, phone } = req.body;

    if (!firstName || !lastName || !age || !email || !phone) {
        return res.status(400).json({ error: 'Please provide firstName, lastName and age' })
    }

    try {
        const newCustomer = await myDataSource.getRepository(Customer).create(req.body);
        const savedCustomer = await myDataSource.getRepository(Customer).save(newCustomer);
        res.status(201).json(savedCustomer);
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.delete('/customers/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCustomer = await myDataSource.getRepository(Customer).delete(id);
        if (deletedCustomer.affected === 0) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(204).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.error('Error deleting customer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;