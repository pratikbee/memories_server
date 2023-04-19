import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js' ;

const app=express();
dotenv.config()

const port= process.env.PORT || 5000

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());



app.use('/posts',postRoutes);

app.get('/',(req,res)=>{
    res.send('Hello to memories API');
})

// https://www.mongodb.com/cloud/atlas
// mongoose.set('useFindAndModify',false);
mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser:true,useUnifiedTopology:true})
                .then(()=>{app.listen(port,()=>{console.log(`server running on:${port}`)});console.log(process.env.CONNECTION_URL,port)})
                .catch((err)=>{console.log(process.env.CONNECTION_URL,port,"error")})









