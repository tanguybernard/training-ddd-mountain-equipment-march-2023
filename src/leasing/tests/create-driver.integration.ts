import request from "supertest";
import * as console from "console";
import {AppDataSource} from "../../data-source";


const app = require('../../app'); // our Node application

describe("POST /driver", () => {

    it("should return 201", async () => {

        //BEFORE
        await AppDataSource.initialize();//init connection DB

        const driver = {
            name: "Jean",
            license:"abc",
            age: 35
        }

        //WHEN
        const response = await post(`/driver`, driver);

        //THEN
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('name', "Jean");
        expect(response.body).toHaveProperty('id');
    });
});


// a helper function to make a POST request.
export function post(url, body){
    const httpRequest = request(app.initServer()).post(url);
    httpRequest.send(body);
    httpRequest.set('Accept', 'application/json')
    return httpRequest;
}
