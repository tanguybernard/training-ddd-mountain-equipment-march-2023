import {AppDataSource} from "../../../../data-source";
import DriverDto from "./driver-dto";


const DriverDao = AppDataSource.getRepository(DriverDto);

export default DriverDao;
