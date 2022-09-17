import { Router } from 'express';
import { createNewContact, deleteContact, editContact, getContactByID, getContacts } from '../controllers/contacts.js';

const router = Router();

router.get('/contacts', getContacts);

router.get('/contacts/:id', getContactByID);

router.post('/contacts', createNewContact);

router.put('/contacts/:id', editContact);

router.delete('/contacts/:id', deleteContact);

export default router;