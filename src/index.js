import 'dotenv/config';
import createApp from './config/express';
import seed from './config/mongoose';
    
export const app = createApp();
export let server;



const start = async () =>{

    await seed();

    const { PORT } = process.env;
    server = await app.listen(PORT)
    console.info(`server listening on port ${PORT}`);
}

start()
