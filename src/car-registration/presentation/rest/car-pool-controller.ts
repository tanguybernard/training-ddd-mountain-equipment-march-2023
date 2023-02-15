import {Request, RequestHandler, Response} from "express";
import AddCar from "../../application-core/car-pool/application/add-car";
import {validationResult} from "express-validator";
import CarBrand from "../../application-core/car-pool/domain/car-brand";
import CarName from "../../application-core/car-pool/domain/car-name";

export default class CarPoolController{

    //inject mapper used inside method
    addCar(useCase: AddCar): RequestHandler{
        return async (req: Request, res: Response) => {

            console.log("INTO AddCAR Controller")


            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            await useCase.add(
                req.body.vin,
                new CarName(req.body.name),
                new CarBrand(req.body.brand)
            );
            res.status(200).json()
        }
    }

}


