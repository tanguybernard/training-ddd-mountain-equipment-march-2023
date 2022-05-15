import express from "express";
import CarPoolFactory from "./../../car-pool-factory";
const router = express.Router();
/*
router.get('/world',
    (req, res) => res.status(200).json({hello: 'World'}))
*/


router.get('/world',CarPoolFactory.getHelloZenika())

export default router
