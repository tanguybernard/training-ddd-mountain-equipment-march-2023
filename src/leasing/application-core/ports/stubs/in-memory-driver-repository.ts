import DriverRepository from "../driver-repository";
import DriverId from "../../driver/domain/driver-id";
import Driver from "../../driver/domain/driver";


export class InMemoryDriverRepository implements DriverRepository{
    findByLicense(license: string): Promise<Driver> {
        return Promise.resolve(this.drivers.find(d => d.licenseNumber = license));
    }

    public drivers : Driver[] = [];

    findById(driverId: DriverId): Promise<Driver> {
        return Promise.resolve(this.drivers.find(d => d.driverId.equals(driverId)));
    }
    update(driver: Driver): Promise<void> {
        return Promise.resolve();
    }

    create(driver: Driver): Promise<Driver> {
        this.drivers.push(driver);
        return Promise.resolve(driver);
    }

}
