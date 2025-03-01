const request = require("supertest");
const app= require("../index");
const mongoose = require("mongoose");
const User = require("../models/User");
 beforeAll(async()=>{
    await mongoose.connect(process.env.MONGO_URL);
 });
 afterAll(async()=>{
    await mongoose.connection.close() ;

 });
 describe("create user",()=>{
    Test("create user",async()=>{
        const res= await request(app).post('/auth/register');
        expect(res.code)
    });
 });