// This file includs the whole server wihin the only worked functions
// Prisma is not being used
// const { PrismaClient } = require('@prisma/client');
import cors from 'cors';
import express, { json } from 'express';
import { json as _json, urlencoded } from 'body-parser';

import { registerNewBusiness } from "./registerNewUsers/registerNewBusiness";
import { registerNewUser } from "./registerNewUsers/registerNewUser";

// These function are using prisma
// const { getAllBusinesses, getAllLocations, getAllCategories, getAllServices, getSimilar} = require("./controllers/business/index");
// const { getAllMembers } = require('./controllers/member/getAllMembers');


const NO_ERROR = 200;
const INTERNAL_SERVICE_ERROR = 500;
const PAGE_NOT_FOUND = 404;

const app = express();

// The lines commented out are used for prisma.
// const prisma = new PrismaClient();

// const businessRouter = express.Router();
// businessRouter.get('/', getAllBusinesses);
// businessRouter.get('/locations', getAllLocations);
// businessRouter.get('/categories', getAllCategories);
// businessRouter.get('/services', getAllServices);
// businessRouter.get('/search', getSimilar);
// app.use("/business", businessRouter);

// const memberRouter = express.Router();
// memberRouter.get("/", getAllMembers);
// app.use("/member", memberRouter);

app.use("*", cors());
app.use(json());
app.use(_json());
app.use(urlencoded({extended: true}));


// Prisma part
// app.use((req, _res, next)=>{
//     req.prisma = prisma;
//     next();
// })

app.post('/registerNewBusiness', async (request, response) =>{
    let formData = request.body.formData;
    console.log(formData);
    let worked = await registerNewBusiness(formData);
    let code = NO_ERROR;
    if (!worked){
        code = INTERNAL_SERVICE_ERROR;
    }
    response.sendStatus(code);
})

app.post('/registerNewUser', async (request, response) =>{
    let formData1 = request.body.formData;
    console.log(formData1);
    let worked1 = await registerNewUser(formData1);
    let code = NO_ERROR;
    if (!worked1){
        code = INTERNAL_SERVICE_ERROR;
    }
    response.sendStatus(code);
})

app.use((_request, response) =>{
    response.status(PAGE_NOT_FOUND).send("page not found");
})

const {PORT = 4000} = process.env;
const server = app.listen(PORT, ()=>{
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
})

export default {server};


