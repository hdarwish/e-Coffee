import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

export const connectdb = async () => {
  try {
    //process.env.MONGODB_URL+'/'+process.env.MONGODB_DATABASE_NAME
    let remoteConnectionString = '';
    let localConnectionString = process.env.MONGODB_URL + '/' + process.env.MONGO_DATABASE_NAME;
    let urlConnectionString = process.env.ENVIRONMENT === 'production' ? remoteConnectionString : localConnectionString;
    await mongoose.connect(urlConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (ex) {
    console.log("error in connetion", ex)
  }

  mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}