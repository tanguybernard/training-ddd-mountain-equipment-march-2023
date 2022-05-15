import request from 'supertest';
import {initServer} from './../../../app'

describe('/hello/zenika', () => {


    it('should return 200', async () => {
        const response = await request(initServer())
            .get('/hello/world')
            .expect(200)
            .then((response) => {
                // Check the response type and length
                expect(response.body).toEqual({hello: "Zenika"});

            })
    });
});
