import mongoose from 'mongoose';
const { connection, connect } = mongoose;
import dotenv from 'dotenv';
import { dotenvPath } from '../var/dotenv.path.js';

dotenv.config({path: dotenvPath});

export function dbConnectFn() {

    connection.on( 'open', () => console.log('DB connected') );

    connection.on('error', (err) => console.log(err.message));

    const mongoUrl = process.env.DB_CONNECTION_STRING;
    
    let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

    return connect(mongoUrl, mongoClientOptions);
}