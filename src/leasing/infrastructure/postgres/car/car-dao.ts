import {AppDataSource} from "../../../../data-source";
import CarDto from "./car-dto";


const CarDao = AppDataSource.getRepository(CarDto);

export default CarDao;
