import {Repository} from "typeorm";
import {Organization} from "./organization";
import {AppDataSource} from "../../../../data-source";

export default AppDataSource.getRepository(Organization).extend({

    findByYourOwnQuery(firstName: string, lastName: string) {
        return this.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .andWhere("user.lastName = :lastName", { lastName })
            .getMany()
    },
})
