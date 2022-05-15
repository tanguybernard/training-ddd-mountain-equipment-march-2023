import {OrganizationName} from "./organization-name";
import Organization from "./organization";


export default interface OrganizationRepository{

    createOrganization(name: OrganizationName): Promise<Organization>;
}
