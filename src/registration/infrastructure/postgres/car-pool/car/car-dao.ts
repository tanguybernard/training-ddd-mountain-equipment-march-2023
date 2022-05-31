import {AppDataSource} from "../../../../../data-source";
import CarDto from "./car-dto";

export default AppDataSource.getRepository(CarDto);
