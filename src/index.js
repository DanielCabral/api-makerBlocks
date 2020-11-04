const express=require('express');
const routes=require('./routes.js');
const cors=require('cors');

const app=express();

app.use(cors());

app.use(express.json());
app.use(routes);
const port = process.env.PORT || 3333;
app.listen(3333);