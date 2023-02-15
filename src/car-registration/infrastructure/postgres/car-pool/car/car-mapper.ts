import Car from "../../../../application-core/car-pool/domain/car";
import VehicleIdentificationNumber from "../../../../application-core/car-pool/domain/vehicle-identification-number";
import CarName from "../../../../application-core/car-pool/domain/car-name";
import CarBrand from "../../../../application-core/car-pool/domain/car-brand";
import CarDto from "./car-dto";


export default class CarMapper {

    toDomain(dto: CarDto): Car {
        return Car.load(
            VehicleIdentificationNumber.create(dto.id),
            new CarName(dto.name),
            new CarBrand(dto.brand),
            new Date()
        )
    }
}
