import supertest from 'supertest';
import { app } from '../../index';
import { ObjectId } from 'mongodb';

describe("Test get tasks", () => {

    it("should return", () => {
        supertest(app).get("/tasks").then((respons) => {
            expect(respons).not.toBe(null)
        } )
    });

    it("should return a 200", async () => {
        await supertest(app).get("/tasks").expect(200);
    });
     
});

describe("test get /:id", () =>{

    it("should return 200 OK from a specific task", () => {
        supertest(app).get(`/${ObjectId("637df6a4b706869a3b72ee29")}`).expect(200)
    })

})

describe("Test get users", () => {

    it("should return", () => {
        supertest(app).get("/users").then((respons) => {
            expect(respons).not.toBe(null)
        } )
    });

    it("should return a 200", async () => {
        await supertest(app).get("/users").expect(200);
    });
     
});

describe("test get /:id", () =>{

    it("should return 200 OK from a specific user", () => {
        supertest(app).get(`/${ObjectId("637df653b706869a3b72ee25")}`).expect(200)
    })

})
