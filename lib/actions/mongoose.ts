import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
        mongoose.set('strictQuery', true);

        if (!process.env.MONGODB_URI)
                return console.log('MONGODB_URI is not defined ')

        if (isConnected) return console.log('=> using exsisting ')

        try {
        await mongoose.connect(process.env.MONGODB_URI)
        isConnected = true
        console.log('MongoDB connection established!')

        } catch (error) {
                console.log(error)
        }
}