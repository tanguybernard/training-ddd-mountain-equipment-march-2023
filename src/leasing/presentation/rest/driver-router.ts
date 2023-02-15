import {body, param} from "express-validator";
import {RestFactory} from "./factory";
import express from "express";
const router = express.Router();

router.post('/',
    body('name').isString(),
    body('license').isString(),
    body('age').notEmpty().isInt({ min:18, max: 2000}),
    RestFactory.createDriver())


export default router
