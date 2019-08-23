import 'dotenv/config';
import mongoose from 'mongoose';
import { seed } from 'mongoose-plugin-seed';

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

 export default async () => {
    await seed() 
    console.info('Finished populating database.'); 
 }  