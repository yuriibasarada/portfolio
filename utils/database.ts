import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        return;
    }

    try {
        await mongoose.connect(<string>process.env.MONGODB_URI, {
            dbName: "portfolio",
          })
     isConnected = true
    } catch(e) {
        console.log('Database connection error.')
    }   
}