import GetHelloZenika from "./application-core/application/get-hello-zenika";
import {RequestHandler} from "express";
import {helloController} from "./presentation/factory";
import OrganizationRepository from "./domain/organization-repository";
import OrganizationPgRepository from "./infrastructure/postgres/organization/organization-pg-repository";
import OrganizationDao from "./infrastructure/postgres/organization/organization-dao";


export default class BcDemoFactory{

    private static useCaseGetHelloZenika(): GetHelloZenika {
        return new GetHelloZenika(); //ou passer par une factory application-factory.ts
    }


    static organizationRepository() : OrganizationRepository {
        return new OrganizationPgRepository(OrganizationDao);
    }


    static getHelloZenika(): RequestHandler {
        return helloController.getHelloWorld(this.useCaseGetHelloZenika())
    }
}
