import {OrganizationName} from "../../domain/organization-name";
import OrganizationRepository from "../../domain/organization-repository";
import Organization from "../../domain/organization";

export class CreateOrganization{

    constructor(private organizationRepository: OrganizationRepository) {
    }

    async create(organizationName: OrganizationName): Promise<Organization>{

        return this.organizationRepository.createOrganization(organizationName);


    }

}
