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

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGO_URI}practice`
//     );
//     console.log(
//       `MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
//     );
//   } catch (error) {
//     console.log("MONGODB connection FAILED ", error);
//     process.exit(1);
//   }
// };


// export default connectDB;