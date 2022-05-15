import OrganizationRepository from "../../../domain/organization-repository";
import {Repository} from "typeorm";
import {Organization as OrganizationEntity} from "./organization";
import {OrganizationName} from "../../../domain/organization-name";
import OrganizationDomain from "../../../domain/organization";

export default class OrganizationPgRepository implements OrganizationRepository {

    constructor(private dao: Repository<OrganizationEntity>) {
    }

    async createOrganization(name: OrganizationName): Promise<OrganizationDomain> {

        const orga = new OrganizationEntity()
        orga.name = name.value
        await this.dao.save(orga);
        console.log("Saved a new orga with id: " + orga.id);

        //use a mapper instead
        return new OrganizationDomain(new OrganizationName(orga.name));

    }
}
