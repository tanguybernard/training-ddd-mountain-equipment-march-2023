export class CreateDriverDto {

    constructor(
        public name: string,
        public licenseNumber: string, //16-character UK
        public age: number) {
    }


}
