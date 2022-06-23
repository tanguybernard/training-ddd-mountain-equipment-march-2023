import {Request, RequestHandler, Response} from "express";
import AddCar from "../../application-core/car-pool/application/add-car";
import {validationResult} from "express-validator";
import CarBrand from "../../application-core/car-pool/domain/car-brand";
import CarName from "../../application-core/car-pool/domain/car-name";
import {CarPoolName} from "../../application-core/car-pool/domain/car-pool-name";

export default class CarPoolController{

    //inject mapper used inside method
    addCar(useCase: AddCar): RequestHandler{
        return async (req: Request, res: Response) => {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            await useCase.add(
                new CarPoolName(req.params['pool-name']),
                new CarName(req.body.name),
                new CarBrand(req.body.brand)
            );
            res.status(200).json()
        }
    }

}


