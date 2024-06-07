import mongoose from 'mongoose'

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('Connection is live Developer Edward!')
        return
    }

    try {
        //create a connection to the database
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "dbzfacts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('MongoDB connected') 
    } catch (error) {
        console.log(error)
    }
}