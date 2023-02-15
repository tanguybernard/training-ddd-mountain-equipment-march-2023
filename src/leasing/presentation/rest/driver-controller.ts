import {Request, RequestHandler, Response} from "express";
import {body, validationResult} from "express-validator";
import {CreateDriver} from "../../application-core/driver/application/create-driver";
import {CreateDriverDto} from "../../application-core/driver/application/create-driver-dto";

export class DriverController{

    //inject mapper used inside method
    createDriver(useCase: CreateDriver): RequestHandler{
        return async (req: Request, res: Response) => {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const driver = await useCase.execute(
                new CreateDriverDto(
                    req.body.name,
                    req.body.license,
                    req.body.age
                )
            );
            res.status(201).json({
                id: driver.driverId.id,
                name: driver.name
            })
        }
    }

}
