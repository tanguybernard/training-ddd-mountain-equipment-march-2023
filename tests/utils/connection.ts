import {AppDataSource} from "../../src/data-source";

const connection = {
    async create(){
        await AppDataSource.initialize();
    },

    async close(){
        await AppDataSource.destroy();
    },

    async clear(){
        const entities = AppDataSource.entityMetadatas;

        entities.forEach(async (entity) => {
            const repository = AppDataSource.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName}`);
        });
    },
};
export default connection;
