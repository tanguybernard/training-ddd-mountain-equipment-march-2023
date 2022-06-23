import express from "express";
import CarPoolFactory from "./../../car-pool-factory";
const router = express.Router();
import {body, param} from 'express-validator';

/*
router.get('/world',
    (req, res) => res.status(200).json({hello: 'World'}))
*/


router.post('/car-pool/{car-pool}/add-car',
    body('name').isString(),
    body('brand').isString(),
    param('pool-name').isString(),
    CarPoolFactory.addCar)

export default router
