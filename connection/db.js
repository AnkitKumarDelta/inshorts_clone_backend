import mongoose from 'mongoose';

const Connection = async () => {
    try {   
        // console.log('Username:', username);
        // console.log('Password:', password);
//         const username = process.env.USERNAME;
// const password = process.env.PASSWORD;
        const URL = process.env.MONGO_URI
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database: ', error);
    }
}

export default Connection;
