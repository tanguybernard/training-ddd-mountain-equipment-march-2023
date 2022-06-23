import CarId from "../../../shared-kernel/domain/car-id";

export default class Car {

    protected constructor(public id: CarId, public type: string) { //change to CarStatus
    }

    public static create(id: CarId, type: string) {
        return new Car(id, type);
    }

    rentCar(car: Car): Car {
        return Car.create(car.id, car.type)
        // return new RentedCar();
    }

    canBeRented(): boolean{
        return true;
    }

}
