import {Request, RequestHandler, Response} from "express";
import GetHelloZenika from "../../application-core/car-pool/application/get-hello-zenika";


export default class HelloController{

    //inject mapper used inside method
    getHelloWorld(useCase: GetHelloZenika): RequestHandler{
        return (req: Request, res: Response) => {
            const resultDomain = useCase.getHelloZenika();//return domain
            //res.json(mapper.fromDomain(resultatDomain))
            res.status(200).json({hello: resultDomain})
        }
    }

}


