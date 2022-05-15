import express from "express";
import {helloController} from "../factory";
import BcDemoFactory from "../../bc-demo-factory";
const router = express.Router();
/*
router.get('/world',
    (req, res) => res.status(200).json({hello: 'World'}))
*/


router.get('/world',BcDemoFactory.getHelloZenika())

export default router
