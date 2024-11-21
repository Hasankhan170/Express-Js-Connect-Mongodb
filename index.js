import express from 'express'
import dotenv from "dotenv";
import connectDB from './src/db/index.js'
dotenv.config()
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
      });
})
.catch((err)=>{
    console.log("MONGO DB connection failed !!! ", err);
})