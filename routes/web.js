import express from 'express'
const router=express.Router()
import {homeController} from '../controllers/homeController.js';
import {serviceController} from '../controllers/serviceController.js';
import {skillsController} from '../controllers/skillsController.js';
import {contactController} from '../controllers/contactController.js';

router.get('/',homeController)
router.get('/service',serviceController)
router.get('/skills',skillsController)
router.get('/contact',contactController)

export default router;