import express from 'express';
const app=express();
import UserData from './Routes/users.js';
app.use('/user',UserData);
app.listen(5000, ()=>console.log("Server Running on http://localhost:5000"))