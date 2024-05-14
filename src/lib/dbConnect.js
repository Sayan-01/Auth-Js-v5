import mongoose from "mongoose";
const mongoUrl = "mongodb://localhost:27017/auth";

const connectDb = async ()=>{
  try {
    await mongoose.connect(mongoUrl);
    console.log('connect datbase sayan');
    
  } catch (error) {
    console.log(error);
    
  }
}

export default connectDb; 

//for call we write await connectDb()